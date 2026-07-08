import V2Shell from '../../v2/V2Shell'

export const metadata = {
  title: 'Hard Limits on Sparse Bioelectric Control',
  description:
    'Bioelectric repair is treated as a dose problem: more current, longer, broader. It is a dimensionality problem. Below a critical number of independent intervention sites, no amount of stimulation can repair the damage.',
  openGraph: {
    title: 'Hard Limits on Sparse Bioelectric Control',
    description:
      'Repairing tissue with bioelectricity is not a dose problem. It is a dimensionality problem, with a hard floor no amount of stimulation can cross.',
    type: 'article',
    url: 'https://cable.capital/papers/sparse-bioelectric-control',
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
    head: 'A sparse intervention reaches almost nothing.',
    body: 'On a 256-cell lattice, two well-placed sites make only about 15 directions materially controllable. Less than 6% of the voltage state space is in reach, and even that sliver is badly conditioned.',
  },
  {
    head: 'Wiring is not destiny.',
    body: 'The controllable directions carry the network’s structure but are not pure network structure: they overlap the naive graph-Laplacian modes only 0.46 to 0.57. The cells’ own voltage bistability reshapes what is reachable, so "just stimulate the middle" misses.',
  },
  {
    head: 'Two sites cannot fix a realistic wound, at any strength.',
    body: 'Scanning all 2,016 two-site pairs on an 8×8 lattice for a boundary wound, zero succeed. This is not a rounding error. The damage keeps a nonzero component in the unreachable subspace, so no control signal of any amplitude removes it.',
  },
  {
    head: 'The threshold depends on the wound’s shape.',
    body: 'Corner wound: 2 sites. Side patch: 3. Central lesion: 3. On a larger 16×16 lattice the side patch jumps to 6. Same tissue, same tools, different geometry, different hard floor.',
  },
  {
    head: 'Above the threshold, more knobs help fast.',
    body: 'Going from 2 to 4 sites cuts the leftover error by one to two orders of magnitude. The sharp transition is in dimensionality, not amplitude. Rank is the dose-response variable, not strength.',
  },
  {
    head: 'Break the wiring and the floor rises.',
    body: 'Randomly diluting gap junctions, the kind of communication loss implicated in cancer, pushes the side-patch threshold from 3 up toward 4 or 5. Losing coordination literally costs you control dimensions.',
  },
]

