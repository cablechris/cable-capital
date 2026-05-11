"use client";

import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const theses = [
  {
    number: '04',
    slug: 'photonic-interconnect',
    title: 'Photonic Interconnect',
    deck: 'Light as the structural successor to copper in AI scale-up.',
    date: 'May 2026',
    status: 'Active conviction',
    positions: ['COHR', 'LITE', 'GLW', 'FN'],
  },
];

export default function ThesisPage() {
  return (
    <Layout>
      <div className="py-16">
        <div className="mb-12 border-b border-gray-100 pb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Thesis</h1>
          <p className="text-gray-500 text-sm max-w-xl">
            Structured investment theses with explicit positions, kill conditions, and monitoring cadences.
          </p>
        </div>

        <div className="space-y-0">
          {theses.map((thesis) => (
            <article key={thesis.slug} className="border-b border-gray-100 py-10 group">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">№ {thesis.number}</span>
                <span className="text-xs text-gray-400">{thesis.date}</span>
                <span className="text-xs font-mono text-primary tracking-wide uppercase">{thesis.status}</span>
              </div>

              <Link href={`/thesis/${thesis.slug}`}>
                <h2 className="text-2xl font-serif text-gray-900 group-hover:text-primary transition-colors mb-2 leading-snug">
                  {thesis.title}
                </h2>
              </Link>

              <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-2xl">
                {thesis.deck}
              </p>

              <div className="flex items-center gap-3">
                {thesis.positions.map((ticker) => (
                  <span
                    key={ticker}
                    className="text-xs font-mono text-gray-600 border border-gray-200 px-2 py-0.5 rounded-sm"
                  >
                    {ticker}
                  </span>
                ))}
                <Link
                  href={`/thesis/${thesis.slug}`}
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
