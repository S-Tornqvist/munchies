"use client";

import { useAppContext } from "@/contexts/AppContext";
import FilterButton from "./FilterButton";

/**
 * Renders the price filters in `AppContext` as selectable `FilterButton`
 * components.
 */
export default function PriceFilterItems() {
  const { priceRanges, selectedPriceRanges, setSelectedPriceRanges } =
    useAppContext();

  return priceRanges.map((priceRange) => (
    <FilterButton
      className="dark:bg-off-black"
      key={priceRange.id}
      onClick={() =>
        setSelectedPriceRanges((prev) =>
          prev.includes(priceRange)
            ? prev.filter((pr) => pr !== priceRange)
            : [...prev, priceRange]
        )
      }
      selected={selectedPriceRanges.some((p) => p.id === priceRange.id)}
    >
      {priceRange.range}
    </FilterButton>
  ));
}
