"use client";

import { PropsWithChildren, useCallback, useMemo, useRef } from "react";
import { Restaurant } from "../../../models/restaurant";
import { FoodFilter } from "../../../models/foodFilter";
import { PriceRange } from "../../../models/priceRange";
import { TIME_SPANS, TimeSpan } from "../../../models/timeSpan";
import useToggleList from "../../hooks/useToggleList";
import { OpenStatus } from "../../../models/openStatus";
import useListMemo from "../../hooks/useListMemo";
import RestaurantsContext from "./RestaurantsContext";
import useFreeze from "../../hooks/useFreeze";

export type RestaurantsProviderProps = PropsWithChildren<{
  restaurants: Restaurant[];
  openStatus: OpenStatus[];
  foodFilters: FoodFilter[];
  priceRanges: PriceRange[];
}>;

/**
 * Provides data and logic for the {@link RestaurantsContext}.
 */
export default function RestaurantsProvider(props: RestaurantsProviderProps) {
  const { children } = props;
  props = useFreeze(props);
  const { restaurants, openStatus, foodFilters, priceRanges } = props;

  const [selectedPriceRanges, togglePriceRange] = useToggleList<PriceRange>([]);
  const [selectedFoodFilters, toggleFoodFilter] = useToggleList<FoodFilter>([]);
  const [selectedTimeSpans, toggleTimeSpan] = useToggleList<TimeSpan>([]);

  const allTimeSpans = useFilteredTimeSpans(TIME_SPANS, restaurants);
  const allPriceRanges = useFilteredPriceRanges(priceRanges, restaurants);
  const allFoodFilters = useFilteredFoodFilters(foodFilters, restaurants);

  const openRestaurants = useMemo(
    () =>
      new Set(
        restaurants
          .filter(({ id }) =>
            openStatus.some(
              ({ restaurant_id, is_open }) => is_open && restaurant_id === id
            )
          )
          .map(({ id }) => id)
      ),
    [openStatus, restaurants]
  );

  const isOpen = useCallback(
    (restaurantId: string) => openRestaurants.has(restaurantId),
    [openRestaurants]
  );

  const filteredRestaurants = useFilteredSortedRestaurants(
    restaurants,
    isOpen,
    {
      food: selectedFoodFilters,
      price: selectedPriceRanges,
      time: selectedTimeSpans,
    }
  );

  return (
    <RestaurantsContext.Provider
      value={{
        allRestaurants: restaurants,
        filteredRestaurants,

        isOpen,

        allPriceRanges,
        allFoodFilters,
        allTimeSpans,

        selectedPriceRanges,
        selectedFoodFilters,
        selectedTimeSpans,

        togglePriceRange,
        toggleFoodFilter,
        toggleTimeSpan,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
}

/**
 * Filters and sorts restaurants. Filtering is done based on passed filters.
 * Restaurants are sorted so that currently open restaurants are first.
 *
 * Memoizes filtered list so that the list reference is only updated when the
 * contents are changed.
 */
function useFilteredSortedRestaurants(
  restaurants: Restaurant[],
  isOpen: (restaurantId: string) => boolean,
  filters: {
    food: FoodFilter[];
    price: PriceRange[];
    time: TimeSpan[];
  }
): Restaurant[] {
  const { food, price, time } = filters;

  const filtered = useMemo(() => {
    let result = restaurants;

    if (food.length > 0) {
      result = result.filter((restaurant) =>
        food.some(({ id }) => restaurant.filter_ids.includes(id))
      );
    }

    if (price.length > 0) {
      result = result.filter((restaurant) =>
        price.some(({ id }) => restaurant.price_range_id === id)
      );
    }

    if (time.length > 0) {
      result = result.filter((restaurant) =>
        time.some(
          ({ min = 0, max = Infinity }) =>
            min <= restaurant.delivery_time_minutes &&
            restaurant.delivery_time_minutes <= max
        )
      );
    }

    result = [...result];
    sortRestaurants(result, isOpen);

    return result;
  }, [restaurants, isOpen, food, price, time]);

  return useListMemo(filtered);
}

/**
 * Open restaurants first.
 */
function sortRestaurants(
  restaurants: Restaurant[],
  isOpen: (restaurantId: string) => boolean
): void {
  restaurants.sort((a, b) => Number(isOpen(b.id)) - Number(isOpen(a.id)));
}

/**
 * Ignore time spans that do not match any restaurant.
 */
function useFilteredTimeSpans(
  timeSpans: TimeSpan[],
  restaurants: Restaurant[]
): TimeSpan[] {
  const filtered = useMemo(
    () =>
      timeSpans.filter(({ min = -Infinity, max = Infinity }) =>
        restaurants.some(
          ({ delivery_time_minutes }) =>
            min <= delivery_time_minutes && delivery_time_minutes <= max
        )
      ),
    [restaurants, timeSpans]
  );

  return useListMemo(filtered);
}

/**
 * Ignore price ranges that do not match any restaurant.
 */
function useFilteredPriceRanges(
  priceRanges: PriceRange[],
  restaurants: Restaurant[]
): PriceRange[] {
  const filtered = useMemo(
    () =>
      priceRanges.filter(({ id }) =>
        restaurants.some(({ price_range_id }) => id === price_range_id)
      ),
    [priceRanges, restaurants]
  );

  return useListMemo(filtered);
}

/**
 * Ignore food type filters that do not match any restaurant.
 */
function useFilteredFoodFilters(
  foodFilters: FoodFilter[],
  restaurants: Restaurant[]
): FoodFilter[] {
  const filtered = useMemo(
    () =>
      foodFilters.filter(({ id }) =>
        restaurants.some(({ filter_ids }) =>
          filter_ids.some((filter_id) => id === filter_id)
        )
      ),
    [foodFilters, restaurants]
  );

  return useListMemo(filtered);
}

