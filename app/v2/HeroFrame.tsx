'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * HeroFrame — the landing composition.
 *
 * A native, responsive port of the HyperFrames "cable-capital-hyperframe"
 * render, recolored from the original night-sky palette onto the v2 light
 * (ivory) system so it reads continuously with the rest of the archive.
 *
 * Two decoupled layers so the type and the diagram never compete:
 *   1. A full-bleed ambient starfield behind everything — crop-safe, subtle.
 *   2. A contained barbell "baseline" pinned below the statement and aligned
 *      to the same column, so both extremes (ANCIENT / FRONTIER) and their
 *      labels are always fully visible and never cross the headline.
 *
 * The intro is a finite GSAP timeline (starfield settles, statement resolves,
 * the cable draws in between two nodes) that ends on a still frame; only a
 * cheap CSS pulse on the extreme-node halos keeps living. Under
 * prefers-reduced-motion it renders the resolved frame with no animation.
 *
 * Particles are generated deterministically (seeded RNG) and rendered as React
 * elements — never imperatively appended — so the field is stable across
 * server/client and immune to StrictMode/HMR double-invokes.
 */

// Deterministic RNG so the field is identical every render. Seed = 2019.
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Star = { cx: number; cy: number; r: number; fill: string; opacity: number }

// A soft field of stars across the full frame — denser and brighter up top,
// sparse and faint toward the base so it settles behind the barbell band.
function buildStars() {
  const rng = mulberry32(2019)
  const stars: Star[] = []
  for (let i = 0; i < 220; i++) {
    const x = rng() * 1920
    const y = 60 + rng() * 960
    const r = 0.35 + rng() * 1.35
    const fill = rng() > 0.88 ? '#6B1E1E' : '#0E0E0C'
    // Fade the field out as it descends so the lower third stays quiet.
    const depth = 1 - Math.min(1, Math.max(0, (y - 420) / 660)) * 0.6
    const opacity = (0.04 + rng() * 0.24) * depth
    stars.push({ cx: +x.toFixed(2), cy: +y.toFixed(2), r: +r.toFixed(2), fill, opacity: +opacity.toFixed(3) })
  }
  return stars
}

