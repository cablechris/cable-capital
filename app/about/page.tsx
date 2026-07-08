import Image from 'next/image'
import Link from 'next/link'
import V2Shell from '../v2/V2Shell'

export const metadata = {
  title: 'About',
  description: 'A public reasoning archive. Why it exists, what it stands for, the barbell, and the person behind it.',
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-oxblood)' }}>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <V2Shell>
      <div className="max-w-[760px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Header */}
        <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-oxblood)' }}>
          About
        </div>
        <h1
          className="v2-serif"
          style={{ fontSize: 'clamp(2.75rem, 6vw, 4.25rem)', lineHeight: 1.02, letterSpacing: '-0.02em', marginBottom: 40 }}
        >
          The layer beneath.
        </h1>
        <p className="v2-editorial italic text-[22px] leading-[1.45] mb-6" style={{ color: 'var(--v2-ink)' }}>
          This is where I put my reasoning on the record before it resolves, so later I can
          tell whether I actually understood something or just got lucky.
        </p>
        <p className="text-[17px] leading-[1.7]" style={{ color: 'var(--v2-ink-2)' }}>
          Three kinds of writing live here. Theses are the big structural bets, each with the
          positions I hold and the conditions that would prove me wrong. Memos take a single
          deal and work it end to end, down to a verdict I'm willing to be judged on. Research
          is whatever question won't leave me alone, from photonic interconnects to how
          coordination emerges in artificial systems.
        </p>

        <hr className="v2-hair my-16" />

        {/* Why it exists */}
        <Eyebrow>Why it exists</Eyebrow>
        <p className="text-[17px] leading-[1.7] mb-5" style={{ color: 'var(--v2-ink-2)' }}>
          I've had my share of wins. Some of it was judgment. A lot of it might have been luck,
          and the honest truth is I can't cleanly tell the two apart. While they're happening
          they look identical. You only learn which one you had long after.
        </p>
        <p className="text-[17px] leading-[1.7]" style={{ color: 'var(--v2-ink-2)' }}>
          So I do what the investors worth learning from all did: put the reasoning down before
          the outcome, where it can be checked. Do that honestly enough, over a long enough
          window, and you find out whether there was skill under the luck or just a streak. I
          would rather know than keep telling myself a story.
        </p>

        <hr className="v2-hair my-16" />

        {/* What it stands for */}
        <Eyebrow>What it stands for</Eyebrow>
        <p className="text-[17px] leading-[1.7] mb-5" style={{ color: 'var(--v2-ink-2)' }}>
          There's nothing to sell here. No fund raising money, no newsletter chasing
          subscribers, no service with a booking link at the bottom. That absence is deliberate.
          The moment you're selling something, you start bending the reasoning to fit the sale,
          usually without noticing. Taking the incentive out is the only way I know to keep the
          thinking honest.
        </p>
        <p className="text-[17px] leading-[1.7]" style={{ color: 'var(--v2-ink-2)' }}>
          So the one thing I want back is disagreement. If a thesis is wrong, I would rather
          hear it from you now than from the market later.
        </p>

        <hr className="v2-hair my-16" />

        {/* The barbell */}
        <Eyebrow>The barbell</Eyebrow>
        <p className="text-[17px] leading-[1.7] mb-6" style={{ color: 'var(--v2-ink-2)' }}>
          Everything here sits on a barbell. The safe end holds things that have worked for
          centuries and will keep working: real estate in scarce places, daily training,
          long-term people, enough cash to move when it counts. The wild end holds concentrated
          bets on a few frontier technologies I think the market has priced wrong. The middle,
          the hedged, diversified, responsible-looking middle, is the one place I refuse to
          stand, because it quietly guarantees you never get the big thing right.
        </p>
        <Link
          href="/v2/barbell"
          className="v2-mono text-[11px] tracking-[0.22em] uppercase inline-flex items-center gap-2 v2-link-underline pb-1"
          style={{ color: 'var(--v2-oxblood)' }}
        >
          Read the barbell <span>&rarr;</span>
        </Link>

        <hr className="v2-hair my-16" />

        {/* Principal */}
        <Eyebrow>Principal</Eyebrow>
        <div className="flex flex-col sm:flex-row sm:items-start gap-8 mb-10">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden" style={{ background: 'var(--v2-ivory-2)' }}>
              <Image
                src="/images/headshot.JPG"
                alt="Chris Cable"
                fill
                sizes="160px"
                className="object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.05)' }}
              />
            </div>
          </div>
          <div>
            <h2 className="v2-serif" style={{ fontSize: '1.9rem', lineHeight: 1.1, letterSpacing: '-0.015em' }}>
              Chris Cable
            </h2>
            <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mt-2" style={{ color: 'var(--v2-ink-4)' }}>
              Investor, operator
            </div>
          </div>
        </div>
        <p className="text-[17px] leading-[1.7] mb-5" style={{ color: 'var(--v2-ink-2)' }}>
          I have spent more than a decade reading how systems fail and positioning around the
          alternatives. It started with Bitcoin in 2013, when concentrating trust in central
          institutions looked like a structural fragility rather than a feature. The same lens
          now runs across chips, photonics, decentralized intelligence, bioelectricity, and
          physical supply chains.
        </p>
        <p className="text-[17px] leading-[1.7] mb-5" style={{ color: 'var(--v2-ink-2)' }}>
          The through-line is the substrate: the layer underneath the thing everyone else is
          watching. Interconnect underneath the AI trade. Neutrality underneath the intelligence
          race. Morphogenetic signaling underneath the biology. I try to catch that layer while
          it's still early and write down what I see, before I know whether I'm right.
        </p>
        <p className="text-[17px] leading-[1.7]" style={{ color: 'var(--v2-ink-2)' }}>
          Based in Sydney. Outside the work: calisthenics where the kids can see, time on the
          water, and raising three of them.
        </p>

        <hr className="v2-hair my-16" />

        {/* Contact */}
        <Eyebrow>Contact</Eyebrow>
        <p className="text-[17px] leading-[1.7] mb-6" style={{ color: 'var(--v2-ink-2)' }}>
          If you've come this far, don't be afraid to reach out!
        </p>
        <a
          href="mailto:info@cable.capital"
          className="v2-serif"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.015em', color: 'var(--v2-ink)' }}
        >
          <span className="v2-link-underline pb-1">info@cable.capital</span>
        </a>
      </div>
    </V2Shell>
  )
}
