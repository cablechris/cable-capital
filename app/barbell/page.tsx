import type { Metadata } from 'next'
import BarbellManifesto from '../v2/barbell/BarbellManifesto'
import '../v2/barbell/barbell.css'

export const metadata: Metadata = {
  title: 'The Barbell · Cable Capital',
  description:
    'Concentrate at the extremes. Avoid the middle. A manifesto on concentration from Cable Capital.',
}

export default function BarbellPage() {
  return <BarbellManifesto />
}
