"use client";

import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div className="py-20">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
            The layer beneath.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This is where I put my reasoning on the record before it resolves, so later I can
            tell whether I actually understood something or just got lucky.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Three kinds of writing live here. Theses are the big structural bets, each with the
            positions I hold and the conditions that would prove me wrong. Memos take a single
            deal and work it end to end, down to a verdict I'm willing to be judged on. Research
            is whatever question won't leave me alone, from photonic interconnects to how
            coordination emerges in artificial systems.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Why it exists */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Why it exists</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I've had my share of wins. Some of it was judgment. A lot of it might have been
            luck, and the honest truth is I can't cleanly tell the two apart. While they're
            happening they look identical. You only learn which one you had long after.
          </p>
          <p className="text-gray-600 leading-relaxed">
            So I do what the investors worth learning from all did: put the reasoning on the
            record before the outcome, where it can be judged. Track the reads rigorously
            enough, over a long enough window, and eventually the record tells you whether
            there was skill under the luck or just a streak. I would rather know than keep
            telling myself a story.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* What it stands for */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">What it stands for</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            There's nothing to sell here. No fund raising money, no newsletter chasing
            subscribers, no service with a booking link at the bottom. That absence is
            deliberate. The moment you're selling something, you start bending the reasoning to
            fit the sale, usually without noticing. Taking the incentive out is the only way I
            know to keep the reads honest.
          </p>
          <p className="text-gray-600 leading-relaxed">
            So the one thing I want back is disagreement. If a thesis is wrong, I would rather
            hear it from you now than from the market later.
          </p>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* The barbell */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">The barbell</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Everything here sits on a barbell. The safe end holds things that have worked for
            centuries and will keep working: real estate in scarce places, daily training,
            long-term people, enough cash to move when it counts. The wild end holds
            concentrated bets on a few frontier technologies I think the market has priced
            wrong. The middle, the hedged, diversified, responsible-looking middle, is the one
            place I refuse to stand, because it quietly guarantees you never get the big thing
            right.
          </p>
          <a
            href="/v2/barbell"
            className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center group transition-colors"
          >
            Read the barbell
            <svg className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="border-t border-gray-100 mb-20" />

        {/* Principal */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-10">Principal</h2>
          <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-16">
            <div className="flex-1 min-w-0 max-w-2xl">
              <h3 className="font-serif text-2xl text-gray-900 mb-1">Chris Cable</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Investor, operator</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I have spent more than a decade reading how systems fail and positioning around
                the alternatives. It started with Bitcoin in 2013, when concentrating trust in
                central institutions looked like a structural fragility rather than a feature.
                The same lens now runs across chips, photonics, decentralized intelligence,
                bioelectricity, and physical supply chains.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The through-line is the substrate: the layer underneath the thing everyone else
                is watching. Interconnect underneath the AI trade. Neutrality underneath the
                intelligence race. Morphogenetic signaling underneath the biology. Read that
                layer early, write the read down, and let the record do the grading.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Based in Sydney. Outside the work: calisthenics where the kids can see, time on
                the water, and raising three of them.
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

        {/* Contact */}
        <div className="max-w-xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Contact</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you've come this far, don't be afraid to reach out!
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
