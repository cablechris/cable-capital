import VeniceMemo from './VeniceMemo'

export const metadata = {
  title: 'Venice AI: The Decentralized Agent Economy',
  description:
    'Investment thesis on the future of autonomous AI infrastructure. Venice AI is a decentralized, full-stack AI protocol with a novel dual-token model (VVV and DIEM) built for the emerging agent economy.',
  openGraph: {
    title: 'Venice AI: The Decentralized Agent Economy',
    description: 'Investment thesis on the future of autonomous AI infrastructure.',
    type: 'article',
    url: 'https://cable.capital/memos/venice',
  },
}

export default function Page() {
  return <VeniceMemo />
}
