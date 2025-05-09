"use client";

import React from 'react';
import Layout from '../components/Layout';
import Bio from '../components/content/Bio';
import { posts, BlogPost } from '../data/posts';

interface PageProps {
  params: Record<string, never>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function BlogPage({ searchParams }: PageProps) {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {posts.map((post: BlogPost) => (
              <article key={post.slug} className="post-preview border-b pb-6 mb-6">
                <div className="text-gray-600 text-sm mb-2">{post.date}</div>
                <a href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors mb-2">
                    {post.title}
                  </h2>
                </a>
                <p className="text-gray-800 leading-relaxed">
                  {post.content[0]}
                </p>
              </article>
            ))}
          </div>
          <div className="md:col-span-1">
            <Bio />
          </div>
        </div>
      </div>
    </Layout>
  );
} 