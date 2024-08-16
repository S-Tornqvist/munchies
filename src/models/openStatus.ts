import { z } from "zod";
import { apiFetch } from "../api/fetch";

const OPEN_STATUS_CACHE_TIMER =
  parseInt(process.env.OPEN_STATUS_CACHE_TIMER ?? "") || 0;

/**
 * Refers to the data type of api resource
 * [/open](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_open__id_).
 */
export type OpenStatus = {
  restaurant_id: string;
  is_open: boolean;
};

/**
 * Fetch the open status of a specific restaurant from api. See
 * [/open/{id}](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/#/default/get_open__id_).
 */
export function fetchOpenStatus(id: string): Promise<OpenStatus> {
  return apiFetch(`open/${id}`, {
    next: { revalidate: OPEN_STATUS_CACHE_TIMER },
  })
    .then((res) => res.json())
    .then(openStatusSchema.parse);
}

const openStatusSchema = z.object({
  restaurant_id: z.string(),
  is_open: z.boolean(),
});
