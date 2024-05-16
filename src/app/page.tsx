import Image from "next/image";
import Filter from "./components/FoodFilter";
import FoodCard from "./components/FoodCard";
import { imageURL } from "@/util/image";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main className="min-h-screen max-h-screen ps-10 pt-14 flex flex-col">
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
      <div className="flex-1 flex flex-col md:flex-row overflow-auto">
        {/* Filter panel mobile */}
        <div className="md:hidden flex-none mb-8">
          <div className="font-semibold opacity-40 mb-4">DELIVERY TIME</div>
          <div className="flex flex-row flex-nowrap overflow-x-auto no-scrollbar">
            <TimeFilters />
          </div>
        </div>

        {/* Filter panel desktop*/}
        <div className="hidden md:block flex-none w-60 min-h-max p-6 mr-5 card !border-b-0 !rounded-t-2.5">
          <h1 className="mb-8">Filter</h1>
          <div className="mb-6">
            <div className="font-semibold opacity-40 mb-4">FOOD CATEGORY</div>
            <div className="flex flex-col items-start">
              <FoodFilters />
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold opacity-40 mb-4">DELIVERY TIME</div>
            <div className="flex flex-row flex-wrap">
              <TimeFilters />
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold opacity-40 mb-4">PRICE RANGE</div>
            <div className="flex flex-row flex-wrap">
              <PriceFilters />
            </div>
          </div>
        </div>

        {/* Filter top row and restaurants*/}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Filter top row */}
          <div className="flex-none mb-10 flex flex-row flex-nowrap overflow-x-auto no-scrollbar">
            <TopFoodFilters />
          </div>

          {/* Restaurants */}
          <div className="flex flex-col overflow-hidden">
            <div className="flex-none">
              <div className="display mb-8">Restaurants</div>
            </div>
            <div className="flex-1 flex flex-row flex-wrap justify-center md:justify-normal overflow-auto no-scrollbar">
              <Restaurants />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function FoodFilters() {
  return (
    <>
      <Filter className="mb-2.5">Hamburger</Filter>
      <Filter className="mb-2.5">Pizza</Filter>
      <Filter className="mb-2.5">Tacos</Filter>
      <Filter className="mb-2.5">Coffee</Filter>
    </>
  );
}

function TimeFilters() {
  return (
    <>
      <Filter className="mr-2.5 last:mr-0 mb-2.5">0-10 min</Filter>
      <Filter className="mr-2.5 last:mr-0 mb-2.5">10-30 min</Filter>
      <Filter className="mr-2.5 last:mr-0 mb-2.5">30-40 min</Filter>
      <Filter className="mr-2.5 last:mr-0 mb-2.5">1 hour+</Filter>
    </>
  );
}

function PriceFilters() {
  return (
    <>
      <Filter className="!px-2 mr-2.5 last:mr-0 mb-2.5">$</Filter>
      <Filter className="!px-2 mr-2.5 last:mr-0 mb-2.5">$$</Filter>
      <Filter className="!px-2 mr-2.5 last:mr-0 mb-2.5">$$$</Filter>
      <Filter className="!px-2 mr-2.5 last:mr-0 mb-2.5">$$$$</Filter>
    </>
  );
}

function TopFoodFilters() {
  return (
    <>
      <FoodCard
        className="mr-2.5"
        image={imageURL("/images/hamburger.png")}
        imageAlt="Burger"
      >
        Hamburger
      </FoodCard>
      <FoodCard
        className="mr-2.5"
        image={imageURL("/images/pizza.png")}
        imageAlt="Pizza"
      >
        Pizza
      </FoodCard>
      <FoodCard
        className="mr-2.5"
        image={imageURL("/images/taco.png")}
        imageAlt="Taco"
      >
        Tacos
      </FoodCard>
      <FoodCard
        className="mr-2.5"
        image={imageURL("/images/coffee.png")}
        imageAlt="Coffee"
      >
        Coffee
      </FoodCard>
      <FoodCard
        className="mr-2.5"
        image={imageURL("/images/fries.png")}
        imageAlt="Fries"
      >
        Fries
      </FoodCard>
      <FoodCard
        className="mr-2.5"
        image={imageURL("/images/burrito.png")}
        imageAlt="Burrito"
      >
        Mexican
      </FoodCard>
      <FoodCard
        className="mr-2.5"
        image={imageURL("/images/breakfast.png")}
        imageAlt="Eggs and bacon"
      >
        Breakfast
      </FoodCard>
    </>
  );
}

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
          className="mr-4 mb-4"
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
