'use client';

import { useEffect } from 'react';

const css = `
  #dolphin-root {
    --ink: #1a1a1a;
    --paper: #fafaf7;
    --rule: #d4d0c8;
    --accent: #8b3a2f;
    --muted: #6b6862;
    --highlight: #f5f0e6;
    --soft-rule: #e8e4dc;

    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 19px;
    line-height: 1.55;
    color: var(--ink);
    background: var(--paper);
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  #dolphin-root * { box-sizing: border-box; }

  #dolphin-root .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 80px 40px 120px;
  }

  #dolphin-root .masthead {
    border-bottom: 1px solid var(--rule);
    padding-bottom: 24px;
    margin-bottom: 56px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }
  #dolphin-root .masthead .brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px; font-weight: 600; letter-spacing: 0.02em;
    color: var(--ink); text-transform: none;
  }
  #dolphin-root .masthead .brand span { color: var(--accent); }

  #dolphin-root .title-block { margin-bottom: 64px; }

  #dolphin-root .kicker {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 24px; display: inline-block;
    padding-bottom: 4px; border-bottom: 1px solid var(--accent);
  }

  #dolphin-root h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 56px; line-height: 1.05; font-weight: 500;
    letter-spacing: -0.015em; margin-bottom: 20px;
  }
  #dolphin-root h1 em { font-style: italic; color: var(--accent); font-weight: 400; }

  #dolphin-root .deck {
    font-size: 22px; line-height: 1.4; color: var(--muted);
    font-style: italic; font-weight: 400; max-width: 580px;
  }

  #dolphin-root .meta-bar {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
    margin-top: 48px; padding: 24px 0;
    border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
  }
  #dolphin-root .meta-item .label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 6px; display: block;
  }
  #dolphin-root .meta-item .value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px; font-weight: 600; color: var(--ink);
  }
  #dolphin-root .meta-item .value.accent { color: var(--accent); }

  #dolphin-root section { margin-bottom: 56px; }

  #dolphin-root h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 32px; font-weight: 500; letter-spacing: -0.01em;
    margin-bottom: 24px; padding-bottom: 12px;
    border-bottom: 1px solid var(--soft-rule);
  }
  #dolphin-root h2 .num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px; color: var(--accent); margin-right: 14px;
    vertical-align: middle; font-weight: 500; letter-spacing: 0.1em;
  }

  #dolphin-root h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px; font-weight: 600;
    margin-top: 32px; margin-bottom: 12px; color: var(--ink);
  }

  #dolphin-root p { margin-bottom: 18px; text-rendering: optimizeLegibility; }
  #dolphin-root strong { font-weight: 600; color: var(--ink); }
  #dolphin-root em { font-style: italic; }

  #dolphin-root .pullquote {
    font-size: 26px; line-height: 1.35; font-style: italic; color: var(--ink);
    margin: 40px 0; padding: 28px 32px;
    background: var(--highlight); border-left: 3px solid var(--accent);
    font-weight: 400;
  }

  #dolphin-root .tier-table {
    width: 100%; border-collapse: collapse;
    margin: 24px 0 32px; font-size: 17px;
  }
  #dolphin-root .tier-table th {
    text-align: left; font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--muted); font-weight: 500;
    padding: 12px 16px 12px 0; border-bottom: 2px solid var(--ink);
  }
  #dolphin-root .tier-table td {
    padding: 18px 16px 18px 0; border-bottom: 1px solid var(--soft-rule);
    vertical-align: top;
  }
  #dolphin-root .tier-table .workload { font-weight: 600; font-size: 18px; }
  #dolphin-root .tier-table .edge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px; color: var(--accent); font-weight: 500;
  }
  #dolphin-root .tier-table .verdict { font-style: italic; color: var(--muted); }
  #dolphin-root .tier-table .strong-row .workload { color: var(--accent); }

  #dolphin-root .signal-list { list-style: none; margin: 24px 0; padding: 0; counter-reset: signal-counter; }
  #dolphin-root .signal-list li {
    padding: 16px 0 16px 36px; border-bottom: 1px solid var(--soft-rule); position: relative;
  }
  #dolphin-root .signal-list li:last-child { border-bottom: none; }
  #dolphin-root .signal-list li::before {
    content: counter(signal-counter, decimal-leading-zero);
    counter-increment: signal-counter;
    position: absolute; left: 0; top: 18px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; color: var(--accent); font-weight: 500;
  }

  #dolphin-root .verdict-block {
    margin: 48px 0; padding: 36px 40px;
    background: var(--ink); color: var(--paper); position: relative;
  }
  #dolphin-root .verdict-block::before {
    content: "VERDICT"; position: absolute; top: -8px; left: 40px;
    background: var(--paper); color: var(--accent);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 0.2em; padding: 0 12px; font-weight: 500;
  }
  #dolphin-root .verdict-block h3 { color: var(--paper); font-size: 28px; margin: 8px 0 16px; }
  #dolphin-root .verdict-block p { color: #e8e4dc; font-size: 18px; line-height: 1.6; }
  #dolphin-root .verdict-block p:last-child { margin-bottom: 0; }

  #dolphin-root .footer {
    margin-top: 96px; padding-top: 32px;
    border-top: 1px solid var(--rule);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; letter-spacing: 0.1em; color: var(--muted);
    text-transform: uppercase;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 16px;
  }
  #dolphin-root .footer .disclaimer {
    text-transform: none; letter-spacing: 0; font-size: 12px;
    font-family: 'Cormorant Garamond', serif; font-style: italic;
    color: var(--muted); margin-top: 16px; width: 100%;
  }

  #dolphin-root .drop-cap::first-letter {
    font-size: 64px; line-height: 0.85; float: left;
    padding: 8px 12px 0 0; font-weight: 500; color: var(--accent);
    font-family: 'Cormorant Garamond', serif;
  }

  #dolphin-root .synthesis {
    margin: 48px 0 64px;
    padding: 36px 40px;
    background: var(--highlight);
    border-left: 3px solid var(--accent);
  }
  #dolphin-root .synth-eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 18px;
    font-weight: 500;
  }
  #dolphin-root .synth-thesis {
    font-size: 20px;
    line-height: 1.5;
    color: var(--ink);
    font-family: 'Cormorant Garamond', serif;
    margin: 0 0 32px;
    font-weight: 400;
  }
  #dolphin-root .synth-thesis strong {
    font-weight: 600;
  }
  #dolphin-root .synth-facts {
    display: grid;
    gap: 18px;
    margin: 0;
    padding-top: 28px;
    border-top: 1px solid var(--soft-rule);
  }
  #dolphin-root .synth-facts > div {
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 24px;
    align-items: baseline;
  }
  #dolphin-root .synth-facts dt {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 500;
    margin: 0;
  }
  #dolphin-root .synth-facts dd {
    margin: 0;
    font-size: 15px;
    line-height: 1.55;
    color: var(--ink);
    font-family: 'Cormorant Garamond', serif;
  }
  #dolphin-root .synth-facts .snapshot {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.02em;
    line-height: 1.7;
    color: var(--ink);
  }

  @media (max-width: 640px) {
    #dolphin-root .container { padding: 48px 24px 80px; }
    #dolphin-root h1 { font-size: 40px; }
    #dolphin-root .deck { font-size: 19px; }
    #dolphin-root .meta-bar { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    #dolphin-root h2 { font-size: 26px; }
    #dolphin-root .pullquote { font-size: 21px; padding: 24px; }
    #dolphin-root .tier-table { font-size: 15px; }
    #dolphin-root .tier-table td { padding: 14px 8px 14px 0; }
    #dolphin-root .verdict-block { padding: 28px 24px; }
    #dolphin-root .footer { flex-direction: column; align-items: flex-start; }
    #dolphin-root .synthesis { padding: 24px 22px; }
    #dolphin-root .synth-thesis { font-size: 17px; }
    #dolphin-root .synth-facts > div { grid-template-columns: 1fr; gap: 4px; }
    #dolphin-root .synth-facts .snapshot { font-size: 11px; }
  }
`;

