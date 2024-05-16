import Image from "next/image";

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
        <div className="md:hidden flex-none mb-3">
          <p>DELIVERY TIME</p>
          <div className="flex flex-row flex-nowrap overflow-x-auto no-scrollbar">
            <TimeFilters />
          </div>
        </div>

        {/* Filter panel desktop*/}
        <div className="hidden md:block flex-none w-60 min-h-full p-4 mr-4 bg-white dark:bg-black border">
          <h1>Filter</h1>
          <div className="py-2">
            <p>FOOD CATEGORY</p>
            <div className="flex flex-col items-start">
              <FoodFilters />
            </div>
          </div>
          <div className="py-2">
            <p>DELIVERY TIME</p>
            <div className="flex flex-row flex-wrap">
              <TimeFilters />
            </div>
          </div>
          <div className="py-2">
            <p>PRICE RANGE</p>
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
      <div className="p-2 mr-2 last:mr-0 border">Hamburger</div>
      <div className="p-2 mr-2 last:mr-0 border">Pizza</div>
      <div className="p-2 mr-2 last:mr-0 border">Tacos</div>
      <div className="p-2 mr-2 last:mr-0 border">Coffe</div>
    </>
  );
}

function TimeFilters() {
  return (
    <>
      <div className="p-2 mr-2 last:mr-0 border">0-10 min</div>
      <div className="p-2 mr-2 last:mr-0 border">10-30 min</div>
      <div className="p-2 mr-2 last:mr-0 border">30-40 min</div>
      <div className="p-2 mr-2 last:mr-0 border">1 hour+</div>
    </>
  );
}

function PriceFilters() {
  return (
    <>
      <div className="p-2 mr-2 last:mr-0 border">$</div>
      <div className="p-2 mr-2 last:mr-0 border">$$</div>
      <div className="p-2 mr-2 last:mr-0 border">$$$</div>
      <div className="p-2 mr-2 last:mr-0 border">$$$$</div>
    </>
  );
}

function TopFoodFilters() {
  return (
    <>
      <div className="min-h-20 min-w-40 p-2 mr-2 bg-white dark:bg-black border">
        Hamburgers
      </div>
      <div className="min-h-20 min-w-40 p-2 mr-2 last:mr-0 bg-white dark:bg-black border">Pizza</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 last:mr-0 bg-white dark:bg-black border">Taco</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 last:mr-0 bg-white dark:bg-black border">Coffee</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 last:mr-0 bg-white dark:bg-black border">Fries</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 last:mr-0 bg-white dark:bg-black border">Mexican</div>
      <div className="min-h-20 min-w-40 p-2 mr-2 last:mr-0 bg-white dark:bg-black border">
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
