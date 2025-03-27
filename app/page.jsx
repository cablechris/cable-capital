'use client';

import Layout from '../components/Layout'
import Link from 'next/link'
import { posts } from './data/posts'

export default function Home() {
  // Sort posts by date in reverse chronological order
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  // Get the latest post
  const latestPost = sortedPosts[0];
  
  // Get the next few posts for the "Previous Posts" section
  const previousPosts = sortedPosts.slice(1, 4);

  return (
    <Layout>
      <article className="prose prose-lg max-w-none">
        <div className="text-sm text-gray-600 uppercase tracking-wider mb-4">
          {latestPost.date}
        </div>
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          {latestPost.title}
        </h1>
        <div className="space-y-6">
          {latestPost.content.map((paragraph, index) => (
            <p key={index} className="text-gray-800 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <Link 
            href={`/blog/${latestPost.slug}`}
            className="text-primary hover:text-primary/80 font-medium"
          >
            Continue reading →
          </Link>
        </div>
      </article>
      
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Previous Posts</h2>
        <div className="space-y-8">
          {previousPosts.map(post => (
            <article key={post.slug} className="group">
              <div className="text-sm text-gray-600 uppercase tracking-wider mb-2">
                {post.date}
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors"
              >
                {post.title}
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

      <style jsx>{`
        :global(.prose) {
          max-width: none;
        }
        :global(.prose p) {
          margin: 1.5rem 0;
        }
        :global(.prose h1) {
          margin: 0 0 2rem 0;
        }
      `}</style>
    </Layout>
  )
} 