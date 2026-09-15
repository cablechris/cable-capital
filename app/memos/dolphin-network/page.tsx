import DolphinNetworkMemo from './DolphinNetworkMemo'
import JsonLd from '../../components/JsonLd'
import { articleStructuredData } from '../../lib/structured-data'

const title = 'Dolphin Network - STARTER'
const description =
  'An AI lab whose uncensored models power Venice for three million users. The network is live. The token buys itself with 100% of network revenue. The API has not opened yet.'

export const metadata = {
  title,
  description,
  openGraph: {
    title: 'Dolphin Network - STARTER',
    description: 'They built the customer before they built the network. The customer has been at the door the whole time.',
    type: 'article',
    url: 'https://cable.capital/memos/dolphin-network',
  },
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleStructuredData({
          path: '/memos/dolphin-network',
          title,
          description,
          datePublished: '2026-07-13',
          section: 'Investment memo',
          keywords: ['AI infrastructure', 'decentralized AI', 'Dolphin Network', 'Venice AI'],
        })}
      />
      <DolphinNetworkMemo />
    </>
  )
}
