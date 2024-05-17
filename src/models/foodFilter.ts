/**
 * Represents a filter for restaurant food type, as received by the API.
 *
 * Example of food types: "Hamburger", "Pizza", "Tacos".
 */
export type FoodFilter = {
  id: string;
  name: string;
  image_url: string;
};
