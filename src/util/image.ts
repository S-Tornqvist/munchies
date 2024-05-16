/**
 * Convert image name to image URL.
 * @param image
 * @returns URL to image resource, usable by `next/image`.
 *
 * @example
 * ```tsx
 * <Image src={imageURL("burger.png")} alt="Burger" />
 * ```
 */
export function imageURL(image: string) {
  return `${process.env.BACKEND_URL}/${image}`;
}
