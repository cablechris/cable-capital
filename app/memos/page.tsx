"use client";

import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const memos = [
  {
    number: '01',
    slug: 'tenstorrent',
    title: 'Tenstorrent',
    deck: 'The company is real. The security is not clean enough. A late-stage convertible into a credible AI inference and IP company, via a Hiive SPV with opaque conversion terms and undisclosed change-of-control treatment.',
    date: 'May 2026',
    verdict: 'PASS',
    tags: ['AI Silicon', 'Convertible Note', 'Hiive SPV'],
  },
];

export default function MemosPage() {
  return (
    <Layout>
      <div className="py-16">
        <div className="mb-12 border-b border-gray-100 pb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Investment Memos</h1>
          <p className="text-gray-500 text-sm max-w-xl">
            Deal-by-deal analysis with explicit verdicts. Pass memos included alongside active positions.
          </p>
        </div>

        <div className="space-y-0">
          {memos.map((memo) => (
            <article key={memo.slug} className="border-b border-gray-100 py-10 group">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">№ {memo.number}</span>
                <span className="text-xs text-gray-400">{memo.date}</span>
                <span className={`text-xs font-mono tracking-wide uppercase ${
                  memo.verdict === 'PASS' ? 'text-red-700' : 'text-emerald-700'
                }`}>
                  {memo.verdict}
                </span>
              </div>

              <Link href={`/memos/${memo.slug}`}>
                <h2 className="text-2xl font-serif text-gray-900 group-hover:text-primary transition-colors mb-2 leading-snug">
                  {memo.title}
                </h2>
              </Link>

              <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-2xl">
                {memo.deck}
              </p>

              <div className="flex items-center gap-3">
                {memo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-gray-600 border border-gray-200 px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
                <Link
                  href={`/memos/${memo.slug}`}
                  className="ml-auto text-xs font-mono text-gray-400 hover:text-primary transition-colors tracking-wide uppercase"
                >
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
