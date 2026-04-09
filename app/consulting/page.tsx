"use client";

import React from 'react';
import Layout from '../components/Layout';

export default function ConsultingPage() {
  return (
    <Layout>
      <div className="py-20">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Consulting</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
            Strategic advisory for complex problems.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            CPC Consulting LLC partners with a select number of organisations on high-stakes
            challenges at the intersection of strategy, markets, and technology.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Who we are */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We bring experience across investment markets, complex deal structuring,
            strategy, and analytics — combined with a global network of operators,
            investors, and founders built over more than a decade of working at the
            frontier of emerging markets and new technologies.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our edge is in seeing around corners: identifying second-order effects,
            mapping risks that aren't yet visible, and building strategies that hold
            when conditions change.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Areas of focus */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-10">Areas of Focus</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Strategy & Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Go-to-market strategy, commercial roadmaps, and market entry planning
                for high-growth organisations navigating new markets or competitive inflections.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Investment & Market Intelligence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sharp, high-impact analysis that drives capital allocation decisions
                and competitive positioning in rapidly evolving markets.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Complex Deal Structuring</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From financing to strategic partnerships, creative solutions for
                high-value transactions where standard playbooks don't apply.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Analytics & Decision Frameworks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Data-driven insight and structured decision-making frameworks that
                help leadership teams cut through complexity and move with conviction.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Technical Due Diligence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In-depth evaluation of technology and business models to de-risk
                investments and strategic commitments before they're made.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Emerging Markets & Technology</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic guidance for organisations operating at the frontier of
                new technologies and rapidly evolving regulatory or market environments.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Engagement model */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Engagement Model</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We work on a selective basis, taking on a small number of clients at any time.
            Engagements range from focused advisory mandates to longer-term strategic
            partnerships — structured to ensure every client receives senior attention
            and genuine depth.
          </p>
          <p className="text-gray-600 leading-relaxed">
            References and examples of past work are available upon request.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* CTA */}
        <div className="max-w-xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Start a Conversation</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you're facing a complex challenge or see an opportunity that requires
            a different kind of thinking, we'd like to hear about it.
          </p>
          <a
            href="mailto:info@cable.capital"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors"
          >
            info@cable.capital
          </a>
        </div>

      </div>
    </Layout>
  );
}
