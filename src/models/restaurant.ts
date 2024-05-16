/**
 * Represents a restaurant, as received by the API.
 *
 * https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_restaurants.
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
