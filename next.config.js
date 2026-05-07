/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true, // Helpful for static export if needed
  },
};

module.exports = nextConfig;
