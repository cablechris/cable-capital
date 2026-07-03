import './v2.css'
import { v2FontVars } from './fonts'
import Header from './Header'
import Footer from './Footer'

// Shared v2 chrome for content pages that live outside /v2 (theses, memos,
// research, about, investments). Provides the v2 fonts, the .v2-root token
// scope, and the fixed Header + Footer so the whole site reads as one product.
export default function V2Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${v2FontVars} v2-root v2-grain`} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  )
}
