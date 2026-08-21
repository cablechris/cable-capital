import Link from 'next/link'
import V2Shell from '../v2/V2Shell'
import { posts, BlogPost } from '../data/posts'

export const metadata = {
  title: 'Essays',
  description: 'Longer-form thinking outside the memo and thesis format. Notes on markets, technology, philosophy, and the ideas that connect them.',
}

function stripHtml(input: string) {
  return input.replace(/<[^>]*>/g, '')
}

export default function EssaysPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <V2Shell>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Page header */}
        <div className="pb-12 mb-4" style={{ borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
            Longer thoughts
          </div>
          <h1
            className="v2-serif"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
          >
            Essays
          </h1>
          <p className="mt-7 text-[17px] leading-[1.65] max-w-[56ch]" style={{ color: 'var(--v2-ink-2)' }}>
            Longer-form thinking outside the memo and thesis format. Markets, technology,
            philosophy, and the ideas that connect them.
          </p>
        </div>

        {/* List */}
        <div>
          {sortedPosts.map((post: BlogPost) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-12 gap-4 lg:gap-6 py-9 lg:py-11 items-baseline"
              style={{ borderBottom: '1px solid var(--v2-rule)' }}
            >
              <div className="col-span-12 lg:col-span-2">
                <span className="v2-mono text-[11px] tracking-[0.22em]" style={{ color: 'var(--v2-ink-4)' }}>
                  {post.date}
                </span>
              </div>

              <div className="col-span-12 lg:col-span-10">
                <h2
                  className="v2-serif"
                  style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.15rem)', lineHeight: 1.1, letterSpacing: '-0.015em' }}
                >
                  <span className="v2-link-underline pb-1">{post.title}</span>
                </h2>
                <p className="mt-3 text-[15px] leading-[1.65]" style={{ color: 'var(--v2-ink-3)', maxWidth: '58ch' }}>
                  {stripHtml(post.content[0]).slice(0, 220)}
                  {stripHtml(post.content[0]).length > 220 ? '…' : ''}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </V2Shell>
  )
}
