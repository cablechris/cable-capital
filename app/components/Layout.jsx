'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/blog', label: 'Blog' },
    { href: '/papers', label: 'Papers' },
    { href: '/talks', label: 'Talks' },
    { href: '/about', label: 'About' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              CC
            </Link>
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Image
                src="/images/bored-ape.png"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full ml-4"
                priority
              />
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        {children}
      </main>
    </div>
  );
} 