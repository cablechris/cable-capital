import Link from 'next/link'
import V2Shell from './v2/V2Shell'

export const metadata = {
  title: 'Not found',
}

export default function NotFound() {
  return (
    <V2Shell>
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 pt-40 lg:pt-52 pb-40">
        <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-oxblood)' }}>
          404
        </div>
        <h1
          className="v2-serif"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.02, letterSpacing: '-0.02em', maxWidth: 'min(18ch, 100%)' }}
        >
          Nothing on the record here.
        </h1>
        <p className="mt-7 text-[17px] leading-[1.65] max-w-[46ch]" style={{ color: 'var(--v2-ink-2)' }}>
          This page doesn&apos;t exist, or hasn&apos;t been written down yet.
        </p>
        <div className="mt-10 flex gap-8 v2-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: 'var(--v2-ink-3)' }}>
          <Link href="/v2" className="v2-link-underline pb-1">Home</Link>
          <Link href="/thesis" className="v2-link-underline pb-1">The record</Link>
        </div>
      </div>
    </V2Shell>
  )
}
