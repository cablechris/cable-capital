import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chris Cable",
  description: "Crypto generalist & investor since 2013"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  )
} 