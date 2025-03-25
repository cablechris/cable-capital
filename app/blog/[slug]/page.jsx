import Layout from '../../../components/Layout'
import Link from 'next/link'

// Sample data - replace with your actual data
const posts = {
  'vibe-coding-revolution': {
    title: 'The Vibe Coding Revolution',
    date: 'MARCH 25, 2024',
    content: [
      "I stumbled across a \"chaos coding\" class today during lunch. Not just any class—one taught by my good friend Aaron Wright, who I recently spent time with at ETH Denver.",
      "Aaron is probably within the top 1% of Cursor users globally. When someone at that level offers to share their knowledge, you show up. Despite being a lawyer by trade, he's absolutely obsessed with the platform. When he announced he was running a showcase class, I had to join.",
      "Within 45 minutes, we had collectively vibe coded an entire 3D world on Cursor.",
      "Five months ago, I first tried Cursor as a complete non-coder. I managed to create a rudimentary snake game, but the process was painful—hours of debugging for minimal progress.",
      "But something fundamental has changed. The debugging process still exists, but what previously took hours now happens in minutes. The system has gotten significantly more intelligent, more responsive.",
      "This is how technology actually progresses. Not in smooth curves economists draw on graphs, but in sudden, jarring leaps that reconfigure what's possible. One day something is difficult; the next, it's trivially easy.",
      "Vibe coding isn't just another programming trend. It's a fundamental rethinking of who can create software and how quickly ideas can materialize.",
      "The best software tools don't just make existing programmers more efficient—they expand who can program in the first place.",
      "The barriers between imagination and implementation are collapsing.",
      "The time is now."
    ]
  },
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

// Make the component async
export default function BlogPost({ params }) {
  const { slug } = params;
  
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
      <article className="blog-post">
        <h1>{post.title}</h1>
        <div className="post-date">{post.date}</div>
        
        <div className="post-content">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
      
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/blog">← All Posts</Link>
      </div>
    </Layout>
  )
} 