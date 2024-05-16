export type Filter = React.PropsWithChildren<{
  active?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}>;

export default function Filter({
  children,
  active,
  className,
  onClick,
  onKeyDown,
}: Filter) {
  const activeBg = active ? "border-green" : "";
  return (
    <button
      className={`card card-hover px-3 py-2 rounded-lg ${activeBg} ${className}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
}
