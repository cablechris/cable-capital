import Layout from './components/Layout'
import FadeIn from './components/FadeIn'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-[#e2ddd8]">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="w-8 h-px bg-primary mb-8" />
            <h1 className="font-serif text-4xl md:text-[2.75rem] text-gray-900 leading-tight mb-6">
              Continuity in complex markets.
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-xl font-light">
              We source critical chemicals and agricultural inputs for Australian businesses
              when traditional supply chains falter, and provide strategic advisory to
              organisations navigating complex market challenges.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/supply-chain"
                className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-[#F8F7F4] text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Supply Chain
                <svg className="ml-2 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/consulting"
                className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-600 text-sm font-medium hover:border-gray-500 hover:text-gray-900 transition-colors"
              >
                Consulting
                <svg className="ml-2 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="py-16 grid md:grid-cols-2 gap-12 border-b border-[#e2ddd8]">
        <FadeIn delay={0}>
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">Supply Chain</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
              Built before you need it
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              When geopolitical shocks, logistical failures, or supplier collapses disrupt access
              to chemicals and agricultural inputs, Australian businesses need alternatives that
              already exist — not ones built in a crisis.
            </p>
            <Link href="/supply-chain" className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center group transition-colors">
              Learn more
              <svg className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">Consulting</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
              Clarity in complex markets
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Through CPC Consulting LLC, we partner with a select number of organisations
              on high-stakes strategic challenges — from market entry and growth strategy
              to deal structuring and investment intelligence.
            </p>
            <Link href="/consulting" className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center group transition-colors">
              Learn more
              <svg className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Pull Quote — Approach */}
      <section className="py-20 border-b border-[#e2ddd8]">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-px h-10 bg-primary mx-auto mb-8" />
            <blockquote className="font-serif text-xl md:text-2xl text-gray-700 italic leading-relaxed">
              "Concentrated systems create fragility. The Strait of Hormuz, a single
              supplier, a dominant logistics route — these chokepoints look stable until
              they aren't. We think in second-order effects and build alternatives
              before they become urgent."
            </blockquote>
            <div className="w-px h-10 bg-primary mx-auto mt-8" />
          </div>
        </FadeIn>
      </section>

      {/* Contact Card */}
      <section className="py-16">
        <FadeIn>
          <div className="border border-[#e2ddd8] p-8 md:p-10 max-w-md">
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-5">Get in Touch</p>
            <p className="font-serif text-2xl text-gray-900 mb-1">Chris Cable</p>
            <p className="text-sm text-gray-400 mb-6">Cable Capital · CPC Consulting LLC</p>
            <a
              href="mailto:info@cable.capital"
              className="group inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span className="underline underline-offset-4 decoration-gray-300 group-hover:decoration-gray-600 transition-colors">
                info@cable.capital
              </span>
              <svg className="ml-2 w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </section>
    </Layout>
  )
}
