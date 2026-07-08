import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'

// Shared v2 font variables, used by the v2 layout and the V2Shell so any
// page (inside or outside /v2) can opt into the v2 design system.
//
// One serif (Fraunces, variable, with italic) covers both display headlines
// and editorial italic accents — replacing the former DM Serif Display +
// Playfair pairing. Fraunces also matches the thesis/memo reading pages, so
// the whole site reads as one type system.
const inter = Inter({ subsets: ['latin'], variable: '--v2-sans', display: 'swap' })

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--v2-serif',
  display: 'swap',
})

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--v2-mono', display: 'swap' })

export const v2FontVars = `${inter.variable} ${fraunces.variable} ${mono.variable}`
