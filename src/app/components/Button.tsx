import { PropsWithChildrenAndClass } from "../../util";

export type ButtonToggleProps = PropsWithChildrenAndClass<{
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}>;

export default function Button({
  selected,
  onClick,
  children,
  className = "",
}: ButtonToggleProps) {
  if (selected) {
    className += " selected";
  }

  return (
    <button className={`card-selectable  ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
