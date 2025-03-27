"use client"

import React from 'react';

export default function Bio() {
  return (
    <aside className="bio">
      <div className="bio-section">
        <h3>Investment Focus</h3>
        <ul>
          <li>Early-stage protocols</li>
          <li>High-throughput blockchains</li>
          <li>Intersection of Crypto x AI</li>
        </ul>
      </div>
      
      <div className="bio-section">
        <h3>Interests</h3>
        <ul>
          <li>Calisthenics</li>
          <li>Foiling</li>
          <li>AI</li>
        </ul>
      </div>
      
      <div className="bio-section">
        <h3>Coding Experience</h3>
        <p>Complete novice - learning via Cursor, Vercel & Claude</p>
      </div>
      
      <style jsx>{`
        .bio {
          border-bottom: 1px solid var(--border);
          padding-bottom: 2rem;
          margin-bottom: 3rem;
        }
        
        .bio-section {
          margin-bottom: 1.5rem;
        }
        
        .bio-section:last-child {
          margin-bottom: 0;
        }
        
        .bio h3 {
          color: var(--primary);
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .bio ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .bio li {
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }
        
        .bio p {
          color: var(--foreground);
          margin: 0;
        }
      `}</style>
    </aside>
  );
} 