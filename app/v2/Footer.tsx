'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--v2-ink)',
        color: 'var(--v2-ivory)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'rgba(246,242,234,0.55)' }}>
              Direct inquiries
            </div>
            <a
              href="mailto:info@cable.capital"
              className="v2-serif"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1,
                letterSpacing: '-0.015em',
              }}
            >
              info@cable.capital
            </a>
            <p className="mt-8 max-w-[40ch] text-[15px] leading-[1.65]" style={{ color: 'rgba(246,242,234,0.7)' }}>
              If you've come this far, don't be afraid to reach out!
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'rgba(246,242,234,0.55)' }}>
              The record
            </div>
            <ul className="space-y-3 v2-serif text-[20px]" style={{ letterSpacing: '-0.01em' }}>
              <li><a href="/thesis" className="v2-link-underline pb-0.5">Theses</a></li>
              <li><a href="/memos" className="v2-link-underline pb-0.5">Memos</a></li>
              <li><a href="/papers" className="v2-link-underline pb-0.5">Research</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'rgba(246,242,234,0.55)' }}>
              More
            </div>
            <ul className="space-y-3 v2-serif text-[20px]" style={{ letterSpacing: '-0.01em' }}>
              <li><a href="/investments" className="v2-link-underline pb-0.5">Investments</a></li>
              <li><a href="/v2/barbell" className="v2-link-underline pb-0.5">Barbell</a></li>
              <li><a href="/about" className="v2-link-underline pb-0.5">About Chris</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(246,242,234,0.12)' }}>
          <span className="v2-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: 'rgba(246,242,234,0.45)' }}>
            © {new Date().getFullYear()} Cable Capital
          </span>
          <span className="v2-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: 'rgba(246,242,234,0.45)' }}>
            Sydney · Global
          </span>
        </div>
      </div>
    </footer>
  )
}
