import { Inter, DM_Serif_Display, JetBrains_Mono, Playfair_Display } from 'next/font/google'

// Shared v2 font variables, used by the v2 layout and the V2Shell so any
// page (inside or outside /v2) can opt into the v2 design system.
const inter = Inter({ subsets: ['latin'], variable: '--v2-sans', display: 'swap' })

const dmSerif = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--v2-serif',
  display: 'swap',
})

const editorial = Playfair_Display({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--v2-editorial',
  display: 'swap',
})

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--v2-mono', display: 'swap' })

export const v2FontVars = `${inter.variable} ${dmSerif.variable} ${editorial.variable} ${mono.variable}`
