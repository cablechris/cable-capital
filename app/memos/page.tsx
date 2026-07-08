import Link from 'next/link'
import V2Shell from '../v2/V2Shell'

export const metadata = {
  title: 'Memos',
  description: 'Deal-by-deal analysis with explicit verdicts. PASS, MONITOR, WATCH. Pass memos published alongside the ones I acted on.',
}

const memos = [
  {
    number: '03',
    slug: 'panthalassa',
    title: 'Panthalassa',
    deck: 'A wave-powered ocean data center Thiel just backed near USD 1B, offered to me at USD 1.7B pre. The platform may be worth building. The compute business on the label is its weakest asset, and the cargo it carries is racing to zero.',
    date: 'July 2026',
    verdict: 'PASS',
    tags: ['Wave Energy', 'Ocean Compute', 'Private Round'],
  },
  {
    number: '02',
    slug: 'dolphin-network',
    title: 'Dolphin Network',
    deck: 'Distributed inference, narrowed. Real arbitrage in audio and small LLMs, a marginal edge in image, a fading thesis in video. The bet is workload economics, not sharding.',
    date: 'May 2026',
    verdict: 'MONITOR',
    tags: ['Decentralized AI', 'Pre-Token', 'Inference'],
  },
  {
    number: '01',
    slug: 'tenstorrent',
    title: 'Tenstorrent',
    deck: 'The company is real. The security is not clean enough. A late-stage convertible into a credible AI inference and IP company, via a Hiive SPV with opaque conversion terms.',
    date: 'May 2026',
    verdict: 'PASS',
    tags: ['AI Silicon', 'Convertible Note', 'Hiive SPV'],
  },
]

const verdictColor = (v: string) => {
  if (v === 'PASS') return 'var(--v2-oxblood)'
  if (v === 'MONITOR') return '#9A6A1E'
  return '#3B6B4A'
}

export default function MemosPage() {
  return (
    <V2Shell>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Page header */}
        <div className="pb-12 mb-4" style={{ borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
            On the record
          </div>
          <h1
            className="v2-serif"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
          >
            Memos
          </h1>
          <p className="mt-7 text-[17px] leading-[1.65] max-w-[56ch]" style={{ color: 'var(--v2-ink-2)' }}>
            One deal, worked end to end, down to a verdict I'm willing to be judged on. PASS,
            MONITOR, WATCH. Pass memos published alongside the ones I acted on.
          </p>
        </div>

        {/* List */}
        <div>
          {memos.map((m) => (
            <Link
              key={m.slug}
              href={`/memos/${m.slug}`}
              className="group grid grid-cols-12 gap-4 lg:gap-6 py-9 lg:py-11 items-baseline"
              style={{ borderBottom: '1px solid var(--v2-rule)' }}
            >
              <div className="col-span-12 lg:col-span-2 flex lg:block items-baseline gap-4">
                <span className="v2-mono text-[11px] tracking-[0.22em]" style={{ color: 'var(--v2-ink-4)' }}>
                  No. {m.number}
                </span>
                <span className="v2-mono text-[10px] tracking-[0.18em] uppercase lg:mt-2 lg:block" style={{ color: 'var(--v2-ink-4)' }}>
                  {m.date}
                </span>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <div className="v2-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: verdictColor(m.verdict) }}>
                  {m.verdict}
                </div>
                <h2
                  className="v2-serif"
                  style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.35rem)', lineHeight: 1.08, letterSpacing: '-0.015em' }}
                >
                  <span className="v2-link-underline pb-1">{m.title}</span>
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: 'var(--v2-ink-3)', maxWidth: '52ch' }}>
                  {m.deck}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
                {m.tags.map((tag) => (
                  <span
                    key={tag}
                    className="v2-mono text-[10px] tracking-[0.12em] px-2 py-1"
                    style={{ color: 'var(--v2-ink-3)', border: '1px solid var(--v2-rule-strong)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </V2Shell>
  )
}
