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
          <div>Memo No. 047 &middot; May 2026</div>
        </header>

        <div className="title-block">
          <span className="kicker">Investment Memo &middot; Pre-Token</span>
          <h1>Dolphin Network: <em>distributed inference, narrowed</em></h1>
          <p className="deck">A consumer-GPU inference network with real arbitrage in audio and small LLMs, marginal edge in image, and a fading thesis in video. The bet is workload economics, not sharding.</p>

          <div className="meta-bar">
            <div className="meta-item">
              <span className="label">Stance</span>
              <span className="value accent">Monitor</span>
            </div>
            <div className="meta-item">
              <span className="label">Conviction</span>
              <span className="value">5 / 10</span>
            </div>
            <div className="meta-item">
              <span className="label">Stage</span>
              <span className="value">Pre-token</span>
            </div>
            <div className="meta-item">
              <span className="label">Filter Pass</span>
              <span className="value">3 of 6</span>
            </div>
          </div>
        </div>

        <section>
          <h2><span className="num">01</span>The frame</h2>
          <p className="drop-cap">Dolphin Network is marketed alongside distributed model sharding research, but the actual investment is not a sharding play. The sharding paper (splitting one large model across geographically separate GPUs via pipeline parallelism) is interesting infrastructure. It is not the product that generates revenue.</p>

          <p>The product is a workload-routing economy: match the right inference job to the right consumer GPU, where each node runs a complete model locally, and capture the spread between consumer-hardware cost basis and hosted-API pricing. The benchmark document makes this case explicitly through head-to-head 4090 vs H100 comparisons across image, audio, and LLM workloads.</p>

          <p>Reframing this way clarifies what to underwrite. We are not betting on whether 70B dense models can be cleanly sharded across consumer hardware (they cannot, beyond a few nodes, per the sharding paper itself). We are betting on whether enough latency-tolerant inference demand routes to a decentralized network priced below incumbents.</p>

          <div className="pullquote">
            The sharding research is a moat candidate. The economics are the product.
          </div>
        </section>

        <section>
          <h2><span className="num">02</span>The economic argument, by tier</h2>

          <p>Consumer-GPU cost advantage is not uniform across workloads. It is dramatic where the H100&rsquo;s compute and memory bandwidth advantages do not compound, and marginal where they do. Reading the benchmark data carefully:</p>

          <table className="tier-table">
            <thead>
              <tr>
                <th>Workload</th>
                <th>Edge per $</th>
                <th>Read</th>
              </tr>
            </thead>
            <tbody>
              <tr className="strong-row">
                <td className="workload">Audio (TTS, ASR)</td>
                <td className="edge">12.9x &ndash; 18.3x</td>
                <td className="verdict">The strongest case. Audio models don&rsquo;t saturate H100 compute. Real, durable arbitrage.</td>
              </tr>
              <tr className="strong-row">
                <td className="workload">LLM, dense, &le;14B</td>
                <td className="edge">8.0x</td>
                <td className="verdict">Llama 8B fits in 24GB cleanly. No sharding overhead. Persistent demand for cheap open-source inference.</td>
              </tr>
              <tr>
                <td className="workload">Image generation</td>
                <td className="edge">5.6x &ndash; 7.9x</td>
                <td className="verdict">Solid edge, but hosted pricing already compressed (SDXL at $0.01/image). Absolute spread is small.</td>
              </tr>
              <tr>
                <td className="workload">LLM, dense, 24B</td>
                <td className="edge">1.4x</td>
                <td className="verdict">The moat narrows sharply at scale. Warning sign for larger dense models.</td>
              </tr>
              <tr>
                <td className="workload">Video generation</td>
                <td className="edge">Unproven</td>
                <td className="verdict">Bull case requires open-source quality to catch frontier. Grok Imagine evidence pushes the other way.</td>
              </tr>
            </tbody>
          </table>

          <p>The pattern: Dolphin&rsquo;s economic moat is strongest where models are small, hardware-equivalent at consumer scale, and demand is latency-tolerant. It weakens as model size grows and as frontier compute starts to differentiate output quality.</p>
        </section>

        <section>
          <h2><span className="num">03</span>The video reality check</h2>

          <p>The bullish case I initially extended to Dolphin assumed video generation would follow image generation&rsquo;s trajectory: frontier-quality output on consumer-runnable models within 18 to 24 months, opening a large TAM at the audio-style cost advantage. Hands-on use of Grok Imagine forces a correction.</p>

          <p>xAI&rsquo;s Aurora video engine is trained on a cluster of 110,000 NVIDIA GB200 GPUs. The model produces 10-second 720p clips with native audio at $0.05 per second, with generation times of 60 to 100 seconds. The output is, by direct user report, genuinely good across speed, quality, and price.</p>

          <p>This is a different competitive picture than image generation in 2023. Three implications:</p>

          <ul className="signal-list">
            <li><strong>The price floor is already low.</strong> $0.05 per second is $3 per minute, which is meaningfully cheaper than Veo or Sora launch pricing. Even an 80% Dolphin cost advantage produces a small absolute dollar spread per generation, which is hard to overcome the friction of routing to a decentralized provider.</li>
            <li><strong>Latency is no longer the incumbent&rsquo;s weakness.</strong> 60 to 100 seconds is already fast for video. Dolphin&rsquo;s &ldquo;decentralized but slower&rdquo; tradeoff stops working when the incumbent is also fast.</li>
            <li><strong>Training-time compute may create a durable moat in video.</strong> Unlike image generation, where 6B-parameter open-source models caught DALL-E within 18 months, video generation&rsquo;s autoregressive scaling and temporal coherence requirements may genuinely favor frontier-scale training. This is the first generative modality where the compression curve may not bail out the open-source side.</li>
          </ul>

          <p>The honest update: video is the weakest part of the Dolphin thesis, not the strongest. The TAM is closed-source-dominated for premium use cases, and Dolphin captures only price-sensitive long-tail demand where quality variance is acceptable.</p>
        </section>

        <section>
          <h2><span className="num">04</span>Against the six-part filter</h2>

          <p>Standard pre-token framework applied:</p>

          <h3>Working product before token</h3>
          <p>Partial. Benchmark data demonstrates the economic engine exists in lab conditions. Production network and paying demand are not yet visible. <strong>Conditional pass.</strong></p>

          <h3>Mechanical token demand</h3>
          <p>The example economics ($0.05 API price, $0.025 DPHN node reward, $0.025 spread to the network) describe a clean unit economic structure. What we have not seen is the token sink mechanic: how does network revenue create durable buy-side pressure on DPHN, beyond emissions to suppliers. <strong>Unknown. Gating question.</strong></p>

          <h3>Narrative incumbents cannot capture</h3>
          <p>Centralized providers (Together, Fireworks, DeepInfra) cannot easily route to consumer hardware: their value proposition rests on SLAs and uptime guarantees that consumer GPUs cannot match. The decentralized angle is genuinely orthogonal to their model. <strong>Pass.</strong></p>

          <h3>Founder treats token as financial asset</h3>
          <p>Insufficient public information. Token design and founder communication style are the data needed. <strong>Unknown.</strong></p>

          <h3>Asymmetric entry pricing</h3>
          <p>Pre-token, so pricing has not been set by market yet. Will depend on launch structure (fair launch, airdrop allocation, points season, etc.). <strong>Pending.</strong></p>

          <h3>Reflexivity favours holders</h3>
          <p>Possible if the token captures inference revenue through buy-and-burn or fee-share, but undetermined without token design detail. <strong>Pending.</strong></p>

          <p style={{ marginTop: '28px' }}>Three of six pass cleanly. The remaining three depend on token design specifics that are not yet public. This is the structural gap in the underwriting.</p>
        </section>

        <section>
          <h2><span className="num">05</span>What kills the thesis</h2>

          <ul className="signal-list">
            <li><strong>Demand never materialises at scale.</strong> The standard crypto-network bootstrapping risk. The economics work per unit but require sustained inference volume. If average network utilisation sits below 20%, emissions subsidise supply faster than demand catches up, and the token spirals.</li>
            <li><strong>Quality variance breaks buyer trust.</strong> Heterogeneous nodes running the same model on different hardware, drivers, and quantisations produce inconsistent outputs. Centralised providers do not have this problem. Without verifiable inference (TEE attestation, cryptographic proofs), buyers may not trust routing to Dolphin at any price.</li>
            <li><strong>The audio TAM is smaller than the pitch suggests.</strong> ElevenLabs at $500M ARR is the upper-bound reference. Dolphin needs to capture a meaningful share of that market, against incumbents with brand and integration moats. 5 to 10% capture is plausible. 30% is not.</li>
            <li><strong>Token design extracts value rather than capturing it.</strong> If DPHN is governance-only with no mechanical link to inference revenue, then the network can succeed economically while the token does not. This is the most common failure mode in this category.</li>
            <li><strong>A horizontal competitor wins first.</strong> Petals, Exo, Prime Intellect, Hyperbolic, Gensyn are all working on adjacent or overlapping problems. Dolphin needs a defensible technical edge, not just an economics observation that applies to everyone.</li>
          </ul>
        </section>

        <section>
          <h2><span className="num">06</span>The diligence gates</h2>

          <p>Two specific data points convert this from <em>Monitor</em> to a <em>buy</em> or <em>kill</em> decision:</p>

          <h3>1. Token mechanic</h3>
          <p>Specifically, whether DPHN is the unit of account for inference settlement (with buy-and-burn or fee-share mechanics) or whether it is governance with emissions. The first is investable. The second is not, regardless of how well the network performs operationally.</p>

          <h3>2. Demand-side traction</h3>
          <p>Who is the first paying customer at scale, and what workload mix are they routing? Audio TTS at ElevenLabs-displacement pricing is the strongest signal. Long-tail image generation is the weakest. The composition of early demand reveals whether Dolphin is competing on the right tier.</p>

          <p>Secondary signals to monitor: whether the team ships verifiable inference (attestation), whether they target RL rollouts and verifiers (the use case the sharding paper hints at), and how they handle node heterogeneity for output quality consistency.</p>
        </section>

        <div className="verdict-block">
          <h3>Position: Monitor, with positive lean.</h3>
          <p>The economic argument for audio and small-LLM inference is real and demonstrable. The video upside that initially attracted me has been substantially weakened by Grok Imagine&rsquo;s combination of quality, speed, and price. The remaining thesis is narrower but defensible: a workload-specific arbitrage with a 5 to 10% capture target in audio and small-LLM markets, contingent on token design that captures rather than merely distributes value.</p>
          <p>Build a tracking position only after token design is public and at least one paying enterprise customer is visible. Until then, this is a watchlist name, not a portfolio name.</p>
        </div>

        <section>
          <h2><span className="num">07</span>Falsification signals</h2>
          <p>I will downgrade this thesis to <em>Pass</em> if any of the following appear:</p>
          <ul className="signal-list">
            <li>DPHN token is launched as pure governance with no mechanical revenue capture.</li>
            <li>Open-source video models reach Grok Imagine quality on consumer hardware within 12 months. (Counter-intuitively, this would help Dolphin, but its absence within that window confirms the closed-source moat.)</li>
            <li>Average network utilisation after six months of mainnet operation sits below 15%.</li>
            <li>A horizontal competitor (Prime Intellect, Gensyn, Hyperbolic) ships verifiable inference on consumer hardware before Dolphin.</li>
            <li>Audio model quality from frontier closed-source providers (OpenAI, ElevenLabs, Google) pulls meaningfully ahead of open-source Kokoro and Qwen TTS, destroying the audio arbitrage.</li>
          </ul>
        </section>

        <footer className="footer">
          <div>cable.capital &middot; clarity under complexity</div>
          <div>CC &middot; 2026</div>
          <p className="disclaimer">Not investment advice. Personal research notes published for transparency. Author has no position in DPHN at time of writing. Holdings disclosed: VVV (Venice), sVVV, DIEM. Venice is referenced as a pricing benchmark and is a potential competitor to Dolphin&rsquo;s API revenue model.</p>
        </footer>

      </div>
    </div>
  );
}