export default function DolphinNetworkMemo() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div id="dolphin-root">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <div className="container">

        <header className="masthead">
          <div className="brand">cable<span>.</span>capital</div>
          <div>Memo No. 048 &middot; Updated Jul 2026</div>
        </header>

        <div className="title-block">
          <span className="kicker">Investment Memo &middot; Post-TGE Update</span>
          <h1>Dolphin Network: <em>waiting for the door to open</em></h1>
          <p className="deck">A well-designed token, a real customer, and one binary catalyst still to come.</p>

          <div className="meta-bar">
            <div className="meta-item">
              <span className="label">Stance</span>
              <span className="value accent">Starter</span>
            </div>
            <div className="meta-item">
              <span className="label">Conviction</span>
              <span className="value">6 / 10</span>
            </div>
            <div className="meta-item">
              <span className="label">Stage</span>
              <span className="value">Post-TGE, pre-API</span>
            </div>
            <div className="meta-item">
              <span className="label">Filter Pass</span>
              <span className="value">5 of 6</span>
            </div>
          </div>
        </div>

        <div className="synthesis">
          <div className="synth-eyebrow">In brief</div>
          <p className="synth-thesis">
            Voorhees needed uncensored models for Venice, so he funded a small lab called Dolphin in 2023. Two years later the lab has three million users routed through its models on Venice, five million monthly Hugging Face downloads, and a token whose contract spends every dollar of network revenue buying POD on the open market. The mechanism is coded. The revenue is not, because the public API has not opened. Whether the door opens in the next four to eight weeks is the whole trade.
          </p>
          <dl className="synth-facts">
            <div>
              <dt>Position</dt>
              <dd>Starter, 0.5 to 1% of the AI-crypto sleeve, at $0.30 to $0.35 entry. Stake into xPOD immediately. Treat as illiquid.</dd>
            </div>
            <div>
              <dt>Kills it</dt>
              <dd>API launch slips past September. OpenRouter listing lands but does under $100k in the first month. Independent Qwen 3.6 27B benchmarks come in under 75% of Opus 4.7.</dd>
            </div>
            <div>
              <dt>What you need to believe</dt>
              <dd>That the team who shipped the models can also ship a paid public API. And that they do it before the emissions clock outruns the demand clock.</dd>
            </div>
          </dl>
        </div>

        <section>
          <h2><span className="num">01</span>Customer first, network second, token third</h2>

          <p>Dolphin built its customer before it built its network. That single fact is what separates it from the dozens of decentralized inference projects incentivising GPUs and waiting for demand to arrive.</p>

          <p>Erik Voorhees was building a consumer AI product, Venice, that would sell privacy and uncensored responses. To do that he needed models that would answer the question when asked, and most of the open frontier would not. So he funded a small lab that spent two years quietly fine-tuning uncensored versions of Llama, Mistral, Qwen, and Gemma.</p>

          <p>By the time that lab, Dolphin, issued a token, its models were the default uncensored layer on Venice for three million users, and its open releases pulled five million downloads a month on Hugging Face. Only then did they stand up a network to serve them.</p>

          <p>The current network state reflects that ordering. Datagen.dphn.ai runs 1.5 million tokens per second across 14,000 GPUs. That is real production capacity. The workload is a coding dataset the network is generating for itself, because the public API has not opened. Nodes earn POD emissions from treasury; there is no external revenue to buy back against yet. That is the timing risk in one sentence.</p>

          <p>Correction from the May draft: it framed Venice as a potential Dolphin competitor. Voorhees is actually a Dolphin investor and a POD holder; the two projects are one thing, not two. Fixing that reading is what turned the memo from a Monitor into a starter position.</p>
        </section>

        <section>
          <h2><span className="num">02</span>What makes the mechanism work</h2>

          <p>Two things separate POD from every other DePIN inference token I have looked at this year. Verification that actually holds up. Value capture that actually flows.</p>

          <h3>Verification</h3>

          <p>The hard problem in decentralized inference is knowing that the stranger you paid ran the model they said, at the quality they claimed, and not a smaller quantised version they had in a folder. Every prior attempt has hit the same wall. File-hash checks fail because nodes can swap models in memory after the check. Prompt re-execution works but leaks the prompt and doesn&rsquo;t scale.</p>

          <p>Dolphin&rsquo;s answer is live-weight proofs. Sample the tensors actually resident in the runtime at the moment a response is produced, compare against the approved model&rsquo;s manifest. Overhead is around 0.1% of a full re-inference. Cheap enough to run on every response. It verifies what is loaded, not what is emitted, so it extends to image, audio, and video where token-based verification breaks down.</p>

          <p>Which matters, because the cost advantage is largest in exactly those modalities. A 4090 is 12 to 18 times more efficient per dollar than an H100 for audio, and 5 to 8 times for image and video. Those are also the highest-margin modalities in AI. ElevenLabs alone is reportedly near $500M ARR on audio.</p>

          <div className="pullquote">
            The verification stack and the revenue stack are the same moat.
          </div>

          <h3>Value capture</h3>

          <p>100% of network revenue automatically buys POD on the open market. No discretionary schedule, no per-epoch team decision. Coded into the contract.</p>

          <p>The bought-back POD doesn&rsquo;t burn. It splits between the treasury (which pays node emissions) and the xPOD staking vault (as auto-compounding yield to stakers). Governance sets the split ratio, and the ratio is still to be decided. That is the softest part of the design.</p>

          <p>For a passive holder this is closer to negative-carry than to a share of cash flows. To capture the mechanism, you stake into xPOD, accept a three-month cooldown to exit, and take yield as auto-compounded POD.</p>

          <h3>Unit economics</h3>

          <table className="tier-table">
            <thead>
              <tr>
                <th>Line</th>
                <th colSpan={2}>Per 1M tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="workload">Cheapest OpenRouter comparable</td>
                <td className="edge" colSpan={2}>$1.00</td>
              </tr>
              <tr className="strong-row">
                <td className="workload">Dolphin list price</td>
                <td className="edge" colSpan={2}>$0.70</td>
              </tr>
              <tr>
                <td className="workload">Paid to node operator</td>
                <td className="edge" colSpan={2}>$0.50</td>
              </tr>
              <tr className="strong-row">
                <td className="workload">Network spread &rarr; POD buyback</td>
                <td className="edge" colSpan={2}>$0.20</td>
              </tr>
            </tbody>
          </table>

          <p>Undercutting the cheapest centralised provider by 30% while still extracting $0.20 of buyback per million tokens is a real edge. On the demand side, Qwen 3.6 27B is claimed at 82 to 88% of Opus 4.7 on coding tasks. Opus runs $25 per million output tokens. Dolphin at $0.70 is about 3% of the frontier price for mid-eighties frontier quality.</p>

          <p>OpenRouter routes about a billion dollars a year in inference. Even 1% capture is $10M gross and $2.9M of buyback. Against a $15M market cap that is a 19% annualized bid on the token. Against $172M FDV it is 1.7%. Reflexivity works on the near-term price and competes with fully diluted supply long-term. Fine, provided you are honest about the timeframe you are trading.</p>

          <h3>Ownership</h3>

          <table className="tier-table">
            <thead>
              <tr>
                <th>Bucket</th>
                <th>POD</th>
                <th>Terms</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="workload">Treasury</td>
                <td className="edge">289.6M / 57.9%</td>
                <td className="verdict">Protocol-controlled. Drips out via node emissions at $0.50/M tokens.</td>
              </tr>
              <tr>
                <td className="workload">Seed</td>
                <td className="edge">117.6M / 23.5%</td>
                <td className="verdict">$886k raised Jun 2024 at $0.0075. Cliff cleared Jul 1, 2026.</td>
              </tr>
              <tr className="strong-row">
                <td className="workload">Team</td>
                <td className="edge">50M / 10.0%</td>
                <td className="verdict">2yr cliff + 10yr linear from Jun 2026. Fully vested Jun 2036.</td>
              </tr>
              <tr>
                <td className="workload">LP + OTC</td>
                <td className="edge">47M / 9.5%</td>
                <td className="verdict">Uniswap v4 pool plus three staked OTC deals.</td>
              </tr>
            </tbody>
          </table>

          <p>Nobody signs a twelve-year vest without believing in the outcome. The team also hard-committed to no equity. If they ever need a legal entity to accept fiat, it will be non-profit, Morpho-style. The token is the only value-capture instrument. That combination, more than any single mechanism, is what makes this a real bet rather than a fair-launch fantasy.</p>
        </section>

        <section>
          <h2><span className="num">03</span>What the market is paying</h2>

          <p>The natural comparison is Akash, the category&rsquo;s most established name. Akash is a real project with real traction: meaningful compute spend, a Burn-Mint Equilibrium settlement stablecoin, and through AkashML reportedly serving over a billion tokens a day on OpenRouter. It even added a consumer-GPU beta to reach the same hardware pool. Nothing about Akash is weak. The gap is structural.</p>

          <p>Akash sells raw compute and sources demand externally. Dolphin&rsquo;s distribution runs through Venice, five million monthly Hugging Face downloads, and integrations with Cursor, Cline, and Roo. Akash has no inference-integrity primitive comparable to live-weight proofs, and session-rental supply cannot reach the idle-gamer-GPU pool peer-to-pool absorbs by design.</p>

          <p>The tell is on the pricing side. AkashML inference is reportedly priced higher than Alibaba&rsquo;s own first-party Qwen API. A decentralized network is supposed to undercut the centralised incumbent, not charge more than the model&rsquo;s creator. That is exactly the opening a leaner consumer-GPU network is built to exploit.</p>

          <p>Akash trades at $210M. Dolphin trades at $15M. If Dolphin lands the API and the OpenRouter listing, closing to Akash&rsquo;s zone is 14x. If it doesn&rsquo;t, the gap is priced right, and probably widens the wrong way.</p>
        </section>

        <section>
          <h2><span className="num">04</span>The six-part filter, post-TGE</h2>

          <p>The May draft passed three of six cleanly and left three pending on token disclosure. TGE has happened. The doc is public. The picture now:</p>

          <table className="tier-table">
            <thead>
              <tr>
                <th>Filter</th>
                <th>Verdict</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr className="strong-row">
                <td className="workload">Working product</td>
                <td className="edge">Pass</td>
                <td className="verdict">5M monthly downloads, 3M users through Venice, network live.</td>
              </tr>
              <tr className="strong-row">
                <td className="workload">Mechanical demand</td>
                <td className="edge">Pass on design</td>
                <td className="verdict">Buyback is coded. Missing input is external revenue.</td>
              </tr>
              <tr className="strong-row">
                <td className="workload">Incumbents can&rsquo;t capture</td>
                <td className="edge">Pass</td>
                <td className="verdict">SLA-based providers can&rsquo;t route to consumer hardware.</td>
              </tr>
              <tr className="strong-row">
                <td className="workload">Founder alignment</td>
                <td className="edge">Pass</td>
                <td className="verdict">12-year vest, no equity, non-profit fiat entity if ever needed.</td>
              </tr>
              <tr>
                <td className="workload">Asymmetric entry</td>
                <td className="edge">Pass on MC</td>
                <td className="verdict">$15M MC clean. $172M FDV against Akash&rsquo;s $210M less so.</td>
              </tr>
              <tr>
                <td className="workload">Reflexivity favours holders</td>
                <td className="edge">Pass on design</td>
                <td className="verdict">Cash-flow accrual to xPOD. Loop hasn&rsquo;t started spinning.</td>
              </tr>
            </tbody>
          </table>

          <p>Five clean passes and one pending on activation. The framework that had three unknowns in May now hangs on one thing: whether the API opens.</p>
        </section>

        <section>
          <h2><span className="num">05</span>The bear case, honestly</h2>

          <p>The strongest short on POD isn&rsquo;t complicated. It runs like this. The API never opens on a schedule that matters, because Dolphin can&rsquo;t ship a public inference product that works at scale, because the team is optimising for headlines and dataset generation over the harder work of onboarding paying developers. Meanwhile 14,000 GPUs burn treasury POD for a coding dataset that maybe sells and maybe doesn&rsquo;t. The Qwen benchmarks turn out to be Qwen&rsquo;s numbers, not the community&rsquo;s. Qwen 27B lands at 68% of Opus 4.7 rather than 88%, and the &ldquo;3% of frontier price for mid-eighties quality&rdquo; pitch collapses to &ldquo;cheaper than a model buyers don&rsquo;t want.&rdquo; Venice plateaus at three million users because uncensored is a niche, not a market. Prime Intellect ships equivalent verification on a bigger network before Dolphin closes its gap. In that world POD is a beautifully-designed mechanism that never gets to prove itself, and the emissions clock runs out before the demand clock arrives.</p>

          <p>None of the pieces is the base case. But you don&rsquo;t need all of them. Two of the five is enough to break the trade, and the sizing has to survive that.</p>
        </section>

        <section>
          <h2><span className="num">06</span>What I&rsquo;m doing about it</h2>

          <p>Starter position, 0.5 to 1% of the AI-crypto sleeve, at $0.30 to $0.35. Stake into xPOD immediately. Treat as illiquid for three months minimum.</p>

          <p>If you&rsquo;re already holding VVV or sVVV as I am, you&rsquo;re already exposed to Dolphin whether you meant to be or not. Venice&rsquo;s success feeds Dolphin&rsquo;s revenue funnel, and Dolphin&rsquo;s uncensored models are what Venice sells. A meaningful POD position on top of existing Venice exposure turns three positions into one bet expressed three ways. That is real concentration. Size the starter accordingly, and do not add before you decide whether the concentration is a feature or a bug.</p>

          <p>Scale up if any of these land: V2 worker release ships, the public API opens, an OpenRouter listing goes live near the $0.70 mark, first on-chain buyback executions show visible volume, governance publishes the buyback-to-xPOD split at 50% or higher.</p>

          <p>Cut the position if the API slips past September with no update, or first-month OpenRouter revenue is under $100k, or independent Qwen 27B benchmarks come in under 75% of Opus 4.7, or the buyback contract shows negligible activity 60 days after launch, or Venice reduces routing volume.</p>

          <p>Four things I don&rsquo;t know. When the API opens (soon has been the answer for six weeks). How the buyback split gets set. Whether the Qwen benchmarks survive independent evaluation. Whether Venice keeps growing past three million.</p>

          <p>None of that changes the sizing. It changes the willingness to hold. If the answers come back wrong, the position closes without argument. If they come back right, this looks obvious in retrospect and probably too small.</p>

          <p style={{ marginTop: '32px' }}>Everything in this memo resolves to one gate. The public API opens on a schedule that beats the emissions clock, or it does not. Three signals to watch: the V2 worker release, an OpenRouter listing near $0.70, and the first visible buyback executions from the treasury address on Base. Those three resolve the trade.</p>
        </section>

        <footer className="footer">
          <div>cable.capital &middot; clarity under complexity</div>
          <div>CC &middot; 2026</div>
          <p className="disclaimer">Not investment advice. Personal research notes published for transparency. This memo supersedes the May 2026 draft that framed Venice as a Dolphin competitor. That framing was factually wrong. Venice is Dolphin&rsquo;s anchor customer, and Erik Voorhees is a Dolphin investor. Cable Capital holdings disclosed: VVV, sVVV, DIEM, and after this memo a starter POD position staked into xPOD. The four positions are one thesis expressed four ways. The concentration is real.</p>
        </footer>

      </div>
    </div>
  );
}
