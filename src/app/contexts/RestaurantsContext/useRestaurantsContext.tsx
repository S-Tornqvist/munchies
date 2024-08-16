"use client";
import { useContext } from "react";
import RestaurantsContext from "./RestaurantsContext";

export default function useRestaurantsContext() {
  const context = useContext(RestaurantsContext);
  if (context) {
    return context;
  } else {
    throw new Error("RestaurantFilterContext is missing a provider.");
  }
}
