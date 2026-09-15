import PhotonicInterconnectPage from './PhotonicInterconnectPage'
import JsonLd from '../../components/JsonLd'
import { articleStructuredData } from '../../lib/structured-data'

const title = 'Photonic Interconnect'
const description =
  "Light wins the marginal AI link as copper's boundary retreats. A structured thesis on who captures the rent — with explicit positions, kill conditions, and monitoring cadences."

export const metadata = {
  title,
  description,
  openGraph: {
    title: 'Photonic Interconnect',
    description: 'Light wins the marginal AI link. The harder question is who captures the rent.',
    type: 'article',
    url: 'https://cable.capital/thesis/photonic-interconnect',
  },
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleStructuredData({
          path: '/thesis/photonic-interconnect',
          title,
          description,
          datePublished: '2026-05-01',
          section: 'Investment thesis',
          keywords: ['photonic interconnect', 'AI infrastructure', 'optical computing'],
        })}
      />
      <PhotonicInterconnectPage />
    </>
  )
}
