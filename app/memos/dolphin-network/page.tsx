import DolphinNetworkMemo from './DolphinNetworkMemo'

export const metadata = {
  title: 'Dolphin Network - STARTER',
  description:
    'An AI lab whose uncensored models power Venice for three million users. The network is live. The token buys itself with 100% of network revenue. The API has not opened yet.',
  openGraph: {
    title: 'Dolphin Network - STARTER',
    description: 'They built the customer before they built the network. The customer has been at the door the whole time.',
    type: 'article',
    url: 'https://cable.capital/memos/dolphin-network',
  },
}

export default function Page() {
  return <DolphinNetworkMemo />
}
