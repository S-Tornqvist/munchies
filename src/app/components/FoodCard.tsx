export type FoodCardProps = React.PropsWithChildren<{
  image?: string;
  imageAlt: string;
  selected?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}>;

/**
 * A card for food items, showing image and title.
 * 
 * Rendered with role="button", and highlights on both hover and selection.
 */
export default function FoodCard({
  children,
  image,
  imageAlt,
  selected,
  className,
  onClick,
  onKeyDown,
}: FoodCardProps) {
  const selectedBg = selected ? "border-green" : "";
  return (
    <div
      role="button"
      tabIndex={0}
      className={`card card-hover title min-h-20 min-w-40 px-3 py-4 rounded-lg relative ${selectedBg} ${className}`}
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
