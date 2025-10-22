/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/labs',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
