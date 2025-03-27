'use client';

import Layout from '../../components/Layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <div className="about-content">
        <h1>About</h1>
        <p>
          I'm a crypto investor and founder focused on early-stage protocols, 
          high-throughput blockchains, and the intersection of crypto and AI.
        </p>
        
        <p>
          Having founded multiple Investment DAOs including Flamingo, Neon, Ready Player, 
          and Zero, I bring deep experience in both traditional finance and the emerging 
          world of decentralized systems.
        </p>

        <p>
          When not exploring the frontiers of web3, you'll find me practicing calisthenics,
          foiling across the water, or diving deep into the latest developments in AI.
        </p>

        <p>
          I'm currently learning to code through Cursor, Vercel, and Claude - embracing
          the journey from traditional finance to hands-on technical development.
        </p>
      </div>

      <style jsx>{`
        .about-content {
          max-width: 720px;
          margin: 2rem auto;
        }

        .about-content h1 {
          margin-bottom: 2rem;
        }

        .about-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
      `}</style>
    </Layout>
  )
} 