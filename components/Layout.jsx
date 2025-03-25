import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">CC</Link>
          <nav className="nav">
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="https://twitter.com/placeholder" className="nav-link">Twitter</Link>
            <Link href="/">
              <Image 
                src="/images/bored-ape.png" 
                alt="Bored Ape" 
                width={36} 
                height={36} 
                className="profile-img"
              />
            </Link>
          </nav>
        </div>
      </header>
      <main className="main container">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p>© 2025 Cable Capital</p>
            <div className="nav">
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/projects" className="nav-link">Projects</Link>
              <Link href="/about" className="nav-link">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 