import type { MetadataRoute } from 'next'

const BASE = 'https://cable.capital'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/v2',
    '/thesis',
    '/memos',
    '/papers',
    '/investments',
    '/about',
    '/v2/barbell',
    '/thesis/photonic-interconnect',
    '/memos/panthalassa',
    '/memos/tenstorrent',
    '/memos/dolphin-network',
    '/papers/emergent-culture',
    '/papers/sparse-bioelectric-control',
    '/papers/thermodynamic-computing-moat',
  ]
  const now = new Date()
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
  }))
}
