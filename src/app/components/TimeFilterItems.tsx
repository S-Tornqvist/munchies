"use client";

import { useAppContext } from "@/contexts/AppContext";
import FilterButton from "./FilterButton";
import { DeliveryTimeFilter } from "@/models/deliveryTimeFilter";

/**
 * Represents the selectable delivery times that the user can filter by.
 *
 * Provided design says spans 0-10, 10-30, 30-40 and 1 hour+. These spans have
 * gaps, so to maintain the look they have been changed to to 0-10, 10-30,
 * 30-45 and 45 min+.
 */
export const SELECTABLE_DELIVERY_TIMES: DeliveryTimeFilter[] = [
  { label: "0-10 min", minMinutes: -Infinity, maxMinutes: 10 },
  { label: "10-30 min", minMinutes: 10, maxMinutes: 30 },
  { label: "30-45 min", minMinutes: 30, maxMinutes: 40 },
  { label: "45 min+", minMinutes: 45, maxMinutes: Infinity },
];

export type TimeFilterItemsProps = { className?: string };

/**
 * Renders the delivery time filters in `AppContext` as selectable
 * `FilterButton` components.
 */
export default function TimeFilterItems({ className }: TimeFilterItemsProps) {
  const { selectedDeliveryTimes, setSelectedDeliveryTimes } = useAppContext();

  return SELECTABLE_DELIVERY_TIMES.map((deliveryTime) => (
    <FilterButton
      className={className}
      key={deliveryTime.label}
      onClick={() =>
        setSelectedDeliveryTimes((prev) =>
          prev.includes(deliveryTime)
            ? prev.filter((dt) => dt !== deliveryTime)
            : [...prev, deliveryTime]
        )
      }
      selected={selectedDeliveryTimes.includes(deliveryTime)}
    >
      {deliveryTime.label}
    </FilterButton>
  ));
}
