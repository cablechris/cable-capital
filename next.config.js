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
  // Two combined indexes replace the five old ones. Old URLs redirect to
  // their new home so inbound links (external and archived) stay valid.
  // Detail pages under /memos/*, /papers/*, /thesis/*, /blog/* keep their
  // slugs; only the aggregate indexes moved.
  async redirects() {
    return [
      { source: '/memos', destination: '/thesis', permanent: true },
      { source: '/papers', destination: '/research', permanent: true },
      { source: '/blog', destination: '/research', permanent: true },
      { source: '/talks', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig 