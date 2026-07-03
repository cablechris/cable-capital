import Header from './Header'
import HeroFrame from './HeroFrame'
import Pillars from './Pillars'
import Philosophy from './Philosophy'
import Principal from './Principal'
import Writing from './Writing'
import Footer from './Footer'

export default function V2Home() {
  return (
    <div className="v2-grain">
      <Header />
      <main>
        <HeroFrame />
        <Pillars />
        <Philosophy />
        <Principal />
        <Writing />
      </main>
      <Footer />
    </div>
  )
}
