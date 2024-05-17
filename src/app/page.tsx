import Image from "next/image";
import Filter from "./components/FoodFilter";
import FoodCard from "./components/FoodCard";
import { imageURL } from "@/util/image";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main className="min-h-screen max-h-screen ps-6 sm:ps-10 pt-10 sm:pt-12 flex flex-col">
      <div className="flex-none pb-12">
        <Image
          priority
          src={"/munchies.svg"}
          alt="Munchies logo"
          className="dark:invert"
          width={273.42}
          height={40}
        />
      </div>

      {/* Main. Includes filter panel, filter top row and restaurants */}
      <div className="flex-1 flex flex-col sm:flex-row overflow-auto">
        {/* Filter panel mobile */}
        <div className="sm:hidden flex-none mb-4">
          <div className="font-semibold opacity-40 mb-2.5">DELIVERY TIME</div>
          <div className="flex flex-row flex-nowrap gap-2.5 overflow-x-auto no-scrollbar">
            <Filters
              labels={["0-10 min", "10-30 min", "30-40 min", "1 hour+"]}
            />
          </div>
        </div>

        {/* Filter panel desktop*/}
        <div className="hidden sm:block flex-none w-60 min-h-max p-6 mr-5 card border-b-0 rounded-t-2.5">
          <h1 className="mb-8">Filter</h1>
          <div className="mb-6">
            <div className="font-semibold opacity-40 mb-4">FOOD CATEGORY</div>
            <div className="flex flex-col items-start gap-2.5">
              <Filters
                className="dark:bg-off-black"
                labels={["Hamburger", "Pizza", "Tacos", "Coffee"]}
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold opacity-40 mb-4">DELIVERY TIME</div>
            <div className="flex flex-row flex-wrap gap-2">
              <Filters
                className="dark:bg-off-black"
                labels={["0-10 min", "10-30 min", "30-40 min", "1 hour+"]}
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold opacity-40 mb-4">PRICE RANGE</div>
            <div className="flex flex-row flex-wrap gap-2">
              <Filters
                labels={["$", "$$", "$$$", "$$$$"]}
                className="dark:bg-off-black !px-2"
              />
            </div>
          </div>
        </div>

        {/* Filter top row and restaurants*/}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Filter top row */}
          <div className="flex-none mb-6 sm:mb-10 gap-2.5 flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden no-scrollbar">
            <TopFoodFilters />
          </div>

          {/* Restaurants */}
          <div className="flex flex-col overflow-hidden">
            <div className="flex-none display mb-5 sm:mb-8">Restaurants</div>
            <div className="flex-1 flex flex-col items-center sm:flex-row sm:flex-wrap pe-6 sm:pe-10 gap-2.5 sm:gap-4 overflow-auto no-scrollbar">
              <Restaurants />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Dummy component
const Filters: React.FC<{ labels: string[]; className?: string }> = ({
  labels,
  className,
}) =>
  labels.map((label, index) => (
    <Filter className={className} key={`label/${index}`}>
      {label}
    </Filter>
  ));

// Dummy component
function TopFoodFilters() {
  return (
    <>
      <FoodCard image={imageURL("/images/hamburger.png")} imageAlt="Burger">
        Hamburger
      </FoodCard>
      <FoodCard image={imageURL("/images/pizza.png")} imageAlt="Pizza">
        Pizza
      </FoodCard>
      <FoodCard image={imageURL("/images/taco.png")} imageAlt="Taco">
        Tacos
      </FoodCard>
      <FoodCard image={imageURL("/images/coffee.png")} imageAlt="Coffee">
        Coffee
      </FoodCard>
      <FoodCard image={imageURL("/images/fries.png")} imageAlt="Fries">
        Fries
      </FoodCard>
      <FoodCard image={imageURL("/images/burrito.png")} imageAlt="Burrito">
        Mexican
      </FoodCard>
      <FoodCard
        image={imageURL("/images/breakfast.png")}
        imageAlt="Eggs and bacon"
      >
        Breakfast
      </FoodCard>
    </>
  );
}

// Dummy component
function Restaurants() {
  const restaurants = [
    {
      name: "Cortado Bar",
      image_url: imageURL("/images/coffee.png"),
      delivery_time_minutes: 7,
    },
    {
      name: "Neta",
      image_url: imageURL("/images/taco.png"),
    },
    {
      name: "Breakfast Club",
      image_url: imageURL("/images/breakfast.png"),
      delivery_time_minutes: 25,
    },
    {
      name: "Burgers n' stuff",
      image_url: imageURL("/images/hamburger.png"),
    },
    {
      name: "Fries Guys",
      image_url: imageURL("/images/fries.png"),
      delivery_time_minutes: 45,
    },
    {
      name: "Cortado Bar",
      image_url: imageURL("/images/coffee.png"),
    },
    {
      name: "Cortado Bar",
      image_url: imageURL("/images/coffee.png"),
    },
    {
      name: "Cortado Bar",
      image_url: imageURL("/images/coffee.png"),
    },
    {
      name: "Cortado Bar",
      image_url: imageURL("/images/coffee.png"),
    },
  ];
  return (
    <>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard
          key={`${restaurant.name}/${index}`}
          restaurant={{
            id: "",
            rating: 0,
            filter_ids: [],
            delivery_time_minutes: 0,
            price_range_id: "",
            ...restaurant,
          }}
        />
      ))}
    </>
  );
}
