"use client";

import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div className="py-20">

        {/* Header + photo */}
        <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-16 mb-20">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About</p>
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
              Chris Cable
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              I've spent more than a decade studying how systems fail — and building
              positions around the alternatives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That started with Bitcoin in 2013, when I saw that concentrating trust
              in central financial institutions was a structural fragility, not a feature.
              The same lens now applies to physical supply chains: chokepoints, whether
              financial or logistical, create the same kind of brittleness. I work to route around them.
            </p>
          </div>
          <div className="flex-shrink-0 mb-10 md:mb-0">
            <Image
              src="/images/headshot.JPG"
              alt="Chris Cable"
              width={200}
              height={200}
              className="rounded-lg object-cover shadow-sm w-32 h-32 md:w-48 md:h-48"
              priority
            />
          </div>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* The work */}
        <div className="max-w-3xl space-y-16 mb-20">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Supply Chain</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cable Capital sources critical chemicals and agricultural inputs for
              Australian businesses when traditional supply routes fail. The work
              is both transactional — finding and brokering supply — and advisory:
              helping clients understand their exposure and build alternatives before
              a crisis forces the issue.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Strait of Hormuz is the kind of chokepoint I think about. Not as a
              headline risk, but as a structural feature of a supply chain that deserves
              a prepared response. Most businesses don't have one.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Consulting</h2>
            <p className="text-gray-600 leading-relaxed">
              Through CPC Consulting LLC, I work with a small number of organisations
              on complex strategic problems — market entry, deal structuring, investment
              intelligence, and navigating markets in transition. The common thread is
              situations where the standard playbook doesn't apply and the cost of getting
              it wrong is high.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Background</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              My background spans investment markets, analytics, deal structuring,
              and over a decade operating at the frontier of emerging technology and
              global markets. That experience built a deep network across investment,
              operator, and founder communities worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm based in Australia. Outside of work: calisthenics, time on the water,
              and raising three kids.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Philosophy */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">How I Think</h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            "Concentrated chokepoints create fragility. I work to route around them."
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Contact */}
        <div className="max-w-xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            For supply chain enquiries, consulting, or anything else.
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
