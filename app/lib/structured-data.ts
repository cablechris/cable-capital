const SITE_URL = 'https://cable.capital'

export const structuredDataIds = {
  person: `${SITE_URL}/about#person`,
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
}

export const siteIdentityStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': structuredDataIds.person,
      name: 'Chris Cable',
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/images/headshot.png`,
      jobTitle: 'Independent investor',
      description:
        'Independent investor based in Sydney, focused on technological shifts across AI, crypto and frontier science.',
      homeLocation: {
        '@type': 'Place',
        name: 'Sydney, Australia',
      },
      knowsAbout: [
        'Artificial intelligence',
        'Cryptoassets',
        'Frontier technology',
        'Emerging investment managers',
        'Asymmetric investing',
      ],
      sameAs: ['https://x.com/cablechris'],
      affiliation: { '@id': structuredDataIds.organization },
    },
    {
      '@type': 'Organization',
      '@id': structuredDataIds.organization,
      name: 'Cable Capital',
      url: SITE_URL,
      email: 'info@cable.capital',
      description:
        'An independent investment and research practice focused on AI, crypto and frontier science.',
      founder: { '@id': structuredDataIds.person },
    },
    {
      '@type': 'WebSite',
      '@id': structuredDataIds.website,
      name: 'Cable Capital',
      url: SITE_URL,
      inLanguage: 'en-AU',
      publisher: { '@id': structuredDataIds.organization },
      author: { '@id': structuredDataIds.person },
    },
  ],
}

export const profilePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/about#profile-page`,
  url: `${SITE_URL}/about`,
  name: 'Chris Cable',
  description:
    'Chris Cable is an independent investor based in Sydney, focused on AI, crypto and frontier science.',
  mainEntity: { '@id': structuredDataIds.person },
  isPartOf: { '@id': structuredDataIds.website },
  inLanguage: 'en-AU',
}

type ArticleStructuredDataInput = {
  path: string
  title: string
  description: string
  datePublished: string
  dateModified?: string
  section: string
  keywords?: string[]
  type?: 'Article' | 'BlogPosting'
}

export function articleStructuredData({
  path,
  title,
  description,
  datePublished,
  dateModified,
  section,
  keywords = [],
  type = 'Article',
}: ArticleStructuredDataInput) {
  const url = `${SITE_URL}${path}`

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@id': structuredDataIds.person },
    publisher: { '@id': structuredDataIds.organization },
    isPartOf: { '@id': structuredDataIds.website },
    articleSection: section,
    keywords,
    inLanguage: 'en-AU',
  }
}
