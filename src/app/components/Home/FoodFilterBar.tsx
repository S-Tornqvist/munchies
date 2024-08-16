"use client";

import { PropsWithClass } from "../../../util";
import useRestaurantsContext from "../../contexts/RestaurantsContext/useRestaurantsContext";
import Button from "../Button";
import Image from "next/image";

export default function FoodFilterBar({ className = "" }: PropsWithClass) {
  const { allFoodFilters, selectedFoodFilters, toggleFoodFilter } =
    useRestaurantsContext();

  return (
    <div
      className={`relative flex flex-row px-3 py-2 gap-2.5 overflow-auto no-scrollbar ${className}`}
    >
      {allFoodFilters.map((filter) => (
        <Button
          className="flex-none w-40 h-20 relative"
          selected={selectedFoodFilters.includes(filter)}
          onClick={() => toggleFoodFilter(filter)}
          key={filter.id}
        >
          <div className="absolute left-3 top-4">{filter.name}</div>
          <Image
            className="absolute -right-3 top-0"
            width={80}
            height={80}
            src={filter.image_url}
            alt={filter.name}
          />
        </Button>
      ))}
    </div>
  );
}
