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
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {sortedPosts.map((post: BlogPost) => (
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
          <div className="md:col-span-1 space-y-8">
            <Bio />
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We partner with select organizations to tackle high‑stakes problems at the intersection of strategy, technology, and markets.
              </p>
              <a 
                href="/consulting" 
                className="text-primary hover:text-primary/80 font-medium flex items-center group"
              >
                Learn more
                <svg 
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 