import PanthalassaMemo from './PanthalassaMemo'
import JsonLd from '../../components/JsonLd'
import { articleStructuredData } from '../../lib/structured-data'

const title = 'Panthalassa — PASS'
const description =
  'A wave-powered ocean data center Thiel just backed near USD 1B, offered at USD 1.7B pre. The platform may be worth building; the compute business on the label is its weakest asset, and the cargo it carries is racing to zero.'

export const metadata = {
  title,
  description,
  openGraph: {
    title: 'Panthalassa — PASS',
    description:
      'A wave-powered ocean data center Thiel just backed. The platform may be worth building; the cargo it carries is racing to zero.',
    type: 'article',
    url: 'https://cable.capital/memos/panthalassa',
  },
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleStructuredData({
          path: '/memos/panthalassa',
          title,
          description,
          datePublished: '2026-07-01',
          section: 'Investment memo',
          keywords: ['ocean data centers', 'AI infrastructure', 'Panthalassa'],
        })}
      />
      <PanthalassaMemo />
    </>
  )
}
