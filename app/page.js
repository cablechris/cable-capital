import Layout from './components/Layout'
import Link from 'next/link'
import { posts } from './data/posts'

export default function Home() {
  // Sort posts by date in reverse chronological order (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Get the latest post
  const latestPost = sortedPosts[0];
  
  // Get the next few posts for the "Previous Posts" section
  const previousPosts = sortedPosts.slice(1, 4);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{latestPost.title}</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-600 text-sm mb-4">{latestPost.date}</div>
          
          <div className="space-y-6">
            {latestPost.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          {/* Previous Posts */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-8">Previous Posts</h2>
            <div className="space-y-8">
              {previousPosts.map(post => (
                <article key={post.slug} className="post-preview">
                  <div className="text-gray-600 text-sm mb-2">{post.date}</div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-12">
              <Link 
                href="/blog"
                className="text-primary hover:text-primary/80 font-medium"
              >
                View all posts →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 