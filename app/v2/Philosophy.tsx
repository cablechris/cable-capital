'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section
      className="relative"
      style={{
        background: 'var(--v2-ink)',
        color: 'var(--v2-ivory)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'rgba(246,242,234,0.55)' }}>
              Philosophy
            </div>
            <div className="v2-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: 'var(--v2-oxblood)' }}>
              ──── 01
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="v2-editorial"
              style={{
                fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                lineHeight: 1.25,
                letterSpacing: '-0.005em',
                maxWidth: '28ch',
              }}
            >
              Most of life's returns compound at the edges. The comfortable middle (in portfolios,
              in careers, in opinions) is the riskiest place to be.
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-14 grid sm:grid-cols-2 gap-10"
            >
              <div>
                <div className="v2-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--v2-oxblood)' }}>
                  One tail
                </div>
                <p className="v2-serif text-[22px] leading-[1.25]" style={{ letterSpacing: '-0.01em' }}>
                  The quiet things that compound for decades: scarce real estate, daily training, physical books, your family and &apos;friends for life&apos;.
                </p>
              </div>
              <div>
                <div className="v2-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--v2-oxblood)' }}>
                  The other tail
                </div>
                <p className="v2-serif text-[22px] leading-[1.25]" style={{ letterSpacing: '-0.01em' }}>
                  Concentrated bets on the frontier, AI and crypto and the research underneath.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14"
            >
              <Link
                href="/v2/barbell"
                className="v2-mono text-[11px] tracking-[0.22em] uppercase inline-flex items-center gap-3"
              >
                <span className="v2-link-underline pb-1">Read the manifesto</span>
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
