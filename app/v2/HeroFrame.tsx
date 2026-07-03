'use client'

import { motion } from 'framer-motion'

/**
 * HeroFrame — landing moment.
 *
 * This is the web placeholder for the final HyperFrames-rendered hero video.
 * The composition it mocks: a dark ivory field, the wordmark fades up, a
 * barbell curve draws across the frame with two glowing nodes at the extremes,
 * then the display line "We operate at the extremes." types/fades in,
 * underscored by a thin oxblood rule. The rendered MP4 will replace the SVG
 * animation below.
 */
export default function HeroFrame() {
  return (
    <section
      className="relative w-full"
      style={{
        minHeight: '100vh',
        background: 'var(--v2-ivory)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(1200px 700px at 78% 30%, rgba(107,30,30,0.08), transparent 60%), radial-gradient(900px 600px at 15% 80%, rgba(14,14,12,0.06), transparent 60%)',
        }}
      />

      {/* Top scaffolding — eyebrow marquee */}
      <div
        className="absolute top-16 inset-x-0 overflow-hidden"
        style={{ borderBottom: '1px solid var(--v2-rule)' }}
      >
        <div className="v2-marquee py-3 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 v2-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: 'var(--v2-ink-4)' }}>
              <span>Theses</span>
              <span>·</span>
              <span>Memos</span>
              <span>·</span>
              <span>Research</span>
              <span>·</span>
              <span>Frontier technology</span>
              <span>·</span>
              <span>Scarce real estate</span>
              <span>·</span>
              <span>Physical commodities</span>
              <span>·</span>
              <span>Concentration at the edges</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Side rail labels */}
      <div className="hidden lg:block absolute left-10 bottom-12 v2-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: 'var(--v2-ink-4)' }}>
        <div>Est. 2019</div>
        <div className="mt-1">Reasoning archive</div>
      </div>
      <div className="hidden lg:block absolute right-10 bottom-12 v2-mono text-[10px] tracking-[0.22em] uppercase text-right" style={{ color: 'var(--v2-ink-4)' }}>
        <div>Sydney · Global</div>
        <div className="mt-1">cable.capital</div>
      </div>

      {/* Center composition */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-44 lg:pt-56 pb-28">
        {/* Barbell curve (the hero centerpiece) */}
        <div className="relative mb-14 lg:mb-20">
          <BarbellCurve />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-8"
          style={{ color: 'var(--v2-oxblood)' }}
        >
          A public reasoning archive
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="v2-serif"
          style={{
            fontSize: 'clamp(3.5rem, 8.5vw, 8.25rem)',
            lineHeight: 0.96,
            letterSpacing: '-0.02em',
            color: 'var(--v2-ink)',
            maxWidth: '18ch',
          }}
        >
          Big ideas, specific bets, and{' '}
          <span className="v2-editorial italic" style={{ color: 'var(--v2-oxblood)' }}>
            rabbit holes.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-12 flex items-center gap-3 v2-mono text-[11px] tracking-[0.22em] uppercase"
          style={{ color: 'var(--v2-ink-3)' }}
        >
          <span>Scroll</span>
          <span className="inline-block w-10 h-px" style={{ background: 'var(--v2-ink-3)' }} />
        </motion.div>
      </div>
    </section>
  )
}

function BarbellCurve() {
  return (
    <svg
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
      className="w-full h-[120px] md:h-[160px]"
      aria-hidden
    >
      {/* Bell curve for contrast (what everyone else does) */}
      <motion.path
        d="M 80 140 C 300 140, 380 40, 600 40 C 820 40, 900 140, 1120 140"
        fill="none"
        stroke="var(--v2-ink)"
        strokeOpacity="0.08"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Barbell: U-shape, concentration at the extremes */}
      <motion.path
        d="M 80 40 C 240 40, 300 140, 600 140 C 900 140, 960 40, 1120 40"
        fill="none"
        stroke="var(--v2-ink)"
        strokeOpacity="0.85"
        strokeWidth="1.75"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Extreme nodes with oxblood glow */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        style={{ animation: 'v2-pulse-a 6s ease-in-out infinite', transformOrigin: '80px 40px' }}
      >
        <circle cx="80" cy="40" r="18" fill="var(--v2-oxblood-glow)" />
        <circle cx="80" cy="40" r="6" fill="var(--v2-oxblood)" />
      </motion.g>
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        style={{ animation: 'v2-pulse-b 6s ease-in-out infinite', transformOrigin: '1120px 40px' }}
      >
        <circle cx="1120" cy="40" r="18" fill="var(--v2-oxblood-glow)" />
        <circle cx="1120" cy="40" r="6" fill="var(--v2-oxblood)" />
      </motion.g>

      {/* Labels at the extremes */}
      <motion.text
        x="80"
        y="18"
        textAnchor="middle"
        fontSize="10"
        fontFamily="var(--v2-mono-font)"
        letterSpacing="2"
        fill="var(--v2-ink-3)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.6 }}
      >
        ANCIENT
      </motion.text>
      <motion.text
        x="1120"
        y="18"
        textAnchor="middle"
        fontSize="10"
        fontFamily="var(--v2-mono-font)"
        letterSpacing="2"
        fill="var(--v2-ink-3)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.7 }}
      >
        FRONTIER
      </motion.text>
      <motion.text
        x="600"
        y="158"
        textAnchor="middle"
        fontSize="10"
        fontFamily="var(--v2-mono-font)"
        letterSpacing="2"
        fill="var(--v2-ink-4)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 2.9 }}
      >
        ・ THE MIDDLE ・
      </motion.text>
    </svg>
  )
}
