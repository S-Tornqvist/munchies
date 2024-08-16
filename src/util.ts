import { PropsWithChildren } from "react";

export const BACKEND_URL = `https://${process.env.BACKEND_HOST}`;

export type PropsWithClass<T = unknown> = T & { className?: string };

export type PropsWithChildrenAndClass<T = unknown> = PropsWithChildren<
  PropsWithClass<T>
>;

/**
 * Create url from path, relative to backend host url.
 */
export function url(...path: string[]): string {
  return new URL(path.join("/").replace(/\/{2,}/, "/"), BACKEND_URL).href;
}

/**
 * @example
 * [1,2,3,1,4,2].filter(unique); // [1, 2, 3, 4]
 */
export function unique<T>(value: T, index: number, array: T[]) {
  return array.indexOf(value) === index;
}

/**
 * Array.filter callback function for ensuring unique `id` properties.
 *
 * @example
 * const array = [
 *   {id: 1},
 *   {id: "uid"},
 *   {id: 1},
 *   {id: "foo"},
 *   {id: "uid"}
 * ];
 * const uniqueArray = array.filter(uniqueById);
 * // [
 * //   {id: 1},
 * //   {id: "uid"},
 * //   {id: "foo"}
 * // ];
 */
export function uniqueById<T extends { id?: unknown }>(
  value: T,
  index: number,
  array: T[]
) {
  return array.findIndex(({ id }) => id === value.id) === index;
}

/**
 * True if both lists contain the same elements (shallow comparison
 * element-wise).
 */
export function isEqual<T>(a: T[], b: T[]): boolean {
  if (a === b) return true;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}
