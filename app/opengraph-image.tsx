import { ogCard, ogSize as size, ogContentType as contentType } from './lib/og'

export { size, contentType }
// Avoid next/og's Node filesystem URL handling on Windows.
export const runtime = 'edge'
export const alt = 'Cable Capital: a working archive of key ideas and theses'

// Default link-preview card for the site (inherited by any page without its own).
export default function Image() {
  return ogCard({
    kind: 'Reasoning archive',
    title: 'Big ideas, specific bets & rabbit holes.',
    footer: 'Est. 2019 · Ideas at the edges',
  })
}
