import Image from 'next/image'
import V2Shell from '../v2/V2Shell'

export const metadata = {
  title: 'Investments',
  description: 'Funds I helped seed and DAOs I was a founding member of. Whether that was judgment or just being early is the question the rest of this site is trying to answer.',
}

const logos = {
  funds: [
    { href: 'https://polychain.capital/', src: '/assets/logos/Polychain.png', alt: 'Polychain Capital logo', name: 'Polychain' },
    { href: 'https://bankless.ventures/', src: '/assets/logos/banklessventures.png', alt: 'Bankless Ventures logo', name: 'Bankless Ventures' },
    { href: 'https://numer.ai/', src: '/assets/logos/numerai.png', alt: 'Numerai logo', name: 'Numerai' },
    { href: 'https://ox.partners/', src: '/assets/logos/0xpartners.png', alt: 'Ox Partners logo', name: 'Ox Partners' },
  ],
  daos: [
    { href: 'https://zerodao.io/', src: '/assets/logos/zerodao.png', alt: 'ZeroDAO logo', name: 'ZeroDAO' },
    { href: 'https://flamingodao.xyz/', src: '/assets/logos/flamingo.png', alt: 'Flamingo DAO logo', name: 'Flamingo DAO' },
    { href: 'https://readyplayerdao.xyz/', src: '/assets/logos/readyplayer.png', alt: 'Ready Player DAO logo', name: 'Ready Player DAO' },
    { href: 'https://neondao.xyz/', src: '/assets/logos/neon.png', alt: 'NEON DAO logo', name: 'NEON DAO' },
    { href: 'https://darkhorsedao.xyz/', src: '/assets/logos/darkhorse.png', alt: 'Dark Horse DAO logo', name: 'Dark Horse DAO' },
    { href: 'https://spaceshipdao.xyz/', src: '/assets/logos/spaceship.png', alt: 'Spaceship DAO logo', name: 'Spaceship DAO' },
  ],
}

function LogoGrid({ items }: { items: typeof logos.funds }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
      {items.map(({ href, src, alt, name }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="group relative flex items-center justify-center aspect-[3/2] transition-colors"
          style={{ background: 'var(--v2-ivory-dim)', border: '1px solid var(--v2-rule)' }}
        >
          <div className="relative w-1/2 h-1/2">
            <Image src={src} alt={alt} fill className="object-contain" style={{ filter: 'grayscale(100%)', opacity: 0.75 }} sizes="200px" />
          </div>
          <span
            className="absolute bottom-3 left-1/2 -translate-x-1/2 v2-mono text-[10px] tracking-[0.14em] uppercase opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: 'var(--v2-ink-3)' }}
          >
            {name}
          </span>
        </a>
      ))}
    </div>
  )
}

export default function Investments() {
  return (
    <V2Shell>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Page header */}
        <div className="pb-12 mb-14" style={{ borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
            Track record
          </div>
          <h1
            className="v2-serif"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
          >
            Investments
          </h1>
          <p className="mt-7 text-[17px] leading-[1.65] max-w-[56ch]" style={{ color: 'var(--v2-ink-2)' }}>
            Funds I helped seed and DAOs I was a founding member of. Some of these worked out
            well. Whether that was judgment or just being early is exactly the question the rest
            of this site is trying to answer.
          </p>
        </div>

        {/* Funds */}
        <section className="mb-16">
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-ink-4)' }}>
            Funds
          </div>
          <LogoGrid items={logos.funds} />
        </section>

        {/* DAOs */}
        <section>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-ink-4)' }}>
            DAOs
          </div>
          <LogoGrid items={logos.daos} />
        </section>
      </div>
    </V2Shell>
  )
}
