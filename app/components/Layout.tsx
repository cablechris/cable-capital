'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { href: '/supply-chain', label: 'Supply Chain' },
    { href: '/consulting', label: 'Consulting' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-base font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors">
              Cable Capital
            </Link>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors group ${
                    pathname === item.href || pathname?.startsWith(item.href + '/')
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-gray-900 transition-all duration-300 ease-out ${
                    pathname === item.href || pathname?.startsWith(item.href + '/')
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-500 hover:text-gray-900"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-[#F8F7F4]">
            <div className="max-w-5xl mx-auto px-6 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {children}
      </main>

      <footer className="border-t border-gray-100 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-400">© {new Date().getFullYear()} Cable Capital</span>
          <a href="mailto:info@cable.capital" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            info@cable.capital
          </a>
        </div>
      </footer>
    </div>
  );
} 