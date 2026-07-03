import Link from 'next/link'
import V2Shell from '../v2/V2Shell'

const theses = [
  {
    number: '04',
    slug: 'photonic-interconnect',
    title: 'Photonic Interconnect',
    deck: 'Light as the structural successor to copper in AI scale-up.',
    date: 'May 2026',
    status: 'Active conviction',
    positions: ['COHR', 'LITE', 'GLW', 'FN'],
  },
]

export default function ThesisPage() {
  return (
    <V2Shell>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Page header */}
        <div className="pb-12 mb-4" style={{ borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
            Pre-registered
          </div>
          <h1
            className="v2-serif"
            style={{
              fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
            }}
          >
            Theses
          </h1>
          <p className="mt-7 text-[17px] leading-[1.65] max-w-[56ch]" style={{ color: 'var(--v2-ink-2)' }}>
            Structured bets, each with explicit positions, the conditions that would prove me
            wrong, and a timestamp. Written before they resolve, so the record can grade them.
          </p>
        </div>

        {/* List */}
        <div>
          {theses.map((t) => (
            <Link
              key={t.slug}
              href={`/thesis/${t.slug}`}
              className="group grid grid-cols-12 gap-4 lg:gap-6 py-9 lg:py-11 items-baseline"
              style={{ borderBottom: '1px solid var(--v2-rule)' }}
            >
              <div className="col-span-12 lg:col-span-2 flex lg:block items-baseline gap-4">
                <span className="v2-mono text-[11px] tracking-[0.22em]" style={{ color: 'var(--v2-ink-4)' }}>
                  No. {t.number}
                </span>
                <span className="v2-mono text-[10px] tracking-[0.18em] uppercase lg:mt-2 lg:block" style={{ color: 'var(--v2-ink-4)' }}>
                  {t.date}
                </span>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <div className="v2-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--v2-oxblood)' }}>
                  {t.status}
                </div>
                <h2
                  className="v2-serif"
                  style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.35rem)', lineHeight: 1.08, letterSpacing: '-0.015em' }}
                >
                  <span className="v2-link-underline pb-1">{t.title}</span>
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: 'var(--v2-ink-3)', maxWidth: '46ch' }}>
                  {t.deck}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
                {t.positions.map((ticker) => (
                  <span
                    key={ticker}
                    className="v2-mono text-[10px] tracking-[0.12em] px-2 py-1"
                    style={{ color: 'var(--v2-ink-3)', border: '1px solid var(--v2-rule-strong)' }}
                  >
                    {ticker}
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
