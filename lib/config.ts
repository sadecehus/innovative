/**
 * Site configuration constants
 * Centralized configuration for better maintainability
 */
export const SITE_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://innovative-trademark.com',
  name: 'Innovative Trademark',
  email: 'info@innovative-trademark.com',
  logoPath: '/placeholder-logo.png',
  founder: 'Hüseyin Kocatürk',
  country: 'TR',
  locality: 'Turkey',
  languages: ['tr-TR', 'en-US'] as const,
  serviceAreas: ['TR', 'US', 'EU'] as const,
  socialProfiles: {
    github: 'https://github.com/innovative-trademark',
    linkedin: 'https://linkedin.com/company/innovative-trademark',
    twitter: 'https://twitter.com/innovative_trademark'
  },
  services: [
    'Web Development',
    'VR Development',
    'E-commerce Solutions',
    'Digital Marketing',
    'Custom Software Development'
  ] as const,
  description: {
    organization: 'Web Applications, VR Development, E-commerce, Digital Marketing and Custom Software Solutions',
    website: 'Modern Software Solutions - Web Applications, VR Development, E-commerce, Digital Marketing'
  }
} as const

export type SiteConfig = typeof SITE_CONFIG
