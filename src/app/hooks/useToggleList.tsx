import { useCallback, useState } from "react";

/**
 * Helper for managing simple list wit
 *
 * @returns tuple of `[state, toggle]`. `toggle()` takes a value and either adds it
 *          to the list if missing or removes it if already present.
 */
export default function useToggleList<T>(
  init: T[] | (() => T[])
): [T[], (value: T) => void] {
  const [state, setState] = useState(init);

  const toggle = useCallback(
    (value: T) =>
      setState((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      ),
    []
  );

  return [state, toggle];
}
