'use client';

import Layout from '../components/Layout'
import Link from 'next/link'
import { papers } from '../data/papers'

export default function Papers() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Papers</h1>
        
        <div className="space-y-8">
          {papers?.map((paper) => (
            <article key={paper.id} className="group">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">
                <Link href={paper.url}>
                  {paper.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{paper.description}</p>
              <div className="text-sm text-gray-500">{paper.date}</div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
} 