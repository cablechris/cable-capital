import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photonic Interconnect — cable.capital',
  description: 'Light as the structural successor to copper in AI scale-up. A cable.capital thesis.',
  openGraph: {
    title: 'Photonic Interconnect — cable.capital',
    description: 'Light as the structural successor to copper in AI scale-up.',
    url: 'https://cable.capital/thesis/photonic-interconnect',
    siteName: 'Cable Capital',
    locale: 'en_AU',
    type: 'article',
  },
}

export default function ThesisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
