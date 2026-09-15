import { homeFontVars } from './components/home/fonts'
import JsonLd from './components/JsonLd'
import SiteFrame from './components/site/SiteFrame'
import { siteIdentityStructuredData } from './lib/structured-data'
import './components/site/site.css'
import "./globals.css"

export const metadata = {
  metadataBase: new URL('https://cable.capital'),
  title: {
    default: 'Cable Capital',
    template: '%s · Cable Capital',
  },
  description: "A working archive of key ideas and theses. Deal memos and original research from the edges of AI, crypto, and frontier science.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Cable Capital",
    description: "A working archive of key ideas and theses. Deal memos and original research from the edges of AI, crypto, and frontier science.",
    url: "https://cable.capital",
    siteName: "Cable Capital",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cable Capital",
    description: "A working archive of key ideas and theses. Deal memos and original research from the edges of AI, crypto, and frontier science.",
    creator: "@cablechris",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={homeFontVars}>
      <head>
        <link rel="describedby" href="/llms.txt" />
      </head>
      <body className="min-h-screen antialiased">
        <JsonLd data={siteIdentityStructuredData} />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  )
}
