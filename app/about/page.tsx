import Image from 'next/image'
import V2Shell from '../v2/V2Shell'

export const metadata = {
  title: 'About',
  description:
    'A decade reading how systems fail and positioning around the alternatives. Investment banking, operator work at Diageo, and now allocating capital at the edges.',
}

export default function About() {
  return (
    <V2Shell>
      <div className="max-w-[720px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-10" style={{ color: 'var(--v2-oxblood)' }}>
          About
        </div>

        <div
          className="relative w-32 h-32 md:w-36 md:h-36 mb-12 overflow-hidden"
          style={{ background: 'var(--v2-ivory-2)' }}
        >
          <Image
            src="/images/headshot.png"
            alt="Chris Cable"
            fill
            sizes="144px"
            className="object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.05)' }}
          />
        </div>

        <div className="space-y-7">
          <p className="text-[19px] leading-[1.7]" style={{ color: 'var(--v2-ink)' }}>
            I have spent more than a decade reading how systems fail and positioning around the
            alternatives. It started with Bitcoin in 2013, when concentrating trust in central
            institutions looked like a structural fragility rather than a feature. The same lens
            now runs across chips, photonics, decentralized intelligence, bioelectricity, and
            physical supply chains.
          </p>

          <p className="text-[19px] leading-[1.7]" style={{ color: 'var(--v2-ink)' }}>
            I tend to develop over-arching theses and invest in projects and protocols that are
            well positioned to ride on their coat-tails. Interconnects and power underneath the
            AI trade. Neutrality and privacy underneath the intelligence race. Morphogenetic
            signaling underneath biology. I try to catch that layer while it&rsquo;s still early
            and write down what I see.
          </p>

          <p className="text-[19px] leading-[1.7]" style={{ color: 'var(--v2-ink)' }}>
            I began my career in investment banking as an equity analyst, which gave me a deep
            grounding in financial analysis, valuation and markets. I subsequently moved to New
            York, where I led insights and analytics at Diageo, developing an operator&rsquo;s
            perspective on strategy, consumer insights and commercial decision-making. Investing
            remained the consistent thread throughout my career: I began backing emerging
            alternative managers in 2016 and, since 2020, have managed a private portfolio across
            funds and direct investments.
          </p>

          <p className="text-[19px] leading-[1.7]" style={{ color: 'var(--v2-ink)' }}>
            Based in Sydney.
          </p>
        </div>
      </div>
    </V2Shell>
  )
}
