'use client';

import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { posts } from '../../data/posts'

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const loadPost = async () => {
      const { slug } = params
      const foundPost = posts.find(p => p.slug === slug)
      setPost(foundPost)
      setLoading(false)
    }
    
    loadPost()
  }, [params])
  
  if (loading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Loading...</h1>
        </div>
      </Layout>
    )
  }
  
  if (!post) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:text-primary/80">
            ← Back to Blog
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article>
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <div className="text-gray-600 text-sm mb-8">{post.date}</div>
          
          <div className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link href="/blog" className="text-primary hover:text-primary/80">
              ← All Posts
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  )
} 