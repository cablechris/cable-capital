import Image from 'next/image'
import V2Shell from '../v2/V2Shell'

export const metadata = {
  title: 'Investments',
  description: 'How I invest around technological shifts through specialist funds and high-conviction direct investments, alongside a selected investment record.',
}

type LogoItem = { name: string; href?: string; src?: string; alt?: string }

const selectedRecord = [
  { year: '2013', name: 'Bitcoin', role: 'Initial investment' },
  { year: '2015', name: 'Numerai', role: 'Seeded' },
  { year: '2016', name: 'Polychain Capital', role: 'Seeded' },
  { year: '2017', name: '1kx', role: 'Seeded' },
  { year: '2020', name: 'Flamingo DAO', role: 'Helped establish' },
  { year: '2022', name: 'Bankless Ventures', role: 'Seeded' },
]

const logos: { funds: LogoItem[]; daos: LogoItem[]; venture: LogoItem[] } = {
  funds: [
    { href: 'https://numer.ai/', src: '/assets/logos/numerai.png', alt: 'Numerai logo', name: 'Numerai' },
    { href: 'https://polychain.capital/', src: '/assets/logos/Polychain.png', alt: 'Polychain Capital logo', name: 'Polychain' },
    { href: 'https://1kx.capital/', name: '1kx' },
    { href: 'https://bankless.ventures/', src: '/assets/logos/banklessventures.png', alt: 'Bankless Ventures logo', name: 'Bankless Ventures' },
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
  // Logos to be added per-company: drop a PNG in /public/assets/logos and set
  // `src` (+ `href`). Until then each tile renders the name as a wordmark.
  venture: [
    { name: 'Innerworks', href: 'https://innerworks.me/' },
    { name: 'General Tensor', href: 'https://www.generaltensor.io/' },
    { name: 'Sourceful', href: 'https://srcful.io/' },
    { name: 'Pluralis', href: 'https://pluralis.ai/' },
    { name: 'Aalo', href: 'https://aalo.com/' },
    { name: 'Apptronik', href: 'https://apptronik.com/' },
    { name: 'Varda', href: 'https://www.varda.com/' },
    { name: 'Prometheus' },
  ],
}

function Tile({ item }: { item: LogoItem }) {
  const cls = 'investment-tile group relative flex items-center justify-center aspect-[3/2] transition-colors'
  const style = { background: 'var(--v2-ivory-dim)', border: '1px solid var(--v2-rule)' } as const

  const inner = item.src ? (
    <>
      <div className="investment-logo relative w-2/3 h-2/3">
        <Image src={item.src} alt={item.alt || item.name} fill className="object-contain" style={{ filter: 'grayscale(100%)', opacity: 0.75 }} sizes="200px" />
      </div>
      <span
        className="investment-label absolute bottom-3 left-1/2 -translate-x-1/2 v2-mono text-[10px] tracking-[0.14em] uppercase opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: 'var(--v2-ink-3)' }}
      >
        {item.name}
      </span>
    </>
  ) : (
    <span
      className="v2-serif text-center px-3"
      style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)', letterSpacing: '-0.01em', color: 'var(--v2-ink-2)' }}
    >
      {item.name}
    </span>
  )

  return item.href ? (
    <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name} className={cls} style={style}>
      {inner}
    </a>
  ) : (
    <div key={item.name} className={cls} style={style}>
      {inner}
    </div>
  )
}

function LogoGrid({ items }: { items: LogoItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
      {items.map((item) => (
        <Tile key={item.name} item={item} />
      ))}
    </div>
  )
}

export default function Investments() {
  return (
    <V2Shell>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Page header */}
        <div className="pb-14 mb-14" style={{ borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
            Investment approach
          </div>
          <h1
            className="v2-serif"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
          >
            Investments
          </h1>
          <div className="mt-8 grid gap-5 text-[17px] leading-[1.75] max-w-[72ch]" style={{ color: 'var(--v2-ink-2)' }}>
            <p>
              I invest around technological shifts before they become institutionally obvious. I
              look for exceptional founders and specialist managers with differentiated insight,
              access or technical depth, operating in markets where new capabilities can create
              nonlinear outcomes.
            </p>
            <p>
              I use funds to access ecosystems and domain expertise, and make direct investments
              where I have stronger conviction in the team, timing and market structure. Because
              these opportunities are inherently uncertain, I accept a high individual failure
              rate in exchange for asymmetric upside, managing risk through position sizing,
              diversification and long holding periods.
            </p>
          </div>
        </div>

        <div className="mb-12 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-4 lg:mb-0 lg:col-span-3" style={{ color: 'var(--v2-oxblood)' }}>
            Selected investments
          </div>
          <p className="text-[16px] leading-[1.7] lg:col-span-9 max-w-[58ch]" style={{ color: 'var(--v2-ink-3)' }}>
            Funds I helped seed, DAOs I was a founding member of, and early venture bets.
          </p>
        </div>

        <section className="mb-16" aria-labelledby="selected-record-heading">
          <div
            id="selected-record-heading"
            className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6"
            style={{ color: 'var(--v2-ink-4)' }}
          >
            Selected record
          </div>
          <div style={{ borderTop: '1px solid var(--v2-rule)' }}>
            {selectedRecord.map((item) => (
              <div
                key={`${item.year}-${item.name}`}
                className="grid grid-cols-[4.5rem_1fr] md:grid-cols-[6rem_1fr_1fr] gap-x-4 gap-y-1 py-4 items-baseline"
                style={{ borderBottom: '1px solid var(--v2-rule)' }}
              >
                <span className="v2-mono text-[11px] tracking-[0.14em]" style={{ color: 'var(--v2-oxblood)' }}>
                  {item.year}
                </span>
                <span className="v2-serif text-[20px]" style={{ color: 'var(--v2-ink)' }}>
                  {item.name}
                </span>
                <span className="col-start-2 md:col-start-3 text-[14px]" style={{ color: 'var(--v2-ink-3)' }}>
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Funds */}
        <section className="mb-16">
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-ink-4)' }}>
            Funds
          </div>
          <LogoGrid items={logos.funds} />
        </section>

        {/* DAOs */}
        <section className="mb-16">
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-ink-4)' }}>
            DAOs
          </div>
          <LogoGrid items={logos.daos} />
        </section>

        {/* Venture bets */}
        <section>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-ink-4)' }}>
            Venture bets
          </div>
          <LogoGrid items={logos.venture} />
        </section>
      </div>
    </V2Shell>
  )
}
