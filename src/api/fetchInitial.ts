import { Restaurant } from "@/models/restaurant";
import request from "./request";
import { OpenStatus } from "@/models/openStatus";
import { PriceRange } from "@/models/priceRange";
import { FoodFilter } from "@/models/foodFilter";

export type InitialData = {
  /**
   * All available restauraints, both open and closed.
   */
  restaurants: Restaurant[];

  /**
   * All food type filters.
   */
  foodFilters: FoodFilter[];

  /**
   * A map of food type filter IDs to their filter.
   */
  foodFilterMap: Record<string, FoodFilter>;

  /**
   * A map of restaurant IDs to their open status.
   */
  openStatusMap: Record<string, boolean>;

  /**
   * All available price ranges.
   */
  priceRanges: PriceRange[];

  /**
   * A map of price range IDs to their range label.
   */
  priceRangeMap: Record<string, string>;
};

/**
 * Fetch initial server side data from API. Restaurants are sorted by name,
 * with open restaurants first. Price ranges are sorted by range label.
 * @returns Promise of initial data.
 */
export default async function fetchInitial(): Promise<InitialData> {
  const { restaurants } = await request<{ restaurants: Restaurant[] }>(
    "/restaurants"
  );

  const { filters: foodFilters } = await request<{ filters: FoodFilter[] }>(
    "/filter"
  );

  const foodFilterMap = Object.fromEntries(
    foodFilters.map((filter) => [filter.id, filter])
  );

  const openStatus = await Promise.all(
    restaurants.map(({ id }) =>
      request<OpenStatus>(`/open/${id}`, {
        // Skip cache to get real-time open status
        preventCache: true,
      })
        .then(patchOpenStatus)
        .catch(() => ({ restaurant_id: id, is_currently_open: false }))
    )
  );

  const openStatusMap = Object.fromEntries(
    openStatus.map(({ restaurant_id, is_currently_open }) => [
      restaurant_id,
      is_currently_open,
    ])
  );

  const priceRangeIds = new Set(
    restaurants.map(({ price_range_id }) => price_range_id)
  );

  const priceRanges = (
    await Promise.all(
      Array.from(priceRangeIds.values()).map((id) =>
        request<PriceRange>(`/price-range/${id}`).catch(() => null)
      )
    )
  ).filter((priceRange): priceRange is PriceRange => priceRange !== null);

  const priceRangeMap = Object.fromEntries(
    priceRanges.map(({ id, range }) => [id, range])
  );

  priceRanges.sort((a, b) => a.range.localeCompare(b.range));
  restaurants.sort(restaurantComparator(openStatusMap));

  return {
    restaurants,
    foodFilters,
    foodFilterMap,
    openStatusMap,
    priceRanges,
    priceRangeMap,
  };
}

function restaurantComparator(
  openStatusMap: Record<string, boolean>
): (a: Restaurant, b: Restaurant) => number {
  return (a: Restaurant, b: Restaurant) => {
    if (openStatusMap[a.id]) {
      if (openStatusMap[b.id]) {
        return a.name.localeCompare(b.name);
      } else {
        return -1;
      }
    } else {
      if (openStatusMap[b.id]) {
        return 1;
      } else {
        return a.name.localeCompare(b.name);
      }
    }
  };
}

// TODO: remove this patch when backend is fixed
/**
 * Backend api schema and response is inconsistent. Schema declares field
 * `is_open`, but the api server responds with field `is_currently_open`. This
 * function patches the response to match the schema, but will also work when
 * the api is updated to match the schema.
 * 
 * Check with:
 ```sh
curl -X 'GET' \
  'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/open/ba35f29a-f6d0-471a-8e7d-8662ae47e219' \
  -H 'accept: application/json'
 ```
 * @param openStatus 
 * @returns 
 */
function patchOpenStatus(openStatus: OpenStatus): OpenStatus {
  if (
    Object.hasOwn(openStatus, "is_open") &&
    !Object.hasOwn(openStatus, "is_currently_open")
  ) {
    return {
      // @ts-expect-error: fix by ignoring TypeScript
      is_currently_open: openStatus.is_open,
      restaurant_id: openStatus.restaurant_id,
    };
  } else {
    return openStatus;
  }
}
