import Link from 'next/link'
import V2Shell from '../v2/V2Shell'
import { papers, Paper } from '../data/papers'

export const metadata = {
  title: 'Research',
  description: 'Original work at the frontier, from bioelectric morphogenesis to how coordination emerges in artificial systems.',
}

export default function Papers() {
  return (
    <V2Shell>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Page header */}
        <div className="pb-12 mb-4" style={{ borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
            Curiosity
          </div>
          <h1
            className="v2-serif"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
          >
            Research
          </h1>
          <p className="mt-7 text-[17px] leading-[1.65] max-w-[56ch]" style={{ color: 'var(--v2-ink-2)' }}>
            Weird and wonderful rabbit holes I find myself in. Original work at the frontier,
            from bioelectric morphogenesis to how coordination emerges in artificial systems.
          </p>
        </div>

        {/* List */}
        <div>
          {papers.map((paper: Paper) => (
            <Link
              key={paper.id}
              href={paper.url}
              className="group grid grid-cols-12 gap-4 lg:gap-6 py-9 lg:py-11 items-baseline"
              style={{ borderBottom: '1px solid var(--v2-rule)' }}
            >
              <div className="col-span-12 lg:col-span-2">
                <span className="v2-mono text-[11px] tracking-[0.22em]" style={{ color: 'var(--v2-ink-4)' }}>
                  {paper.date}
                </span>
              </div>

              <div className="col-span-12 lg:col-span-10">
                <h2
                  className="v2-serif"
                  style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.35rem)', lineHeight: 1.12, letterSpacing: '-0.015em', maxWidth: '24ch' }}
                >
                  <span className="v2-link-underline pb-1">{paper.title}</span>
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: 'var(--v2-ink-3)', maxWidth: '58ch' }}>
                  {paper.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </V2Shell>
  )
}
