export type ChipProps = React.PropsWithChildren<{
  className?: string;
}>;

/**
 * A small chip.
 */
export default function Chip({ children, className }: ChipProps) {
  return (
    <div className={`card px-3 py-2 rounded-full ${className}`}>{children}</div>
  );
}
