const BASE = 'https://cable.capital'

// The archive as a feed. Newest first. Keep in sync with the Record on the
// homepage. Dates are month-precision, pinned to the first of the month.
const items = [
  {
    title: 'Panthalassa',
    type: 'Memo',
    path: '/memos/panthalassa',
    date: 'Wed, 01 Jul 2026 00:00:00 GMT',
    description:
      'PASS. A wave-powered ocean data center Thiel just backed near USD 1B, offered at USD 1.7B pre. The platform may be worth building; the compute business on the label is its weakest asset, and the cargo it carries is racing to zero.',
  },
  {
    title: 'Photonic Interconnect',
    type: 'Thesis',
    path: '/thesis/photonic-interconnect',
    date: 'Thu, 01 May 2026 00:00:00 GMT',
    description: 'Light as the structural successor to copper in AI scale-up.',
  },
  {
    title: 'Hard Limits on Sparse Bioelectric Control',
    type: 'Research',
    path: '/papers/sparse-bioelectric-control',
    date: 'Fri, 01 May 2026 00:00:00 GMT',
    description:
      'Bioelectric repair is treated as a dose problem. It is a dimensionality problem: below a critical number of independent intervention sites, no amount of stimulation can remove the damage.',
  },
  {
    title: 'Dolphin Network',
    type: 'Memo',
    path: '/memos/dolphin-network',
    date: 'Thu, 01 May 2026 00:00:00 GMT',
    description:
      'MONITOR. Distributed inference, narrowed. Real arbitrage in audio and small LLMs. The bet is workload economics, not sharding.',
  },
  {
    title: 'Tenstorrent',
    type: 'Memo',
    path: '/memos/tenstorrent',
    date: 'Thu, 01 May 2026 00:00:00 GMT',
    description: 'PASS. The company is real. The security is not clean enough.',
  },
  {
    title: 'Culture Without Function',
    type: 'Research',
    path: '/papers/emergent-culture',
    date: 'Wed, 01 Jan 2025 00:00:00 GMT',
    description: 'Emergent coordination in artificial systems, through costly signals and social learning.',
  },
]

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function GET() {
  const body = items
    .map(
      (i) => `    <item>
      <title>${escape(`${i.type}: ${i.title}`)}</title>
      <link>${BASE}${i.path}</link>
      <guid isPermaLink="true">${BASE}${i.path}</guid>
      <pubDate>${i.date}</pubDate>
      <description>${escape(i.description)}</description>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Cable Capital</title>
    <link>${BASE}/v2</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>A public reasoning archive. Investment theses, deal memos, and original research, pre-registered before they resolve.</description>
    <language>en</language>
${body}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
