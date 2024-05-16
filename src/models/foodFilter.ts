/**
 * Represents a filter for restaurant food type, as received by the API.
 *
 * Example of food types: "Hamburger", "Pizza", "Tacos".
 *
 * https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_filter.
 */
export type FoodFilter = {
  id: string;
  name: string;
  image_url: string;
};
