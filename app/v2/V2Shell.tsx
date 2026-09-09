import './v2.css'

export default function V2Shell({ children }: { children: React.ReactNode }) {
  return <div className="v2-root"><main>{children}</main></div>
}
