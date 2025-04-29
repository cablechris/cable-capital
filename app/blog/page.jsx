'use client';

import Layout from '../components/Layout'
import Link from 'next/link'
import { posts } from '../data/posts'

export default function Blog() {
  // Sort posts by date in reverse chronological order
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-12">
          {sortedPosts.map(post => (
            <article key={post.slug} className="post-preview">
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-bold mb-2 post-title group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <div className="text-gray-600 text-sm mb-3">{post.date}</div>
                <p 
                  className="text-gray-700 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.content[0] }}
                />
              </Link>
            </article>
          ))}
        </div>

        <style jsx>{`
          .post-preview {
            padding-bottom: 2rem;
            border-bottom: 1px solid #eaeaea;
          }

          .post-preview:last-child {
            border-bottom: none;
          }
        `}</style>
      </div>
    </Layout>
  )
} 