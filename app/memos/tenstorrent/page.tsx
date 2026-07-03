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
  .memo-eyebrow .pass {
    color: var(--warn); font-weight: 500;
    border: 1px solid var(--warn); padding: 2px 8px; margin-left: 8px; border-radius: 2px;
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
  .memo-meta .verdict dd { color: var(--warn); font-weight: 500; }

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
  .memo-test .verdict.pass { background: rgba(31,74,107,.08); color: var(--pacific); border: 1px solid rgba(31,74,107,.3); }

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

export default function TenstorrentMemo() {
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
          <div>Memo &middot; 21 May 2026</div>
        </header>

        <div className="memo-eyebrow">
          Investment Memo &middot; Tenstorrent, Inc.
          <span className="pass">PASS</span>
        </div>

        <h1>The company is real. The security is not clean enough.</h1>

        <p className="memo-deck">A late-stage convertible into a credible second-source AI inference and IP company, structured via a Hiive SPV with opaque fees, no information rights, and conversion terms that do not cleanly participate in the most likely exit paths. The company may reach a USD 10&ndash;30B outcome. This note may not get you there cleanly.</p>

        <dl className="memo-meta">
          <div><dt>Issuer</dt><dd>Tenstorrent, Inc.</dd></div>
          <div><dt>Instrument</dt><dd>Convertible note via Hiive SPV</dd></div>
          <div><dt>Cap</dt><dd>USD 3.2B pre-money</dd></div>
          <div><dt>Discount</dt><dd>15% to next priced round</dd></div>
          <div><dt>Interest</dt><dd>10% per annum, accrued</dd></div>
          <div><dt>Minimum</dt><dd>USD 50,000</dd></div>
          <div className="verdict"><dt>Verdict</dt><dd>PASS</dd></div>
          <div><dt>Re-review</dt><dd>IPO announcement</dd></div>
        </dl>

        <nav className="memo-toc" aria-label="Contents">
          <ol>
            <li><a href="#read"><span className="n">01</span><span>One-line read</span></a></li>
            <li><a href="#company"><span className="n">02</span><span>Company snapshot</span></a></li>
            <li><a href="#valuation"><span className="n">03</span><span>Valuation</span></a></li>
            <li><a href="#framework"><span className="n">04</span><span>Architectural test</span></a></li>
            <li><a href="#vehicle"><span className="n">05</span><span>Vehicle issues</span></a></li>
            <li><a href="#alternatives"><span className="n">06</span><span>Cleaner expressions</span></a></li>
            <li><a href="#flip"><span className="n">07</span><span>What flips this</span></a></li>
            <li><a href="#decision"><span className="n">08</span><span>Decision</span></a></li>
          </ol>
        </nav>

        <section id="read">
          <h2><span className="num">01</span>One-line read</h2>
          <p className="memo-lead">Tenstorrent is a credible second-source AI inference and IP licensing company with real product, real deployments, and a generational operator. The company is not the problem. The problem is the instrument: a fuzzy late-stage convertible with opaque conversion mechanics, no information rights, undisclosed fees, and change-of-control exposure that could strand noteholders before they ever see equity.</p>
          <div className="memo-pull">
            Tenstorrent may reach a USD 10&ndash;30B outcome. This note does not give enough control, information, or upside clarity to underwrite that path at a USD 3.2B cap.
          </div>
        </section>

        <section id="company">
          <h2><span className="num">02</span>Company snapshot</h2>
          <p>Founded 2016. Led by Jim Keller (Apple A4/A5, AMD Zen, Tesla FSD, Intel). Designs AI processors and licenses RISC-V CPU and AI chiplet IP. Three revenue lines: chiplet and hardware sales, fully configured AI servers (Galaxy Blackhole), IP licensing. Approximately 1,100 employees as of March 2026. Total raised <span className="num-inline">~USD 1.2B</span> across seven rounds.</p>

          <h4>What is real</h4>
          <ul className="refined">
            <li><strong>Jim Keller is a generational chip architect.</strong> Not marketing.</li>
            <li><strong>Galaxy Blackhole entered volume production in 2025.</strong> Real deployments at Cirrascale (Seattle), Equinix, ai& (Tokyo), Turium AI (India), Virtu Financial.</li>
            <li><strong>Open-source software stack</strong> with claimed ~90% Hugging Face native compatibility. Genuinely differentiated from CUDA lock-in.</li>
            <li><strong>GDDR6 architectural choice</strong> sidesteps the HBM supply bottleneck pricing out everyone competing with H100/B200 on the same axis.</li>
            <li><strong>Closed deals approximately USD 150M</strong> per company disclosure. Revenue estimates vary widely between sources (USD 81.5M to USD 500M range, none audited).</li>
          </ul>

          <h4>Funding stack</h4>
          <ul className="refined">
            <li>Series D, Dec 2024, USD 693M+ at USD 2B pre / USD 2.7B post. Co-led by Samsung Securities and AFW Partners.</li>
            <li>Prior round Aug 2023, USD 100M convertible co-led by Hyundai Motor Group and Samsung Catalyst Fund.</li>
            <li>Notable investors: Bezos Expeditions, Baillie Gifford, Fidelity, LG Electronics, Hyundai, HOOPP, XTX Markets.</li>
            <li>Samsung-affiliated ownership not publicly disclosed. Rough estimate <span className="num-inline">5&ndash;8%</span> combined across Samsung Securities and Samsung Catalyst. Not strategically controlling.</li>
          </ul>
        </section>

        <section id="valuation">
          <h2><span className="num">03</span>Valuation</h2>
          <p className="memo-lead">The note is not obviously mispriced, but it is not obviously cheap either. Series D closed December 2024 at USD 2.7B post-money. The Hiive note caps at USD 3.2B pre-money, a modest step-up over a seventeen-month-old round.</p>
          <p>The cap/discount mechanics work as follows: noteholders convert at the better of the USD 3.2B cap or a 15% discount to the next priced round. The discount dominates below approximately <span className="num-inline">USD 3.76B</span>; the cap dominates above it. If the next round prices at the widely-reported USD 3.2B, the effective conversion price is approximately <span className="num-inline">USD 2.72B</span> via the 15% discount. That is a real, if modest, discount into a hot private round.</p>
          <p>The valuation problem is more subtle than a flat cap. A USD 2.72B entry into a USD 10&ndash;30B exit over five to seven years implies <span className="num-inline">3.7&ndash;11x</span> gross before fees, dilution, and timing. Below the return hurdle you would set for this asset class and risk profile once all-in SPV costs are applied. Not nothing, but not a compelling asymmetry for a company that still needs to prove durable moats in a market Nvidia defends aggressively.</p>
          <p>The deeper valuation risk is change-of-control before conversion. Intel and Qualcomm have reportedly shown acquisition interest in Tenstorrent. If the company is acquired at USD 4&ndash;6B before the note converts, the outcome for noteholders depends entirely on change-of-control provisions that Hiive has not disclosed. A strategic sale could return noteholders par plus accrued interest while equity holders realize a meaningful premium. That asymmetry is structurally bad for the note.</p>
          <div className="memo-pull">
            You are buying late-stage AI-silicon narrative beta at a price where the upside depends on a hot IPO window, a strategic takeout at the right moment, or a near-term markup. Each path has a structural catch.
          </div>
        </section>

        <section id="framework">
          <h2><span className="num">04</span>Architectural test</h2>
          <p className="memo-lead">Gavin Baker&rsquo;s framework for evaluating non-Nvidia chip companies is cleaner than generic AI infrastructure analysis. Five tests below. The architecture is stronger than the original memo implied, but not strong enough to anchor a dominant-platform outcome.</p>

          <div className="memo-test">
            <div className="label">Test 01 &middot; Better GPU, or different canvas?</div>
            <p>Baker&rsquo;s verdict on the better-GPU path is direct: <em>nobody is a better GPU</em>. Tranium is the strongest attempt and is still <em>tugging on Superman&rsquo;s cape</em>. TPU, AMD MI-series, Tranium are all on the same canvas as Nvidia.</p>
            <p>Tenstorrent&rsquo;s accelerator pitch is on the same canvas: tensor processor plus memory plus interconnect, targeting the same neural-network workloads. Compare to Cerebras (wafer-scale, structurally different), Groq (LPU, decode-optimized, subsequently acquired by Nvidia), or Etched (transformer-specific ASIC). Those are different-canvas plays. The Galaxy Blackhole line is not.</p>
            <p>However, Tenstorrent is not purely a merchant GPU challenger. It is also selling RISC-V CPU and AI chiplet IP, and acquired Blue Cheetah to bring chiplet interconnect capability in-house. The IP/licensing business operates on a different model: it does not need to beat Nvidia in the data centre. It needs to be the design kit for everyone building AI at the edge, in automotive, and in sovereign infrastructure. That is a smaller but more defensible market.</p>
            <div className="verdict neutral">Same canvas for accelerators; different game for IP</div>
          </div>

          <div className="memo-test">
            <div className="label">Test 02 &middot; Is the differentiation hard to copy?</div>
            <p>Baker&rsquo;s killshot: <em>if you make different trade-offs in that iron triangle and they are not hard trade-offs to make, well then Nvidia is going to make those same trade-offs. They get better prices from Taiwan Semi than you ever will.</em></p>
            <ul className="refined">
              <li><strong>GDDR6 vs HBM.</strong> Cost choice, not structurally uncopyable. Nvidia already ships GDDR6 across consumer and some inference SKUs. AMD can pivot. But Nvidia copying the GDDR6 inference price point means cannibalising its own HBM margin stack. &ldquo;Can copy&rdquo; is not the same as &ldquo;will copy without consequence.&rdquo;</li>
              <li><strong>Open-source software stack.</strong> A developer-relations moat, not a chip-design moat. Real but erodes as PyTorch and Triton abstractions mature.</li>
              <li><strong>Ethernet-based scale-out.</strong> Contrasts with Nvidia&rsquo;s proprietary NVLink. Open interconnect is a meaningful wedge into sovereign and cost-sensitive deployments, but not architecturally uncopyable.</li>
              <li><strong>RISC-V / chiplet IP licensing.</strong> This is the hardest piece to copy quickly. It targets markets Nvidia does not prioritise (automotive compute, edge AI, Asian conglomerate design wins) and the Blue Cheetah acquisition adds chiplet interconnect IP that takes years to develop.</li>
            </ul>
            <p>The differentiation is real, and it is economic and distributional rather than structurally uncopyable. That supports a credible second-source and IP outcome. It does not support a dominant-platform outcome.</p>
            <div className="verdict neutral">Economic moat, not architectural fortress</div>
          </div>

          <div className="memo-test">
            <div className="label">Test 03 &middot; The 1% market share test</div>
            <p>Baker&rsquo;s rule of thumb: 1% of merchant AI silicon equals approximately USD 100B venture outcome. Anything between 1% and 3% triggers Jensen to <em>make that chip</em>.</p>
            <p>Merchant AI silicon TAM is plausibly USD 400B&ndash;1T by 2030. A USD 10&ndash;30B IPO outcome, which is the more plausible range for Tenstorrent, implies roughly <span className="num-inline">1&ndash;3%</span> of a narrower addressable slice (inference, sovereign, automotive). From a USD 2.72B effective entry that is <span className="num-inline">3.7&ndash;11x</span> gross over five to seven years. Acceptable late-stage private returns if the path is clean. The path is not clean.</p>
            <div className="verdict neutral">Plausible outcome range; instrument does not participate cleanly</div>
          </div>

          <div className="memo-test">
            <div className="label">Test 04 &middot; Engagement signal</div>
            <p>Baker&rsquo;s frame: Nvidia and Amazon engage most intensely with the best startups. Broadcom selectively. AMD, Microsoft, Meta essentially zero.</p>
            <p>Tenstorrent&rsquo;s customer base is sovereign AI deployments, automotive (Hyundai, LG), and IP licensing to Asian conglomerates. Real business. The frontier AI startups (cursor, cognition, fireworks tier) are on Nvidia or building toward Tranium, not Tenstorrent. But this is not only a weakness: the sovereign and automotive layer is precisely the market Tenstorrent is targeting with its IP model, and those customers are structurally motivated to avoid Nvidia dependence.</p>
            <div className="verdict neutral">Right layer for IP; wrong layer for platform validation</div>
          </div>

          <div className="memo-test">
            <div className="label">Test 05 &middot; Bitter lesson risk</div>
            <p>Tenstorrent&rsquo;s architecture is less specialised than Cerebras or Etched, so less exposed to bitter-lesson reversal. The IP/licensing model further reduces this risk: RISC-V CPU design and chiplet interconnect IP are useful regardless of whether transformers remain the dominant paradigm. Point in its favour.</p>
            <div className="verdict pass">Resilient; IP model insulates against architectural obsolescence</div>
          </div>

          <h3>Architectural verdict</h3>
          <p>Tenstorrent is best modelled as a hybrid: AI accelerator second-source plus RISC-V/chiplet IP house. The accelerator business competes on economics and openness, not architectural novelty. The IP business targets markets Nvidia does not prioritise and builds moats through accumulated design wins and tooling, not through a single hard-to-copy chip feature.</p>
          <p>Baker&rsquo;s framework predicts a USD 10&ndash;30B outcome over five to seven years via sovereign deployments, automotive IP, and second-source narrative. That is not a modest outcome from a USD 2.72B effective entry. The question is whether this Hiive note is the right instrument to participate in it. It is not.</p>
        </section>

        <section id="vehicle">
          <h2><span className="num">05</span>Vehicle issues</h2>
          <p>The vehicle is the primary reason to pass. Seven undisclosed or under-specified items that must be resolved before this note is underwritable.</p>
          <ul className="refined">
            <li><strong>Change-of-control treatment.</strong> Intel and Qualcomm have reportedly explored acquisition interest in Tenstorrent. If the company is acquired before the note converts, does the note repay at par plus accrued interest, or can holders elect to convert at the cap? A USD 5B strategic sale that returns noteholders par is structurally bad relative to equity. This is the single most important diligence item and it is not disclosed.</li>
            <li><strong>Qualifying financing definition.</strong> The note converts at the next equity financing round. Whether this means any equity issuance or only a priced round above a minimum threshold materially changes risk. Not surfaced in Hiive materials.</li>
            <li><strong>Maturity date treatment.</strong> The note reportedly matures March 31, 2027. If no qualifying financing occurs before maturity, the outcome depends on repayment or renegotiation terms that are not disclosed. A company in active fundraising may prefer to extend rather than repay; the note may have no leverage to compel conversion on favourable terms.</li>
            <li><strong>Interest conversion mechanics.</strong> Does accrued 10% annual interest convert to equity at the conversion price, or is it repaid in cash at maturity or conversion? Meaningful at 10% per annum over a 12&ndash;18 month hold.</li>
            <li><strong>Cap definition.</strong> Pre-money cap is standard, but the effective per-share price depends on the fully diluted share count at conversion. If Tenstorrent carries a large option pool or outstanding warrants, the effective economic cap is higher than the stated USD 3.2B.</li>
            <li><strong>Hiive fees are undisclosed.</strong> Transaction and administrative fees apply even when management fee and carry are advertised as zero. All-in load above 3% upfront would be a standalone reason to pass.</li>
            <li><strong>No information rights, 2&ndash;4 year lock.</strong> As an LP in a Hiive SPV holding a convertible note, visibility after closing is effectively zero. Tenstorrent IPO plausibly 2027&ndash;2028 if execution holds. Capital locked with no information flow and no ability to manage the position.</li>
          </ul>
        </section>

        <section id="alternatives">
          <h2><span className="num">06</span>Cleaner expressions</h2>
          <p className="memo-lead">The Tenstorrent thesis (non-Nvidia AI silicon, open software stack, sovereign and automotive distribution, RISC-V/chiplet IP) is real. The Hiive note at USD 3.2B is the wrong instrument to express it. Four cleaner alternatives, in order of conviction.</p>

          <ol className="memo-alts">
            <li>
              <div>
                <h5>Cerebras at IPO</h5>
                <p>Wafer-scale is genuinely structurally different. Three-generation grind is done. Baker&rsquo;s portfolio firm invested. The architectural differentiation is harder to copy than anything in the Tenstorrent stack.</p>
              </div>
            </li>
            <li>
              <div>
                <h5>Broadcom (AVGO)</h5>
                <p>The ASIC design partner getting most of the different-chip revenue across hyperscalers. Public, liquid, no SPV friction. The structural threat to Nvidia at the chip-design layer.</p>
              </div>
            </li>
            <li>
              <div>
                <h5>Amazon (AMZN) for the Tranium ramp</h5>
                <p>Baker&rsquo;s explicit <em>tugging on Superman&rsquo;s cape</em> framing. Tranium 3 with switch scale-up network is the most credible Nvidia challenger today. Already in portfolio context as a long position consideration.</p>
              </div>
            </li>
            <li>
              <div>
                <h5>Wait for Tenstorrent IPO</h5>
                <p>If Blackhole 2 or the 2027 chip demonstrates a hard architectural moat that Blackhole does not currently show, re-engage in the public window at a price that clears.</p>
              </div>
            </li>
          </ol>

          <p style={{ marginTop: '24px' }}><em>Note on the Samsung angle.</em> Initially considered Samsung Electronics (005930.KS) as a Tenstorrent proxy. It does not hold up. Samsung-affiliated entities own an estimated 5&ndash;8% of Tenstorrent. Against Samsung Electronics market cap of approximately USD 400&ndash;500B, even a 10x on Tenstorrent equity is a rounding error at the parent level. Samsung Electronics is a memory and foundry play, not a Tenstorrent call option.</p>
        </section>

        <section id="flip">
          <h2><span className="num">07</span>What flips this</h2>
          <div className="memo-trigger">
            <div className="head">Re-review triggers</div>
            <p style={{ marginBottom: '14px' }}>Filed for completeness. Any of the following would warrant a re-look, not necessarily a YES.</p>
            <ul className="refined">
              <li>Full note terms are disclosed and show investor-friendly change-of-control treatment (equity conversion at cap, not par repayment) and low all-in SPV load below 2%.</li>
              <li>Reported next priced round closes at USD 3.2B or above, confirming the note was structured at a real discount to institutional terms.</li>
              <li>A frontier-AI startup of the cursor / cognition / fireworks tier ports primary workloads to Tenstorrent compute, validating the accelerator platform thesis beyond sovereign and automotive verticals.</li>
              <li>Acquisition interest from Intel or Qualcomm materialises as a public offer with equity conversion provisions that protect noteholders. Converts the change-of-control risk into a near-term liquidity event.</li>
              <li>US export control or sovereign AI policy shift creates a structural demand floor for non-Nvidia, non-Chinese AI silicon. Accelerates the sovereign distribution thesis and reduces dependency on a hot IPO window.</li>
            </ul>
          </div>
        </section>

        <section id="decision">
          <h2><span className="num">08</span>Decision</h2>
          <p className="memo-lead">PASS. The company is real. The security is not clean enough to underwrite the risk.</p>

          <div className="memo-pillars">
            <div className="memo-pillar">
              <div className="tag">I &middot; Instrument</div>
              <h5>Too opaque to underwrite</h5>
              <p>Change-of-control treatment, maturity mechanics, interest conversion, qualifying financing definition, and all-in fees are undisclosed. A note with this many open terms is not investable regardless of the underlying company quality.</p>
            </div>
            <div className="memo-pillar">
              <div className="tag">II &middot; Valuation</div>
              <h5>Return does not clear the bar</h5>
              <p>Effective entry of approximately USD 2.72B via the 15% discount. Plausible USD 10&ndash;30B exit implies 3.7&ndash;11x gross over five to seven years. After SPV costs and dilution, net returns are inadequate for this asset class and liquidity profile.</p>
            </div>
            <div className="memo-pillar">
              <div className="tag">III &middot; Architecture</div>
              <h5>Economic moat, not platform dominance</h5>
              <p>Tenstorrent&rsquo;s differentiation is real but distributional: GDDR6 economics, open software, sovereign procurement, RISC-V/chiplet IP. Supports a credible second-source and IP outcome. Does not support a dominant-platform outcome that would justify venture-scale multiples from this entry.</p>
            </div>
          </div>

          <p style={{ marginTop: '32px' }}>The PASS would reconsider only if the docs showed investor-friendly change-of-control treatment, low all-in fees, a near-certain priced round within six to nine months, and conversion economics clearly better than the next institutional round. On current disclosed terms, stronger expressions of the underlying thesis exist via Cerebras at IPO, Broadcom, Amazon Tranium exposure, or waiting for the Tenstorrent IPO window.</p>
        </section>

        <footer className="memo-colophon">
          <div>
            Filed &middot; CPC Consulting LLC<br />
            21 May 2026
          </div>
          <div className="right">
            cable.capital &middot; Memo 2026-Q2-05<br />
            Re-review: Tenstorrent IPO announcement
          </div>
        </footer>

      </div>
    </div>
  );
}
