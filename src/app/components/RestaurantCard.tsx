import Image from "next/image";
import { PropsWithClass } from "../../util";
import Chip from "./Chip";
import Circle from "./Circle";
import { minutesToTimeSpanLabel } from "../../models/timeSpan";

export type RestaurantCardProps = PropsWithClass<{
  name: string;
  isOpen?: boolean;
  deliveryTime: number;
  imageUrl: string;
}>;

export default function RestaurantCard({
  name,
  isOpen,
  deliveryTime,
  imageUrl,

  className = "",
}: RestaurantCardProps) {
  const url = encodeURI(`https://www.google.com/search?q=restaurant ${name}`);

  const openStatus = isOpen
    ? {
        fill: "fill-green",
        text: "Open",
      }
    : {
        fill: "fill-black dark:fill-gray-500",
        text: "Closed",
      };

  const fadeIfClosed = isOpen ? "" : "opacity-20";

  return (
    <div
      className={`min-w-80 min-h-52 card relative overflow-hidden ${className}`}
    >
      <div className="flex flex-row gap-2 absolute top-4 left-4">
        <Chip>
          <Circle radius={4} className={"inline-block " + openStatus.fill} />{" "}
          {openStatus.text}
        </Chip>
        {isOpen && <Chip>{minutesToTimeSpanLabel(deliveryTime)}</Chip>}
      </div>
      <Image
        className={`absolute -right-8 -top-8 ${fadeIfClosed}`}
        alt={name}
        width={140}
        height={140}
        src={imageUrl}
      />
      <h1
        className={`absolute bottom-4 left-4 text-balance max-w-[calc(100%-72px)] ${fadeIfClosed}`}
      >
        {name}
      </h1>
      <a
        className={`absolute bottom-4 right-4 w-8 h-8 p-2.5 rounded-full bg-green ${fadeIfClosed}`}
        href={url}
      >
        <Image
          src="/images/rightArrow.svg"
          alt="Navigate"
          width="12"
          height="10"
        />
      </a>
    </div>
  );
}
