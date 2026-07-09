import { archive } from '../data/archive'

const BASE = 'https://cable.capital'

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function GET() {
  // Single source of truth (app/data/archive.ts), authoritative newest-first.
  const body = archive
    .map(
      (i) => `    <item>
      <title>${escape(`${i.type}: ${i.title}`)}</title>
      <link>${BASE}${i.href}</link>
      <guid isPermaLink="true">${BASE}${i.href}</guid>
      <pubDate>${new Date(i.date).toUTCString()}</pubDate>
      <description>${escape(i.description)}</description>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Cable Capital</title>
    <link>${BASE}/v2</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>A public reasoning archive. Investment theses, deal memos, and original research, pre-registered before they resolve.</description>
    <language>en</language>
${body}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
