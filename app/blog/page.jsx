import Layout from '../../components/Layout'
import Link from 'next/link'

// Sample data - replace with your actual data
const posts = [
  {
    slug: 'crypto-consumer-behavior',
    title: 'Crypto Through a Consumer Behavior Lens',
    date: 'MARCH 20, 2025'
  },
  {
    slug: 'dao-governance',
    title: 'The Evolution of DAO Governance',
    date: 'FEBRUARY 15, 2025'
  },
  {
    slug: 'defi-evolution',
    title: 'The Evolution of DeFi: Beyond Yield Farming',
    date: 'JUNE 15, 2023'
  },
  {
    slug: 'market-cycles',
    title: 'Navigating Crypto Market Cycles',
    date: 'NOVEMBER 10, 2024'
  }
]

export default function Blog() {
  // Group posts by year
  const postsByYear = {}
  posts.forEach(post => {
    const year = post.date.split(', ')[1] || post.date.split(' ')[2]
    if (!postsByYear[year]) {
      postsByYear[year] = []
    }
    postsByYear[year].push(post)
  })

  return (
    <Layout>
      <h1>Blog</h1>
      
      {Object.entries(postsByYear).map(([year, yearPosts]) => (
        <div key={year} style={{ marginBottom: '2rem' }}>
          <h2>{year}</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {yearPosts.map(post => (
              <li key={post.slug} style={{ marginBottom: '1rem' }}>
                <div className="post-date">{post.date.split(', ')[0] || post.date}</div>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  )
} 