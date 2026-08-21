import Link from 'next/link'
import V2Shell from '../v2/V2Shell'
import { archive } from '../data/archive'

export const metadata = {
  title: 'Theses & Memos',
  description:
    'Structured convictions and deal-by-deal verdicts. Every position I hold with the conditions that would change my mind, plus PASS memos on the deals I did not take.',
}

const statusColor = (s?: string) => {
  if (s === 'PASS') return 'var(--v2-oxblood)'
  if (s === 'MONITOR') return '#9A6A1E'
  if (s === 'STARTER') return '#2E6E86'
  if (s === 'Active conviction') return 'var(--v2-oxblood)'
  return 'var(--v2-ink-4)'
}

export default function ThesesAndMemosPage() {
  const entries = archive.filter((e) => e.type === 'Thesis' || e.type === 'Memo')

  return (
    <V2Shell>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Page header */}
        <div className="pb-12 mb-4" style={{ borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
            The book
          </div>
          <h1
            className="v2-serif"
            style={{
              fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
            }}
          >
            Theses &amp; Memos
          </h1>
          <p className="mt-7 text-[17px] leading-[1.65] max-w-[56ch]" style={{ color: 'var(--v2-ink-2)' }}>
            Structured convictions I hold across sectors, and deal-by-deal verdicts on the
            specific positions I&rsquo;ve worked through. PASS memos published alongside the ones
            I acted on.
          </p>
        </div>

        {/* List */}
        <div>
          {entries.map((e) => (
            <Link
              key={e.slug}
              href={e.href}
              className="group grid grid-cols-12 gap-4 lg:gap-6 py-9 lg:py-11 items-baseline"
              style={{ borderBottom: '1px solid var(--v2-rule)' }}
            >
              <div className="col-span-12 lg:col-span-2 flex lg:block items-baseline gap-4">
                <span className="v2-mono text-[11px] tracking-[0.22em]" style={{ color: 'var(--v2-ink-4)' }}>
                  {e.displayDate}
                </span>
                <span className="v2-mono text-[10px] tracking-[0.18em] uppercase lg:mt-2 lg:block" style={{ color: 'var(--v2-ink-4)' }}>
                  {e.type}
                </span>
              </div>

              <div className="col-span-12 lg:col-span-8">
                <h2
                  className="v2-serif"
                  style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.35rem)', lineHeight: 1.08, letterSpacing: '-0.015em' }}
                >
                  <span className="v2-link-underline pb-1">{e.title}</span>
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: 'var(--v2-ink-3)', maxWidth: '52ch' }}>
                  {e.deck}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-2 lg:text-right">
                {e.status && (
                  <span className="v2-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: statusColor(e.status) }}>
                    {e.status}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </V2Shell>
  )
}
