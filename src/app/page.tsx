import { fetchAllRestaurants } from "../models/restaurant";
import { fetchAllFoodFilters } from "../models/foodFilter";
import { unique, uniqueById } from "../util";
import { fetchPriceRange } from "../models/priceRange";
import Home from "./components/Home/Home";
import RestaurantsProvider from "./contexts/RestaurantsContext/RestaurantsContextProvider";
import { fetchOpenStatus } from "../models/openStatus";
import { cookies } from "next/headers";
import WelcomeScreen from "./components/WelcomeScreen";

export default async function Page() {
  let [restaurants, foodFilters] = await Promise.all([
    fetchAllRestaurants(),
    fetchAllFoodFilters(),
  ]);

  let priceRangeIds = restaurants.map(({ price_range_id }) => price_range_id);

  // Safety for using `id` as React key.
  restaurants = restaurants.filter(uniqueById);
  foodFilters = foodFilters.filter(uniqueById);
  priceRangeIds = priceRangeIds.filter(unique);

  const restaurantIds = restaurants.map(({ id }) => id);

  const [priceRanges, openStatus] = await Promise.all([
    Promise.all(priceRangeIds.map((id) => fetchPriceRange(id))),
    Promise.all(restaurantIds.map((id) => fetchOpenStatus(id))),
  ]);

  const welcomeDismissed = cookies().get("welcome-dismissed")?.value === "true";

  return (
    <>
      <WelcomeScreen dismissed={welcomeDismissed} />
      <RestaurantsProvider
        restaurants={restaurants}
        foodFilters={foodFilters}
        priceRanges={priceRanges}
        openStatus={openStatus}
      >
        <Home />
      </RestaurantsProvider>
    </>
  );
}
