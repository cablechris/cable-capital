import Layout from '../components/Layout'
import Link from 'next/link'

// Sample data - replace with your actual data
const latestPost = {
  slug: 'crypto-consumer-behavior',
  title: 'Crypto Through a Consumer Behavior Lens',
  date: 'MARCH 20, 2025',
  content: [
    "After leading insights and analytics at Diageo and spending over a decade in crypto, I've noticed striking parallels between consumer behavior models and crypto market cycles.",
    "The boom-bust cycles of crypto markets follow patterns remarkably similar to traditional consumer adoption curves, just accelerated. Early adopters, the mainstream wave, and laggards all behave according to well-established principles of behavioral economics. What's different is the compressed timeframe and amplified reactions within the crypto space."
  ]
}

const previousPosts = [
  {
    slug: 'dao-governance',
    title: 'The Evolution of DAO Governance',
    date: 'FEBRUARY 15, 2025'
  },
  {
    slug: 'defi-evolution',
    title: 'The Evolution of DeFi: Beyond Yield Farming',
    date: 'JUNE 15, 2023'
  }
]

export default function Home() {
  return (
    <Layout>
      <article>
        <div className="post-date">{latestPost.date}</div>
        <h1>{latestPost.title}</h1>
        {latestPost.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p>
          <Link href={`/blog/${latestPost.slug}`}>
            Continue reading →
          </Link>
        </p>
      </article>
      
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        <h3>Previous Posts</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {previousPosts.map(post => (
            <li key={post.slug} style={{ marginBottom: '1rem' }}>
              <div className="post-date">{post.date}</div>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <p>
          <Link href="/blog">View all posts →</Link>
        </p>
      </div>
    </Layout>
  )
} 