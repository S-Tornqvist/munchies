import { PropsWithClass } from "../../util";

export type CircleProps = PropsWithClass<{
  radius: number;
}>;

export default function Circle({ radius, className = "" }: CircleProps) {
  return (
    <svg
      className={className}
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={radius} cy={radius} r={radius} />
    </svg>
  );
}
