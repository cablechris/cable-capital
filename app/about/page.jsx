'use client';

import Layout from '../components/Layout'
import Image from 'next/image'

export default function About() {
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
  )
} 