// The archive — single source of truth for the reasoning record.
//
// Everything that lists the work (the homepage Record, the RSS feed, and any
// future index) reads from here, so the set can never drift out of sync or
// out of order again. Ordered newest-first by `date`; the feed sorts on the
// same field, so this ordering is authoritative.

export type ArchiveType = 'Thesis' | 'Memo' | 'Research' | 'Essay' | 'Manifesto'
export type ArchiveStatus = 'Active conviction' | 'PASS' | 'MONITOR' | 'WATCH' | 'STARTER'

export interface ArchiveEntry {
  /** Stable id / route slug tail. */
  slug: string
  /** Canonical route on the site, or an external URL for off-site work. */
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
    slug: 'orbio-darwinian-market-for-intelligence',
    href: 'https://x.com/MrCable0x/status/2101869258242433442',
    type: 'Memo',
    title: 'ORBIO and a Darwinian Market for Intelligence',
    deck: 'My thesis on $ORBIO and a Darwinian market for intelligence.',
    description: 'My thesis on $ORBIO and a Darwinian market for intelligence.',
    date: '2026-09-21',
    displayDate: 'Sep 2026',
  },
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
    deck: 'They built the customer before they built the network. The token buys itself with 100% of network revenue. The API has not opened yet.',
    description:
      'STARTER. Dolphin built its customer before it built its network. Uncensored models power Venice for three million users; the token spends 100% of network revenue buying POD on the open market. The API opening is the whole trade.',
    status: 'STARTER',
    date: '2026-07-13',
    displayDate: 'Updated Jul 2026',
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
    slug: 'venice',
    href: '/memos/venice',
    type: 'Memo',
    title: 'Venice AI',
    deck: 'A dual-token AI protocol — VVV for ownership, DIEM for compute — built for autonomous agents, not humans.',
    description:
      'Active conviction. Venice separates the value of the network (VVV) from the price of compute (DIEM), inoculating it against the margin compression collapsing the centralized AI stack. The bet is that the next wave of inference demand comes from agents, and that decentralized, uncensored infrastructure is the only place it can run.',
    status: 'Active conviction',
    date: '2025-11-01',
    displayDate: 'Nov 2025',
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
