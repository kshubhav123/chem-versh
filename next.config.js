/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["images.pexels.com"],
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
