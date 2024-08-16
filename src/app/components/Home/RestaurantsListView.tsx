"use client";

import { PropsWithClass } from "../../../util";
import useRestaurantsContext from "../../contexts/RestaurantsContext/useRestaurantsContext";
import RestaurantCard from "../RestaurantCard";

export default function RestaurantsListView({ className }: PropsWithClass) {
  const { filteredRestaurants, isOpen } = useRestaurantsContext();

  return (
    <div
      className={`grid gap-2.5 overflow-auto grid-cols-[repeat(auto-fill,minmax(320px,1fr))] ${className}`}
    >
      {filteredRestaurants.map(
        ({ id, name, delivery_time_minutes, image_url }) => (
          <RestaurantCard
            key={id}
            name={name}
            isOpen={isOpen(id)}
            deliveryTime={delivery_time_minutes}
            imageUrl={image_url}
          />
        )
      )}
    </div>
  );
}
