import { Inter, DM_Serif_Display, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import './v2.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--v2-sans',
  display: 'swap',
})

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

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--v2-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Cable Capital',
  description: 'A public reasoning archive. Investment theses, deal memos, and original research, pre-registered before they resolve.',
}

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${dmSerif.variable} ${editorial.variable} ${mono.variable} v2-root`}
    >
      {children}
    </div>
  )
}
