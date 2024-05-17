"use client";

import { InitialData } from "@/api/fetchInitial";
import { DeliveryTimeFilter } from "@/models/deliveryTimeFilter";
import { FoodFilter } from "@/models/foodFilter";
import { PriceRange } from "@/models/priceRange";
import { Restaurant } from "@/models/restaurant";
import React from "react";

const AppContext = React.createContext<AppContextType | undefined>(undefined);

/**
 * The global app context type. Handles the logic and data that is shared
 * between all components. Initialized by the server and used by the client.
 */
export type AppContextType = {
  /**
   * All available restauraints, both open and closed.
   */
  restaurants: Restaurant[];

  /**
   * All available restaurants, after applying user filters.
   */
  filteredRestaurants: Restaurant[];

  /**
   * All food type filters.
   */
  foodFilters: FoodFilter[];

  /**
   * A map of food type filter IDs to their filter.
   */
  foodFilterMap: Record<string, FoodFilter>;

  /**
   * A map of restaurant IDs to their open status.
   */
  openStatusMap: Record<string, boolean>;

  /**
   * All available price ranges.
   */
  priceRanges: PriceRange[];

  /**
   * A map of price range IDs to their range label.
   */
  priceRangeMap: Record<string, string>;

  selectedFoodFilters: FoodFilter[];
  setSelectedFoodFilters: React.Dispatch<React.SetStateAction<FoodFilter[]>>;

  selectedPriceRanges: PriceRange[];
  setSelectedPriceRanges: React.Dispatch<React.SetStateAction<PriceRange[]>>;

  selectedDeliveryTimes: DeliveryTimeFilter[];
  setSelectedDeliveryTimes: React.Dispatch<React.SetStateAction<DeliveryTimeFilter[]>>;
};

export type AppProviderProps = React.PropsWithChildren<{
  initialData: InitialData;
}>;

/**
 * Provider for the app context.
 */
export function AppProvider({ children, initialData }: AppProviderProps) {
  const [restaurants] = React.useState(initialData.restaurants);
  const [priceRanges] = React.useState(initialData.priceRanges);
  const [priceRangeMap] = React.useState(initialData.priceRangeMap);
  const [openStatusMap] = React.useState(initialData.openStatusMap);
  const [foodFilters] = React.useState(initialData.foodFilters);
  const [foodFilterMap] = React.useState(initialData.foodFilterMap);

  const [selectedFoodFilters, setSelectedFoodFilters] = React.useState<
    FoodFilter[]
  >([]);

  const [selectedPriceRanges, setSelectedPriceRanges] = React.useState<
    PriceRange[]
  >([]);

  const [selectedDeliveryTimes, setSelectedDeliveryTimes] = React.useState<
    DeliveryTimeFilter[]
  >([]);

  const filteredRestaurants = useFilteredRestaurants(restaurants, {
    food: selectedFoodFilters,
    price: selectedPriceRanges,
    delivery: selectedDeliveryTimes,
  });

  const value = {
    restaurants,
    filteredRestaurants,
    priceRanges,
    priceRangeMap,
    openStatusMap,
    foodFilters,
    foodFilterMap,
    selectedFoodFilters,
    setSelectedFoodFilters,
    selectedPriceRanges,
    setSelectedPriceRanges,
    selectedDeliveryTimes,
    setSelectedDeliveryTimes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/**
 * Hook to access the app context. Fails if used outside of an `AppProvider`.
 * @returns The app context.
 */
export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

const useFilteredRestaurants = (
  restaurants: Restaurant[],
  filters: {
    food: FoodFilter[];
    price: PriceRange[];
    delivery: DeliveryTimeFilter[];
  }
) =>
  React.useMemo<Restaurant[]>(
    () =>
      restaurants.filter((restaurant) => {
        const foodFilter =
          filters.food.length === 0 ||
          filters.food.some((filter) =>
            restaurant.filter_ids.some((id) => id === filter.id)
          );

        if (!foodFilter) return false;

        const priceRange =
          filters.price.length === 0 ||
          filters.price.some(
            (filter) => restaurant.price_range_id === filter.id
          );

        if (!priceRange) return false;

        const deliveryTime =
          filters.delivery.length === 0 ||
          filters.delivery.some(
            (filter) =>
              restaurant.delivery_time_minutes <= filter.maxMinutes &&
              restaurant.delivery_time_minutes >= filter.minMinutes
          );

        if (!deliveryTime) return false;

        return true;
      }),
    [restaurants, filters.food, filters.price, filters.delivery]
  );
