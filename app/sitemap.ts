import type { MetadataRoute } from 'next'
import { posts } from './data/posts'

const BASE = 'https://cable.capital'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/thesis',
    '/research',
    '/investments',
    '/barbell',
    '/about',
    '/thesis/photonic-interconnect',
    '/memos/venice',
    '/memos/panthalassa',
    '/memos/dolphin-network',
    '/papers/emergent-culture',
    '/papers/sparse-bioelectric-control',
    '/papers/thermodynamic-computing-moat',
  ]
  const essayRoutes = posts.map((p) => `/blog/${p.slug}`)
  const now = new Date()
  return [...staticRoutes, ...essayRoutes].map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
  }))
}
