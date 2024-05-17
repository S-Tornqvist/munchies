const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;
const CACHE_TIMER = parseInt(process.env.CACHE_TIMER ?? "0") || 0;

/**
 * Options for the request.
 */
export type RequestOptions = {
  /**
   * Prevent caching of the request. Defaults to false.
   */
  preventCache?: boolean;
};

/**
 * Fetch data from the API. Caches results, so that server does not waste
 * resources. Assumes JSON as response body.
 *
 * @template T Type of fetched data.
 * @param path Path to fetched data.
 * @param options Options for the request.
 * @returns Promise of fetched data.
 */
export default async function request<T = unknown>(
  path: string,
  options?: RequestOptions
): Promise<T> {
  let init;
  if (!options?.preventCache) {
    init = {
      next: { revalidate: CACHE_TIMER },
    };
  }

  return fetch(`${API_URL}/${path}`, init).then((res) => res.json());
}
