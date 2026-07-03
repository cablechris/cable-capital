import type { Metadata } from 'next'
import BarbellManifesto from './BarbellManifesto'
import './barbell.css'

export const metadata: Metadata = {
  title: 'The Barbell · Cable Capital',
  description:
    'Concentrate at the extremes. Avoid the middle. A manifesto on concentration from Cable Capital.',
}

export default function BarbellPage() {
  return <BarbellManifesto />
}
