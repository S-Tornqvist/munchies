import Image from "next/image";
import Filter from "./components/Filter";

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
          <div>DELIVERY TIME</div>
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
              <h1>Restaurants</h1>
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
      <Filter className="mr-2.5 mb-2.5">0-10 min</Filter>
      <Filter className="mr-2.5 mb-2.5">10-30 min</Filter>
      <Filter className="mr-2.5 mb-2.5">30-40 min</Filter>
      <Filter className="mr-2.5 mb-2.5">1 hour+</Filter>
    </>
  );
}

function PriceFilters() {
  return (
    <>
      <Filter className="!px-2 mr-2.5 mb-2.5">$</Filter>
      <Filter className="!px-2 mr-2.5 mb-2.5">$$</Filter>
      <Filter className="!px-2 mr-2.5 mb-2.5">$$$</Filter>
      <Filter className="!px-2 mr-2.5 mb-2.5">$$$$</Filter>
    </>
  );
}

function TopFoodFilters() {
  return (
    <>
      <div className="min-h-20 min-w-40 p-2 mr-2 card">
        Hamburgers
      </div>
      <div className="min-h-20 min-w-40 p-2 mr-2 card">Pizza</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 card">Taco</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 card">Coffee</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 card">Fries</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 card">Mexican</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 card">
        Breakfast
      </div>
    </>
  );
}

function Restaurants() {
  return (
    <>
      <div className="pt-40 min-w-80 p-2 mr-2 mb-2 bg-white dark:bg-black border">Cortado Bar</div>
      <div className="pt-40 min-w-80 p-2 mr-2 mb-2 bg-white dark:bg-black border">Neta</div>
      <div className="pt-40 min-w-80 p-2 mr-2 mb-2 bg-white dark:bg-black border">
        Breakfast Club
      </div>
      <div className="pt-40 min-w-80 p-2 mr-2 mb-2 bg-white dark:bg-black border">
        Burgers n&apos; stuff
      </div>
      <div className="pt-40 min-w-80 p-2 mr-2 mb-2 bg-white dark:bg-black border">Fries Guys</div>
      <div className="pt-40 min-w-80 p-2 mr-2 mb-2 bg-white dark:bg-black border">Cortado Bar</div>
      <div className="pt-40 min-w-80 p-2 mr-2 mb-2 bg-white dark:bg-black border">Cortado Bar</div>
      <div className="pt-40 min-w-80 p-2 mr-2 mb-2 bg-white dark:bg-black border">Cortado Bar</div>
      <div className="pt-40 min-w-80 p-2 mr-2 mb-2 bg-white dark:bg-black border">Cortado Bar</div>
    </>
  );
}
