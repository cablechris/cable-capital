"use client";

import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { posts, BlogPost } from '../data/posts';

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Layout>
      <div className="py-16">
        <div className="mb-12 border-b border-gray-100 pb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Writing</h1>
          <p className="text-gray-500 text-sm max-w-xl">
            Notes on markets, supply chains, technology, and the ideas that connect them.
          </p>
        </div>

        <div className="space-y-0">
          {sortedPosts.map((post: BlogPost) => (
            <article key={post.slug} className="border-b border-gray-100 py-8 group">
              <p className="text-xs text-gray-400 mb-2">{post.date}</p>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                {post.content[0].replace(/<[^>]*>/g, '')}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
