import RestaurantsListView from "./RestaurantsListView";
import FilterSideBar from "./FilterSideBar";
import FoodFilterBar from "./FoodFilterBar";
import Header from "./Header";
import TimeFilterBar from "./TimeFilterBar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col pt-10 sm:pt-14 pl-3 sm:pl-10">
      <Header className="flex-none xs:ml-3 mb-6 sm:mb-12" />
      <TimeFilterBar className="sm:hidden flex-none" />
      <div className="flex-1 flex flex-row gap-2 overflow-auto">
        <FilterSideBar className="xs:hidden card flex-none mt-2 w-60 border-b-0 rounded-b-none" />
        <div className="flex-1 flex flex-col overflow-auto">
          <FoodFilterBar className="flex-none" />
          <div className="flex flex-col pl-3 overflow-auto">
            <p className="display mt-4 sm:mt-6 mb-5 sm:mb-8">Restaurants</p>
            <RestaurantsListView className="flex-1 pr-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
