import Image from 'next/image'
import V2Shell from '../../v2/V2Shell'

export const metadata = {
  title: 'Stranded or Fungible? Testing the Thermodynamic Computing Moat',
  description:
    "Extropic's thermodynamic hardware bets its energy-based-model advantage is stranded, so commodity silicon cannot catch it. On the axis this study can measure, the moat looks more like a head start.",
  openGraph: {
    title: 'Stranded or Fungible? Testing the Thermodynamic Computing Moat',
    description:
      'A skeptical, scrupulous read on whether the thermodynamic-computing energy advantage survives scale. Leaning: a head start, not a moat, with the decisive cell (physical energy) explicitly unmeasured.',
    type: 'article',
    url: 'https://cable.capital/papers/thermodynamic-computing-moat',
  },
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-6" style={{ color: 'var(--v2-oxblood)' }}>
      {children}
    </div>
  )
}

const findings = [
  {
    head: 'Locality does not keep pace with scale.',
    body: 'As the model grows, nearest-neighbour sample quality falls (0.587 → 0.556 → 0.486), and the connectivity range needed to hold a fixed quality grows. On a single machine, reaching target quality increasingly demands longer-range wiring.',
  },
  {
    head: 'The architecture’s own escape hatch does not rescue it.',
    body: 'Chaining several samplers together does not convert the connectivity requirement into a depth requirement: the minimum range for target quality is flat in chain depth. It buys a real but bounded gain, not a substitute for reach.',
  },
  {
    head: 'The locality tax shows up in the physics.',
    body: 'A calibrated measurement (it correctly recovers the known 2D-Ising exponent) finds steep critical slowing, the cost paid in mixing time, while the information light-cone speed rises with range, the cost paid in wiring. Both routes to long-range correlation are taxed, exactly as the currency-of-correlation thesis predicts.',
  },
  {
    head: 'Forcing categorical problems onto local binary spins is taxed.',
    body: 'Encoding the codon task onto local spins costs 2.66× the spins, adds pure-constraint overhead, and needs 10 to 25× the sampling budget to reach validity. The mapping itself is expensive before any hardware advantage is counted.',
  },
  {
    head: 'And the reframe that settles most of it: the substrate question only bites on irreducible workloads.',
    body: 'The advantage can only matter where no learned change of coordinates makes the correlations short-range. The study’s own headline workloads are not in that set: a learned latent collapses MNIST’s structure, and the codon task is already a 1D chain. For those, software wins by construction. On the one synthetic workload that is genuinely irreducible, the cross-substrate ledger below shows every hardware-realizable substrate paying at least as much as learned-representation-on-silicon. Nothing measured is meaningfully flatter than commodity silicon.',
  },
]

const flips = [
  {
    head: 'The full-scale locality ceiling.',
    body: 'The shape is there up to mid-range reach. The full-decade version needs GPU escalation I have not run. A clear absence of the ceiling at large scale would weaken the read.',
  },
  {
    head: 'The driven escape.',
    body: 'Lifting the sampler collapses autocorrelation (about 19× on a control), but whether that is a genuinely lower exponent, whether it survives its own entropy cost, and whether it beats a GPU running the same trick, is unpriced. A real sweet spot there would be a stranded signal.',
  },
  {
    head: 'Native long-range substrates.',
    body: 'This measures one architecture. A substrate with real analog long-range physics and no conversion tax could pass where engineered-up wiring fails. It is out of frame here.',
  },
  {
    head: 'Energy is never measured.',
    body: 'Every cost here is simulation compute, not silicon joules. The hardware’s claimed near-free physical step, if it is real, would forgive the mixing-time tax entirely. That is the whole ballgame, and it is a hardware ledger this study cannot price.',
  },
]

