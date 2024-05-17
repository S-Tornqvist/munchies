/**
 * Represents a filter for delivery time.
 */
export type DeliveryTimeFilter = {
  minMinutes: number;
  maxMinutes: number;
  label: string;
};