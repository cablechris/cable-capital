import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Retro Pixel Collector',
  description: 'A digital collection of retro-style pixel art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 