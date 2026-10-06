'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navigation = [
  { href: '/thesis', label: 'Theses & memos' },
  { href: '/research', label: 'Research & writing' },
  { href: '/investments', label: 'Investments' },
  { href: '/about', label: 'About' },
];

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    if (menuOpen) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else if (dialog.open) {
      dialog.close();
    }
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  const active = (href: string) => {
    if (href === '/thesis') return /^\/(thesis|memos)(\/|$)/.test(pathname);
    if (href === '/research') return /^\/(research|papers|blog|barbell)(\/|$)/.test(pathname);
    return pathname === href;
  };

  return (
    <>
      <header className={`site-nav-header${home ? ' is-home' : ''}`}>
        <Link className="site-brand" href={home ? '#top' : '/'}>Cable Capital</Link>
        <nav className="site-desktop-nav" aria-label="Main navigation">
          {navigation.map(item => (
            <Link key={item.href} href={item.href} aria-current={active(item.href) ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="site-contact" href="mailto:info@cable.capital">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <button className="site-menu-toggle" type="button" onClick={() => setMenuOpen(true)} aria-expanded={menuOpen} aria-controls="site-menu">
          Menu <span aria-hidden="true">☰</span>
        </button>
      </header>
      <dialog id="site-menu" className="site-menu" ref={dialogRef} onClose={() => setMenuOpen(false)} onCancel={() => setMenuOpen(false)} aria-label="Site navigation">
        <div className="site-menu-top">
          <Link href="/" onClick={() => setMenuOpen(false)}>Cable Capital</Link>
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">Close ×</button>
        </div>
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          {navigation.map(item => (
            <Link key={item.href} href={item.href} aria-current={active(item.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
              {item.label}<span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <a className="site-menu-email" href="mailto:info@cable.capital">info@cable.capital ↗</a>
      </dialog>
    </>
  );
}
