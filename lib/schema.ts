import { Organization, WebSite, BreadcrumbList, Person, ContactPoint, PostalAddress } from 'schema-dts'
import { SITE_CONFIG } from './config'

// Type definitions
export interface BreadcrumbItem {
  readonly name: string
  readonly url: string
}

export interface SchemaConfig {
  readonly baseUrl?: string
  readonly name?: string
  readonly email?: string
  readonly logoPath?: string
}

// Utility functions
const createUrl = (path: string): string => `${SITE_CONFIG.baseUrl}${path}`
const createId = (fragment: string): string => `${SITE_CONFIG.baseUrl}/#${fragment}`

// Schema component factories
const createFounder = (): Person => ({
  "@type": "Person",
  name: SITE_CONFIG.founder
})

const createContactPoint = (): ContactPoint => ({
  "@type": "ContactPoint",
  contactType: "customer service",
  email: SITE_CONFIG.email
})

const createAddress = (): PostalAddress => ({
  "@type": "PostalAddress",
  addressCountry: SITE_CONFIG.country,
  addressLocality: SITE_CONFIG.locality
})

// Main schema generators
export const createOrganizationSchema = (config: SchemaConfig = {}): Organization => {
  const baseUrl = config.baseUrl || SITE_CONFIG.baseUrl
  const name = config.name || SITE_CONFIG.name
  const logoPath = config.logoPath || SITE_CONFIG.logoPath
  
  return {
    "@type": "Organization",
    "@id": createId("organization"),
    name,
    url: baseUrl,
    logo: `${baseUrl}${logoPath}`,
    description: SITE_CONFIG.description.organization,
    founder: createFounder(),
    contactPoint: createContactPoint(),
    sameAs: Object.values(SITE_CONFIG.socialProfiles),
    address: createAddress(),
    areaServed: [...SITE_CONFIG.serviceAreas],
    knowsAbout: [...SITE_CONFIG.services]
  }
}

export const createWebsiteSchema = (config: SchemaConfig = {}): WebSite => {
  const baseUrl = config.baseUrl || SITE_CONFIG.baseUrl
  const name = config.name || SITE_CONFIG.name
  
  return {
    "@type": "WebSite",
    "@id": createId("website"),
    url: baseUrl,
    name,
    description: SITE_CONFIG.description.website,
    publisher: {
      "@id": createId("organization")
    },
    inLanguage: [...SITE_CONFIG.languages],
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    } as any
  }
}

export const createBreadcrumbSchema = (items: readonly BreadcrumbItem[]): BreadcrumbList => {
  if (!items.length) {
    throw new Error('Breadcrumb items cannot be empty')
  }
  
  // Validate items
  const errors: string[] = []
  items.forEach((item, index) => {
    if (!item.name?.trim()) {
      errors.push(`Breadcrumb item ${index + 1}: name is required`)
    }
    if (!item.url?.trim()) {
      errors.push(`Breadcrumb item ${index + 1}: url is required`)
    }
  })
  
  if (errors.length > 0) {
    throw new Error(`Breadcrumb validation failed: ${errors.join(', ')}`)
  }
  
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name.trim(),
      item: item.url.trim()
    }))
  }
}

// Default exports for backward compatibility
export const organizationSchema = createOrganizationSchema()
export const websiteSchema = createWebsiteSchema()
export const breadcrumbSchema = createBreadcrumbSchema
