'use client';

import Layout from '../../../components/Layout'
import Link from 'next/link'
import { posts } from '../../data/posts'

export default function BlogPost({ params }) {
  const { slug } = params
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <article className="prose prose-lg">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <div className="text-gray-600 text-sm mb-8">{post.date}</div>
        
        <div className="space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← All Posts
          </Link>
        </div>
      </article>
    </Layout>
  )
} 