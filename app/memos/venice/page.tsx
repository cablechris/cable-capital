import VeniceMemo from './VeniceMemo'
import JsonLd from '../../components/JsonLd'
import { articleStructuredData } from '../../lib/structured-data'

const title = 'Venice AI: The Decentralized Agent Economy'
const description =
  'Investment thesis on the future of autonomous AI infrastructure. Venice AI is a decentralized, full-stack AI protocol with a novel dual-token model (VVV and DIEM) built for the emerging agent economy.'

export const metadata = {
  title,
  description,
  openGraph: {
    title: 'Venice AI: The Decentralized Agent Economy',
    description: 'Investment thesis on the future of autonomous AI infrastructure.',
    type: 'article',
    url: 'https://cable.capital/memos/venice',
  },
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleStructuredData({
          path: '/memos/venice',
          title,
          description,
          datePublished: '2025-11-01',
          section: 'Investment memo',
          keywords: ['Venice AI', 'decentralized AI', 'AI agents', 'cryptoassets'],
        })}
      />
      <VeniceMemo />
    </>
  )
}
