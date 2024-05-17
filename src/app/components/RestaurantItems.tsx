"use client";
import { useAppContext } from "@/contexts/AppContext";
import RestaurantCard from "./RestaurantCard";

/**
 * Renders the restaurants in `AppContext` as `RestaurantCard` components.
 */
export function RestaurantItems() {
  const { filteredRestaurants, openStatusMap } = useAppContext();
  return (
    <>
      {filteredRestaurants.map((restaurant, index) => (
        <RestaurantCard
          key={`${restaurant.name}/${index}`}
          restaurant={restaurant}
          open={openStatusMap[restaurant.id]} />
      ))}
    </>
  );
}
