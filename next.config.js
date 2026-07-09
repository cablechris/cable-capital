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
  // Retire the legacy off-brand pages (old gray Tailwind design, 2019–2022
  // talks, the pre-v2 blog). They are not linked from the v2 site or the
  // sitemap; send any remaining inbound links and crawlers home.
  async redirects() {
    return [
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug*', destination: '/', permanent: true },
      { source: '/talks', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig 