export type FoodCardProps = React.PropsWithChildren<{
  image?: string;
  imageAlt: string;
  active?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}>;

export default function FoodCard({
  children,
  image,
  imageAlt,
  active,
  className,
  onClick,
  onKeyDown,
}: FoodCardProps) {
  const activeBg = active ? "border-green" : "";
  return (
    <div
      role="button"
      className={`card card-hover title min-h-20 min-w-40 px-3 py-4 rounded-lg relative ${activeBg} ${className}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
      {image && (
        // Limited server capacity per month. No nextjs/image handling.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="absolute right-0 top-1/2 -translate-y-1/2"
          width={80}
          height={80}
          src={image}
          alt={imageAlt}
        />
      )}
    </div>
  );
}
