'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const nav = [
  { href: '/thesis', label: 'Theses' },
  { href: '/memos', label: 'Memos' },
  { href: '/papers', label: 'Research' },
  { href: '/investments', label: 'Investments' },
  { href: '/v2/barbell', label: 'Barbell' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-colors"
      style={{
        backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
        background: scrolled ? 'rgba(246, 242, 234, 0.72)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--v2-rule)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/v2"
            className="v2-mono text-[11px] tracking-[0.22em] uppercase flex items-center gap-3"
            style={{ color: 'var(--v2-ink)' }}
          >
            <span
              className="inline-block w-[18px] h-px"
              style={{ background: 'var(--v2-oxblood)' }}
            />
            Cable Capital
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="v2-mono text-[11px] tracking-[0.18em] uppercase"
                style={{ color: 'var(--v2-ink-2)' }}
              >
                <span className="v2-link-underline pb-1">{item.label}</span>
              </Link>
            ))}
          </nav>
          <a
            href="mailto:info@cable.capital"
            className="v2-mono text-[11px] tracking-[0.18em] uppercase px-4 py-2 border rounded-full"
            style={{ borderColor: 'var(--v2-rule-strong)', color: 'var(--v2-ink)' }}
          >
            info@cable.capital
          </a>
        </div>
      </div>
    </header>
  )
}
