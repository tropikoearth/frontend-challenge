/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  },
};

export default nextConfig;
