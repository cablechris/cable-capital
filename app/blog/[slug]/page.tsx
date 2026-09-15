import { posts } from '../../data/posts'
import JsonLd from '../../components/JsonLd'
import { articleStructuredData } from '../../lib/structured-data'
import V2Shell from '../../v2/V2Shell'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Essay not found' }
  const stripped = post.content[0].replace(/<[^>]*>/g, '').slice(0, 200)
  return {
    title: post.title,
    description: stripped,
    openGraph: {
      title: post.title,
      description: stripped,
      type: 'article',
      url: `https://cable.capital/blog/${post.slug}`,
    },
  }
}

export default function EssayPage({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) notFound()

  return (
    <V2Shell>
      <JsonLd
        data={articleStructuredData({
          path: `/blog/${post.slug}`,
          title: post.title,
          description: post.content[0].replace(/<[^>]*>/g, '').slice(0, 200),
          datePublished: new Date(post.date).toISOString().slice(0, 10),
          section: 'Essays',
          type: 'BlogPosting',
        })}
      />
      <article className="max-w-[720px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        <Link
          href="/research"
          className="v2-mono text-[11px] tracking-[0.22em] uppercase v2-link-underline pb-1"
          style={{ color: 'var(--v2-oxblood)' }}
        >
          &larr; Other research &amp; writing
        </Link>

        <div className="mt-10">
          <p className="v2-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: 'var(--v2-ink-4)' }}>
            {post.date}
          </p>
          <h1
            className="v2-serif mt-4"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>
        </div>

        <div className="mt-14 space-y-6">
          {post.content.map((para, i) => (
            <p
              key={i}
              className="text-[17px] leading-[1.75]"
              style={{ color: 'var(--v2-ink-2)' }}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>
      </article>
    </V2Shell>
  )
}
