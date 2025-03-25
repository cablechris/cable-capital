import Layout from '../../components/Layout'
import Link from 'next/link'
import { fetchTweetsAsBlogPosts } from '../../utils/twitter'

// Static posts that will always be available
const staticPosts = [
  {
    slug: 'vibe-coding-revolution',
    title: 'The Vibe Coding Revolution',
    date: 'MARCH 25, 2024'
  },
  {
    slug: 'market-cycles',
    title: 'Navigating Crypto Market Cycles',
    date: 'NOVEMBER 10, 2023'
  },
  {
    slug: 'defi-evolution',
    title: 'The Evolution of DeFi: Beyond Yield Farming',
    date: 'JUNE 15, 2023'
  },
  {
    slug: 'dao-governance',
    title: 'The Evolution of DAO Governance',
    date: 'FEBRUARY 15, 2023'
  },
  {
    slug: 'crypto-consumer-behavior',
    title: 'Crypto Through a Consumer Behavior Lens',
    date: 'JANUARY 20, 2023'
  }
];

// Fetch both static and Twitter posts
async function getAllPosts() {
  try {
    // Fetch Twitter posts
    const twitterPosts = await fetchTweetsAsBlogPosts('cablechris');

    // Combine and sort all posts by date
    return [...staticPosts, ...twitterPosts].sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );
  } catch (error) {
    console.error('Error fetching all posts:', error);
    // Return only static posts if Twitter fetch fails
    return staticPosts;
  }
}

export default async function Blog() {
  const posts = await getAllPosts();
  
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
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
                {post.originalUrl && (
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}>
                    (<a href={post.originalUrl} target="_blank" rel="noopener noreferrer">View on X</a>)
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  )
} 