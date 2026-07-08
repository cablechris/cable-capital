import './v2.css'
import { v2FontVars } from './fonts'

export const metadata = {
  title: { absolute: 'Cable Capital · A public reasoning archive' },
  description: 'A public reasoning archive. Investment theses, deal memos, and original research, pre-registered before they resolve.',
}

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${v2FontVars} v2-root`}>{children}</div>
}