export default function ThermodynamicComputingMoat() {
  return (
    <V2Shell>
      <article className="max-w-[760px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Header */}
        <Eyebrow>Research &middot; Thermodynamic computing</Eyebrow>
        <h1
          className="v2-serif"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', lineHeight: 1.03, letterSpacing: '-0.02em', marginBottom: 32 }}
        >
          Stranded or Fungible?
        </h1>
        <p className="v2-editorial italic text-[22px] leading-[1.45] mb-6" style={{ color: 'var(--v2-ink)' }}>
          Extropic’s thermodynamic hardware rests on a bet: that its energy-based-model advantage is
          stranded, that locality keeps pace with scale so commodity silicon can’t erase the edge. I
          built an instrument to test that bet. On the axis it can measure, the moat looks more like
          a head start.
        </p>
        <div className="v2-mono text-[11px] tracking-[0.18em] uppercase flex flex-wrap gap-x-6 gap-y-2 pb-8" style={{ color: 'var(--v2-ink-4)', borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <span>Chris Cable</span>
          <span>2026 &middot; Findings</span>
        </div>

        {/* Verdict up front */}
        <div className="mt-12 p-8 lg:p-10" style={{ background: 'var(--v2-ivory-dim)', border: '1px solid var(--v2-rule)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--v2-oxblood)' }}>
            Verdict &middot; Leaning: a head start, not a moat
          </div>
          <p className="text-[16px] leading-[1.7]" style={{ color: 'var(--v2-ink-2)' }}>
            On the axis this study can measure, the sampler’s advantage is bought with connectivity
            and mixing time, and commodity silicon pays those same bills or amortizes them into stored
            weights. Nothing here is owned; it is rented, in currencies GPUs also carry. That is a
            leaning, not a proof, and it stays silent on the one thing that would make the edge a real
            moat: physical energy, which this study never measures.
          </p>
        </div>

        {/* Framing */}
        <div className="mt-14 space-y-5 text-[17px] leading-[1.72]" style={{ color: 'var(--v2-ink-2)' }}>
          <p>
            Thermodynamic computing is one of the more interesting frontier bets in hardware. The
            pitch is that sampling from a probability distribution, the operation underneath a lot of
            generative AI, is something physics does for free if you build the right analog device,
            and that this yields an enormous energy advantage over pushing the same samples through a
            GPU. Extropic is the sharpest expression of the bet, with a claimed edge measured in
            multiples that would reorder the economics of AI compute.
          </p>
          <p>
            The question I care about is not whether the physics is real. It is whether the advantage
            is a moat or a head start. A moat is an edge built on something commodity silicon cannot
            buy: locality keeps pace, the analog device stays ahead, and no amount of GPU spend closes
            the gap. A head start is an edge silicon simply hasn&apos;t bothered to copy yet: quality
            increasingly needs long-range wiring, or the sampler bogs down in mixing time as problems
            grow, so the lead is paid for in currencies GPUs also pay, and it shrinks to nothing on
            real workloads. The study&apos;s terms for the two are stranded and fungible. In plainer
            words: does the edge stick, or does silicon eat it?
          </p>
          <p>
            So I built an instrument. It simulates the sampling algorithm and measures how quality
            and correlation-reach trade against mixing cost as connectivity and scale vary. One
            caveat sits above everything and I will not bury it: every number here is algorithm
            behavior, not physical energy. The headline energy claim is a hardware output this study
            can neither confirm nor deny. The leaning is on the mapping, and it is explicitly silent
            on silicon joules.
          </p>
        </div>

        <hr className="v2-hair my-16" />

        {/* Findings */}
        <Eyebrow>What the instrument shows</Eyebrow>
        <ol className="space-y-8">
          {findings.map((f, i) => (
            <li key={i} className="grid grid-cols-[auto_1fr] gap-5">
              <span className="v2-mono text-[13px] pt-1" style={{ color: 'var(--v2-oxblood)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="v2-serif text-[19px] mb-1" style={{ color: 'var(--v2-ink)', letterSpacing: '-0.01em' }}>
                  {f.head}
                </p>
                <p className="text-[16px] leading-[1.65]" style={{ color: 'var(--v2-ink-2)' }}>
                  {f.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Figure */}
        <figure className="mt-14">
          <div className="relative w-full overflow-hidden" style={{ background: '#fff', border: '1px solid var(--v2-rule)' }}>
            <Image
              src="/papers/thrml-cross-substrate-ledger.png"
              alt="Cross-substrate correlation-cost ledger: on an irreducible workload, every hardware-realizable substrate sits at or above the silicon baseline."
              width={1245}
              height={720}
              className="w-full h-auto"
              sizes="(max-width: 760px) 100vw, 760px"
            />
          </div>
          <figcaption className="mt-3 text-[13px] leading-[1.6]" style={{ color: 'var(--v2-ink-3)' }}>
            The cross-substrate ledger, scoped to a genuinely irreducible workload. A substrate only
            wins if it sits below the dashed silicon baseline. Every hardware-realizable candidate
            (p-bit, quantum annealer, photonic CIM) sits at or above it; the GPU amortizes the
            problem away entirely. Only the driven-sampler cell dips below, and it is unpriced.
          </figcaption>
        </figure>

        <hr className="v2-hair my-16" />

        {/* What would flip it */}
        <Eyebrow>Where I could be wrong</Eyebrow>
        <p className="text-[17px] leading-[1.72] mb-8" style={{ color: 'var(--v2-ink-2)' }}>
          This is a leaning, so I am naming exactly where it could break, because the decisive cells
          are the ones I could not measure.
        </p>
        <ol className="space-y-8">
          {flips.map((f, i) => (
            <li key={i} className="grid grid-cols-[auto_1fr] gap-5">
              <span className="v2-mono text-[13px] pt-1" style={{ color: 'var(--v2-ink-4)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="v2-serif text-[19px] mb-1" style={{ color: 'var(--v2-ink)', letterSpacing: '-0.01em' }}>
                  {f.head}
                </p>
                <p className="text-[16px] leading-[1.65]" style={{ color: 'var(--v2-ink-2)' }}>
                  {f.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <hr className="v2-hair my-16" />

        {/* Bottom line */}
        <Eyebrow>The bottom line</Eyebrow>
        <div className="space-y-5 text-[17px] leading-[1.72]" style={{ color: 'var(--v2-ink-2)' }}>
          <p>
            The equilibrium instrument leans fungible, the escape hatch does not overturn it, and on
            the only workloads where the substrate question actually matters, nothing measured beats
            commodity silicon in its own currency. But the cells that could still flip it are the
            ones I could not measure, and the biggest of them, physical energy, is the exact thing the
            hardware is selling.
          </p>
          <p>
            So I am skeptical the moat is as wide as claimed. I am not claiming it is zero, and I have
            marked precisely what I would need to see to change my mind. That is the honest shape of
            it: no stranded candidate appears in the cells I could reach, every hardware-realizable
            path pays steeply in its own currency, and the one currency that would forgive all of it
            is the one I never got to price.
          </p>
        </div>
      </article>
    </V2Shell>
  )
}
