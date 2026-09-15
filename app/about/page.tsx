import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '../components/JsonLd'
import { profilePageStructuredData } from '../lib/structured-data'
import V2Shell from '../v2/V2Shell'

export const metadata = {
  title: 'About',
  description: 'Chris Cable: investor, operator and father based in Sydney. AI, crypto, frontier science, the barbell philosophy, and time on the water.',
}

export default function About() {
  return (
    <V2Shell>
      <JsonLd data={profilePageStructuredData} />
      <div className="about-personal max-w-[800px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-10" style={{ color: 'var(--v2-oxblood)' }}>A little context</div>
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-10 overflow-hidden" style={{ background: 'var(--v2-ivory-2)', borderRadius: '4px' }}>
          <Image src="/images/headshot.png" alt="Chris Cable" fill priority sizes="(max-width: 767px) 160px, 192px" className="object-cover" style={{ filter: 'grayscale(100%) contrast(1.05)' }} />
        </div>
        <h1 className="v2-serif text-5xl mb-8">Chris Cable</h1>
        <p className="about-intro">Investor, operator, father. Based in Sydney, drawn to AI, crypto and frontier science.</p>
        <div className="about-prose">
          <p>I began my career in investment banking as an equity analyst, before moving to New York to lead insights and analytics at Diageo. That path gave me a grounding in both financial analysis and the day-to-day decisions that shape a business.</p>
          <p>Investing has been the thread throughout. I became interested in Bitcoin in 2013, began backing emerging alternative managers in 2015 and, since 2020, have managed a private portfolio across funds and direct investments.</p>
          <p>Today, I follow questions across AI infrastructure, decentralized intelligence and frontier science. I develop theses, test ideas and write down what I see, including the evidence that would change my mind. This site is where I share that work.</p>
        </div>
        <section className="about-chapter" aria-labelledby="barbell-heading">
          <p className="about-label">A philosophy for life</p>
          <h2 id="barbell-heading">The barbell, beyond investing.</h2>
          <div className="about-prose">
            <p>The barbell philosophy resonates with me well beyond a portfolio. I try to look at most of life through that lens: build a strong foundation around what matters, while leaving room to explore, experiment and take considered risks.</p>
            <p>That shows up in ordinary ways, too. I make a point of training in front of my kids, mostly with kettlebells. I&rsquo;m also trying to spend more time with them on the water, taking the boat out and fishing around Little Manly Point.</p>
          </div>
          <Link className="about-inline-link" href="/barbell">Read my barbell philosophy <span aria-hidden="true">↗</span></Link>
        </section>
        <a className="about-water-card" href="https://little-manly-aerial.cablechriscable.chatgpt.site/" target="_blank" rel="noopener noreferrer">
          <span className="about-label">On the water</span>
          <span className="about-water-title">A little corner of Sydney Harbour.<span aria-hidden="true">↗</span></span>
          <span className="about-water-copy">Explore Little Manly Point from above — where I take the boat out with the kids to go fishing.</span>
          <span className="about-water-action">Visit Little Manly <span className="sr-only">(opens in a new tab)</span></span>
        </a>
        <section className="about-chapter" aria-labelledby="conversation-heading">
          <p className="about-label">Good conversations</p>
          <h2 id="conversation-heading">Compare notes.</h2>
          <div className="about-prose"><p>I&rsquo;m always interested in meeting founders and builders, fellow investors, and researchers working on questions that deserve more attention. If something here overlaps with your work, or you see it differently, I&rsquo;d enjoy hearing from you.</p></div>
          <a className="about-inline-link" href="mailto:info@cable.capital">Say hello <span aria-hidden="true">↗</span></a>
        </section>
      </div>
    </V2Shell>
  )
}
