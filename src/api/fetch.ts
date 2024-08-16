import { url } from "../util";

const DEFAULT_CACHE_TIMER =
  parseInt(process.env.DEFAULT_CACHE_TIMER ?? "") || 0;

/**
 * Fetch api resource
 *
 * @param path relative to api base url.
 * @param init Next.js fetch options.
 */
export async function apiFetch(
  path: string,
  init?: RequestInit
): Promise<Response> {
  const revalidate = init?.next?.revalidate ?? DEFAULT_CACHE_TIMER;
  const next = { ...init?.next, revalidate };
  init = { ...init, next };

  return fetch(url("api", path), init);
}
