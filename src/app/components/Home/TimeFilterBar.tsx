"use client";

import { timeSpanToLabel } from "../../../models/timeSpan";
import { PropsWithClass } from "../../../util";
import useRestaurantsContext from "../../contexts/RestaurantsContext/useRestaurantsContext";
import Button from "../Button";

export default function TimeFilterBar({ className = "" }: PropsWithClass) {
  const { allTimeSpans, selectedTimeSpans, toggleTimeSpan } =
    useRestaurantsContext();

  return (
    <div className={className}>
      <div className="mx-3 font-semibold opacity-40">DELIVERY TIME</div>
      <div className="flex flex-row px-3 py-2 gap-2.5 overflow-auto no-scrollbar">
        {allTimeSpans.map((span, index) => (
          <Button
            key={`${index}@${span.min}@${span.max}`}
            className="flex-none px-3 py-2"
            selected={selectedTimeSpans.includes(span)}
            onClick={() => toggleTimeSpan(span)}
          >
            {timeSpanToLabel(span)}
          </Button>
        ))}
      </div>
    </div>
  );
}
