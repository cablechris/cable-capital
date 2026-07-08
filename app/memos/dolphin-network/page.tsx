import DolphinNetworkMemo from './DolphinNetworkMemo'

export const metadata = {
  title: 'Dolphin Network — MONITOR',
  description:
    'Distributed inference, narrowed. Real arbitrage in audio and small LLMs, a marginal edge in image, a fading thesis in video. The bet is workload economics, not sharding.',
  openGraph: {
    title: 'Dolphin Network — MONITOR',
    description: 'Distributed inference, narrowed. The bet is workload economics, not sharding.',
    type: 'article',
    url: 'https://cable.capital/memos/dolphin-network',
  },
}

export default function Page() {
  return <DolphinNetworkMemo />
}
