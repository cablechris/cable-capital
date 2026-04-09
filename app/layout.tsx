import { Inter, DM_Serif_Display } from 'next/font/google'
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
})

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-serif'
})

export const metadata = {
  title: "Cable Capital",
  description: "Resilient supply chains and strategic advisory for Australian businesses.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Cable Capital",
    description: "Resilient supply chains and strategic advisory for Australian businesses.",
    url: "https://cable.capital",
    siteName: "Cable Capital",
    locale: "en_AU",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen bg-white antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
