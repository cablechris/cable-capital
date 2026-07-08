import Header from './Header'
import HeroFrame from './HeroFrame'
import Record from './Record'
import Philosophy from './Philosophy'
import Principal from './Principal'
import Footer from './Footer'

export default function V2Home() {
  return (
    <div className="v2-grain">
      <Header />
      <main>
        <HeroFrame />
        <Record />
        <Philosophy />
        <Principal />
      </main>
      <Footer />
    </div>
  )
}
