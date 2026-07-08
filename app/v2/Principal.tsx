'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Principal() {
  return (
    <section style={{ background: 'var(--v2-ivory)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 lg:py-36 grid lg:grid-cols-12 gap-12 items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4"
        >
          <div
            className="relative aspect-[4/5] overflow-hidden"
            style={{ background: 'var(--v2-ivory-2)' }}
          >
            {/* Fallback headshot — existing asset in /public */}
            <Image
              src="/images/headshot.png"
              alt="Chris Cable"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.05)' }}
            />
          </div>
        </motion.div>

        <div className="lg:col-span-8">
          <div className="v2-eyebrow mb-6">Principal</div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="v2-serif"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
              maxWidth: 'min(22ch, 100%)',
            }}
          >
            Chris Cable
          </motion.h2>

          <p
            className="mt-8 text-[17px] leading-[1.65]"
            style={{ color: 'var(--v2-ink-2)', maxWidth: 'min(52ch, 100%)' }}
          >
            I've had my share of wins. But luck and skill look identical while they're
            happening, and you only learn which one you had long after. The investors worth
            learning from worked this out the same way: they put the reasoning on the record
            before the outcome, where it could be judged. That's what this is. I write things
            down before they resolve, keep the memos honest even when the verdict is no, and
            chase the rabbit holes I fall into.
          </p>

          <div className="mt-10 flex items-center gap-8 v2-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: 'var(--v2-ink-3)' }}>
            <Link href="/about" className="v2-link-underline pb-1">About</Link>
            <a href="mailto:info@cable.capital" className="v2-link-underline pb-1">Direct email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
