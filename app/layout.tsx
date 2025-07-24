import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { organizationSchema, websiteSchema } from "@/lib/schema"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Innovative Trademark - Modern Software Solutions",
    template: "%s | Innovative Trademark"
  },
  description: "Web Applications, VR Development, E-commerce, Digital Marketing and Custom Software Solutions. Professional software development company in Turkey.",
  generator: 'Hüseyin Kocatürk',
  keywords: ['web development', 'software solutions', 'VR development', 'e-commerce', 'digital marketing', 'custom software', 'Turkey', 'innovative trademark'],
  authors: [{ name: 'Hüseyin Kocatürk' }],
  creator: 'Hüseyin Kocatürk',
  publisher: 'Innovative Trademark',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://innovative-trademark.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://innovative-trademark.com',
    title: 'Innovative Trademark - Modern Software Solutions',
    description: 'Web Applications, VR Development, E-commerce, Digital Marketing and Custom Software Solutions. Professional software development company in Turkey.',
    siteName: 'Innovative Trademark',
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'Innovative Trademark Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovative Trademark - Modern Software Solutions',
    description: 'Web Applications, VR Development, E-commerce, Digital Marketing and Custom Software Solutions.',
    images: ['/placeholder-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <LanguageProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
