import { useRef } from "react";

/**
 * Returns the initially passed props, ignoring updates. Useful for components
 * that need to ignore changes to passed props.
 */
export default function useFreeze<T>(props: T): T {
  return useRef(props).current;
}
