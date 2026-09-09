import Link from 'next/link'
import V2Shell from '../v2/V2Shell'
import { archive, ArchiveType } from '../data/archive'
import { posts } from '../data/posts'

export const metadata = {
  title: 'Other research & writing',
  description:
    'Everything outside the theses and memos: original research at the frontier, longer-form essays, and the barbell manifesto that anchors the whole thing.',
}

type ResearchRow = {
  key: string
  href: string
  type: ArchiveType
  title: string
  deck: string
  date: string
  displayDate: string
}

function stripHtml(input: string) {
  return input.replace(/<[^>]*>/g, '')
}

function parseFriendlyDate(d: string): Date {
  const parsed = new Date(d)
  return isNaN(parsed.getTime()) ? new Date(0) : parsed
}

function monthYear(d: Date): string {
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}

export default function ResearchAndWritingPage() {
  const fromArchive: ResearchRow[] = archive
    .filter((e) => e.type === 'Research' || e.type === 'Manifesto')
    .map((e) => ({
      key: e.slug,
      href: e.href,
      type: e.type,
      title: e.title,
      deck: e.deck,
      date: e.date,
      displayDate: e.displayDate,
    }))

  const barbell: ResearchRow = {
    key: 'barbell',
    href: '/barbell',
    type: 'Manifesto',
    title: 'Avoiding the Middle',
    deck: 'Concentrate at the extremes. Avoid the middle. Life’s biggest returns compound at the tails; the comfortable middle is the riskiest place to stand.',
    date: '2024-11-18',
    displayDate: 'Nov 2024',
  }

  const fromPosts: ResearchRow[] = posts.map((p) => {
    const d = parseFriendlyDate(p.date)
    return {
      key: `essay-${p.slug}`,
      href: `/blog/${p.slug}`,
      type: 'Essay' as ArchiveType,
      title: p.title,
      deck: stripHtml(p.content[0]).slice(0, 200) + (stripHtml(p.content[0]).length > 200 ? '…' : ''),
      date: d.toISOString().slice(0, 10),
      displayDate: monthYear(d),
    }
  })

  const entries: ResearchRow[] = [...fromArchive, barbell, ...fromPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <V2Shell>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Page header */}
        <div className="pb-12 mb-4" style={{ borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
            The archive
          </div>
          <h1
            className="v2-serif"
            style={{
              fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
            }}
          >
            Other research &amp; writing
          </h1>
          <p className="mt-7 text-[17px] leading-[1.65] max-w-[56ch]" style={{ color: 'var(--v2-ink-2)' }}>
            Everything outside the theses and memos. Original research at the frontier,
            longer-form essays, and the manifesto that anchors the whole thing.
          </p>
        </div>

        {/* List */}
        <div>
          {entries.map((e) => (
            <Link
              key={e.key}
              href={e.href}
              className="group grid grid-cols-12 gap-4 lg:gap-6 py-9 lg:py-11 items-baseline"
              style={{ borderBottom: '1px solid var(--v2-rule)' }}
            >
              <div className="col-span-12 lg:col-span-2 flex lg:block items-baseline gap-4">
                <span className="v2-mono text-[10px] tracking-[0.18em] uppercase lg:mt-2 lg:block" style={{ color: 'var(--v2-ink-4)' }}>
                  {e.type}
                </span>
              </div>

              <div className="col-span-12 lg:col-span-10">
                <h2
                  className="v2-serif"
                  style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.15rem)', lineHeight: 1.1, letterSpacing: '-0.015em' }}
                >
                  <span className="v2-link-underline pb-1">{e.title}</span>
                </h2>
                <p className="mt-3 text-[15px] leading-[1.65]" style={{ color: 'var(--v2-ink-3)', maxWidth: '58ch' }}>
                  {e.deck}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </V2Shell>
  )
}
