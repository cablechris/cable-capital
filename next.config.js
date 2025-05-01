/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
    ],
    domains: ['img.youtube.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: 'standalone',
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.cache = true;
    }
    return config;
  },
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig 