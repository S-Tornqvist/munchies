import Image from "next/image";
import FilterButton from "./components/FilterButton";
import React from "react";
import fetchInitial from "@/api/fetchInitial";
import { AppProvider } from "@/contexts/AppContext";
import { RestaurantItems } from "./components/RestaurantItems";
import FoodCardItems from "./components/FoodCardItems";
import PriceFilterItems from "./components/PriceFilterItems";
import TimeFilterItems from "./components/TimeFilterItems";
import FoodFilterItems from "./components/FoodFilterItems";

export default async function Home() {
  const initialData = await fetchInitial();
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
      <AppProvider initialData={initialData}>
        {/* Main content. Includes filter panel, filter top row and restaurants */}
        <div className="flex-1 flex flex-col sm:flex-row overflow-auto">
          {/* Filter panel mobile */}
          <div className="sm:hidden flex-none mb-4">
            <div className="font-semibold opacity-40 mb-2.5">DELIVERY TIME</div>
            <div className="flex flex-row flex-nowrap gap-2.5 overflow-x-auto no-scrollbar">
              <TimeFilterItems />
            </div>
          </div>

          {/* Filter panel desktop*/}
          <div className="hidden sm:block flex-none w-60 min-h-max p-6 mr-5 card border-b-0 rounded-t-2.5">
            <h1 className="mb-8">Filter</h1>
            <div className="mb-6">
              <div className="font-semibold opacity-40 mb-4">FOOD CATEGORY</div>
              <div className="flex flex-col items-start gap-2.5">
                <FoodFilterItems />
              </div>
            </div>
            <div className="mb-6">
              <div className="font-semibold opacity-40 mb-4">DELIVERY TIME</div>
              <div className="flex flex-row flex-wrap gap-2">
                <TimeFilterItems className="dark:bg-off-black" />
              </div>
            </div>
            <div className="mb-6">
              <div className="font-semibold opacity-40 mb-4">PRICE RANGE</div>
              <div className="flex flex-row flex-wrap gap-2">
                <PriceFilterItems />
              </div>
            </div>
          </div>

          {/* Filter top row and restaurants*/}
          <div className="flex-1 overflow-hidden flex flex-col">
            {/* Filter top row */}
            <div className="flex-none mb-6 sm:mb-10 gap-2.5 flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden no-scrollbar">
              <FoodCardItems />
            </div>

            {/* Restaurants */}
            <div className="flex flex-col overflow-hidden">
              <div className="flex-none display mb-5 sm:mb-8">Restaurants</div>
              <div className="flex-1 flex flex-col items-center sm:flex-row sm:flex-wrap pe-6 sm:pe-10 gap-2.5 sm:gap-4 overflow-auto no-scrollbar">
                <RestaurantItems />
              </div>
            </div>
          </div>
        </div>
      </AppProvider>
    </main>
  );
}
