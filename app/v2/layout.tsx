import './v2.css'
import { v2FontVars } from './fonts'

export const metadata = {
  title: { absolute: 'Cable Capital · A working archive of key ideas and theses' },
  description: 'A working archive of key ideas and theses. Deal memos and original research from the edges of AI, crypto, and frontier science.',
}

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${v2FontVars} v2-root`}>{children}</div>
}
