const TIME_SPANS = [5, 10, 15, 20, 25, 40, 60];

/**
 * Converts a number of minutes into a human-readable time span.
 *  - <5: 5 min
 *  - 5-10: 5-10 min
 * - 10-15: 10-15 min
 * - 15-20: 15-20 min
 * - 20-25: 20-25 min
 * - 25-40: 25-40 min
 * - 40-60: 40-60 min
 * - +60: 1 hour+
 * @param minutes
 * @returns A human-readable time span.
 */
export const timeSpan = (minutes: number) => {
  if (minutes > 60) return "1 hour+";
  if (minutes < TIME_SPANS[0]) return `${TIME_SPANS[0]} min`;

  for (let i = 1; i < TIME_SPANS.length; i++) {
    if (minutes <= TIME_SPANS[i]) {
      return `${TIME_SPANS[i - 1]}-${TIME_SPANS[i]} min`;
    }
  }

  return `${TIME_SPANS[TIME_SPANS.length - 2]}-${
    TIME_SPANS[TIME_SPANS.length - 1]
  } min`;
};
