'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-destructive" />
          <CardTitle className="text-2xl">Bir Hata Oluştu</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Üzgünüz, bir şeyler ters gitti. Lütfen tekrar deneyiniz.
          </p>
          <div className="flex gap-2 justify-center">
            <Button onClick={() => reset()} className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Tekrar Dene
            </Button>
            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Ana Sayfa
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
