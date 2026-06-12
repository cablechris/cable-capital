'use client';

import { useEffect } from 'react';

const css = `
  :root {
    --paper: #f4efe6;
    --paper-deep: #ede7da;
    --ink: #16140f;
    --ink-soft: #3a362c;
    --ink-mute: #6a6557;
    --rule: #cfc7b3;
    --rule-soft: #e2dccc;
    --pacific: #1f4a6b;
    --pacific-deep: #163851;
    --warn: #7a2222;
    --long: #1f6b46;
    --serif: "EB Garamond", "Times New Roman", serif;
    --mono: "JetBrains Mono", "SFMono-Regular", Menlo, monospace;
  }

  #memo-root * { box-sizing: border-box; }

  #memo-root {
    background: var(--paper);
    color: var(--ink);
    font-family: var(--serif);
    font-size: 19px;
    line-height: 1.62;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    min-height: 100vh;
  }

  #memo-root ::selection { background: var(--pacific); color: var(--paper); }

  #memo-root a {
    color: var(--pacific);
    text-decoration: none;
    border-bottom: 1px solid rgba(31,74,107,.25);
    transition: border-color .15s;
  }
  #memo-root a:hover { border-bottom-color: var(--pacific); }

  .memo-wrap { max-width: 720px; margin: 0 auto; padding: 80px 32px 120px; }
  @media (max-width: 640px) { .memo-wrap { padding: 48px 22px 80px; } }

  .memo-masthead {
    display: flex; align-items: baseline; justify-content: space-between;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 18px; margin-bottom: 56px;
    font-family: var(--mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase;
    color: var(--ink-mute);
  }
  .memo-masthead .mark { color: var(--ink); font-weight: 500; }
  .memo-masthead .mark span { color: var(--pacific); }

  .memo-eyebrow {
    font-family: var(--mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
    color: var(--ink-mute); margin-bottom: 24px;
  }
  .memo-eyebrow .long {
    color: var(--long); font-weight: 500;
    border: 1px solid var(--long); padding: 2px 8px; margin-left: 8px; border-radius: 2px;
  }

  #memo-root h1 {
    font-family: var(--serif); font-weight: 500;
    font-size: 54px; line-height: 1.08; letter-spacing: -.012em;
    margin: 0 0 18px;
  }
  @media (max-width: 640px) { #memo-root h1 { font-size: 40px; } }

  .memo-deck {
    font-size: 22px; line-height: 1.5; color: var(--ink-soft);
    font-style: italic; margin: 0 0 40px; max-width: 60ch;
  }

  .memo-meta {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 28px;
    font-family: var(--mono); font-size: 12px; letter-spacing: .04em;
    border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
    padding: 18px 0; margin-bottom: 64px;
  }
  .memo-meta dt {
    color: var(--ink-mute); text-transform: uppercase; letter-spacing: .14em;
    font-size: 10.5px; margin-bottom: 4px;
  }
  .memo-meta dd { margin: 0; color: var(--ink); }
  .memo-meta .verdict dd { color: var(--long); font-weight: 500; }

  #memo-root section { margin-bottom: 72px; }

  #memo-root h2 {
    font-family: var(--mono); font-size: 11px; letter-spacing: .22em; text-transform: uppercase;
    color: var(--ink-mute); font-weight: 500;
    margin: 0 0 24px; padding-bottom: 10px;
    border-bottom: 1px solid var(--rule);
    display: flex; align-items: baseline; gap: 14px;
  }
  #memo-root h2 .num { color: var(--pacific); font-weight: 500; }

  #memo-root h3 {
    font-family: var(--serif); font-style: italic; font-weight: 500;
    font-size: 24px; line-height: 1.3; letter-spacing: -.005em;
    margin: 36px 0 14px; color: var(--ink);
  }

  #memo-root h4 {
    font-family: var(--mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase;
    font-weight: 500; color: var(--pacific);
    margin: 28px 0 10px;
  }

  #memo-root p { margin: 0 0 18px; }

  .num-inline { font-family: var(--mono); font-size: .92em; letter-spacing: .01em; }

  .memo-lead::first-letter {
    font-family: var(--serif);
    font-size: 62px; line-height: .86;
    float: left; padding: 8px 10px 0 0;
    color: var(--ink); font-weight: 500;
  }

  .memo-pull {
    border-left: 2px solid var(--pacific);
    padding: 6px 0 6px 22px; margin: 32px 0;
    font-style: italic; font-size: 21px; line-height: 1.5; color: var(--ink-soft);
  }

  table.summary {
    width: 100%; border-collapse: collapse; margin: 0 0 8px;
    font-size: 16px;
  }
  table.summary th, table.summary td {
    text-align: left; vertical-align: top;
    padding: 13px 0; border-bottom: 1px solid var(--rule-soft);
  }
  table.summary th {
    width: 30%;
    font-family: var(--mono); font-size: 10.5px; font-weight: 500; letter-spacing: .14em;
    text-transform: uppercase; color: var(--ink-mute);
    padding-right: 24px;
  }
  table.summary tr:last-child th, table.summary tr:last-child td { border-bottom: none; }

  table.deals {
    width: 100%; border-collapse: collapse; margin: 18px 0 8px;
    font-size: 15px;
  }
  table.deals th, table.deals td {
    text-align: left; vertical-align: top;
    padding: 11px 14px 11px 0; border-bottom: 1px solid var(--rule-soft);
  }
  table.deals thead th {
    font-family: var(--mono); font-size: 10.5px; font-weight: 500; letter-spacing: .14em;
    text-transform: uppercase; color: var(--ink-mute);
    border-bottom: 1px solid var(--rule);
  }
  table.deals tbody tr:last-child td { border-bottom: none; }
  table.deals td.hl { color: var(--pacific); font-weight: 600; }

  .memo-test {
    border: 1px solid var(--rule);
    background: rgba(255,255,255,.35);
    padding: 22px 26px; margin: 22px 0; border-radius: 2px;
    position: relative;
  }
  .memo-test::before {
    content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
    background: var(--pacific);
  }
  .memo-test .label {
    font-family: var(--mono); font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase;
    color: var(--pacific); font-weight: 500; margin-bottom: 6px;
  }
  .memo-test .verdict {
    display: inline-block; margin-top: 8px;
    font-family: var(--mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
    padding: 3px 10px; border-radius: 2px;
  }
  .memo-test .verdict.fail { background: rgba(122,34,34,.08); color: var(--warn); border: 1px solid rgba(122,34,34,.3); }
  .memo-test .verdict.neutral { background: rgba(106,101,87,.08); color: var(--ink-mute); border: 1px solid var(--rule); }
  .memo-test .verdict.pass { background: rgba(31,107,70,.08); color: var(--long); border: 1px solid rgba(31,107,70,.3); }

  ul.refined { list-style: none; padding: 0; margin: 0 0 18px; }
  ul.refined li { position: relative; padding-left: 22px; margin-bottom: 10px; }
  ul.refined li::before {
    content: ""; position: absolute; left: 0; top: .78em;
    width: 8px; height: 1px; background: var(--ink-mute);
  }
  ul.refined li strong { font-weight: 600; color: var(--ink); }

  .memo-pillars {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 24px 0 8px;
  }
  @media (max-width: 640px) { .memo-pillars { grid-template-columns: 1fr; } }

  .memo-pillar { border-top: 1px solid var(--rule); padding-top: 18px; }
  .memo-pillar .tag {
    font-family: var(--mono); font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase;
    color: var(--pacific); margin-bottom: 8px;
  }
  .memo-pillar h5 {
    font-family: var(--serif); font-style: italic; font-weight: 500;
    font-size: 20px; margin: 0 0 10px; color: var(--ink);
  }
  .memo-pillar p { font-size: 16px; line-height: 1.55; color: var(--ink-soft); margin: 0; }

  .memo-alts { margin: 18px 0; padding: 0; list-style: none; counter-reset: alt; }
  .memo-alts li {
    counter-increment: alt;
    display: grid; grid-template-columns: 36px 1fr; gap: 14px;
    padding: 14px 0; border-bottom: 1px solid var(--rule-soft);
  }
  .memo-alts li:last-child { border-bottom: none; }
  .memo-alts li::before {
    content: counter(alt, decimal-leading-zero);
    font-family: var(--mono); font-size: 11px; letter-spacing: .1em; color: var(--pacific);
    padding-top: 4px;
  }
  .memo-alts h5 { font-family: var(--serif); font-weight: 500; font-size: 19px; margin: 0 0 4px; color: var(--ink); }
  .memo-alts p { margin: 0; font-size: 16px; line-height: 1.55; color: var(--ink-soft); }

  .memo-trigger {
    border: 1px solid var(--rule);
    background: var(--paper-deep);
    padding: 22px 26px; margin: 24px 0;
  }
  .memo-trigger .head {
    font-family: var(--mono); font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase;
    color: var(--ink-mute); margin-bottom: 12px;
  }

  .memo-colophon {
    margin-top: 96px; padding-top: 24px; border-top: 1px solid var(--rule);
    font-family: var(--mono); font-size: 11px; letter-spacing: .06em; color: var(--ink-mute);
    display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
  }
  .memo-colophon .right { text-align: right; }

  nav.memo-toc {
    margin: 0 0 56px; padding: 18px 0;
    border-top: 1px solid var(--rule-soft); border-bottom: 1px solid var(--rule-soft);
  }
  nav.memo-toc ol {
    list-style: none; margin: 0; padding: 0;
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px 28px;
    font-family: var(--mono); font-size: 11.5px; letter-spacing: .05em;
  }
  @media (max-width: 640px) { nav.memo-toc ol { grid-template-columns: 1fr; } }
  nav.memo-toc a {
    color: var(--ink-soft); border-bottom: none;
    display: flex; gap: 10px;
  }
  nav.memo-toc a:hover { color: var(--pacific); }
  nav.memo-toc a .n { color: var(--pacific); min-width: 24px; }

  #memo-root section { scroll-margin-top: 32px; }
`;

