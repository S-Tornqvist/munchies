// Must be ordered ascending.
export const TIME_SPANS: TimeSpan[] = [
  { max: 10 },
  { min: 10, max: 30 },
  { min: 30, max: 60 },
  { min: 60 },
];

/**
 * Inclusive time span in minutes.
 */
export type TimeSpan = { min?: number; max?: number };

export function timeSpanToLabel({ min = 0, max = 60 }: TimeSpan): string {
  if (min >= 60) return "1 hour +";
  return `${min}-${max} min`;
}

export function minutesToTimeSpanLabel(minutes: number): string {
  if (minutes <= 0) return "5 min";
  if (minutes > 60) return "1 hour+";

  for (const { min = -Infinity, max = Infinity } of TIME_SPANS) {
    if (min <= minutes && minutes <= max) {
      if (min === -Infinity) {
        return `<${max} min`;
      }
      if (max === Infinity) {
        return `>${min} min`;
      }
      return `${min}-${max} min`;
    }
  }

  return `${minutes} min`;
}
