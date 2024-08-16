import { z } from "zod";
import { apiFetch } from "../api/fetch";

/**
 * Refers to the data type of api resource
 * [/price-range](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_price_range__id_).
 */
export type PriceRange = {
  id: string;
  range: string;
};

/**
 * Fetch a specific price range from api. See
 * [/price-range/{id}](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_price_range__id_).
 */
export function fetchPriceRange(id: string): Promise<PriceRange> {
  return apiFetch(`price-range/${id}`)
    .then((res) => res.json())
    .then(priceRangeSchema.parse);
}

const priceRangeSchema = z.object({
  id: z.string(),
  range: z.string(),
});
