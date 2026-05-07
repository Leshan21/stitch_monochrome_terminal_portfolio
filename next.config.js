/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
