import { useRef, useMemo, useEffect } from "react";
import { isEqual } from "../../util";

/**
 * Memoizes a list so that the reference only updated if the contents are
 * changed. Useful for preventing unnecessary re-renders.
 */
export default function useListMemo<T>(list: T[]): T[] {
  const prev = useRef(list);

  const memoized = useMemo(
    () => (isEqual(prev.current, list) ? prev.current : list),
    [list]
  );

  useEffect(() => {
    prev.current = memoized;
  }, [memoized]);

  return memoized;
}
