'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const pillars = [
  {
    num: '01',
    tag: 'Pre-registered',
    title: 'Theses',
    blurb:
      'Structured investment theses with explicit positions, kill conditions, and monitoring cadences. Timestamped and published before they resolve.',
    href: '/thesis',
  },
  {
    num: '02',
    tag: 'On the record',
    title: 'Memos',
    blurb:
      'Deal-level analysis with honest verdicts. PASS, MONITOR, WATCH. The reasoning is the product, not the pitch.',
    href: '/memos',
  },
  {
    num: '03',
    tag: 'Curiosity',
    title: 'Research',
    blurb:
      'Weird and wonderful rabbit holes I find myself in. Bioelectric morphogenesis, emergent coordination in artificial systems, the substrate layer wherever it turns up.',
    href: '/papers',
  },
]

export default function Pillars() {
  return (
    <section
      className="relative"
      style={{
        borderTop: '1px solid var(--v2-rule)',
        background: 'var(--v2-ivory)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={p.href}
                className="v2-pillar-card group relative block p-8 lg:p-10 h-full"
                style={{
                  background: 'var(--v2-ivory-dim)',
                  border: '1px solid var(--v2-rule)',
                  minHeight: 360,
                }}
              >
                <div className="flex items-start justify-end mb-14">
                  <svg
                    className="v2-pillar-arrow"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  >
                    <path d="M5 15 L15 5 M8 5 H15 V12" strokeLinecap="square" />
                  </svg>
                </div>

                <h3
                  className="v2-serif mb-5"
                  style={{
                    fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.015em',
                  }}
                >
                  {p.title}
                </h3>

                <p
                  className="text-[15px] leading-[1.6]"
                  style={{ color: 'var(--v2-ink-2)', maxWidth: '34ch' }}
                >
                  {p.blurb}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
