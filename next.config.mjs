import assert from "assert";

const BACKEND_HOST = process.env.BACKEND_HOST;
assert(BACKEND_HOST, "Environment variable BACKEND_HOST not set.");

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/images/:path",
      destination: `https://${BACKEND_HOST}/images/:path`,
    },
  ],
};

export default nextConfig;
