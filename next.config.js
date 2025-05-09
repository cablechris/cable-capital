/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Disable optimizeCss to prevent critters issues
    optimizeCss: false,
    scrollRestoration: true,
  },
}

module.exports = nextConfig 