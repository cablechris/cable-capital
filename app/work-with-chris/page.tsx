import V2Shell from '../v2/V2Shell'

export const metadata = {
  title: 'Work with Chris',
  description:
    'Chris Cable works selectively with family offices, funds and founders on investment questions across AI, crypto and frontier science.',
}

const capabilities = [
  {
    title: 'Investment theses',
    description:
      'Develop a view on an emerging market, identify the layer where value may accrue and define the evidence that would change the conclusion.',
  },
  {
    title: 'Manager selection',
    description:
      'Assess specialist managers through the quality of their insight, access, incentives and ability to survive a full cycle.',
  },
  {
    title: 'Opportunity review',
    description:
      'Pressure-test a specific fund, company, protocol or asset with an emphasis on downside containment and nonlinear upside.',
  },
  {
    title: 'Independent perspective',
    description:
      'Act as a high-trust thought partner to a principal or investment committee when the opportunity sits outside the familiar map.',
  },
]

export default function WorkWithChris() {
  return (
    <V2Shell>
      <article className="max-w-[920px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        <header className="pb-14 mb-14" style={{ borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <p
            className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6"
            style={{ color: 'var(--v2-oxblood)' }}
          >
            Work with Chris
          </p>
          <h1
            className="v2-serif max-w-[15ch]"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.75rem)', lineHeight: 1.02, letterSpacing: '-0.025em' }}
          >
            An independent investment partner for unfamiliar markets.
          </h1>
          <div className="mt-9 grid gap-5 text-[18px] leading-[1.75] max-w-[68ch]" style={{ color: 'var(--v2-ink-2)' }}>
            <p>
              I work selectively with family offices, funds and founders confronting questions
              where the map is still being drawn—particularly across AI, crypto and frontier science.
            </p>
            <p>
              I am most useful before consensus forms: developing an investment view, selecting a
              specialist manager, evaluating an asymmetric opportunity or challenging the assumptions
              around an existing position.
            </p>
          </div>
        </header>

        <section className="mb-16" aria-labelledby="useful-for-heading">
          <p className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-ink-4)' }}>
            Where I can help
          </p>
          <h2 id="useful-for-heading" className="v2-serif text-[34px] md:text-[42px] leading-tight mb-8">
            Judgment where the answer is not yet obvious.
          </h2>
          <div style={{ borderTop: '1px solid var(--v2-rule)' }}>
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="grid md:grid-cols-[0.7fr_1.3fr] gap-3 md:gap-10 py-6"
                style={{ borderBottom: '1px solid var(--v2-rule)' }}
              >
                <h3 className="v2-serif text-[22px]" style={{ color: 'var(--v2-ink)' }}>
                  {capability.title}
                </h3>
                <p className="text-[16px] leading-[1.75]" style={{ color: 'var(--v2-ink-3)' }}>
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="py-12 mb-16"
          style={{ borderTop: '1px solid var(--v2-rule)', borderBottom: '1px solid var(--v2-rule)' }}
          aria-labelledby="working-style-heading"
        >
          <div className="max-w-[65ch]">
            <p className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-ink-4)' }}>
              Working style
            </p>
            <h2 id="working-style-heading" className="v2-serif text-[30px] leading-tight mb-5">
              A small number of close working relationships.
            </h2>
            <p className="text-[16px] leading-[1.75]" style={{ color: 'var(--v2-ink-3)' }}>
              I work best in high-trust relationships—usually an ongoing advisory role or a defined
              investment project—alongside the person making the decision. The aim is candid
              conversation, clear thinking and useful decisions.
            </p>
          </div>
        </section>

        <section aria-labelledby="contact-heading">
          <p className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
            Start a conversation
          </p>
          <h2 id="contact-heading" className="v2-serif text-[38px] md:text-[50px] leading-tight max-w-[17ch] mb-6">
            Have something interesting in mind?
          </h2>
          <p className="text-[16px] leading-[1.75] max-w-[62ch]" style={{ color: 'var(--v2-ink-3)' }}>
            A short note is enough. Include what you are trying to decide, why it matters now and why
            you think I may be useful.
          </p>
          <a
            className="about-inline-link mt-8"
            href="mailto:info@cable.capital?subject=Working%20with%20Chris"
          >
            Email Chris <span aria-hidden="true">↗</span>
          </a>
        </section>
      </article>
    </V2Shell>
  )
}
