import Layout from '../../components/Layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ maxWidth: '300px' }}>
          <Image 
            src="/images/bored-ape.png" 
            alt="Bored Ape" 
            width={300} 
            height={300} 
            style={{ borderRadius: '0.5rem' }}
          />
        </div>
        
        <div>
          <p style={{ fontSize: '1.125rem' }}>
            Crypto generalist and investor since 2013. Former Insights & Analytics Lead at Diageo.
          </p>
          
          <h2>Background</h2>
          <ul>
            <li>Crypto generalist and investor since 2013</li>
            <li>Former Insights & Analytics Lead at Diageo New York</li>
            <li>Founded multiple Investment DAOs</li>
          </ul>
          
          <h2>Investment Focus</h2>
          <ul>
            <li>Early-stage protocols</li>
            <li>DAO governance</li>
            <li>Market cycle analysis</li>
          </ul>
          
          <h2>Coding Experience</h2>
          <ul>
            <li>Full-stack web development</li>
            <li>Smart contract development</li>
            <li>Data analysis and visualization</li>
          </ul>
        </div>
      </div>
      
      <h2>About This Site</h2>
      <p>
        This site serves as both a blog where I share my thoughts on crypto, consumer behavior, 
        and market dynamics, as well as a portfolio of my coding projects in the web3 space.
      </p>
      
      <h2>Contact</h2>
      <p>
        The best way to reach me is via <a href="https://twitter.com/placeholder">Twitter</a> or 
        by email at <a href="mailto:placeholder@cablecapital.com">placeholder@cablecapital.com</a>.
      </p>
    </Layout>
  )
} 