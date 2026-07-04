'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// Real published work across the three records.
const posts = [
  {
    date: 'May 2026',
    title: 'Photonic Interconnect',
    kicker: 'Light as the structural successor to copper in AI scale-up.',
    href: '/thesis/photonic-interconnect',
    tag: 'Thesis',
  },
  {
    date: 'May 2026',
    title: 'Tenstorrent',
    kicker: 'The company is real. The security is not clean enough. A PASS verdict.',
    href: '/memos/tenstorrent',
    tag: 'Memo',
  },
  {
    date: '2025',
    title: 'Culture Without Function',
    kicker: 'Emergent coordination in artificial systems, through costly signals.',
    href: '/papers/emergent-culture',
    tag: 'Research',
  },
]

export default function Writing() {
  return (
    <section
      style={{
        background: 'var(--v2-ivory-dim)',
        borderTop: '1px solid var(--v2-rule)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="v2-eyebrow mb-4">Selected writing</div>
            <h2
              className="v2-serif"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
                maxWidth: 'min(20ch, 100%)',
              }}
            >
              On the record.
            </h2>
          </div>
          <Link
            href="/thesis"
            className="v2-mono text-[11px] tracking-[0.22em] uppercase v2-link-underline pb-1"
            style={{ color: 'var(--v2-ink-2)' }}
          >
            All theses →
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--v2-rule-strong)' }}>
          {posts.map((p, i) => (
            <motion.div
              key={p.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderBottom: '1px solid var(--v2-rule)' }}
            >
              <Link
                href={p.href}
                className="group grid grid-cols-12 gap-6 py-8 lg:py-10 items-baseline"
              >
                <span
                  className="col-span-3 lg:col-span-2 v2-mono text-[11px] tracking-[0.18em]"
                  style={{ color: 'var(--v2-ink-3)' }}
                >
                  {p.date}
                </span>
                <div className="col-span-9 lg:col-span-7">
                  <h3
                    className="v2-serif"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    <span className="v2-link-underline pb-1">{p.title}</span>
                  </h3>
                  <p className="mt-2 text-[15px]" style={{ color: 'var(--v2-ink-3)' }}>
                    {p.kicker}
                  </p>
                </div>
                <span
                  className="hidden lg:block col-span-3 v2-mono text-[10px] tracking-[0.22em] uppercase text-right"
                  style={{ color: 'var(--v2-oxblood)' }}
                >
                  {p.tag}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
