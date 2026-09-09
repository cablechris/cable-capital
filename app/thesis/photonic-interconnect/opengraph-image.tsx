import { archive } from '../../data/archive'
import { ogCard, ogSize as size, ogContentType as contentType } from '../../lib/og'

export { size, contentType }
// Avoid next/og's Node filesystem URL handling on Windows.
export const runtime = 'edge'
export const alt = 'Photonic Interconnect — Cable Capital thesis'

export default function Image() {
  const e = archive.find((a) => a.slug === 'photonic-interconnect')!
  return ogCard({ kind: e.type, title: e.title, status: e.status })
}
