import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen max-h-screen ps-10 pt-14 flex flex-col overflow-hidden">
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
      <div className="flex-auto flex flex-row overflow-auto">
        {/* Filter panel */}
        <div className="flex-none w-60 min-h-full p-4 mr-4 bg-white border">
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
        <div className="flex-auto overflow-hidden flex flex-col">
          {/* Filter top row */}
          <div className="flex-none pb-10 flex flex-row flex-nowrap overflow-x-auto no-scrollbar">
            <TopFoodFilters />
          </div>

          {/* Restaurants */}
          <div className="flex flex-col overflow-hidden">
            <div className="flex-none">
              <h1>Restaurants</h1>
            </div>
            <div className="flex-auto flex flex-row flex-wrap overflow-auto no-scrollbar">
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
      <div className="p-2 mr-2 mb-2 border">Hamburger</div>
      <div className="p-2 mr-2 mb-2 border">Pizza</div>
      <div className="p-2 mr-2 mb-2 border">Tacos</div>
      <div className="p-2 mr-2 mb-2 border">Coffe</div>
    </>
  );
}

function TimeFilters() {
  return (
    <>
      <div className="p-2 mr-2 mb-2 border">0-10 min</div>
      <div className="p-2 mr-2 mb-2 border">10-30 min</div>
      <div className="p-2 mr-2 mb-2 border">30-40 min</div>
      <div className="p-2 mr-2 mb-2 border">1 hour+</div>
    </>
  );
}

function PriceFilters() {
  return (
    <>
      <div className="p-2 mr-2 mb-2 border">$</div>
      <div className="p-2 mr-2 mb-2 border">$$</div>
      <div className="p-2 mr-2 mb-2 border">$$$</div>
      <div className="p-2 mr-2 mb-2 border">$$$$</div>
    </>
  );
}

function TopFoodFilters() {
  return (
    <>
      <div className="min-h-20 min-w-40 p-2 mx-2 bg-white border">
        Hamburgers
      </div>
      <div className="min-h-20 min-w-40 p-2 mx-2 bg-white border">Pizza</div>
      <div className="min-h-20 min-w-40 p-2 mx-2 bg-white border">Taco</div>
      <div className="min-h-20 min-w-40 p-2 mx-2 bg-white border">Coffee</div>
      <div className="min-h-20 min-w-40 p-2 mx-2 bg-white border">Fries</div>
      <div className="min-h-20 min-w-40 p-2 mx-2 bg-white border">Mexican</div>
      <div className="min-h-20 min-w-40 p-2 mx-2 bg-white border">
        Breakfast
      </div>
    </>
  );
}

function Restaurants() {
  return (
    <>
      <div className="pt-40 min-w-80 p-2 m-2 bg-white border">Cortado Bar</div>
      <div className="pt-40 min-w-80 p-2 m-2 bg-white border">Neta</div>
      <div className="pt-40 min-w-80 p-2 m-2 bg-white border">
        Breakfast Club
      </div>
      <div className="pt-40 min-w-80 p-2 m-2 bg-white border">
        Burgers n&apos; stuff
      </div>
      <div className="pt-40 min-w-80 p-2 m-2 bg-white border">Fries Guys</div>
      <div className="pt-40 min-w-80 p-2 m-2 bg-white border">Cortado Bar</div>
      <div className="pt-40 min-w-80 p-2 m-2 bg-white border">Cortado Bar</div>
      <div className="pt-40 min-w-80 p-2 m-2 bg-white border">Cortado Bar</div>
      <div className="pt-40 min-w-80 p-2 m-2 bg-white border">Cortado Bar</div>
    </>
  );
}
