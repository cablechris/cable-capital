"use client"

import React from 'react';
import { BioSection } from '@/lib/types';

export default function Bio() {
  const sections: BioSection[] = [
    {
      title: "Investment Focus",
      items: [
        "Early-stage protocols",
        "High-throughput blockchains",
        "Intersection of Crypto x AI"
      ]
    },
    {
      title: "Interests",
      items: [
        "Calisthenics",
        "Foiling",
        "AI"
      ]
    },
    {
      title: "Coding Experience",
      description: "Complete novice - learning via Cursor, Vercel & Claude"
    }
  ];

  return (
    <aside className="bio">
      {sections.map((section) => (
        <div key={section.title} className="bio-section">
          <h3>{section.title}</h3>
          {section.items ? (
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{section.description}</p>
          )}
        </div>
      ))}
      
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