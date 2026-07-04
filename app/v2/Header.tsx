'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-colors"
      style={{
        backdropFilter: scrolled || menuOpen ? 'saturate(140%) blur(12px)' : 'none',
        background: scrolled || menuOpen ? 'rgba(246, 242, 234, 0.72)' : 'transparent',
        borderBottom: scrolled || menuOpen ? '1px solid var(--v2-rule)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/v2"
            className="v2-mono text-[11px] tracking-[0.22em] uppercase flex items-center gap-3"
            style={{ color: 'var(--v2-ink)' }}
            onClick={() => setMenuOpen(false)}
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

          <div className="flex items-center gap-3">
            <a
              href="mailto:info@cable.capital"
              className="hidden sm:inline-flex v2-mono text-[11px] tracking-[0.18em] uppercase px-4 py-2 border rounded-full"
              style={{ borderColor: 'var(--v2-rule-strong)', color: 'var(--v2-ink)' }}
            >
              info@cable.capital
            </a>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10"
            >
              <span
                className="block w-5 h-px transition-transform"
                style={{
                  background: 'var(--v2-ink)',
                  transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-5 h-px transition-transform"
                style={{
                  background: 'var(--v2-ink)',
                  transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'var(--v2-ivory)', borderBottom: '1px solid var(--v2-rule)' }}
          >
            <nav className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="v2-serif py-3"
                  style={{ fontSize: '1.5rem', letterSpacing: '-0.01em', color: 'var(--v2-ink)', borderBottom: '1px solid var(--v2-rule)' }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:info@cable.capital"
                className="v2-mono text-[11px] tracking-[0.18em] uppercase mt-6"
                style={{ color: 'var(--v2-ink-3)' }}
              >
                info@cable.capital
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
