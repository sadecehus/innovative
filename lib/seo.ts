import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  url: string
  image?: string
  keywords?: string[]
  noindex?: boolean
  nofollow?: boolean
}

export function generateSEO({
  title,
  description,
  url,
  image = '/placeholder-logo.png',
  keywords = [],
  noindex = false,
  nofollow = false,
}: SEOProps): Metadata {
  const baseUrl = 'https://innovative-trademark.com'
  const fullUrl = `${baseUrl}${url}`
  const fullImage = `${baseUrl}${image}`

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Hüseyin Kocatürk' }],
    creator: 'Hüseyin Kocatürk',
    publisher: 'Innovative Trademark',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: fullUrl,
      title,
      description,
      siteName: 'Innovative Trademark',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://innovative-trademark.com${item.url}`
    }))
  }
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Innovative Trademark",
    "url": "https://innovative-trademark.com",
    "logo": "https://innovative-trademark.com/placeholder-logo.png",
    "description": "Web Applications, VR Development, E-commerce, Digital Marketing and Custom Software Solutions",
    "founder": {
      "@type": "Person",
      "name": "Hüseyin Kocatürk"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@innovative-trademark.com"
    },
    "sameAs": [
      "https://github.com/innovative-trademark",
      "https://linkedin.com/company/innovative-trademark",
      "https://twitter.com/innovative_trademark"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "Turkey"
    }
  }
}
