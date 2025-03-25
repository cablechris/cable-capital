import Layout from '../../../components/Layout'
import Link from 'next/link'

// Sample data - replace with your actual data
const posts = {
  'crypto-consumer-behavior': {
    title: 'Crypto Through a Consumer Behavior Lens',
    date: 'MARCH 20, 2025',
    content: [
      "After leading insights and analytics at Diageo and spending over a decade in crypto, I've noticed striking parallels between consumer behavior models and crypto market cycles.",
      "The boom-bust cycles of crypto markets follow patterns remarkably similar to traditional consumer adoption curves, just accelerated. Early adopters, the mainstream wave, and laggards all behave according to well-established principles of behavioral economics. What's different is the compressed timeframe and amplified reactions within the crypto space.",
      "Consider the classic Rogers' Diffusion of Innovation curve. In traditional markets, this adoption process might take years or decades. In crypto, we see the same pattern compressed into months or a few years at most."
    ]
  },
  'dao-governance': {
    title: 'The Evolution of DAO Governance',
    date: 'FEBRUARY 15, 2025',
    content: [
      "Having founded multiple Investment DAOs including Flamingo, Neon, Ready Player, and Zero, I've witnessed the evolution of governance models firsthand.",
      "When we launched Flamingo in 2019, the DAO landscape was still in its infancy. Our governance model was idealistic - one token, one vote, with all major decisions requiring community approval."
    ]
  }
}

export default function Post({ params }) {
  const { slug } = params
  const post = posts[slug]
  
  if (!post) {
    return (
      <Layout>
        <h1>Post not found</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <article>
        <div className="post-date">{post.date}</div>
        <h1>{post.title}</h1>
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
      
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/blog">← All Posts</Link>
      </div>
    </Layout>
  )
} 