'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'

/**
 * HeroFrame — the landing composition.
 *
 * A native, responsive port of the HyperFrames "cable-capital-hyperframe"
 * render, recolored from the original night-sky palette onto the v2 light
 * (ivory) system so the hero reads continuously with the rest of the archive.
 *
 * The motion language is preserved: a faint starfield settles in, a horizon
 * arc draws across the field, three cable strands sweep between two glowing
 * nodes at the extremes (ANCIENT ↔ FRONTIER, with THE MIDDLE dipping below),
 * and the statement resolves last. It autoplays once on mount and then holds
 * its final frame, keeping only a slow ambient shimmer alive. Under
 * prefers-reduced-motion it renders the resolved frame with no animation.
 *
 * Particles are generated deterministically (seeded RNG) and rendered as React
 * elements — never imperatively appended — so the field is stable across
 * server/client and immune to StrictMode/HMR double-invokes. GSAP owns only
 * the timeline, scoped through gsap.context() for clean revert.
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
type Node = Star & { line?: { x2: number; y2: number } }

function buildField() {
  const rng = mulberry32(2019)
  const sky: Star[] = []
  for (let i = 0; i < 200; i++) {
    const x = rng() * 1920
    const y = 90 + rng() * 560
    const r = 0.35 + rng() * 1.35
    const fill = rng() > 0.86 ? '#6B1E1E' : '#0E0E0C'
    const opacity = 0.05 + rng() * 0.28
    sky.push({ cx: +x.toFixed(2), cy: +y.toFixed(2), r: +r.toFixed(2), fill, opacity: +opacity.toFixed(2) })
  }
  const ground: Node[] = []
  for (let i = 0; i < 130; i++) {
    const x = rng() * 1920
    const y = 700 + rng() * 380
    const r = 0.4 + rng() * 1.6
    const fill = rng() > 0.72 ? '#6B1E1E' : '#0E0E0C'
    const opacity = 0.06 + rng() * 0.16
    const n: Node = { cx: +x.toFixed(2), cy: +y.toFixed(2), r: +r.toFixed(2), fill, opacity: +opacity.toFixed(2) }
    if (i > 0 && i % 5 === 0) {
      n.line = {
        x2: +Math.max(0, x - 35 - rng() * 105).toFixed(2),
        y2: +Math.max(690, y - 12 - rng() * 65).toFixed(2),
      }
    }
    ground.push(n)
  }
  return { sky, ground }
}

export default function HeroFrame() {
  const rootRef = useRef<HTMLElement>(null)
  const { sky, ground } = useMemo(buildField, [])

  // Fit mode: wide screens get an immersive full-bleed cover (starfield fills
  // the viewport, sides may crop); narrow screens contain-fit and bottom-anchor
  // so the whole barbell — both extremes and their labels — stays visible.
  // Defaults to `true` so server + first client render agree (no hydration
  // mismatch); the effect corrects it to the real breakpoint after mount.
  const [wide, setWide] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setWide(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const drawSelectors = ['#cable-underlay', '#cable-a', '#cable-b', '#cable-c', '#horizon-line']
      drawSelectors.forEach((sel) => {
        const path = root.querySelector<SVGPathElement>(sel)
        if (!path) return
        const len = path.getTotalLength()
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })
      })

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) {
        gsap.set(drawSelectors.join(','), { strokeDashoffset: 0 })
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      // Field + frame
      tl.from('#hero-sky circle', { opacity: 0, duration: 1.4, stagger: { amount: 1.1, from: 'random' }, ease: 'sine.out' }, 0.1)
      tl.from('#horizon-glow', { opacity: 0, duration: 1.7, ease: 'power1.out' }, 0.35)
      tl.to('#horizon-line', { strokeDashoffset: 0, duration: 2.3, ease: 'power2.inOut' }, 0.5)
      tl.from('.hero-frame-rule', { scaleX: 0, transformOrigin: 'left center', duration: 1.1, ease: 'expo.out' }, 0.3)

      // Cable draw between the extremes
      tl.to('#cable-underlay', { strokeDashoffset: 0, duration: 2.6, ease: 'sine.inOut' }, 0.9)
      tl.to('#cable-a', { strokeDashoffset: 0, duration: 2.3, ease: 'expo.inOut' }, 1.0)
      tl.to('#cable-c', { strokeDashoffset: 0, duration: 2.6, ease: 'sine.inOut' }, 1.1)
      tl.to('#cable-b', { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' }, 1.2)
      tl.from('#node-left, #node-right', { scale: 0, opacity: 0, transformOrigin: 'center', duration: 0.5, stagger: 0.16, ease: 'back.out(2)' }, 1.1)
      tl.from('#node-left-halo, #node-right-halo', { scale: 0.2, opacity: 0, transformOrigin: 'center', duration: 1.2, stagger: 0.12, ease: 'power2.out' }, 1.2)
      tl.from('#hero-labels text', { opacity: 0, y: 12, duration: 0.6, stagger: 0.14, ease: 'power3.out' }, 2.5)

      // Statement overlay
      tl.from('.hero-eyebrow', { x: -24, opacity: 0, duration: 0.7, ease: 'power4.out' }, 1.5)
      tl.from('.hero-h1', { y: 36, opacity: 0, duration: 1.05, ease: 'expo.out' }, 1.7)
      tl.from('.hero-cta', { y: 12, opacity: 0, duration: 0.7, ease: 'power3.out' }, 2.4)
      tl.from('.hero-rail', { opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out' }, 2.6)

      // The timeline is finite and settles to a still final frame — the only
      // living touch is a cheap, compositor-friendly CSS pulse on the two
      // extreme-node halos (see .hero-node-halo in v2.css), which the intro
      // switches on once the draw-in has resolved so it doesn't fight it.
      tl.call(() => {
        root.querySelectorAll('.hero-node-halo').forEach((el) => el.classList.add('is-live'))
      }, undefined, 3.4)
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      className="relative w-full"
      style={{ minHeight: '100vh', background: 'var(--v2-ivory)', overflow: 'hidden' }}
    >
      {/* Animated world — full-bleed background, cover-scaled */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio={wide ? 'xMidYMid slice' : 'xMidYMax meet'}
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-horizon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B1E1E" stopOpacity="0" />
            <stop offset="18%" stopColor="#B4744F" stopOpacity=".4" />
            <stop offset="52%" stopColor="#0E0E0C" stopOpacity=".55" />
            <stop offset="82%" stopColor="#B4744F" stopOpacity=".4" />
            <stop offset="100%" stopColor="#6B1E1E" stopOpacity="0" />
          </linearGradient>
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

        {/* Starfield */}
        <g id="hero-sky">
          {sky.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill} opacity={s.opacity} />
          ))}
        </g>

        {/* Ground network + horizon */}
        <g id="hero-ground">
          <path
            id="horizon-glow"
            d="M -220 787 Q 960 566 2140 787"
            fill="none"
            stroke="url(#hero-horizon)"
            strokeWidth="16"
            opacity=".22"
            filter="url(#hero-glow)"
          />
          <path
            id="horizon-line"
            d="M -220 787 Q 960 566 2140 787"
            fill="none"
            stroke="#0E0E0C"
            strokeWidth="1.2"
            opacity=".24"
          />
          <g id="hero-surface" opacity=".7">
            {ground.map((n, i) => (
              <g key={i}>
                {n.line && (
                  <line x1={n.cx} y1={n.cy} x2={n.line.x2} y2={n.line.y2} stroke="#0E0E0C" strokeWidth=".7" opacity={0.08} />
                )}
                <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} opacity={n.opacity} />
              </g>
            ))}
          </g>
        </g>

        {/* Cable barbell between the extremes */}
        <g id="hero-cable-system" fill="none" strokeLinecap="round">
          <path id="cable-underlay" d="M 118 540 C 340 430 520 470 712 568 C 856 642 1040 642 1208 548 C 1408 436 1592 438 1802 538" stroke="#6B1E1E" strokeWidth="26" opacity=".12" filter="url(#hero-glow)" />
          <path id="cable-a" d="M 118 540 C 340 430 520 470 712 568 C 856 642 1040 642 1208 548 C 1408 436 1592 438 1802 538" stroke="url(#hero-cable)" strokeWidth="2.6" />
          <path id="cable-b" d="M 118 540 C 344 456 520 494 700 578 C 860 652 1048 626 1212 536 C 1404 430 1590 466 1802 538" stroke="#0E0E0C" strokeWidth="1.1" opacity=".38" />
          <path id="cable-c" d="M 118 540 C 332 414 526 446 722 556 C 864 636 1038 656 1202 560 C 1414 438 1598 416 1802 538" stroke="#6B1E1E" strokeWidth="1.1" opacity=".5" />
          <circle id="node-left-halo" className="hero-node-halo" cx="118" cy="540" r="30" fill="#6B1E1E" opacity=".22" filter="url(#hero-glow)" />
          <circle id="node-right-halo" className="hero-node-halo" cx="1802" cy="538" r="30" fill="#6B1E1E" opacity=".22" filter="url(#hero-glow)" />
          <circle id="node-left" cx="118" cy="540" r="7" fill="#6B1E1E" />
          <circle id="node-right" cx="1802" cy="538" r="7" fill="#6B1E1E" />
        </g>

        {/* Extreme + middle labels */}
        <g id="hero-labels" fill="#5A5449" fontFamily="var(--v2-mono-font)" fontSize="14" letterSpacing="2.6">
          <text x="82" y="498">ANCIENT</text>
          <text x="1710" y="496">FRONTIER</text>
          <text x="902" y="676" opacity=".62">THE MIDDLE</text>
        </g>
      </svg>

      {/* Thin frame rule under the header line */}
      <div
        aria-hidden
        className="hero-frame-rule hidden lg:block absolute"
        style={{ left: '2.5rem', right: '2.5rem', top: '6.5rem', height: '1px', background: 'var(--v2-rule)' }}
      />

      {/* Side rail labels */}
      <div className="hero-rail hidden lg:block absolute left-10 bottom-12 v2-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: 'var(--v2-ink-4)' }}>
        <div>Est. 2019</div>
        <div className="mt-1">Reasoning archive</div>
      </div>
      <div className="hero-rail hidden lg:block absolute right-10 bottom-12 v2-mono text-[10px] tracking-[0.22em] uppercase text-right" style={{ color: 'var(--v2-ink-4)' }}>
        <div>Sydney · Global</div>
        <div className="mt-1">cable.capital</div>
      </div>

      {/* Statement */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-44 lg:pt-56 pb-28">
        <p
          className="hero-eyebrow v2-mono text-[11px] tracking-[0.22em] uppercase mb-8"
          style={{ color: 'var(--v2-oxblood)' }}
        >
          Est. 2019 · Ideas at the edges
        </p>

        <h1
          className="hero-h1 v2-serif"
          style={{
            fontSize: 'clamp(3.25rem, 8vw, 7.5rem)',
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            color: 'var(--v2-ink)',
            maxWidth: 'min(16ch, 100%)',
          }}
        >
          Big ideas,<br />
          specific bets<br />
          <span className="v2-editorial italic" style={{ color: 'var(--v2-oxblood)' }}>
            &amp; rabbit holes
          </span>
        </h1>

        <div className="hero-cta mt-12">
          <Link
            href="/thesis"
            className="v2-mono text-[11px] tracking-[0.22em] uppercase inline-flex items-center gap-3 v2-link-underline pb-1"
            style={{ color: 'var(--v2-oxblood)' }}
          >
            Start with the theses <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