export default function ElasticMemo() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div id="memo-root">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <div className="memo-wrap">

        <header className="memo-masthead">
          <div className="mark">cable<span>.</span>capital</div>
          <div>Memo &middot; 12 June 2026</div>
        </header>

        <div className="memo-eyebrow">
          Investment Memo &middot; Elastic N.V. (ESTC)
          <span className="long">LONG</span>
        </div>

        <h1>The retrieval layer priced as legacy search.</h1>

        <p className="memo-deck">The most widely deployed vector database in the enterprise is trading at a 60&ndash;75% discount to every direct peer, because the market is reading a consumption-revenue lag as a growth death and missing a bookings book that just accelerated to a two-year high.</p>

        <dl className="memo-meta">
          <div><dt>Ticker</dt><dd>ESTC (NYSE)</dd></div>
          <div><dt>Entry</dt><dd>~$65 &middot; ~$5.9B EV, net cash</dd></div>
          <div><dt>Horizon</dt><dd>12&ndash;24 months</dd></div>
          <div><dt>Conviction</dt><dd>7.5 / 10</dd></div>
          <div><dt>Sizing</dt><dd>Moderate</dd></div>
          <div><dt>Forward multiple</dt><dd>~3.0x sales &middot; ~14x adj. FCF</dd></div>
          <div className="verdict"><dt>Verdict</dt><dd>LONG</dd></div>
          <div><dt>Re-review</dt><dd>Q1 FY27 print (CRPO)</dd></div>
        </dl>

        <nav className="memo-toc" aria-label="Contents">
          <ol>
            <li><a href="#trade"><span className="n">01</span><span>The trade</span></a></li>
            <li><a href="#numbers"><span className="n">02</span><span>Numbers</span></a></li>
            <li><a href="#filters"><span className="n">03</span><span>VVV six-filter</span></a></li>
            <li><a href="#reflexivity"><span className="n">04</span><span>Narrative &amp; reflexivity</span></a></li>
            <li><a href="#takeout"><span className="n">05</span><span>The takeout option</span></a></li>
            <li><a href="#quality"><span className="n">06</span><span>Quality lens</span></a></li>
            <li><a href="#valuation"><span className="n">07</span><span>Valuation</span></a></li>
            <li><a href="#tests"><span className="n">08</span><span>Falsifiable tests</span></a></li>
            <li><a href="#sizing"><span className="n">09</span><span>Sizing &amp; management</span></a></li>
          </ol>
        </nav>

        <section id="trade">
          <h2><span className="num">01</span>The trade</h2>
          <p className="memo-lead">Elastic stores the data that enterprise AI agents have to retrieve. Logs, documents, security telemetry, the unglamorous operational record of a company. Production retrieval-augmented generation is hybrid: lexical plus vector plus filtering plus permissions, run over data the enterprise already owns and already keeps in Elastic. The pure-play vector startups solve one slice of that and start from zero installed base. Elastic starts with 2,700-plus customers already running vector workloads and a balance sheet that lets it buy back 4% of itself a year at the bottom.</p>
          <div className="memo-pull">
            The stock has been cut in half over twelve months while the contracted backlog grew 28%. That gap is the opportunity.
          </div>
        </section>

        <section id="numbers">
          <h2><span className="num">02</span>Numbers</h2>
          <p>Q4 FY26, reported 28 May 2026. Seventh straight quarter beating guidance on every key metric.</p>

          <table className="summary">
            <tbody>
              <tr><th>Q4 revenue</th><td><span className="num-inline">$451M</span>, up 16% (14% cc). FY26 revenue <span className="num-inline">$1.739B</span>, up 17%.</td></tr>
              <tr><th>Sales-led subs</th><td>Up 19%. The number that matters; it strips out the noisy monthly cloud line.</td></tr>
              <tr><th>CRPO / RPO</th><td>CRPO <span className="num-inline">$1.203B</span>, up 20%. RPO <span className="num-inline">$1.982B</span>, up 28% YoY.</td></tr>
              <tr><th>Cohorts</th><td>NRR 112%. 1,720+ customers over $100K ACV. 240+ over $1M. The $5M+ cohort up 30%.</td></tr>
              <tr><th>Margins</th><td>FY26 non-GAAP operating margin 16.4%. FY27 guide ~19% operating, 21.5% adjusted FCF. FY29 target raised to ~25%.</td></tr>
              <tr><th>Capital return</th><td>50% of FCF to buybacks. 4.4M shares retired since October. 68% of the $500M authorization used, ahead of plan.</td></tr>
              <tr><th>Balance sheet</th><td>Net cash. EV ~<span className="num-inline">$5.9B</span> at ~$65.</td></tr>
            </tbody>
          </table>

          <p style={{ marginTop: '18px' }}>FY27 revenue guide is ~<span className="num-inline">$1.99B</span>, 14.6% growth at the midpoint. Management framed FY26&rsquo;s exit explicitly as the setup for revenue and margin re-acceleration through FY27.</p>
        </section>

        <section id="filters">
          <h2><span className="num">03</span>VVV six-filter</h2>

          <div className="memo-test">
            <div className="label">Filter 01 &middot; Is the theme real and non-optional?</div>
            <p>Yes. Every agent that touches enterprise data needs to retrieve over it. Retrieval is the one layer of the agentic stack you cannot skip. The Arora &ldquo;10x data&rdquo; claim, traced honestly, runs straight through the retrieval layer, not the storage layer.</p>
            <div className="verdict pass">Real and non-optional</div>
          </div>

          <div className="memo-test">
            <div className="label">Filter 02 &middot; Is this the best vehicle for the theme?</div>
            <p>It is the only public, profitable, sub-3.5x-sales way to own enterprise retrieval. Pinecone, Weaviate, Chroma, Zilliz are private. The hyperscalers bundle it but do not break it out. ESTC is the clean public expression.</p>
            <div className="verdict pass">Only clean public expression</div>
          </div>

          <div className="memo-test">
            <div className="label">Filter 03 &middot; Is the moat real or narrative?</div>
            <p>Regrown skin, not bone. The original open-source moat was commoditized when AWS forked OpenSearch. The new moat is two-sided: switching costs on the installed base, plus a genuine engineering lead being actively rebuilt. Two orders of magnitude less RAM for vector search in 18 months via better binary quantization, disk BBQ, and the ACORN filtering algorithm. Eight times faster than OpenSearch on their own benchmarks, and that performance won a seven-figure displacement off OpenSearch (heavy equipment manufacturer, Starlink telemetry, seven years of history). The Jina AI acquisition in October 2025 ($43.3M, under 1% of market cap) bought one of the best open-source embedding and reranker teams going. Agent Builder shipped GA.</p>
            <div className="verdict neutral">Regrown skin, not bone</div>
          </div>

          <div className="memo-test">
            <div className="label">Filter 04 &middot; Is the balance sheet a weapon or a liability?</div>
            <p>Weapon. Net cash, FCF positive, retiring stock at a trough multiple. A buyback at 3x sales compounds far harder than the same buyback at 12x. The float compresses while you wait.</p>
            <div className="verdict pass">Weapon</div>
          </div>

          <div className="memo-test">
            <div className="label">Filter 05 &middot; What does the market believe that is wrong?</div>
            <p>That this is a legacy search company being disrupted by AI. The data says the opposite: the AI cohort is the fastest-growing customer segment, now over a third of the $100K+ base, and bookings just accelerated to a two-year high. The market is pricing the lagging indicator (recognized revenue) and ignoring the leading one (contracted commitments).</p>
            <div className="verdict pass">Maximum story&ndash;data divergence</div>
          </div>

          <div className="memo-test">
            <div className="label">Filter 06 &middot; What breaks the thesis?</div>
            <p>AWS weaponizing OpenSearch pricing again. A fork that is free and good-enough caps the floor multiple even if Elastic keeps out-engineering it. This is the real risk and it is why the position is moderate size, not a swing.</p>
            <div className="verdict fail">Real floor risk; sizes the position</div>
          </div>
        </section>

        <section id="reflexivity">
          <h2><span className="num">04</span>Narrative &amp; reflexivity</h2>
          <p className="memo-lead">Maximum divergence between story and data. Story: disrupted by AI. Data: AI is the growth engine, bookings at a two-year high. That gap is the setup, and the reflexive loop is loaded and self-reinforcing.</p>
          <ul className="refined">
            <li><strong>Buyback shrinks the float</strong> at a trough multiple.</li>
            <li><strong>FY27 prints revenue re-acceleration</strong> as the 28% RPO converts (management has set this up explicitly).</li>
            <li><strong>Narrative flips</strong> from &ldquo;disrupted by AI&rdquo; to &ldquo;the retrieval layer for agentic AI.&rdquo;</li>
            <li><strong>Multiple re-rates</strong> off the floor.</li>
            <li><strong>A strategic acquirer is watching</strong> the same comp set you are, the entire time.</li>
          </ul>
          <div className="memo-pull">
            Four ways to get paid, mutually reinforcing: fundamentals, multiple re-rate, float compression, takeout.
          </div>
        </section>

        <section id="takeout">
          <h2><span className="num">05</span>The takeout option</h2>
          <p>Free, not the base case. Two precedents closed in the last two months, both in this exact subsector, both framed as data-access-for-AI plays.</p>

          <table className="deals">
            <thead>
              <tr><th>Deal</th><th>Buyer</th><th>Price</th><th>~EV/Sales</th><th>Stated rationale</th></tr>
            </thead>
            <tbody>
              <tr><td>Confluent</td><td>IBM</td><td>~$11B</td><td>~9&ndash;10x</td><td>&ldquo;Access their data for AI agents&rdquo;</td></tr>
              <tr><td>Informatica</td><td>Salesforce</td><td>~$8B</td><td>~8x</td><td>Combine operational + analytical estates</td></tr>
              <tr><td className="hl">Elastic (implied)</td><td>&ndash;</td><td>&ndash;</td><td className="hl">3.0x current</td><td>Retrieval layer, SIEM, federal</td></tr>
            </tbody>
          </table>

          <p style={{ marginTop: '18px' }}>At Confluent&rsquo;s multiple, Elastic&rsquo;s ~$2B revenue base is worth <span className="num-inline">$18&ndash;20B</span>, roughly 3x the current EV. At half that multiple it is still a 50%+ premium. Plausible buyers: Cisco (owns Splunk; ESTC&rsquo;s SIEM business is the displacement threat they would rather own than fight), ServiceNow, SAP, Google Cloud, Nvidia (already partnered on inference), or PE (21% FCF margin, net cash, 14x FCF is a textbook take-private).</p>
          <p>The federal leg sweetens it: FedRAMP High on AWS GovCloud, plus a CISA SIEM-as-a-service partnership already onboarding civilian agencies. One mechanical wrinkle: ESTC is a Dutch N.V., which changes deal structure, not feasibility.</p>
        </section>

        <section id="quality">
          <h2><span className="num">06</span>Quality lens</h2>

          <h4>Good</h4>
          <ul className="refined">
            <li>~75% gross margin, FCF positive and expanding, net cash.</li>
            <li>Disciplined buyback, 112% NRR, accelerating large-deal cohort.</li>
          </ul>

          <h4>Bad, and the market is paying for the worst version</h4>
          <ul className="refined">
            <li><strong>The OpenSearch fork caps pricing power.</strong></li>
            <li><strong>Monthly Elastic Cloud grew 6% in Q3 and 3% in Q4</strong> with SMB churn, trailing sales-led growth badly.</li>
            <li><strong>112% NRR is solid, not spectacular</strong> (SNOW is 126%).</li>
            <li><strong>Insider selling through the year,</strong> including the CEO around $108 in December, though those prints tell you where insiders saw fair value relative to today.</li>
          </ul>

          <div className="memo-pull">
            Net: a B+ business priced as a D.
          </div>
        </section>

        <section id="valuation">
          <h2><span className="num">07</span>Valuation</h2>
          <p className="memo-lead">At ~$65, ~$5.9B EV against the FY27 ~$1.99B revenue guide: roughly 3.0x forward sales and about 14x forward adjusted FCF (~$430M on the 21.5% margin guide). A mid-teens grower with high-20s bookings growth and expanding margins.</p>
          <table className="summary">
            <tbody>
              <tr><th>ESTC</th><td>~3.0x forward sales &middot; ~14x forward adjusted FCF</td></tr>
              <tr><th>SNOW</th><td>~12.6x forward sales</td></tr>
              <tr><th>MDB</th><td>~8.7x EV/sales</td></tr>
              <tr><th>Databricks</th><td>Seeking ~30x ARR, private</td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: '18px' }}>ESTC sits at a 60&ndash;75% discount to every peer for maybe 8&ndash;10 points less recognized growth, and less gap than that on a bookings basis.</p>
        </section>

        <section id="tests">
          <h2><span className="num">08</span>Falsifiable tests</h2>
          <div className="memo-trigger">
            <div className="head">Hold / exit conditions</div>
            <ul className="refined">
              <li><strong>Conversion.</strong> Sales-led subscription growth holds at or above 17% and CRPO growth at or above 20% through FY27 as RPO converts. If CRPO decelerates below mid-teens for two straight quarters, the conversion thesis is wrong. Exit.</li>
              <li><strong>Re-acceleration.</strong> Quarterly revenue growth re-accelerates above the 14.6% guide midpoint by Q2&ndash;Q3 FY27. Management has set this up. No acceleration by the January 2027 print kills the timing leg, reassess.</li>
              <li><strong>AI cohort.</strong> AI penetration of $100K+ customers keeps climbing from ~33%, and monthly cloud stabilizes rather than shrinking. SMB bleed spreading into the sales-led book falsifies.</li>
              <li><strong>Takeout.</strong> The free option, not the base case. No premium required for the thesis to work.</li>
            </ul>
          </div>
        </section>

        <section id="sizing">
          <h2><span className="num">09</span>Sizing &amp; management</h2>
          <p className="memo-lead">Moderate size. High thesis conviction, real floor risk (the AWS fork), so this is not a max-conviction swing. The takeout is a tail you do not pay for and do not size around.</p>

          <div className="memo-pillars">
            <div className="memo-pillar">
              <div className="tag">I &middot; Buy</div>
              <h5>Base around $60&ndash;65</h5>
              <p>~$5.9B EV, net cash, ~3.0x forward sales. The floor risk is real but the bookings book says the growth scare is mispriced.</p>
            </div>
            <div className="memo-pillar">
              <div className="tag">II &middot; Add</div>
              <h5>On a confirmed CRPO print</h5>
              <p>Add on CRPO growth above 20% next quarter. That confirms the RPO-to-revenue conversion leg before the multiple moves.</p>
            </div>
            <div className="memo-pillar">
              <div className="tag">III &middot; Trim</div>
              <h5>Into the re-rate</h5>
              <p>Trim toward 6&ndash;7x sales where the asymmetry compresses. Four ways to get paid; do not stay for the last one.</p>
            </div>
          </div>

          <p style={{ marginTop: '32px' }}><em>Research, not advice. Verify every figure against primary filings before acting. Post-earnings numbers across the comp set are moving this week.</em></p>
        </section>

        <footer className="memo-colophon">
          <div>
            Filed &middot; CPC Consulting LLC<br />
            12 June 2026
          </div>
          <div className="right">
            cable.capital &middot; Memo 2026-Q2-06<br />
            Re-review: Q1 FY27 earnings print
          </div>
        </footer>

      </div>
    </div>
  );
}
