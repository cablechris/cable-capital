import JsonLd from '../../components/JsonLd'
import { articleStructuredData } from '../../lib/structured-data'
import V2Shell from '../../v2/V2Shell'

const title = 'TextQL — STARTER'
const description =
  'TextQL wants to make fragmented enterprise data useful to AI agents without a migration project. Revenue diligence supports the Frontier investment; the return case is strategic acquisition, with growth expected to moderate.'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: 'https://cable.capital/memos/textql',
  },
}

const linkStyle = { color: 'var(--v2-oxblood)', textDecoration: 'underline', textUnderlineOffset: '3px' }

export default function TextQLMemo() {
  return (
    <V2Shell>
      <JsonLd
        data={articleStructuredData({
          path: '/memos/textql',
          title,
          description,
          datePublished: '2026-10-06',
          section: 'Investment memo',
          keywords: ['TextQL', 'enterprise AI', 'data infrastructure'],
        })}
      />
      <main className="max-w-[820px] mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-28">
        <div className="v2-mono text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--v2-oxblood)' }}>
          Investment memo · 6 October 2026 · Starter
        </div>
        <h1 className="v2-serif" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.02em' }}>
          TextQL
        </h1>
        <p className="mt-6 text-[19px] leading-[1.65] max-w-[62ch]" style={{ color: 'var(--v2-ink-2)' }}>
          Enterprise data agents face a hard test: make fragmented systems useful without turning into a services business.
        </p>
        <p className="mt-5 text-[16px] leading-[1.75] max-w-[68ch]" style={{ color: 'var(--v2-ink-3)' }}>
          This problem is close to my heart. When I ran Insights &amp; Analytics at Diageo, bringing on a new vendor and getting our data into its platform was always painful. In the AI era, the ontology layer that carries a company’s meaning into its models could, in theory, become one of the stickiest layers in the stack.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 py-5" style={{ borderTop: '1px solid var(--v2-rule)', borderBottom: '1px solid var(--v2-rule)' }}>
          <Fact label="Stage" value="Series A" />
          <Fact label="Round under review" value="$30m" />
          <Fact label="Pre-money" value="$100m" />
          <Fact label="Post-money" value="$130m" />
        </div>

        <article className="mt-12 space-y-8 text-[16px] leading-[1.8]" style={{ color: 'var(--v2-ink-2)' }}>
          <section>
            <h2 className="v2-serif text-[27px] mb-3" style={{ color: 'var(--v2-ink)' }}>The bet</h2>
            <p>
              Enterprises have data spread across warehouses, BI tools, SaaS products and older systems. TextQL’s Ana agent aims to answer business questions across that landscape without first forcing a costly migration. Its documented stack combines Ana, an enterprise <a href="https://textql.com/blog/ontology-v3" target="_blank" rel="noreferrer" style={linkStyle}>Ontology</a> for business context, and <a href="https://textql.com/blog/sandcastles" target="_blank" rel="noreferrer" style={linkStyle}>Sandcastles</a>, a sandboxed execution environment. The product emphasis is access, context and governed execution—not simply turning a prompt into SQL.
            </p>
            <p className="mt-4">
              The deeper thesis is that models will change faster than enterprise definitions do. If TextQL’s ontology becomes the trusted, maintained layer connecting data, business meaning, permissions and whichever models a company uses, it could be unusually sticky. That is the opportunity I recognize from Diageo. It is still a hypothesis: customers must keep that context current in TextQL, and platform vendors are building their own semantic layers.
            </p>
          </section>

          <section>
            <h2 className="v2-serif text-[27px] mb-3" style={{ color: 'var(--v2-ink)' }}>The founders</h2>
            <p>
              CEO Ethan Ding has worked in data roles at Tackle and Bessemer; CTO Mark Hay worked on Meta’s Integrity Infrastructure team and its Sigma and Haxl projects. Ding has said the team rearchitected the product nine times in its first two years. That suggests high iteration speed, alongside the risk of a product still finding its repeatable shape. (<a href="https://theproductmanager.com/interview/textqls-ethan-ding-on-the-5-habits-that-can-accelerate-product-development-cycle/" target="_blank" rel="noreferrer" style={linkStyle}>Ding profile</a>; <a href="https://haym.me/" target="_blank" rel="noreferrer" style={linkStyle}>Hay profile</a>; <a href="https://www.linkedin.com/posts/theethanding_ive-gotten-a-lot-of-new-followers-recently-activity-7247258394091208705-IZfP" target="_blank" rel="noreferrer" style={linkStyle}>Ding on iteration</a>.)
            </p>
          </section>

          <section>
            <h2 className="v2-serif text-[27px] mb-3" style={{ color: 'var(--v2-ink)' }}>Evidence of use</h2>
            <p>
              The best public signal is named customer usage. TextQL reports that Scale AI has sent 28,000+ messages, started 11,500+ threads and runs 42 playbooks in production. Dropbox’s Director of Revenue separately described producing a CFO-ready quarterly update in under an hour, versus most of a day before. These are encouraging references, though the usage figures and case studies are company-published. (<a href="https://textql.com/customers/scaleai" target="_blank" rel="noreferrer" style={linkStyle}>Scale</a>; <a href="https://www.linkedin.com/posts/adamrichter_last-week-i-wrote-my-whole-quarterly-business-activity-7449498734855446528-008m" target="_blank" rel="noreferrer" style={linkStyle}>Dropbox finance leader</a>.)
            </p>
            <p className="mt-4">
              Blackstone is both a customer and the lead investor in TextQL’s announced $17m April 2026 financing. That is a meaningful reference and strategic relationship. It does not establish a committed sales channel into Blackstone’s portfolio. TextQL also describes production deployments with Lumeris and PAR Technology, including embedded analytics, a potentially valuable route to downstream users. (<a href="https://textql.com/blog/textql-raises-17m-blackstone" target="_blank" rel="noreferrer" style={linkStyle}>financing</a>; <a href="https://textql.com/customers/lumeris" target="_blank" rel="noreferrer" style={linkStyle}>Lumeris</a>; <a href="https://textql.com/customers/partechnology" target="_blank" rel="noreferrer" style={linkStyle}>PAR</a>.)
            </p>
            <p className="mt-4">
              CEO Ethan Ding has publicly claimed 9× year-over-year revenue growth and six-figure contracts over six consecutive weeks. Our Frontier underwriting also includes revenue diligence whose figures cannot be shared in a co-invest memo. The qualitative view is that growth is strong, with some moderation expected. (<a href="https://www.linkedin.com/posts/theethanding_we-textql-raised-17m-led-by-blackstone-activity-7450928444588204032-4LTa" target="_blank" rel="noreferrer" style={linkStyle}>CEO’s post</a>.)
            </p>
          </section>

          <section>
            <h2 className="v2-serif text-[27px] mb-3" style={{ color: 'var(--v2-ink)' }}>Commercial shape and competition</h2>
            <p>
              TextQL’s <a href="https://aws.amazon.com/marketplace/pp/prodview-i63q2yi2gwq6c" target="_blank" rel="noreferrer" style={linkStyle}>AWS Marketplace offer</a> lists a $100,000 annual platform commitment for up to four million agent-compute units, plus metered overage. That is a concrete enterprise price point, not proof of realized ACV. Public self-serve pricing is far lower; dedicated, VPC and on-prem deployments, SSO, SLAs and migration help are enterprise features.
            </p>
            <p className="mt-4">
              Deployment depth could create durable customer context and workflow adoption. It could also make onboarding labor-heavy. TextQL hires for custom proofs of concept, connector setup, security reviews and post-sale deployment; if each account needs substantial engineering, growth and gross margin will be harder to scale.
            </p>
            <p className="mt-4">
              Incumbents are moving quickly. Google’s BigQuery Conversational Analytics is generally available across multiple data sources; Microsoft Fabric agents combine several sources; Databricks Genie and Snowflake Cortex Agents add governed natural-language analysis inside their platforms. TextQL’s opening is customers with fragmented, cross-cloud or legacy estates and embedded use cases. Its moat must come from better deployment, context, security and outcomes—not the chat interface alone. (<a href="https://cloud.google.com/blog/products/data-analytics/conversational-analytics-in-bigquery-now-ga/" target="_blank" rel="noreferrer" style={linkStyle}>Google</a>; <a href="https://learn.microsoft.com/en-us/fabric/data-science/data-agent-add-datasources" target="_blank" rel="noreferrer" style={linkStyle}>Microsoft</a>; <a href="https://docs.databricks.com/aws/en/genie-agents/concepts" target="_blank" rel="noreferrer" style={linkStyle}>Databricks</a>; <a href="https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst/rest-api" target="_blank" rel="noreferrer" style={linkStyle}>Snowflake</a>.)
            </p>
            <p className="mt-4">
              I underwrite a strategic acquisition path, not a journey to $1bn of ARR. Potential homes exist up and down the stack: cloud and data platforms, BI and governance vendors, and enterprise software companies seeking a governed interface across their products. The <a href="https://aws.amazon.com/marketplace/pp/prodview-i63q2yi2gwq6c" target="_blank" rel="noreferrer" style={linkStyle}>AWS Marketplace listing</a> makes TextQL purchasable alongside other data products. One adjacent strategic option there is especially interesting. Marketplace presence supports procurement, but does not establish an AWS channel commitment or buyer interest. Any acquirer would still weigh buying TextQL against building or partnering.
            </p>
          </section>

          <section>
            <h2 className="v2-serif text-[27px] mb-3" style={{ color: 'var(--v2-ink)' }}>Entry and exit</h2>
            <p>
              TextQL announced a $4.1m pre-seed and seed in January 2024, then a $17m strategic round led by Blackstone in April 2026; public databases report $21.1m raised before the financing now under review. The terms shared with me are $30m at $100m pre-money: $130m post-money, with new investors buying about 23.1% before any option-pool changes. The five-month interval makes it important to confirm whether this is a new round or an extension and how much is already committed. (<a href="https://textql.com/blog/fundraising" target="_blank" rel="noreferrer" style={linkStyle}>seed announcement</a>; <a href="https://textql.com/blog/textql-raises-17m-blackstone" target="_blank" rel="noreferrer" style={linkStyle}>April round</a>.)
            </p>
            <p className="mt-4">
              The return hurdle remains high even with an acquisition thesis. After another 25% dilution, a 10× gross return requires about $1.73bn in equity value at exit, before preference effects. A smaller takeout could validate the product and still produce a modest venture return.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--v2-ink)' }}>View: starter-sized venture bet.</strong> Production usage, strong revenue growth and strategic relevance make the right tail credible. I expect growth to moderate; the case is that TextQL’s ontology, integrations and customer foothold become valuable to a strategic buyer before it needs to reach billion-dollar ARR. The main risks are incumbent bundling, implementation intensity and whether a buyer values the capability more than building it internally. The $100m pre-money terms still require a clean preference stack and clarity on option-pool dilution.
            </p>
          </section>

          <p className="pt-5 text-[13px] leading-[1.6]" style={{ color: 'var(--v2-ink-4)', borderTop: '1px solid var(--v2-rule)' }}>
            Terms are based on information shared with Cable Capital and have not been independently verified. Customer metrics and growth figures are attributed to TextQL or named customer representatives. This memo is an opinion, not investment advice.
          </p>
        </article>
        <footer className="mt-14 pt-5 v2-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: 'var(--v2-ink-4)', borderTop: '1px solid var(--v2-rule)' }}>
          Cable Capital · October 2026
        </footer>
      </main>
    </V2Shell>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="v2-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--v2-ink-4)' }}>{label}</div>
      <div className="mt-1 v2-serif text-[20px]" style={{ color: 'var(--v2-ink)' }}>{value}</div>
    </div>
  )
}
