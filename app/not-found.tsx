import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileX, Home, Search } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Sayfa Bulunamadı | Innovative Trademark',
  description: 'Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya diğer sayfalarımızı keşfedin.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <FileX className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <CardTitle className="text-6xl font-bold mb-2">404</CardTitle>
          <h1 className="text-2xl font-semibold">Sayfa Bulunamadı</h1>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <div className="flex gap-2 justify-center">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Ana Sayfa
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Hizmetler
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
