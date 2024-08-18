import { z } from "zod";
import { apiFetch } from "../api/fetch";

/**
 * Refers to the data type of api resource
 * [/restaurants](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_restaurants__id_).
 */
export type Restaurant = {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
};

/**
 * Fetch all restaurants from api. See
 * [/restaurants](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_restaurants).
 */
export function fetchAllRestaurants(): Promise<Restaurant[]> {
  return apiFetch("restaurants", { next: { revalidate: 0 } })
    .then((res) => res.json())
    .then(allRestaurantsSchema.parse)
    .then((res) => res.restaurants);
}

const restaurantSchema = z.object({
  id: z.string(),
  name: z.string(),
  rating: z.number(),
  filter_ids: z.array(z.string()),
  image_url: z.string(),
  delivery_time_minutes: z.number(),
  price_range_id: z.string(),
});

const allRestaurantsSchema = z.object({
  restaurants: z.array(restaurantSchema),
});
