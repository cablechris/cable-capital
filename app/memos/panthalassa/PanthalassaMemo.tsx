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
  .memo-masthead a { border-bottom: none; color: var(--ink-mute); }
  .memo-masthead a:hover { color: var(--pacific); }

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

  #memo-root section { margin-bottom: 72px; scroll-margin-top: 32px; }

  #memo-root h2 {
    font-family: var(--mono); font-size: 11px; letter-spacing: .22em; text-transform: uppercase;
    color: var(--ink-mute); font-weight: 500;
    margin: 0 0 24px; padding-bottom: 10px;
    border-bottom: 1px solid var(--rule);
    display: flex; align-items: baseline; gap: 14px;
  }
  #memo-root h2 .num { color: var(--pacific); font-weight: 500; }

  #memo-root p { margin: 0 0 18px; }

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
`;

export default function PanthalassaMemo() {
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
          <div><a href="/memos">Memos</a> &middot; July 2026</div>
        </header>

        <div className="memo-eyebrow">
          Investment Memo
          <span className="pass">PASS</span>
        </div>

        <h1>Panthalassa</h1>

        <p className="memo-deck">
          Peter Thiel just led a $140 million round for a wave-powered data center in the open
          ocean, at roughly a billion dollars. I&apos;ve been given access at $1.7bn pre-money.
        </p>

        <dl className="memo-meta">
          <div><dt>Issuer</dt><dd>Panthalassa</dd></div>
          <div><dt>Sector</dt><dd>Wave-powered ocean compute</dd></div>
          <div><dt>Round</dt><dd>~USD 140M, led by Peter Thiel</dd></div>
          <div><dt>Access price</dt><dd>USD 1.7B pre-money</dd></div>
          <div><dt>Stage</dt><dd>Ocean-3 pilot; commercial 2027</dd></div>
          <div><dt>Backer</dt><dd>Founders Fund (since 2018)</dd></div>
          <div className="verdict"><dt>Verdict</dt><dd>PASS</dd></div>
          <div><dt>Re-review</dt><dd>Ocean-3 delivered-power data</dd></div>
        </dl>

        <nav className="memo-toc" aria-label="Contents">
          <ol>
            <li><a href="#synopsis"><span className="n">01</span><span>Synopsis</span></a></li>
            <li><a href="#what"><span className="n">02</span><span>What it is</span></a></li>
            <li><a href="#case"><span className="n">03</span><span>The case for it</span></a></li>
            <li><a href="#cargo"><span className="n">04</span><span>Why the cargo is wrong</span></a></li>
            <li><a href="#futures"><span className="n">05</span><span>The futures that work</span></a></li>
            <li><a href="#hedge"><span className="n">06</span><span>The hedge</span></a></li>
            <li><a href="#change"><span className="n">07</span><span>What would change it</span></a></li>
          </ol>
        </nav>

        <section id="synopsis">
          <h2><span className="num">01</span>Synopsis</h2>
          <p className="memo-lead">Panthalassa is a pass.</p>
          <p>The company builds floating steel nodes that harvest wave energy far out at sea. For most of its decade it tried to sell that energy the way every wave company does, by cabling it back to shore, and it hit the reason no wave company has ever made money: the cable and the grid connection cost more than the power they carry. The new plan drops the cable. Run AI inference chips on the platform, cool them in the surrounding sea, and send the results to land as tokens over a satellite link. Thiel led through his personal fund. Founders Fund has held since 2018. The engineers came from SpaceX and NASA. Ten years of prototypes sit behind it.</p>
          <p>The trouble is the cargo. Inference is what they chose to carry to market, and inference is falling in price faster than almost anything in technology. A million tokens of GPT-4-class output cost about twenty dollars in late 2022 and costs a few cents now. DeepSeek releases near-frontier models as open weights, so anyone with the GPUs can run them for the price of electricity, which puts the marginal cost of a token close to zero. The work a drifting ocean node can actually take on is the cheap, interruptible, batch kind, and that is the corner of the market falling fastest. Panthalassa would be the highest-cost producer of the cheapest product in computing.</p>
          <div className="memo-pull">Panthalassa would be the highest-cost producer of the cheapest product in computing.</div>
          <p>Maintenance is the second problem, and the larger one. A node is eighty-five meters of steel living in salt and storms. It fouls, it corrodes, it drifts. Its output does not stop, it sags, and the compute is the first thing shed, because the power has to keep the navigation lights on before it feeds a GPU. A machine that quietly loses a chunk of its output every month is a poor place to park a rack of chips you need running flat out to justify their cost.</p>
          <p>So the pass is not about the technology. It is about the market the technology was aimed at. There are futures where the platform is worth a great deal, and they share one feature: they sell energy, not cheap tokens. If AI demand runs hot enough that any firm power gets bought at any price, wave finds a buyer as high-latitude power that keeps producing through winter, when solar cannot. If the world splits into export controls and rationed compute, capacity floating in international waters that no one can seize or blockade is worth a premium unrelated to price per token. And the same platform can make hydrogen or ammonia instead, sold against the price of fuel rather than a rate card in freefall.</p>
          <p>Every one of those futures rewards the energy platform. The compute business on the label is what a billion-dollar valuation actually prices, and it is the weakest asset in the company. The platform may be worth building. The stock, at this price and this stage, is a different question, and it is the one on the table.</p>
        </section>

        <section id="what">
          <h2><span className="num">02</span>What it is</h2>
          <p>Panthalassa was a wave-energy company for eight years before it was an AI company, and that history explains the shape of the bet. Its founders, a former Bridgewater investment associate and a career ocean-energy engineer, set out to harvest the one large energy source nobody else was racing for. They built prototypes, ran them off the Oregon coast, and hit the wall the whole sector hits. Wave power is real. Selling it is not, because carrying it from where the waves are to where the customers are eats the margin. Subsea cable and grid interconnection have buried every serious wave project for thirty years.</p>
          <p>The pivot is a good one. Instead of moving the energy to a customer, move a customer to the energy. Inference can live anywhere with power and cooling and does not need a city next door. So the node keeps its electricity, spends it on chips, cools them in the sea it floats in, and sends back only the answer, a stream of tokens on a satellite link. No cable. No grid. No permit fight with a coastal town. The company patented wave-powered computing grids in 2018, so this is not a costume pulled on after ChatGPT. It is the plan they have been building toward for years.</p>
          <p>What the pivot does not do is make the ocean gentler. Grid export was one hard problem and it is gone. Every other one remains. The machine has to survive winter storms, resist salt and biofouling, hold its position without a mooring, and stay cheap to service in the middle of nowhere. Panthalassa traded a problem the industry understood for one it never has.</p>
        </section>

        <section id="case">
          <h2><span className="num">03</span>The case for it</h2>
          <p>The strongest case does not rest on cheap power. Per kilowatt-hour the numbers are poor, somewhere between fifty cents and a dollar once the losses and the maintenance are counted, and grid or solar beats that anywhere you can reach it. The case rests on access. Power you can generate cheaply is not the scarce thing in AI right now. Power you can actually connect to is. Interconnection queues run five to seven years. Towns vote data centers down. In that world a source that needs no queue, no substation, and no permit is worth more than its raw cost suggests. Nvidia&apos;s own framing has moved to match: the number that matters is tokens per watt against a fixed power ceiling, because the ceiling is what caps you now, not the budget.</p>
          <p>Inference helps the case a second way. A large share of it is in no hurry. Training data gets generated, documents get embedded, models get evaluated, agents grind through background work, and none of it cares whether the answer takes fifty milliseconds or fifty seconds. That kind of work tolerates a satellite hop and a power supply that rises and falls with the sea. Run cheap, durable chips instead of the newest forty-thousand-dollar accelerators, pool the whole fleet so jobs flow to whichever nodes have power, and sell to a buyer who cannot get capacity any other way. On paper, that is a real business.</p>
        </section>

        <section id="cargo">
          <h2><span className="num">04</span>Why the cargo is wrong</h2>
          <p>The case comes apart on one fact that has not moved in three years. A million tokens of GPT-4-class output cost around twenty dollars in late 2022 and costs a few cents now. DeepSeek releases near-frontier models as open weights, so anyone with the hardware can run them for the price of electricity, which puts the marginal cost of a token at essentially zero. The work that fits an ocean node is the cheap, interruptible, batch kind, and that is the work being commoditised fastest. Panthalassa would be the highest-cost producer of the cheapest product in the market.</p>
          <p>The same force runs both ways at once. The collapse in token prices is what creates the cheap batch demand a node could serve. It is also what removes the margin that would have paid to keep a node alive at sea. You cannot take the demand without the price that comes attached to it.</p>
          <p>And keeping a node alive is not a footnote in this business. It is the business. A node is eighty-five meters of steel in open water. It fouls, corrodes, and drifts, and its output sags rather than stops, with the compute shed first because the power keeps the navigation running before it runs a GPU. A machine that loses part of its useful output every month is a hard place to amortise chips you are trying to run flat out. Free power was meant to be the edge. It lowers a part of the bill that was never the problem.</p>
          <div className="memo-pull">Free power was meant to be the edge. It lowers a part of the bill that was never the problem.</div>
        </section>

        <section id="futures">
          <h2><span className="num">05</span>The futures that work</h2>
          <p>The platform is not the problem, the compute plan is. Aimed at a different market the same hardware can earn out, and the markets where it does have one thing in common: they buy energy in some form, not cheap tokens. Two properties give wave its only real edge, and both are about independence. A node makes its own power from the water it sits in, so nothing has to be shipped to it. And it can hold station in the far southern ocean through winter, where the sun fails and a fuel-burning rig waits on its next tanker.</p>
          <p>Start with the landgrab. If AI demand climbs steeply and stays there, firmness gets bought at almost any price, because the choice stops being cheap power against expensive power and becomes power against none. Wave does not win that market outright. It wins the slice where wind and sun are weakest, the high latitudes and the winter, where a source that keeps producing beats a cheaper one that quits half the time. Firmness is the product, and firmness is what compute pays a premium for.</p>
          <p>Then sovereign compute. If the world keeps fragmenting into export controls and rationed capacity, compute that floats in international waters and cannot be seized, blockaded, or switched off carries a value unrelated to dollars per token. Only wave delivers the whole of it. A diesel platform in the same water still depends on fuel someone can cut off. A wave node depends on nothing anyone can interdict. It is a small market that pays a lot per unit, and it needs the world to keep getting worse.</p>
          <p>Then molecules. The node does not have to make tokens at all. The same power can split water into hydrogen or bind it into ammonia, both of which store, ship, and sell against the price of fuel rather than a collapsing rate card. If inference keeps getting more efficient and the case for compute at sea keeps thinning, the molecule version does not notice. The energy is the durable asset. What the node makes from it is a decision taken one site at a time, and that flexibility is closer to what Thiel is paying for than any single product.</p>
          <p>The last future is the only one the company controls, and it is what Ocean-3 exists to test. Most of the bear case is operations, not physics. The decline I described is an estimate, not a measurement, because nobody has run these machines long enough at sea to know. If Panthalassa can service nodes on the water instead of towing them home, or coat them so they foul and corrode slowly, the maintenance problem that sinks every scenario above gets smaller at a stroke. That is something they can go and prove, which is why it is the number to watch rather than the thing to argue about.</p>
        </section>

        <section id="hedge">
          <h2><span className="num">06</span>The hedge</h2>
          <p>There is one more reason to buy this, and it is the one most likely to catch a careful investor. In the darker futures above, Panthalassa looks like a hedge. Energy that cannot be taxed, blockaded, or switched off is a clean bet on a world where energy becomes a weapon. The instinct is right about the machine. It is wrong about the position.</p>
          <p>Look at what the hedge is hedging. A book built for a fractured world already holds energy: oil, gas, coal, the grains. Panthalassa pays off in that same fractured world, alongside every one of them. That doubles the bet rather than spreading it. The test of a hedge is which state of the world hurts it and your core book together, and here the answer comes easily: peace, cheap energy, efficient AI, a calm decade. In that world the energy book falls and this falls with it. A hedge should pay when your main view turns out wrong. This one only pays when it turns out right.</p>
          <div className="memo-pull">A hedge should pay when your main view turns out wrong. This one only pays when it turns out right.</div>
          <p>There is a crueler twist underneath. The crisis that would make un-seizable ocean compute valuable is the same crisis that would strangle the company building it. Blockades and export controls are the exact conditions under which a Portland startup cannot get advanced GPUs, cannot lean on a single American satellite network, cannot count on global steel and shipyards. The timing runs against you too. Commercial deployment is a 2027 story and a real fleet is years past that, while the tail events you are hedging arrive without warning. If the crisis comes early, you own a prototype, not the infrastructure you were paying for.</p>
          <p>Then the instrument. A hedge you can actually use is cheap to hold, liquid, and sellable in the middle of the emergency. This is the opposite: priced like a unicorn, impossible to trim, and paying out, if it ever does, in private stock you cannot turn into cash in the fractured world where you needed the cash. To collect you need three things at once. The tail has to hit, the company has to live through it, and a buyer for your shares has to exist in a world with no functioning exits.</p>
          <p>One kind of buyer escapes all of this, and it is not you. A government buying ocean compute is buying a strategic asset it will run whether or not it returns a cent, and the fact that it moves with the rest of its exposure is the reason to want it. For a concentrated book writing ordinary checks, the same shares are the same macro bet a second time, at the richest possible price, with no way to cash them when it counts.</p>
        </section>

        <section id="change">
          <h2><span className="num">07</span>What would change it</h2>
          <p className="memo-lead">The pass is about price, stage, and instrument. It is not a verdict on the idea, and three things would move it.</p>
          <p>First, real numbers from Ocean-3. Not the wave resource, not a headline capacity factor, but delivered useful power after every loss and parasitic draw, held over months, with failure data an insurer could price. Until that exists the pilot is a demonstration and everything else is a story.</p>
          <p>Second, a change in what the company sells. If Panthalassa starts leading with firm energy, molecules, and sovereign capacity, it is building the durable thing. If it keeps selling ocean inference as the prize, it is either misreading its own asset or pricing the one part of it that is racing to zero.</p>
          <p>Third, a specific turn in the chips. Inference silicon getting cheaper faster than it gets more efficient, so that power climbs past roughly forty percent of what a token costs while the chip itself gets cheap enough that downtime stops hurting. In that world free power finally lands on the part of the bill that matters, and the ocean math changes.</p>
          <p>Until one of those happens, the answer is zero. The engineering is real and the respect it is getting is earned. But a platform that can go anywhere is worth what it can carry to market, and Panthalassa has loaded the one cargo whose price is falling to zero.</p>
        </section>

        <footer className="memo-colophon">
          <div>
            Filed &middot; CPC Consulting LLC<br />
            July 2026
          </div>
          <div className="right">
            cable.capital &middot; Memo 2026-Q3-01<br />
            Re-review: Ocean-3 operating data
          </div>
        </footer>

      </div>
    </div>
  );
}
