"use client";
import { createContext } from "react";
import { Restaurant } from "../../../models/restaurant";
import { FoodFilter } from "../../../models/foodFilter";
import { PriceRange } from "../../../models/priceRange";
import { TimeSpan } from "../../../models/timeSpan";

/**
 * Restaurant data with supporting functionality.
 */
export default createContext<
  | undefined
  | {
      allRestaurants: Restaurant[];
      filteredRestaurants: Restaurant[];

      isOpen: (restaurantId: string) => boolean;

      allPriceRanges: PriceRange[];
      allFoodFilters: FoodFilter[];
      allTimeSpans: TimeSpan[];

      selectedPriceRanges: PriceRange[];
      selectedFoodFilters: FoodFilter[];
      selectedTimeSpans: TimeSpan[];

      togglePriceRange: (filter: PriceRange) => void;
      toggleFoodFilter: (filter: FoodFilter) => void;
      toggleTimeSpan: (filter: TimeSpan) => void;
    }
>(undefined);
