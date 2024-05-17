"use client";

import { useAppContext } from "@/contexts/AppContext";
import FoodCard from "./FoodCard";
import { imageURL } from "@/util/image";

/**
 * Renders the food filters in `AppContext` as selectable `FoodCard` components.
 */
export default function FoodCardItems() {
  const { foodFilters, selectedFoodFilters, setSelectedFoodFilters } =
    useAppContext();

  return foodFilters.map((filter) => (
    <FoodCard
      key={filter.id}
      selected={selectedFoodFilters.includes(filter)}
      onClick={() =>
        setSelectedFoodFilters((prev) =>
          prev.includes(filter)
            ? prev.filter((ff) => ff !== filter)
            : [...prev, filter]
        )
      }
      image={imageURL(filter.image_url)}
      imageAlt=""
    >
      {filter.name}
    </FoodCard>
  ));
}
