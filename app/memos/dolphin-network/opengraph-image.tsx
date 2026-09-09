import { archive } from '../../data/archive'
import { ogCard, ogSize as size, ogContentType as contentType } from '../../lib/og'

export { size, contentType }
// Avoid next/og's Node filesystem URL handling on Windows.
export const runtime = 'edge'
export const alt = 'Dolphin Network — Cable Capital memo'

export default function Image() {
  const e = archive.find((a) => a.slug === 'dolphin-network')!
  return ogCard({ kind: e.type, title: e.title, status: e.status })
}
