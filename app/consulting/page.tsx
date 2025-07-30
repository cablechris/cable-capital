"use client";

import React from 'react';
import Layout from '../components/Layout';

export default function ConsultingPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
                       <div className="mb-10">
                 <h1 className="text-3xl font-extrabold text-primary mb-4">CPC Consulting LLC</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-6">
            Trusted by high‑growth startups, seasoned investors, and market leaders navigating complex strategic challenges.
          </p>
                           <p className="text-lg text-gray-600 dark:text-gray-300">
                   At CPC Consulting LLC, we partner with select organizations to tackle high‑stakes problems and unlock growth at the intersection of strategy, technology, and markets. With leadership rooted in founding Flamingo DAO and backgrounds spanning crypto, insights and analytics, investment banking, and complex deal structuring, we bring both deep expertise and a global network of investors, operators, and innovators—leveraging these relationships thoughtfully to deliver results.
                 </p>
        </div>
        
        <section className="mt-12">
          <h2 className="text-xl font-bold text-primary mb-6 border-b border-primary/20 inline-block pb-1">Areas of Focus</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <span className="font-medium">Strategy & Growth</span> – Transformational go‑to‑market strategies, commercial roadmaps, and market entry planning.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <span className="font-medium">Marketing & Analytics</span> – Data‑driven insights, performance analytics, and decision frameworks that accelerate growth.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <span className="font-medium">Crypto Advisory</span> – Practical strategy and execution for crypto‑enabled businesses.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <span className="font-medium">Investment & Market Intelligence</span> – Sharp, high‑impact analysis that drives capital allocation and competitive advantage.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <span className="font-medium">Complex Deal Structuring</span> – From financing to partnerships, creative solutions for high‑value transactions.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <span className="font-medium">Technical Due Diligence</span> – In‑depth evaluations to de‑risk investments and strategic initiatives.
              </div>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-primary mb-6 border-b border-primary/20 inline-block pb-1">Engagement Model</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We work on a selective, high‑focus basis, taking on only a small number of clients at any time. Engagements range from strategic advisory mandates to hands‑on consulting, ensuring every partnership gets the depth, rigor, and senior attention it deserves.
          </p>
        </section>

                       <section className="mt-12">
                 <h2 className="text-xl font-bold text-primary mb-6 border-b border-primary/20 inline-block pb-1">References</h2>
                 <p className="text-gray-600 dark:text-gray-300">
                   We've been fortunate to work alongside founders, executives, and investors who expect and receive exceptional outcomes. References and case studies are available upon request, including examples of transformative growth strategies, successful capital raises, and complex deal executions.
                 </p>
               </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-primary mb-6 border-b border-primary/20 inline-block pb-1">Let's Build What's Next</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              If you're facing a complex challenge or see an untapped opportunity, let's talk. Share a brief overview of your project or ambition, and we'll explore how CPC Consulting LLC can help you break through.
            </p>
            <p>
              <a 
                href="mailto:info@cable.capital" 
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                info@cable.capital
              </a>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
} 