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
              <dt>Anchor</dt>
              <dd>Venice.AI, three million users, all uncensored chat routed through Dolphin models. Erik Voorhees, Venice&rsquo;s founder, is a Dolphin investor and a POD holder.</dd>
            </div>
            <div>
              <dt>Snapshot</dt>
              <dd className="snapshot">$0.35 &middot; MC $15M &middot; FDV $172M &middot; Circulating 8.6% &middot; Holders 4,668 (largest &lt;1%) &middot; Team vest 12yr from Jun 2026 &middot; 100% revenue &rarr; buyback, coded &middot; 0xeD66&hellip;dF8F on Base</dd>
            </div>
          </dl>
        </div>

        <section>
          <h2><span className="num">01</span>They built the customer before the network</h2>

          <p className="drop-cap">Every project in decentralized inference solves the puzzle from the same end. Build a marketplace. Get GPUs online. Hope someone shows up to pay for them.</p>

          <p>Dolphin started at the other end. Erik Voorhees was building a consumer AI product, Venice, that would sell privacy and uncensored responses. To do that he needed models that would answer the question when asked. Most of the open frontier would not, and would refuse or hedge on the questions his users cared about. So he funded a small lab that spent two years quietly fine-tuning uncensored versions of Llama, Mistral, Qwen, Gemma.</p>

          <p>By the time that lab, Dolphin, issued a token in early 2026, its flagship model, Dolphin Mistral 24B Venice Edition, was the default uncensored layer on Venice for around three million users, and its open releases were pulling five million downloads a month on Hugging Face.</p>

          <p>Only then did they stand up a network to serve them.</p>

          <p>That ordering is the whole memo. Most decentralized inference is supply looking for demand. Dolphin already has the demand. Everything else is timing, and how well the token catches the revenue on its way through.</p>

          <p>I got this wrong on my first pass. The May draft framed Venice as a potential competitor. It is not. Voorhees is a Dolphin investor and a POD holder. The uncensored models he sells on Venice are built inside the Dolphin lab, released open-source on Hugging Face, and served through the Dolphin network as it comes online. Neither project functions the way it currently does without the other.</p>

          <div className="pullquote">
            Most decentralized inference is supply looking for demand. Dolphin already has the demand.
          </div>
        </section>

        <section>
          <h2><span className="num">02</span>Verification is where the moat lives, not the compute</h2>

          <p>The cheap-consumer-GPU story is the loudest thing you read about decentralized inference, and it is the least interesting part. Nvidia will always segment the market. Consumer cards will stay cheap for gamers, data-centre cards will keep enterprise margins, and the raw cost advantage will stay real and durable. Every project in the category can point to it. It does not tell you who wins.</p>

          <p>The harder problem is verification. If you pay a stranger to run a model on hardware you cannot inspect, how do you know they ran the model they said, at the quality they claimed, and not a smaller or aggressively quantised version they had in a folder? Every prior attempt at this has run into the same wall. Verify a file hash at load? A node can swap the model in memory after passing the check. Re-execute the prompt on a validator? That works, but it re-runs the whole prompt and leaks the prompt to the validator. Neither scales.</p>

          <p>Dolphin&rsquo;s answer is what they call live-weight proofs. Rather than hashing a file or replaying a prompt, they sample the tensors actually resident in the serving runtime at the moment a response is produced, and compare them against the approved model&rsquo;s manifest. Overhead is around 0.1% of a full re-inference. That is a 100 to 1000x efficiency edge, cheap enough to run on every response, with anti-replay through signed challenge bundles and randomised tensor selection.</p>

          <p>It verifies what is loaded, not what is emitted. That extends naturally to image, audio, and video (via attention projections and MLP blocks, plus golden-sample checks like CLIP embeddings and spectrogram statistics), which most competitors cannot reach because their verification is token-based. Dolphin&rsquo;s own benchmarks put consumer GPUs at 12 to 18 times more cost-efficient than H100s for audio, and 5 to 8 times for image and video. Those are the highest-margin modalities in AI. ElevenLabs is reportedly near $500M ARR on audio alone. They are also precisely the modalities most decentralized networks cannot verify.</p>

          <div className="pullquote">
            The verification stack and the revenue stack are the same moat.
          </div>

          <p>Sitting on top of the technical layer is a bonding mechanism worth naming in detail. An operator can claim earnings as bonded POD or as liquid POD, with a 20% fee on liquid claims that routes to xPOD stakers. The rule that matters: an operator has to accumulate four weeks of expected earnings as bond before the liquid-claim option unlocks at all. That closes the cheat-and-cash-out path (pass early checks, swap in a fake model, extract, disappear) without requiring nodes to buy POD upfront. New miners simply mine their bond for the first four weeks. Slashing runs through a multisig on confirmed misbehaviour, reversible if a hardware fault turns out to explain the mismatch.</p>
        </section>

        <section>
          <h2><span className="num">03</span>The token buys itself, but only if the API opens</h2>

          <p>The value-capture claim on POD is aggressive: 100% of network revenue is used to buy POD on the open market. No discretionary schedule, no team decision required per epoch, no permission to skip. Coded into the contract.</p>

          <p>The bought-back POD does not burn. It splits between the treasury (to replenish emissions paid to node operators) and the xPOD staking vault (as auto-compounding yield to stakers). Governance sets the split ratio, and the ratio is still to be decided. That is the softest part of the design and one of two governance dials on the whole mechanism (the other being the boost multiplier). Everything else runs automatically.</p>

          <p>For a passive holder this is closer to negative-carry than to a share of cash flows. Emissions to nodes dilute. Yield to xPOD flows to other people. To capture the mechanism you have to stake, accept the three-month stAAVE-style cooldown, and take xPOD which auto-compounds without a claim. Curve-style boost sits on top: 1.5x linear at six months of bond-vs-expected-earnings, up to 2x competitive above that. Convex&rsquo;s vlCVX &ldquo;constant power&rdquo; trick means stakers keep full rewards without perpetually re-locking.</p>

          <p>Ownership is unusually clean:</p>

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
                <td className="edge">289.63M / 57.9%</td>
                <td className="verdict">Protocol-controlled. Drips out through node emissions at $0.50 per million tokens of inference work.</td>
              </tr>
              <tr>
                <td className="workload">Seed</td>
                <td className="edge">117.60M / 23.5%</td>
                <td className="verdict">$886k raised Jun 2024 at $0.0075. 1-year cliff cleared Jul 1, 2026. Team already bought 38M back at $0.01 in Q1.</td>
              </tr>
              <tr className="strong-row">
                <td className="workload">Team</td>
                <td className="edge">50M / 10.0%</td>
                <td className="verdict">2-year cliff plus 10-year linear vest from Jun 2026. First unlock Jun 2028. Fully vested Jun 2036.</td>
              </tr>
              <tr>
                <td className="workload">Uniswap v4 LP</td>
                <td className="edge">42.77M / 8.6%</td>
                <td className="verdict">Bonded liquidity.</td>
              </tr>
              <tr>
                <td className="workload">OTC 2025</td>
                <td className="edge">4.25M / ~0.85%</td>
                <td className="verdict">Three deals. 1-year cliff plus 2-year linear. Staked.</td>
              </tr>
            </tbody>
          </table>

          <p>Nobody accepts a twelve-year vest without believing in the outcome. The team also hard-committed to no equity: if they ever need a legal entity to accept fiat, it will be non-profit, structured like Morpho&rsquo;s. The token is the only value-capture instrument. Combined with the vest, this is one of the cleanest founder-alignment designs I have looked at this year.</p>

          <p>None of it matters if the API does not open. Every token generated to date is a synthetic coding dataset the network is producing for itself: 1.4 trillion tokens in two weeks across roughly 14,000 GPUs, all of it pre-revenue by design. Nodes are earning POD emissions in exchange. The buyback mechanism has nothing to buy with yet because there is no external revenue. Everything downstream depends on the API opening and the OpenRouter listing arriving with the pricing the team has telegraphed. If those slip past September, the market&rsquo;s patience will slip first.</p>
        </section>

        <section>
          <h2><span className="num">04</span>Four lines of arithmetic</h2>

          <p>The concrete unit economics the team has published for their planned OpenRouter listing of a Qwen 3.6 35B model:</p>

          <table className="tier-table">
            <thead>
              <tr>
                <th>Line</th>
                <th colSpan={2}>Per 1M tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="workload">Cheapest comparable on OpenRouter</td>
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

          <p>Undercutting the cheapest centralised provider by 30% while still extracting $0.20 of buyback pressure per million tokens is a real edge.</p>

          <p>On the demand side, Qwen&rsquo;s published benchmarks put Qwen 3.6 27B at 98.7% of Claude Opus 3.5 and 82 to 88% of Opus 4.7 on coding and agentic tasks. Opus runs $25 per million output tokens. Dolphin at $0.70 is around 3% of the frontier price for something in the mid-eighties of frontier quality, sold into OpenRouter, which routes roughly a billion dollars a year in inference demand.</p>

          <p>Even 1% market capture is $10M a year of gross revenue and roughly $2.9M a year of buyback. Against a $15M market cap that is a 19% annualized bid, not counting reinvestment through xPOD. Against a $172M FDV it is 1.7%, which is where the tight-float story starts to matter. Revenue that clears the market cap comfortably is still small against fully diluted supply, so the reflexivity works on the near-term price and not on the long-term one. Fine, provided you are honest about which timeframe you are trading.</p>

          <p>The benchmark claim needs independent verification. First-party numbers are optimistic by default. If community evaluations land Qwen 27B materially below Qwen&rsquo;s numbers, the pitch weakens fast. Track this before sizing up.</p>
        </section>

        <section>
          <h2><span className="num">05</span>Akash costs 14x more with less to show</h2>

          <p>The natural comparison in decentralized compute is Akash, the category&rsquo;s most established name. Akash is a real project with real traction. Meaningful compute spend. A Burn-Mint Equilibrium settlement stablecoin. Through AkashML, reportedly serving on the order of a billion-plus tokens per day on OpenRouter. It even added a consumer-GPU beta to reach the same hardware pool Dolphin targets. Nothing about Akash is weak. The gap is structural.</p>

          <p>Akash sells raw compute and has to source demand for it externally. Dolphin&rsquo;s distribution runs through Venice, five million monthly Hugging Face downloads, and existing integrations with Cursor, Cline, and Roo on the coding side. Akash has no inference-integrity primitive comparable to live-weight proofs, which matters because verification is the exact thing that decides whether decentralized inference gets trusted enough to charge for at all. Both route value to the token through usage, but a 100%-of-revenue buyback is a more direct mechanism than burning against a settlement stablecoin. And Akash&rsquo;s session-rental supply model cannot reach the idle-gamer-GPU pool that peer-to-pool absorbs by design.</p>

          <p>There is a revealing pricing detail on the AkashML side. Its inference is reportedly priced higher than Alibaba&rsquo;s own first-party Qwen API. That is an odd place for a decentralized network to be. Supposed to undercut the centralised incumbent. Actually charging more than the model&rsquo;s creator. It suggests the inference is not being optimised aggressively, and it points to how much room a leaner consumer-GPU network has to compete on price. Dolphin&rsquo;s whole pricing thesis depends on being the cheapest credible source of a given model, and the incumbent leaving that gap open is exactly the opening it is built to exploit.</p>

          <p>Akash trades at roughly $210M. Dolphin trades at $15M. If Dolphin lands the API and the OpenRouter listing, the closing move to Akash&rsquo;s zone is what the trade looks like. If it doesn&rsquo;t, the gap is priced right.</p>
        </section>

        <section>
          <h2><span className="num">06</span>The six-part filter, post-TGE</h2>

          <p>I run every token through the same six checks. The May draft passed three cleanly and left three pending on token disclosure. TGE has happened, and the tokenomics doc is public. Here is the picture now.</p>

          <h3>1. Working product before the token.</h3>
          <p>The lab has models with five million monthly downloads and one anchor consumer product in Venice. The network is technically live and running real workloads, just not paid ones yet. <strong>Pass.</strong></p>

          <h3>2. Mechanical token demand.</h3>
          <p>100% of network revenue automatically buys POD on the open market. The mechanism is coded and non-discretionary. The missing input is the external revenue itself. <strong>Pass on the mechanism. Pending on volume.</strong></p>

          <h3>3. Narrative incumbents cannot capture.</h3>
          <p>Centralised providers cannot route to consumer hardware without abandoning the SLA model they sell on. Verified consumer-GPU inference at three percent of frontier prices is genuinely orthogonal to what Together, Fireworks, and DeepInfra sell. <strong>Pass.</strong></p>

          <h3>4. Founder treats the token as a financial asset.</h3>
          <p>Twelve-year team vest, DAO structure with a hard-commit to non-profit if a fiat entity is ever needed, and the token as the sole value-capture instrument. Nobody signs a decade-long vest, and closes the door on equity, without believing in the outcome. <strong>Pass.</strong></p>

          <h3>5. Asymmetric entry pricing.</h3>
          <p>$15M market cap against $172M fully diluted valuation, against an incumbent (Akash) at $210M with weaker distribution and no comparable verification. At the market cap level, the entry looks asymmetric. At the FDV level, less so. The emissions schedule is treasury-controlled rather than a supply cliff, and the seed unlock has already cleared. <strong>Pass on market cap, watch on FDV.</strong></p>

          <h3>6. Reflexivity favours holders.</h3>
          <p>Buy-and-recycle to xPOD is real cash-flow accrual for staked capital, and negative-carry for passive holders. The mechanism is designed correctly. The reflexive loop starts spinning the moment external revenue does. Neither has started yet. <strong>Pass on design. Pending on activation.</strong></p>

          <p style={{ marginTop: '28px' }}>Five clean passes and one pending on activation. The framework that used to have three unknowns now hangs on a single thing: whether the API opens and volume shows up on-chain.</p>
        </section>

        <section>
          <h2><span className="num">07</span>What kills this</h2>

          <p>The steelman is genuinely uncomfortable, and worth stating cleanly.</p>

          <ul className="signal-list">
            <li><strong>The API doesn&rsquo;t open, or opens with negligible external demand.</strong> The whole buyback thesis depends on external revenue. If synth-vN batches continue indefinitely with no OpenRouter listing and no third-party inference, this is Bittensor with cleaner verification and no product-market fit. Emissions keep flowing to nodes for a self-consumed dataset. Nodes sell to cover costs. Buyback has nothing to buy with. Treasury runway is six years at current burn, which is a long time to wait for the flywheel to spin.</li>
            <li><strong>Qwen 3.6 benchmarks don&rsquo;t survive independent evaluation.</strong> First-party model benchmarks are almost always optimistic. Independent evaluations tend to compress the gap. If Qwen 27B lands in the 65 to 75% of Opus 4.7 range rather than the claimed 82 to 88%, the pitch changes from &ldquo;88% of frontier at 3% of price&rdquo; to &ldquo;cheaper than a model buyers don&rsquo;t especially want anyway.&rdquo;</li>
            <li><strong>Live-weight proofs fail in production.</strong> Verification that works in the lab does not always hold at scale. If nodes find a way to cheat undetected, or the multimodal extension breaks outside controlled conditions, the moat evaporates and Dolphin becomes another cheap-GPU marketplace.</li>
            <li><strong>Venice loses users, or uncensored AI turns out to be a smaller market than the three-million-user framing suggests.</strong> The anchor demand is one product. A centralised competitor with its own compute could capture the same niche. If Venice&rsquo;s growth flatlines, so does the demand engine.</li>
            <li><strong>A horizontal competitor ships equivalent verification first.</strong> Prime Intellect, Gensyn, and Hyperbolic are working on adjacent problems with real teams and real capital. Live-weight proofs are the moat. If someone else ships something comparable, the differentiation compresses.</li>
          </ul>

          <p>Each of these is real. None of them is the base case. The base case is that a well-organized lab with an anchor customer and functional verification opens its API in a reasonable window and the mechanism starts working the way it was designed to. But the base case can be wrong, and the sizing has to survive that.</p>
        </section>

        <div className="verdict-block">
          <h3>Position: Starter, gated on API launch.</h3>
          <p>0.5 to 1% of the AI-crypto sleeve at $0.30 to $0.35 entry. Stake into xPOD immediately. Spot POD alone captures neither the buyback yield nor the utility (subscription access, daily inference allowance, delegable to a vlCVX-style vote market), and the emissions dilution hits it head-on. Cooldown is three months, so treat the position as illiquid from the moment it goes on.</p>
          <p>The VVV, sVVV, and DIEM positions Cable Capital already holds correlate directly with Dolphin. A meaningful POD size turns three positions into one exposure expressed four ways. The concentration is genuine. Size the starter accordingly, and do not add before the concentration is either accepted or diluted.</p>
          <p>The bull case is that the mechanism does work and the market has not seen it working yet. The next four to eight weeks resolve most of it.</p>
        </div>

        <section>
          <h2><span className="num">08</span>What would move the needle</h2>

          <h3>Scale up conditional on</h3>
          <ul className="signal-list">
            <li>V2 worker release ships, folding in the full live-weight-proofs implementation on nodes.</li>
            <li>Public API opens with real endpoints and pricing.</li>
            <li>OpenRouter lists Dolphin&rsquo;s Qwen 3.6 model near the $0.70 mark.</li>
            <li>First on-chain buyback executions show visible volume from the treasury address.</li>
            <li>Governance publishes the buyback-to-xPOD split at 50% or higher.</li>
          </ul>

          <h3>Kill triggers</h3>
          <ul className="signal-list">
            <li>API launch slips past September 2026 with no public timeline update.</li>
            <li>OpenRouter listing goes live but first-month gross revenue is below $100k.</li>
            <li>Independent Qwen 3.6 27B benchmarks come in below 75% of Opus 4.7 on coding and agentic tasks.</li>
            <li>Buyback contract shows negligible on-chain activity 60 days after the API opens.</li>
            <li>synth-v2 completes and the network&rsquo;s GPU count crashes by more than 70%, indicating emissions-driven supply with no organic demand behind it.</li>
            <li>Venice reduces routing volume to Dolphin models, changes its uncensored strategy, or loses meaningful users.</li>
            <li>A horizontal competitor (Prime Intellect, Gensyn, Hyperbolic) ships equivalent live-weight verification on consumer hardware.</li>
          </ul>
        </section>

        <section>
          <h2><span className="num">09</span>What I don&rsquo;t know yet</h2>

          <p>I don&rsquo;t know when the API opens. The team signals soon. Soon has been the answer for at least six weeks. The catalyst clock is real.</p>

          <p>I don&rsquo;t know how the buyback-to-xPOD split ends up being set. Governance-pending is governance-pending. A 50-50 split would be materially different from an 80-20 in either direction, and the difference is who captures the flow.</p>

          <p>I don&rsquo;t know whether the Qwen 3.6 benchmarks survive independent evaluation. First-party numbers are optimistic by default. The gap could be five points, or twenty.</p>

          <p>I don&rsquo;t know whether Venice keeps growing. Three million users is a real number today, and it is small next to any centralised alternative. The uncensored niche has always been real, and has never been huge.</p>

          <p>None of that changes the sizing. It changes the willingness to hold. If the answers come back the wrong way, the position closes without argument. If they come back right, this looks obvious in retrospect and probably too small.</p>

          <p style={{ marginTop: '32px' }}>Voorhees funded a lab because he needed models. The lab built them, then a network, then a token to pay the network. The customer has been at the door the whole time. The door is what opens next.</p>
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
