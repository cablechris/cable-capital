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
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Cable Capital sources critical chemicals and agricultural inputs for Australian
            businesses when traditional supply routes fail. The work is both transactional
            covering both transactional brokerage and advisory work: helping clients understand their
            exposure and build alternatives before a crisis forces the issue.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Strait of Hormuz is the kind of chokepoint we think about. Not as a headline
            risk, but as a structural feature of a supply chain that deserves a prepared
            response. COVID showed what happens when you don't have one. The Gulf is showing
            it again. Most businesses still don't.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* The Problem / Our Role */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The Problem</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Chokepoints are everywhere. Most businesses only see them when it's too late.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              COVID-19 made it visible at scale: empty shelves, closed ports, formula
              shortages overnight. The Strait of Hormuz is making it visible again,
              differently, and with consequences that will take longer to resolve. These
              are not anomalies. They are features of supply chains optimised for
              efficiency and never tested for resilience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Australian businesses, distant from major production centres and dependent
              on long international supply lines, carry more of this risk than most.
              When access to critical chemicals or agricultural inputs breaks down,
              the consequences are immediate and operational.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Role</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              We build alternatives before you need them.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cable Capital works as both broker and advisor: sourcing critical inputs
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

        {/* Commodities */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-10">What We Source</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Fertilizers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Urea, DAP, MAP, potash, and ammonia-based nitrogen fertilizers.
                Critical inputs for Australian broadacre and horticulture, and among
                the first products disrupted when global production corridors close.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Industrial Chemicals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sulfuric acid, caustic soda, solvents, and process chemicals for
                manufacturing and industrial operations. Sourced from verified producers
                with consistent specification and supply continuity.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Crop Protection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Herbicides, fungicides, and insecticides for broad-acre and specialty
                agriculture. We source active ingredients and formulated products from
                established manufacturers across multiple regions.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Geographic Reach */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Where We Source From</h2>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
            Our sourcing strategy deliberately prioritises supply origins outside
            concentrated geopolitical risk zones. We maintain supplier relationships
            across multiple regions so that disruption in one corridor does not
            become a crisis for our clients.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">North Africa</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Morocco and Egypt, established producers of phosphate fertilizers
                and chemical intermediates with stable export infrastructure.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Central Asia</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Kazakhstan and Uzbekistan, significant producers of nitrogen
                fertilizers and industrial chemicals, increasingly accessible
                via alternative routing.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">United States</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                US Gulf Coast producers of urea, ammonia, and specialty chemicals
                a reliable alternative supply base with strong regulatory standards.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Southeast Asia</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Regional manufacturing hubs for crop protection products and
                chemical formulations with proximity advantages for Australian logistics.
              </p>
            </div>
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
                Strategic review of your existing supply chain, identifying concentration
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
            reliable access to chemicals and agricultural inputs, and that understand
            the cost of getting it wrong.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We take on a limited number of clients at any time to ensure each engagement
            receives the attention it requires.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Dual CTA: Buyers + Suppliers */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">For Buyers</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you're concerned about supply chain exposure or need to source fertilizers,
              industrial chemicals, or crop protection products, we'd like to hear about it.
            </p>
            <a
              href="mailto:info@cable.capital"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors"
            >
              Get in touch
            </a>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">For Suppliers</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We work with verified, established producers across North Africa, Central Asia,
              and the US Gulf Coast. If you supply fertilizers, industrial chemicals, or
              crop protection products and are looking for Australian market access,
              we'd like to hear from you.
            </p>
            <a
              href="mailto:info@cable.capital?subject=Supplier Enquiry"
              className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
            >
              Supplier enquiries
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
}
