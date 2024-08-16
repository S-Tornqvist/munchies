import { z } from "zod";
import { apiFetch } from "../api/fetch";

/**
 * Refers to the data type of api resource
 * [/filter](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_filter__id_).
 */
export type FoodFilter = {
  id: string;
  name: string;
  image_url: string;
};

/**
 * Fetch a specific food filter from api. See
 * [/filter/{id}](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_filter__id_).
 */
export function fetchFoodFilter(id: string): Promise<FoodFilter> {
  return apiFetch(`filter/${id}`)
    .then((res) => res.json())
    .then(filterSchema.parse);
}

/**
 * Fetch all food filters from api. See
 * [/filter](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_filter).
 */
export function fetchAllFoodFilters(): Promise<FoodFilter[]> {
  return apiFetch("filter")
    .then((res) => res.json())
    .then(allFiltersSchema.parse)
    .then((res) => res.filters);
}

const filterSchema = z.object({
  id: z.string(),
  name: z.string(),
  image_url: z.string(),
});

const allFiltersSchema = z.object({ filters: z.array(filterSchema) });
