/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // Disable symlinking during build
    outputFileTracingRoot: undefined
  }
}

module.exports = nextConfig
