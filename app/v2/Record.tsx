'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// The archive index: the actual work, newest first. Replaces the old
// abstract Pillars cards and the placeholder Writing list with one
// content-first section that shows the real theses, memos, and research.
const entries = [
  {
    date: 'Jul 2026',
    type: 'Memo',
    title: 'Panthalassa',
    deck: 'A wave-powered ocean data center Thiel just backed. The platform may be worth building; the cargo it carries is racing to zero.',
    status: 'PASS',
    href: '/memos/panthalassa',
  },
  {
    date: 'May 2026',
    type: 'Thesis',
    title: 'Photonic Interconnect',
    deck: 'Light as the structural successor to copper in AI scale-up.',
    status: 'Active conviction',
    href: '/thesis/photonic-interconnect',
  },
  {
    date: '2026',
    type: 'Research',
    title: 'Hard Limits on Sparse Bioelectric Control',
    deck: 'Bioelectric repair is a dimensionality problem, not a dose problem. Below a critical number of intervention sites, no amount of stimulation works.',
    status: '',
    href: '/papers/sparse-bioelectric-control',
  },
  {
    date: 'May 2026',
    type: 'Memo',
    title: 'Dolphin Network',
    deck: 'Distributed inference, narrowed. The bet is workload economics, not sharding.',
    status: 'MONITOR',
    href: '/memos/dolphin-network',
  },
  {
    date: 'May 2026',
    type: 'Memo',
    title: 'Tenstorrent',
    deck: 'The company is real. The security is not clean enough.',
    status: 'PASS',
    href: '/memos/tenstorrent',
  },
  {
    date: '2025',
    type: 'Research',
    title: 'Culture Without Function',
    deck: 'Emergent coordination in artificial systems, through costly signals.',
    status: '',
    href: '/papers/emergent-culture',
  },
]

const statusColor = (s: string) => {
  if (s === 'PASS' || s === 'Active conviction') return 'var(--v2-oxblood)'
  if (s === 'MONITOR') return '#9A6A1E'
  return 'var(--v2-ink-4)'
}

const cats = [
  { label: 'Theses', href: '/thesis' },
  { label: 'Memos', href: '/memos' },
  { label: 'Research', href: '/papers' },
]

export default function Record() {
  return (
    <section
      style={{ background: 'var(--v2-ivory-dim)', borderTop: '1px solid var(--v2-rule)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--v2-oxblood)' }}>
              The record
            </div>
            <h2
              className="v2-serif"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.015em', maxWidth: 'min(20ch, 100%)' }}
            >
              Everything I&apos;ve written down.
            </h2>
          </div>
          <div className="flex gap-6 v2-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: 'var(--v2-ink-3)' }}>
            {cats.map((c) => (
              <Link key={c.href} href={c.href} className="v2-link-underline pb-1">
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--v2-rule-strong)' }}>
          {entries.map((e, i) => (
            <motion.div
              key={e.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderBottom: '1px solid var(--v2-rule)' }}
            >
              <Link
                href={e.href}
                className="group grid grid-cols-12 gap-4 lg:gap-6 py-8 lg:py-10 items-baseline"
              >
                <div className="col-span-12 lg:col-span-2 flex lg:block items-baseline gap-4">
                  <span className="v2-mono text-[11px] tracking-[0.18em]" style={{ color: 'var(--v2-ink-4)' }}>
                    {e.date}
                  </span>
                  <span className="v2-mono text-[10px] tracking-[0.18em] uppercase lg:mt-2 lg:block" style={{ color: 'var(--v2-ink-4)' }}>
                    {e.type}
                  </span>
                </div>

                <div className="col-span-12 lg:col-span-8">
                  <h3
                    className="v2-serif"
                    style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.15rem)', lineHeight: 1.1, letterSpacing: '-0.015em' }}
                  >
                    <span className="v2-link-underline pb-1">{e.title}</span>
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: 'var(--v2-ink-3)', maxWidth: 'min(56ch, 100%)' }}>
                    {e.deck}
                  </p>
                </div>

                <div className="col-span-12 lg:col-span-2 lg:text-right">
                  {e.status && (
                    <span className="v2-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: statusColor(e.status) }}>
                      {e.status}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
