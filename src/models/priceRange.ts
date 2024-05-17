/**
 * Represents a price range. The range name is typically '$', '$$', '$$$', etc.
 * Price ranges are referenced from the Restaurant model, and filterable
 * by the user.
 */
export type PriceRange = {
  id: string;
  range: string;
};
