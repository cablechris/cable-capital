'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function BarbellManifesto() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const mm = gsap.matchMedia(rootRef)

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const root = rootRef.current!

      /* page progress hairline */
      gsap.to('.bb-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
      })

      /* reading sections: gentle reveal on headings + ledes */
      gsap.utils.toArray<HTMLElement>('.bb-essay').forEach((section) => {
        gsap.from(section.querySelectorAll('.bb-rev'), {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', once: true },
        })
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <div ref={rootRef} className="bb-root v2-grain">
      <div className="bb-progress" aria-hidden />

      <nav className="bb-nav">
        <Link href="/v2">Cable Capital</Link>
        <span>The Barbell · A Manifesto</span>
      </nav>

      {/* Essay — opening */}
      <section className="bb-essay bb-essay--intro">
        <h1 className="bb-essay-title bb-rev">
          Avoiding the Middle: Why Life&apos;s Biggest Returns Come from the Extremes
        </h1>
        <p className="bb-essay-lede bb-rev">
          Most people spend their lives seeking balance through moderation. But what if that&apos;s
          exactly what&apos;s holding them back? The barbell strategy - and my favorite meme of all
          time - reveal why the comfortable middle is actually the riskiest place to be.
        </p>
        <p>
          The barbell strategy seems like just investment advice at first: put most of your assets
          in extremely safe investments and a small portion in highly speculative ones, avoiding
          everything in between. But it&apos;s actually a blueprint for how life works: the real
          opportunities, the asymmetric returns, come from operating at the extremes while avoiding
          the mediocre middle.
        </p>
        <p>
          What&apos;s compelling isn&apos;t the traditional focus on the average - it&apos;s the
          recognition of where value emerges: at one end, those with lower IQ scores often succeed by
          keeping things simple and relying on intuition built over thousands of years of human
          evolution. At the other, those with higher IQ scores push theoretical boundaries and spot
          patterns others miss. Both extremes drive progress in their own unique ways, while the
          comfortable middle - despite having &apos;average&apos; intelligence - often produces
          little of lasting value.
        </p>
        <p>
          These two models - the barbell strategy and the reverse bell curve - are really telling us
          the same thing: the middle is a trap.
        </p>
        <p>
          In investing, a &quot;balanced&quot; portfolio often means accepting hidden risks without
          corresponding rewards. In life, seeking moderation in everything means never achieving
          depth in anything. The majority clusters in the middle because it feels safe, but that
          perceived safety is an illusion.
        </p>
      </section>

      {/* Essay — how I try to live this */}
      <section className="bb-essay">
        <h2 className="bb-rev">How I Try to Live This Philosophy</h2>
        <p className="bb-essay-lede bb-rev">
          I&apos;ve structured my life around this barbell principle, constantly seeking to operate
          at meaningful extremes while avoiding the mediocre middle:
        </p>
        <p className="bb-essay-sub">
          At one end of the spectrum, I embrace the fundamentals of human existence:
        </p>
        <p>
          Every morning, my wife and I walk our children to daycare. While the world rushes to
          optimize everything, we take the long way by the water. No phones, no podcasts - just us,
          enjoying nature and each other&apos;s company. These quiet morning walks have become one
          of the best parts of our day.
        </p>
        <p>
          My workout routine reflects this same philosophy. I do high-intensity workouts focused
          purely on compound movements at home. This setup lets me keep an eye on my kids while
          demonstrating the importance of physical cultivation - they see dad doing pull-ups and
          squats, creating a natural bridge between family life and personal development.
        </p>
        <p>
          In the evening, I try to maintain a strict reading habit with physical books as part of my
          wind-down routine. It&apos;s a deliberate transition from the digital to the analog world,
          helping maintain consistent circadian rhythms.
        </p>
        <p>
          Even socializing follows this anti-memetic pattern. At one end, deep conversations with
          close friends that can last for hours. At the other, fully committed celebrations where
          I&apos;m completely present. What I avoid is the memetic middle ground - the obligatory
          drinks, the casual networking, the half-hearted social commitments that neither deepen
          relationships nor create memorable experiences.
        </p>
        <p className="bb-essay-sub">
          At the other extreme, I dive deep into frontier technologies:
        </p>
        <p>
          I actively explore cutting-edge developments in AI and crypto, making it a priority to
          attend key conferences around the world several times per year. These conferences let me
          pressure-test my thinking directly with the people building frontier technologies - the
          signal-to-noise ratio is worth the time investment.
        </p>
        <p>
          I make concentrated bets on transformative projects and do my best to stay current with
          cutting-edge research papers and novel theoretical frameworks. When I&apos;m in this mode,
          I&apos;m fully there - no half measures, no hedging.
        </p>
        <p className="bb-essay-sub">What I consciously avoid - the middle ground:</p>
        <ul>
          <li>Mindless social media browsing (I try do this by using Lists on this website)</li>
          <li>&quot;Balanced&quot; workouts that achieve neither strength nor skill</li>
          <li>
            That dangerous middle ground of knowledge where you&apos;ve read enough to have an
            opinion, but as Munger says, not enough to argue the other side&apos;s position better
            than they can.
          </li>
          <li>The illusion of productivity through constant connectivity</li>
          <li>Moderate positions that seem safe but compound hidden risks</li>
        </ul>
      </section>

      {/* Essay — the investment parallel */}
      <section className="bb-essay">
        <h2 className="bb-rev">The Investment Parallel</h2>
        <p>
          This pattern becomes even clearer in how I approach investing. At one end, I focus on real
          estate in scarce, desirable locations - waterfront, walkable, community-rich areas. These
          aren&apos;t just amenities; they&apos;re expressions of fundamental human preferences that
          have endured for millennia.
        </p>
        <p>
          At the other end, I make concentrated investments in truly transformative technologies.
          Not scattered bets across every trending sector, but carefully chosen positions in
          projects that could fundamentally reshape our future. I avoid the middle - no
          &quot;balanced&quot; mutual funds, no moderate-risk investments that offer neither safety
          nor significant upside.
        </p>
      </section>

      {/* Essay — the power of separation */}
      <section className="bb-essay">
        <h2 className="bb-rev">The Power of Separation</h2>
        <p>
          The key isn&apos;t the specific extremes you choose - it&apos;s maintaining the separation
          between them. When I&apos;m walking with my family, I&apos;m fully present in that ancient
          human ritual. When I&apos;m deep in technical research or at a frontier tech conference,
          I&apos;m fully engaged with the bleeding edge. No checked emails during family dinner, no
          distracted parenting during deep work.
        </p>
        <p>
          Some will argue this approach requires wealth. But the barbell strategy isn&apos;t about
          amounts - it&apos;s about patterns. Walking in nature is free. Reading research papers
          costs nothing. Making concentrated but small bets is possible for anyone. And most
          importantly, allocating your attention to the extremes - being fully present with family
          or deeply focused on learning - costs nothing but creates enormous value. The key
          isn&apos;t having more resources - it&apos;s avoiding the trap of spreading whatever
          resources you have, especially your attention, too thinly across the middle.
        </p>
        <p>
          Some might see this approach as impractical or extreme. But I&apos;ve found that this
          deliberate separation actually creates more space in life. The morning walks inform the
          technical insights. The physical training grounds the abstract thinking. By rejecting the
          comfortable middle, each activity becomes not just more focused but more alive.
        </p>
        <p>
          There&apos;s no perfect answer to life&apos;s complexity. But that simple IQ distribution
          meme reveals a profound truth: while everyone rushes to the middle seeking safety, the real
          returns - in life, learning, and wealth - quietly compound at the edges.
        </p>
      </section>
    </div>
  )
}
