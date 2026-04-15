"use client";

import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div className="py-20">

        {/* Company Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
            Cable Capital
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Cable Capital is an Australian supply chain brokerage and strategic advisory
            firm specialising in critical chemicals and agricultural inputs. We source
            for Australian businesses and help them build the supplier relationships and
            routing alternatives that protect them when traditional supply fails.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The firm was founded on a single conviction: that concentrated supply chains —
            optimised for efficiency at the cost of resilience — are a structural fragility,
            not a feature. Our work is to route around them before they become a crisis.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Company Details */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-10">Company</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Operating Name</p>
              <p className="text-gray-900 font-medium">Cable Capital</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Established</p>
              <p className="text-gray-900 font-medium">2025</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Registered</p>
              <p className="text-gray-900 font-medium">New South Wales, Australia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* The Team */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-10">The Team</h2>
          <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-16">
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-2xl text-gray-900 mb-1">Chris Cable</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Founder & Director</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I've spent more than a decade studying how systems fail — and building
                positions around the alternatives. That started with Bitcoin in 2013, when
                I saw that concentrating trust in central institutions was a structural
                fragility, not a feature. The same lens now applies to physical supply
                chains.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                My background spans investment markets, analytics, deal structuring, and
                over a decade operating at the frontier of global markets and emerging
                technology. That experience built a deep network across investment,
                operator, and founder communities worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Based in Sydney. Outside of work: calisthenics, time on the water, and
                raising three kids.
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
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* What we do */}
        <div className="max-w-3xl space-y-16 mb-20">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Supply Chain</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cable Capital sources fertilizers, industrial chemicals, and crop protection
              products for Australian manufacturers and agribusinesses — with a focus on
              supplier diversity and routing resilience. We work transactionally and
              advise on longer-term supply chain architecture.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our sourcing prioritises supply origins outside concentrated geopolitical
              risk zones: North Africa, Central Asia, the US Gulf Coast, and Southeast Asia.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Consulting</h2>
            <p className="text-gray-600 leading-relaxed">
              Through CPC Consulting, Cable Capital works with a small number of
              organisations on complex strategic problems — market entry, deal structuring,
              investment intelligence, and navigating markets in transition. The common
              thread is situations where the standard playbook doesn't apply and the cost
              of getting it wrong is high.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Contact */}
        <div className="max-w-xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            For supply chain enquiries, consulting engagements, or supplier partnerships.
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
