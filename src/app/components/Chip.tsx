import { PropsWithChildrenAndClass } from "../../util";

export default function Chip({
  children,
  className = "",
}: PropsWithChildrenAndClass) {
  return (
    <div className={`card px-3 py-2 rounded-full ${className}`}>{children}</div>
  );
}
