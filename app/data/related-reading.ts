import { archive } from './archive';
import { posts } from './posts';
import type { ReadingLink } from '../components/site/RelatedReading';

const titles = new Map([
  ...archive.map(entry => [entry.href, entry.title] as const),
  ...posts.map(post => [`/blog/${post.slug}`, post.title] as const),
  ['/barbell', 'Avoiding the Middle'] as const,
]);

// Connections are curated; link titles come from the existing publication data.
const connections: Record<string, string[]> = {
  '/memos/textql': ['/thesis/photonic-interconnect', '/papers/thermodynamic-computing-moat'],
  '/memos/venice': ['/memos/dolphin-network', '/papers/emergent-culture'],
  '/memos/dolphin-network': ['/memos/venice', '/papers/emergent-culture'],
  '/memos/panthalassa': ['/thesis/photonic-interconnect', '/papers/thermodynamic-computing-moat'],
  '/thesis/photonic-interconnect': ['/papers/thermodynamic-computing-moat', '/memos/panthalassa'],
  '/papers/thermodynamic-computing-moat': ['/thesis/photonic-interconnect', '/memos/textql'],
  '/papers/sparse-bioelectric-control': ['/papers/thermodynamic-computing-moat', '/papers/emergent-culture'],
  '/papers/emergent-culture': ['/blog/peacocks-tail-and-processor', '/memos/venice'],
  '/barbell': ['/blog/risk-volatility-evolution-courage', '/blog/three-is-company'],
  '/blog/risk-volatility-evolution-courage': ['/barbell', '/blog/three-is-company'],
  '/blog/three-is-company': ['/barbell', '/blog/risk-volatility-evolution-courage'],
  '/blog/peacocks-tail-and-processor': ['/papers/emergent-culture', '/memos/dolphin-network'],
  '/blog/biggest-energy-shock-lifetimes': ['/memos/panthalassa', '/thesis/photonic-interconnect'],
  '/blog/token-arbitrage': ['/memos/venice', '/blog/vibe-coding'],
  '/blog/memory-were-losing-to-memes': ['/papers/emergent-culture', '/blog/peacocks-tail-and-processor'],
  '/blog/vibe-coding': ['/blog/vibe-coding-revolution', '/blog/ai-tool-paradox'],
  '/blog/ai-tool-paradox': ['/blog/vibe-coding-revolution', '/blog/vibe-coding'],
  '/blog/vibe-coding-revolution': ['/blog/vibe-coding', '/blog/ai-tool-paradox'],
};

// Only this small map is sent to the client; article bodies stay on the server.
export const relatedReadingByPath: Record<string, ReadingLink[]> = Object.fromEntries(
  Object.entries(connections).map(([path, hrefs]) => [
    path,
    hrefs.map(href => {
      const title = titles.get(href);
      if (!title) throw new Error(`Related reading is missing a title: ${href}`);
      return { href, title };
    }),
  ]),
);