export default function SparseBioelectricControl() {
  return (
    <V2Shell>
      <article className="max-w-[760px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        {/* Header */}
        <Eyebrow>Research &middot; Bioelectric control</Eyebrow>
        <h1
          className="v2-serif"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', lineHeight: 1.03, letterSpacing: '-0.02em', marginBottom: 32 }}
        >
          Hard Limits on Sparse Bioelectric Control
        </h1>
        <p className="v2-editorial italic text-[22px] leading-[1.45] mb-6" style={{ color: 'var(--v2-ink)' }}>
          Repairing tissue with bioelectricity is treated as a dose problem: more current, longer,
          broader. It is a dimensionality problem, and below a critical number of independent
          intervention sites, no amount of stimulation can work.
        </p>
        <div className="v2-mono text-[11px] tracking-[0.18em] uppercase flex flex-wrap gap-x-6 gap-y-2 pb-8" style={{ color: 'var(--v2-ink-4)', borderBottom: '1px solid var(--v2-rule-strong)' }}>
          <span>Chris Cable</span>
          <span>2026 &middot; Preprint</span>
          <a href="/papers/sparse-bioelectric-control.pdf" target="_blank" rel="noopener noreferrer" className="v2-link-underline pb-0.5" style={{ color: 'var(--v2-oxblood)' }}>
            Full paper (PDF)
          </a>
          <a href="https://github.com/cablechris/hard-limits-sparse-bioelectric-control" target="_blank" rel="noopener noreferrer" className="v2-link-underline pb-0.5" style={{ color: 'var(--v2-oxblood)' }}>
            Code
          </a>
        </div>

        {/* Framing */}
        <div className="mt-14 space-y-5 text-[17px] leading-[1.72]" style={{ color: 'var(--v2-ink-2)' }}>
          <p>
            The modern bioelectric toolkit is powerful. You can depolarize a chosen cell with light,
            hold a membrane open with a drug, watch voltage prepatterns with a dye, bias a whole
            tissue with an applied field. What has been missing is not the ability to perturb. It is
            a theory that tells you where to intervene, how many independent sites you need, and
            whether turning up the strength can ever rescue a bad choice of location.
          </p>
          <p>
            In practice, bioelectric repair is still read through a dose lens. A perturbation fails
            to redirect regeneration, so the next move is more current, longer exposure, higher
            concentration, broader coverage. That assumes strength is the bottleneck. A more basic
            constraint comes first.
          </p>
          <p>
            Model tissue as a network of cells coupled by gap junctions, each cell with its own
            nonlinear voltage dynamics, and ask the control-theory question: what can a sparse,
            biologically realistic intervention actually reach in a finite window? The answer is a
            hard threshold. Below a critical number of independently addressable sites, part of the
            damage lives in a subspace no control signal can touch, and no amount of amplitude,
            energy, or time closes the gap. Above it, each added site cuts the leftover error by one
            to two orders of magnitude. The dose-response variable is not strength. It is rank, the
            number of independent knobs.
          </p>
        </div>

        <hr className="v2-hair my-16" />

        {/* Findings */}
        <Eyebrow>What the paper shows</Eyebrow>
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

        <hr className="v2-hair my-16" />

        {/* Why it matters */}
        <Eyebrow>Why it matters</Eyebrow>
        <div className="space-y-5 text-[17px] leading-[1.72]" style={{ color: 'var(--v2-ink-2)' }}>
          <p>
            The reframe changes the clinical question. Instead of "will this intervention repair the
            tissue?", ask "does this modality supply more independent control directions than the
            damage requires?" A systemic drug gives you roughly one degree of freedom. A
            promoter-restricted optogenetic tool gives you as many as it has independently
            addressable expression domains. A multi-electrode array gives you its electrode count. If
            that number sits below the tissue’s threshold, no dose, timing, or amplitude saves it.
            You need a higher-dimensional tool.
          </p>
          <p>
            It also hands the field a measurable definition of something usually hand-waved:
            morphogenetic competency. A real tissue with its own error-correction should repair under
            fewer sites than this passive, frozen calculation predicts. The gap between the predicted
            threshold and the observed minimum intervention is a number you can measure, and it
            quantifies how much of the control burden the tissue is carrying itself.
          </p>
        </div>

        <hr className="v2-hair my-16" />

        {/* Limitations */}
        <Eyebrow>What it does not show</Eyebrow>
        <div className="space-y-5 text-[17px] leading-[1.72]" style={{ color: 'var(--v2-ink-2)' }}>
          <p>
            The conductance is frozen over the repair window; real gap junctions are voltage-gated,
            so the fully coupled problem is harder and the direction of the approximation’s bias is
            not yet known. The results are local to the damaged state, on square lattices rather than
            reconstructed tissue, and deterministic (noise should only raise the thresholds). The
            thresholds also depend on the horizon and the tolerance you pick.
          </p>
          <p>
            None of that undercuts the core point. The hard-floor phenomenon shows up at the simplest
            possible level, which is exactly why it is worth measuring experimentally before piling
            on nonlinear detail.
          </p>
        </div>

        <hr className="v2-hair my-16" />

        {/* Abstract, for the record */}
        <div className="p-8 lg:p-10" style={{ background: 'var(--v2-ivory-dim)', border: '1px solid var(--v2-rule)' }}>
          <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-ink-4)' }}>
            Abstract
          </div>
          <p className="text-[15px] leading-[1.7]" style={{ color: 'var(--v2-ink-2)' }}>
            Bioelectric intervention is usually framed as a dose problem: stronger, longer, or
            broader stimulation is assumed to improve repair. We show that intervention
            dimensionality imposes a harder constraint. We formulate bioelectric tissue repair as
            finite-horizon optimal control on a gap-junction-coupled network and show that below a
            critical actuator count, no control signal of any amplitude can remove a damaged
            displacement on the chosen horizon. This actuation-rank threshold is a structural
            property of the spectral overlap between the damage pattern and the controllable subspace
            of the frozen linearized network. On an 8×8 lattice, exact two-site results and greedy
            higher-rank placements show a geometry-dependent threshold: 2 for a corner wound, 3 for a
            side patch, 3 for a central lesion. On a 16×16 lattice the side patch becomes
            substantially harder, requiring 6 sites. Below these thresholds, the unreachable residual
            is nonzero regardless of energy budget. Above them, each additional actuator site reduces
            residual by roughly one to two orders of magnitude. Random gap-junction dilution shifts
            the side-patch threshold upward. These results define a finite-horizon linearized baseline
            for intervention complexity in passive tissue, and suggest a direct experimental program:
            compare predicted actuation-rank thresholds to observed minimum intervention to quantify
            endogenous morphogenetic competency.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 v2-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: 'var(--v2-oxblood)' }}>
          <a href="/papers/sparse-bioelectric-control.pdf" target="_blank" rel="noopener noreferrer" className="v2-link-underline pb-1">
            Read the full paper &rarr;
          </a>
          <a href="https://github.com/cablechris/hard-limits-sparse-bioelectric-control" target="_blank" rel="noopener noreferrer" className="v2-link-underline pb-1">
            Reproducible code &rarr;
          </a>
        </div>
      </article>
    </V2Shell>
  )
}
