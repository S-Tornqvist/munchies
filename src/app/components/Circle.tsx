export type CircleProps = {
  className?: string;
  fill?: string;
};

export default function Circle({ className, fill }: CircleProps) {
  return (
    <svg
      className={className}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill={fill} />
    </svg>
  );
}
