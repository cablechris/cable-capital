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
  // /blog is now the Essays section on the V2 shell — no longer redirected
  // home. /talks stays retired (2019–2022 marketing content is off-brand).
  // /v2/barbell now redirects to /barbell (top-level path) via its own
  // page-level Next redirect for clean URLs.
  async redirects() {
    return [
      { source: '/talks', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig 