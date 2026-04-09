"use client";

import React from 'react';
import Layout from '../components/Layout';

export default function SupplyChainPage() {
  return (
    <Layout>
      <div className="py-20">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Supply Chain</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
            Resilient sourcing for Australian businesses.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We source critical chemicals and agricultural inputs for Australian manufacturers
            and agribusinesses — with a focus on supply chain resilience when traditional
            routes fail.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* The Problem */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The Problem</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Chokepoints are everywhere. Most businesses only see them when it's too late.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              From the Strait of Hormuz to a single dominant supplier, supply chains that
              look stable in normal conditions can collapse quickly under geopolitical
              pressure, logistical failure, or demand shock.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Australian businesses — distant from major production centres and dependent
              on long international supply lines — are particularly exposed. When access
              to key chemicals or agricultural inputs breaks down, the consequences are
              immediate and operational.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Role</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              We build alternatives before you need them.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cable Capital works as both broker and advisor — sourcing critical inputs
              transactionally and helping clients build the supplier relationships and
              routing options that reduce dependency on any single point of failure.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We think in second-order effects. Before a chokepoint closes, we're already
              working on what comes next.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* What we do */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-10">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Sourcing & Brokerage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transactional procurement of chemicals and agricultural inputs from
                verified global suppliers, structured to meet your operational timelines.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Supply Chain Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic review of your existing supply chain — identifying concentration
                risks, mapping alternative routes, and building supplier redundancy before
                disruption forces your hand.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Market Intelligence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ongoing analysis of geopolitical developments, logistics shifts, and
                commodity dynamics affecting supply availability and pricing for your inputs.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Who we work with */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Who We Work With</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We work with Australian manufacturers and agribusinesses that depend on
            reliable access to chemicals and agricultural inputs — and that understand
            the cost of getting it wrong.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We take on a limited number of clients at any time to ensure each engagement
            receives the attention it requires.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* CTA */}
        <div className="max-w-xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you're concerned about supply chain exposure or need to source chemicals
            or agricultural inputs, we'd like to hear about it.
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
