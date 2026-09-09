import { ImageResponse } from 'next/og'
import type { ArchiveStatus } from '../data/archive'

// Shared Open Graph / link-preview card, in the v2 ivory brand.
// Used by the root default image and per-piece overrides in each content route.

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

const IVORY = '#060b10'
const INK = '#e3ebe8'
const INK3 = '#9db3bb'
const OXBLOOD = '#aee1cd'

// Vercel's documented pattern: css2 with a text subset returns a truetype/
// opentype face satori can use. Returns null on any failure so the card still
// renders in the default face instead of throwing a 500.
async function loadGoogleFont(family: string, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      family
    )}&text=${encodeURIComponent(text)}`
    const css = await (await fetch(url)).text()
    const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)
    if (!src) return null
    const res = await fetch(src[1])
    if (!res.ok) return null
    return await res.arrayBuffer()
  } catch {
    return null
  }
}

export interface OgCardInput {
  kind?: string
  title: string
  status?: ArchiveStatus
  footer?: string
}

export async function ogCard({ kind = 'Archive', title, status, footer }: OgCardInput) {
  // Load one face covering EVERY glyph the card draws (title + all labels), so
  // satori never falls back to its bundled Noto Sans — whose loader crashes on
  // Windows dev. One family, set card-wide, keeps the whole card in brand serif.
  const ascii =
    " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;!?&()'’·—-/"
  const glyphs = `${title} ${kind} ${status ?? ''} ${footer ?? ''} CABLE CAPITAL cable.capital ${ascii}`
  const serif = await loadGoogleFont('Fraunces:opsz,wght@9..144,500', glyphs)
  const titleFont = serif ? 'Fraunces' : 'serif'
  const fonts = serif
    ? [{ name: 'Fraunces', data: serif, style: 'normal' as const, weight: 500 as const }]
    : []

  const fontSize =
    title.length > 46 ? 58 : title.length > 30 ? 70 : title.length > 18 ? 82 : 92

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: IVORY,
          padding: '70px 78px',
          position: 'relative',
          fontFamily: titleFont,
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, background: OXBLOOD }} />

        {/* Top row: wordmark · kind */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 34, height: 2, background: OXBLOOD, marginRight: 18 }} />
            <div style={{ fontSize: 24, letterSpacing: 6, color: INK }}>CABLE CAPITAL</div>
          </div>
          <div style={{ display: 'flex', fontSize: 22, letterSpacing: 6, color: OXBLOOD }}>
            {kind.toUpperCase()}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontFamily: titleFont,
            fontSize,
            lineHeight: 1.04,
            letterSpacing: -1.5,
            color: INK,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        {/* Bottom row: verdict / tagline · domain */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          {status ? (
            <div
              style={{
                display: 'flex',
                border: `1px solid ${OXBLOOD}`,
                color: OXBLOOD,
                fontSize: 20,
                letterSpacing: 4,
                padding: '10px 18px',
              }}
            >
              {status.toUpperCase()}
            </div>
          ) : (
            <div style={{ display: 'flex', color: INK3, fontSize: 22, letterSpacing: 2 }}>
              {footer || 'A working archive of key ideas and theses'}
            </div>
          )}
          <div style={{ display: 'flex', color: INK3, fontSize: 22, letterSpacing: 2 }}>cable.capital</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  )
}
