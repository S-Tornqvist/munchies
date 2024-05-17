export type FilterButton = React.PropsWithChildren<{
  selected?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}>;

/**
 * A small button.
 * 
 * Rendered with role="button", and highlights on both hover and selection
 */
export default function FilterButton({
  children,
  selected,
  className,
  onClick,
  onKeyDown,
}: FilterButton) {
  const selectedBg = selected ? "border-green" : "";
  return (
    <button
      className={`card card-hover px-3 py-2 rounded-lg ${selectedBg} ${className}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
}
