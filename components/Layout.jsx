"use client"

import Link from 'next/link'
import Image from 'next/image'
import Bio from './Bio'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
  const pathname = usePathname()
  const showBio = pathname === '/about'

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 py-4">
        <nav className="container flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            CC
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/blog" className={`nav-link ${pathname === '/blog' ? 'text-black' : ''}`}>
              Blog
            </Link>
            <Link href="/projects" className={`nav-link ${pathname === '/projects' ? 'text-black' : ''}`}>
              Projects
            </Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'text-black' : ''}`}>
              About
            </Link>
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image 
                src="/images/bored-ape.png" 
                alt="Bored Ape" 
                width={48} 
                height={48}
                className="object-cover"
              />
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 w-full py-12">
        <div className="container">
          {showBio && <Bio />}
          {children}
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="container flex justify-between items-center">
          <p className="text-gray-600">© 2024 Cable Capital</p>
          <div className="flex gap-8">
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
            <Link href="/about" className="nav-link">About</Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .container {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .nav-link {
          color: #555;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #000;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #333;
        }

        h2 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          color: #444;
        }
      `}</style>
    </div>
  )
} 