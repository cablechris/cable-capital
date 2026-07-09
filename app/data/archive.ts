// The archive — single source of truth for the reasoning record.
//
// Everything that lists the work (the homepage Record, the RSS feed, and any
// future index) reads from here, so the set can never drift out of sync or
// out of order again. Ordered newest-first by `date`; the feed sorts on the
// same field, so this ordering is authoritative.

export type ArchiveType = 'Thesis' | 'Memo' | 'Research'
export type ArchiveStatus = 'Active conviction' | 'PASS' | 'MONITOR' | 'WATCH'

export interface ArchiveEntry {
  /** Stable id / route slug tail. */
  slug: string
  /** Canonical route on the site. */
  href: string
  type: ArchiveType
  title: string
  /** Short deck shown in the homepage Record. */
  deck: string
  /** Longer summary used for the RSS feed. */
  description: string
  /** Verdict / conviction badge, where one applies. */
  status?: ArchiveStatus
  /** ISO date (YYYY-MM-DD), month-precision. Drives sort + feed pubDate. */
  date: string
  /** Human display date, e.g. "Jul 2026". */
  displayDate: string
}

export const archive: ArchiveEntry[] = [
  {
    slug: 'panthalassa',
    href: '/memos/panthalassa',
    type: 'Memo',
    title: 'Panthalassa',
    deck: 'A wave-powered ocean data center Thiel just backed. The platform may be worth building; the cargo it carries is racing to zero.',
    description:
      'PASS. A wave-powered ocean data center Thiel just backed near USD 1B, offered at USD 1.7B pre. The platform may be worth building; the compute business on the label is its weakest asset, and the cargo it carries is racing to zero.',
    status: 'PASS',
    date: '2026-07-01',
    displayDate: 'Jul 2026',
  },
  {
    slug: 'photonic-interconnect',
    href: '/thesis/photonic-interconnect',
    type: 'Thesis',
    title: 'Photonic Interconnect',
    deck: 'Light as the structural successor to copper in AI scale-up.',
    description: 'Light as the structural successor to copper in AI scale-up.',
    status: 'Active conviction',
    date: '2026-05-01',
    displayDate: 'May 2026',
  },
  {
    slug: 'dolphin-network',
    href: '/memos/dolphin-network',
    type: 'Memo',
    title: 'Dolphin Network',
    deck: 'Distributed inference, narrowed. The bet is workload economics, not sharding.',
    description:
      'MONITOR. Distributed inference, narrowed. Real arbitrage in audio and small LLMs. The bet is workload economics, not sharding.',
    status: 'MONITOR',
    date: '2026-05-01',
    displayDate: 'May 2026',
  },
  {
    slug: 'tenstorrent',
    href: '/memos/tenstorrent',
    type: 'Memo',
    title: 'Tenstorrent',
    deck: 'The company is real. The security is not clean enough.',
    description: 'PASS. The company is real. The security is not clean enough.',
    status: 'PASS',
    date: '2026-05-01',
    displayDate: 'May 2026',
  },
  {
    slug: 'sparse-bioelectric-control',
    href: '/papers/sparse-bioelectric-control',
    type: 'Research',
    title: 'Hard Limits on Sparse Bioelectric Control',
    deck: 'Bioelectric repair is a dimensionality problem, not a dose problem. Below a critical number of intervention sites, no amount of stimulation works.',
    description:
      'Bioelectric repair is treated as a dose problem. It is a dimensionality problem: below a critical number of independent intervention sites, no amount of stimulation can remove the damage.',
    date: '2026-05-01',
    displayDate: 'May 2026',
  },
  {
    slug: 'thermodynamic-computing-moat',
    href: '/papers/thermodynamic-computing-moat',
    type: 'Research',
    title: 'Stranded or Fungible?',
    deck: 'Testing whether Extropic’s thermodynamic-computing moat survives scale. On what I could measure, the moat looks more like a head start.',
    description:
      "Extropic's thermodynamic hardware bets its energy-based-model advantage is stranded. On the axis this study can measure, the moat looks more like a head start, with the decisive cell (physical energy) explicitly unmeasured.",
    date: '2026-03-01',
    displayDate: 'Mar 2026',
  },
  {
    slug: 'emergent-culture',
    href: '/papers/emergent-culture',
    type: 'Research',
    title: 'Culture Without Function',
    deck: 'Emergent coordination in artificial systems, through costly signals.',
    description: 'Emergent coordination in artificial systems, through costly signals and social learning.',
    date: '2025-01-01',
    displayDate: 'Jan 2025',
  },
]
