import { archive } from '../data/archive'
import { posts } from '../data/posts'

const BASE = 'https://cable.capital'

const clean = (value: string) =>
  value
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const archiveLine = (entry: (typeof archive)[number]) => {
  const status = entry.status ? ` Status: ${entry.status}.` : ''
  return `- [${entry.title}](${BASE}${entry.href}): ${entry.type}; ${entry.displayDate}.${status} ${clean(entry.deck)}`
}

export async function GET() {
  const orderedArchive = [...archive].sort((a, b) => b.date.localeCompare(a.date))
  const thesesAndMemos = orderedArchive
    .filter((entry) => entry.type === 'Thesis' || entry.type === 'Memo')
    .map(archiveLine)
    .join('\n')
  const research = orderedArchive
    .filter((entry) => entry.type === 'Research')
    .map(archiveLine)
    .join('\n')
  const essays = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(
      (post) =>
        `- [${post.title}](${BASE}/blog/${post.slug}): ${post.date}. ${clean(post.content[0])}`
    )
    .join('\n')

  const markdown = `# Cable Capital

> The public investment and research archive of Chris Cable, an independent investor based in Sydney focused on technological shifts across AI, crypto and frontier science.

Cable Capital contains first-person investment theses, decision memos, original research and a dated selection of investments. Status labels such as Active conviction, STARTER and PASS describe Chris Cable's view at the date shown; they are not investment advice. Chris is the author unless a page states otherwise.

## Start here

- [Work with Chris](${BASE}/work-with-chris): Suitable advisory relationships, areas where Chris can help and the preferred way to make contact.
- [About Chris Cable](${BASE}/about): Background, investment approach and canonical identity page.
- [Selected investments](${BASE}/investments): A dated selection of funds, DAOs and venture investments, with Chris's role stated where relevant.
- [Investment archive](${BASE}/thesis): Current theses and decision memos.
- [Research archive](${BASE}/research): Original research and essays.

## Investment theses and memos

${thesesAndMemos}

## Original research

${research}

## Essays

${essays}

## Contact and updates

- [Email Chris](mailto:info@cable.capital): Include what you are trying to decide, why it matters now and why Chris may be useful.
- [RSS feed](${BASE}/feed.xml): Updates to the public reasoning archive.

## Optional

- [The barbell philosophy](${BASE}/barbell): Chris's approach to combining a strong foundation with room for considered asymmetric risks.
- [Chris Cable on X](https://x.com/cablechris): Public profile and shorter-form observations.
`

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