export default function HeroFrame() {
  const rootRef = useRef<HTMLElement>(null)
  const stars = useMemo(buildStars, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const drawSelectors = ['#cable-underlay', '#cable-a', '#cable-b', '#cable-c']
      drawSelectors.forEach((sel) => {
        const path = root.querySelector<SVGPathElement>(sel)
        if (!path) return
        const len = path.getTotalLength()
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })
      })

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) {
        gsap.set(drawSelectors.join(','), { strokeDashoffset: 0 })
        root.querySelectorAll('.hero-node-halo').forEach((el) => el.classList.add('is-live'))
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      // Field settles in.
      tl.from('#hero-sky circle', { opacity: 0, duration: 1.4, stagger: { amount: 1.2, from: 'random' }, ease: 'sine.out' }, 0.1)

      // Statement resolves first — it's the lead.
      tl.from('.hero-eyebrow', { x: -22, opacity: 0, duration: 0.7, ease: 'power4.out' }, 0.35)
      tl.from('.hero-line', { yPercent: 120, opacity: 0, duration: 1.0, stagger: 0.12, ease: 'expo.out' }, 0.5)
      tl.from('.hero-cta', { y: 12, opacity: 0, duration: 0.7, ease: 'power3.out' }, 1.15)

      // The cable draws in as the baseline beneath the statement.
      tl.to('#cable-underlay', { strokeDashoffset: 0, duration: 2.6, ease: 'sine.inOut' }, 0.95)
      tl.to('#cable-a', { strokeDashoffset: 0, duration: 2.3, ease: 'expo.inOut' }, 1.05)
      tl.to('#cable-c', { strokeDashoffset: 0, duration: 2.6, ease: 'sine.inOut' }, 1.15)
      tl.to('#cable-b', { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' }, 1.25)
      tl.from('#node-left, #node-right', { scale: 0, opacity: 0, transformOrigin: 'center', duration: 0.5, stagger: 0.16, ease: 'back.out(2)' }, 1.5)
      tl.from('#node-left-halo, #node-right-halo', { scale: 0.2, opacity: 0, transformOrigin: 'center', duration: 1.2, stagger: 0.12, ease: 'power2.out' }, 1.6)
      tl.from('#hero-labels text', { opacity: 0, y: 10, duration: 0.6, stagger: 0.14, ease: 'power3.out' }, 2.0)

      // Switch on the cheap, compositor-friendly halo pulse once resolved.
      tl.call(() => {
        root.querySelectorAll('.hero-node-halo').forEach((el) => el.classList.add('is-live'))
      }, undefined, 3.0)
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      className="relative w-full flex flex-col"
      style={{ minHeight: '100vh', background: 'var(--v2-ivory)', overflow: 'hidden' }}
    >
      {/* Layer 1 — full-bleed ambient starfield (crop-safe) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g id="hero-sky">
          {stars.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill} opacity={s.opacity} />
          ))}
        </g>
      </svg>

      {/* Layer 2 — statement (the lead), vertically centered above the baseline */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 lg:pt-32">
        <p
          className="hero-eyebrow v2-mono text-[11px] tracking-[0.22em] uppercase mb-7"
          style={{ color: 'var(--v2-oxblood)' }}
        >
          Est. 2019 · Ideas at the edges
        </p>

        <h1
          className="v2-serif"
          style={{
            fontSize: 'clamp(3rem, 6.2vw, 6rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: 'var(--v2-ink)',
          }}
        >
          <span className="block overflow-hidden">
            <span className="hero-line block">Big ideas,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">specific bets</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block v2-editorial italic" style={{ color: 'var(--v2-oxblood)' }}>
              &amp; rabbit holes
            </span>
          </span>
        </h1>

        <div className="hero-cta mt-11">
          <Link
            href="/thesis"
            className="v2-mono text-[11px] tracking-[0.22em] uppercase inline-flex items-center gap-3 v2-link-underline pb-1"
            style={{ color: 'var(--v2-oxblood)' }}
          >
            Start with the theses <span>&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Layer 3 — the barbell baseline, aligned to the statement column */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-12 lg:pb-16">
        <svg
          className="w-full"
          viewBox="0 372 1920 372"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="hero-cable" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B4744F" />
              <stop offset="16%" stopColor="#0E0E0C" />
              <stop offset="50%" stopColor="#2A2722" />
              <stop offset="84%" stopColor="#0E0E0C" />
              <stop offset="100%" stopColor="#B4744F" />
            </linearGradient>
            <filter id="hero-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          <g id="hero-cable-system" fill="none" strokeLinecap="round">
            <path id="cable-underlay" d="M 118 540 C 340 430 520 470 712 568 C 856 642 1040 642 1208 548 C 1408 436 1592 438 1802 538" stroke="#6B1E1E" strokeWidth="26" opacity=".1" filter="url(#hero-glow)" />
            <path id="cable-a" d="M 118 540 C 340 430 520 470 712 568 C 856 642 1040 642 1208 548 C 1408 436 1592 438 1802 538" stroke="url(#hero-cable)" strokeWidth="2.6" />
            <path id="cable-b" d="M 118 540 C 344 456 520 494 700 578 C 860 652 1048 626 1212 536 C 1404 430 1590 466 1802 538" stroke="#0E0E0C" strokeWidth="1.1" opacity=".34" />
            <path id="cable-c" d="M 118 540 C 332 414 526 446 722 556 C 864 636 1038 656 1202 560 C 1414 438 1598 416 1802 538" stroke="#6B1E1E" strokeWidth="1.1" opacity=".46" />
            <circle id="node-left-halo" className="hero-node-halo" cx="118" cy="540" r="30" fill="#6B1E1E" opacity=".2" filter="url(#hero-glow)" />
            <circle id="node-right-halo" className="hero-node-halo" cx="1802" cy="538" r="30" fill="#6B1E1E" opacity=".2" filter="url(#hero-glow)" />
            <circle id="node-left" cx="118" cy="540" r="7" fill="#6B1E1E" />
            <circle id="node-right" cx="1802" cy="538" r="7" fill="#6B1E1E" />
          </g>

          <g id="hero-labels" fill="#8A8274" fontFamily="var(--v2-mono-font)" fontSize="14" letterSpacing="2.6">
            <text x="118" y="500" textAnchor="start">ANCIENT</text>
            <text x="1802" y="498" textAnchor="end">FRONTIER</text>
            <text x="960" y="690" textAnchor="middle" opacity=".72">THE MIDDLE</text>
          </g>
        </svg>
      </div>
    </section>
  )
}
