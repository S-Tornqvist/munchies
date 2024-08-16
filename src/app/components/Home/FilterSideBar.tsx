"use client";

import { timeSpanToLabel } from "../../../models/timeSpan";
import { PropsWithClass } from "../../../util";
import useRestaurantsContext from "../../contexts/RestaurantsContext/useRestaurantsContext";
import Button from "../Button";

export default function FilterSideBar({ className = "" }: PropsWithClass) {
  const {
    allFoodFilters,
    selectedFoodFilters,
    toggleFoodFilter,

    allTimeSpans,
    selectedTimeSpans,
    toggleTimeSpan,

    allPriceRanges,
    selectedPriceRanges,
    togglePriceRange,
  } = useRestaurantsContext();

  return (
    <div className={`flex flex-col overflow-auto ${className}`}>
      <h1 className="ml-6 mt-6">Filter</h1>

      <div className="flex flex-col overflow-auto mt-8">
        <div>
          <div className="font-semibold ml-6 opacity-40">FOOD CATEGORY</div>
          <div className="flex flex-row flex-wrap gap-2 mt-2 ml-4 p-2 pr-8">
            {allFoodFilters.map((filter) => (
              <Button
                key={filter.id}
                className="px-3 py-2"
                selected={selectedFoodFilters.includes(filter)}
                onClick={() => toggleFoodFilter(filter)}
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-semibold mt-8 ml-6 opacity-40">
            DELIVERY TIME
          </div>
          <div className="flex flex-row flex-wrap gap-2 mt-2 ml-4 p-2 pr-8">
            {allTimeSpans.map((span, index) => (
              <Button
                key={`${index}@${span.min}@${span.max}`}
                className="px-3 py-2"
                selected={selectedTimeSpans.includes(span)}
                onClick={() => toggleTimeSpan(span)}
              >
                {timeSpanToLabel(span)}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-semibold mt-8 ml-6 opacity-40">PRICE RANGE</div>
          <div className="flex-1 flex flex-row flex-wrap gap-2 mt-2 ml-4 p-2 pr-8">
            {allPriceRanges.map((priceRange) => (
              <Button
                key={priceRange.id}
                className="px-2 py-2"
                selected={selectedPriceRanges.includes(priceRange)}
                onClick={() => togglePriceRange(priceRange)}
              >
                {priceRange.range}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
