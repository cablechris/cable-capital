import Layout from '../../components/Layout'
import Link from 'next/link'

// Sample data - replace with your actual coding projects
const projects = [
  {
    id: 'defi-dashboard',
    title: 'DeFi Dashboard',
    description: 'A dashboard for tracking DeFi investments across multiple protocols and chains.',
    tags: ['React', 'Ethers.js', 'TailwindCSS'],
    demoUrl: 'https://example.com/demo',
    codeUrl: 'https://github.com/example/defi-dashboard'
  },
  {
    id: 'dao-voting',
    title: 'DAO Voting System',
    description: 'A decentralized voting system for DAOs with delegation and quadratic voting support.',
    tags: ['Solidity', 'Next.js', 'The Graph'],
    demoUrl: 'https://example.com/demo',
    codeUrl: 'https://github.com/example/dao-voting'
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'A marketplace for buying, selling, and trading NFTs with support for multiple collections.',
    tags: ['React', 'Solidity', 'IPFS'],
    demoUrl: 'https://example.com/demo',
    codeUrl: 'https://github.com/example/nft-marketplace'
  }
]

export default function Projects() {
  return (
    <Layout>
      <h1>Coding Projects</h1>
      <p>A collection of my open-source projects in the crypto and web3 space.</p>
      
      <div style={{ marginTop: '2rem' }}>
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href={project.demoUrl} className="button" target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
              <a href={project.codeUrl} style={{ display: 'flex', alignItems: 'center' }} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
} 