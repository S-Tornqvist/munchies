"use client";

import { useAppContext } from "@/contexts/AppContext";
import FilterButton from "./FilterButton";

/**
 * Renders the food filters in `AppContext` as selectable `FilterButton`
 * components. Only the first four filters are rendered.
 */
export default function FoodFilterItems() {
  const { foodFilters, selectedFoodFilters, setSelectedFoodFilters } =
    useAppContext();

  return foodFilters.slice(0, Math.min(foodFilters.length, 4)).map((filter) => (
    <FilterButton
      className="dark:bg-off-black"
      key={filter.id}
      onClick={() =>
        setSelectedFoodFilters((prev) =>
          prev.includes(filter)
            ? prev.filter((ff) => ff !== filter)
            : [...prev, filter]
        )
      }
      selected={selectedFoodFilters.includes(filter)}
    >
      {filter.name}
    </FilterButton>
  ));
}
