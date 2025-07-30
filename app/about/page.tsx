"use client";

import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { PageProps } from '@/lib/types';

export default function About({ searchParams }: PageProps) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <div className="about-content">
          <h2 className="section-heading first-section">Building at the Edges</h2>
          <p>
            I invest in crypto because I believe in decentralization. While working in traditional finance, 
            I discovered how a small group in DC effectively controlled global markets. This revelation led 
            me down a rabbit hole into Bitcoin, where I was immediately struck by its elegant design and 
            liberating ethos.
          </p>

          <h2 className="section-heading">Life Philosophy</h2>
          <p>
            I avoid the middle. In investing, in fitness, in learning. High-intensity calisthenics and 
            morning walks with my kids by the water. Deep work on frontier tech balanced with digital 
            silence. Few half-measures.
          </p>

          <h2 className="section-heading">Current Chapter</h2>
          <p>
            Investing remains my focus, but I'm now building alongside it. Getting my reps in with code 
            and treating these incredible tools as extensions of thought. Scratching my creative itch with 
            projects that push boundaries. Drawn to high-throughput blockchains and the intersections of crypto x AI.
          </p>

          <p>
            The future is here, it's just not equally distributed.
          </p>

          <h2 className="section-heading">Consulting</h2>
          <p>
            Through CPC Consulting LLC, we partner with select organizations to tackle high‑stakes problems 
            at the intersection of strategy, technology, and markets. Drawing on experience in crypto, 
            analytics, and complex deal structuring, we help leaders turn complexity into clarity and 
            clarity into results.
          </p>
          <p>
            <a href="/consulting" className="text-primary hover:text-primary/80 font-medium inline-flex items-center group">
              Learn more about our consulting services
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
          </p>

          <p className="mt-8 text-lg font-semibold text-primary">Contact me @ <a href="mailto:info@cable.capital" className="underline">info@cable.capital</a></p>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          margin: 0 auto;
        }

        .section-heading {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.75rem;
          font-weight: 600;
          color: #557A33;
        }

        .first-section {
          margin-top: 0;
        }

        .about-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-size: 1.1rem;
          color: #444;
        }
      `}</style>
    </Layout>
  );
} 