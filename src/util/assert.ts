
/**
 * Asserts that a condition is truthy, throwing if it is not.
 * @param condition asserted condition.
 * @param message optional error message.
 */
export default function assert(
  condition: any,
  message?: string
): asserts condition {
  if (!condition) {
    throw new Error(message ?? "Assertion failed");
  }
}
