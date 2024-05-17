import { Restaurant } from "@/models/restaurant";
import Chip from "./Chip";
import Image from "next/image";
import Circle from "./Circle";
import { timeSpan } from "@/util/timeSpan";
import { imageURL } from "@/util/image";

export type RestaurantCardProps = {
  restaurant: Restaurant;
  open: boolean;
  className?: string;
};

/**
 * A card that displays information about a restaurant. Shows open status,
 * delivery time span, name, image and navigation button.
 */
export default function RestaurantCard({
  restaurant,
  open,
  className,
}: RestaurantCardProps) {
  const opacity = open ? "" : "opacity-20";
  const pointer = open ? "" : "pointer-events-none";
  console.log("image", imageURL(restaurant.image_url))
  return (
    <div
      tabIndex={0}
      className={`flex-none flex flex-col justify-between overflow-hidden relative p-4 bg-white dark:bg-black border rounded-lg ${className}`}
      style={{ height: 200, width: 320 }}
    >
      <div className="flex-none flex flex-row">
        {open ? (
          <>
            <OpenChip />
            <Chip>{timeSpan(restaurant.delivery_time_minutes)}</Chip>
          </>
        ) : (
          <ClosedChip />
        )}
      </div>

      {!open && (
        <div
          className="bg-off-white dark:bg-off-black px-3 py-2 absolute border rounded"
          style={{ top: 85, left: 85 }}
        >
          Opens tomorrow at 12 pm
        </div>
      )}

      <h1 className={`flex-none ${opacity}`}>{restaurant.name}</h1>

      {/* Limited server capacity per month. No nextjs/image handling. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageURL(restaurant.image_url)}
        width={140}
        height={140}
        alt={restaurant.name}
        className={`absolute ${opacity}`}
        style={{ top: -35, right: -15 }}
      />

      <a
        href={encodeURI(
          `https://www.google.com/search?q=${"restaurant " + restaurant.name}`
        )}
        className={`absolute flex items-center justify-center bg-green text-white rounded-full w-8 h-8 ${opacity} ${pointer}`}
        style={{ bottom: 16, right: 16 }}
      >
        <Image
          src={"/images/rarr.svg"}
          alt="Right arrow"
          width={12}
          height={10}
        />
      </a>
    </div>
  );
}

const OpenChip = () => (
  <Chip className="mr-2">
    <Circle fill="#00703A" className="inline-block mr-1" />
    Open
  </Chip>
);

const ClosedChip = () => (
  <Chip className="mr-2">
    <Circle fill="#000000" className="inline-block mr-1" />
    Closed
  </Chip>
);
