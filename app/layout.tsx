import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const serifDisplay = Source_Serif_4({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'SK Team Derneği (SKTD) — Resmî Kurumsal Portal',
    template: '%s · SKTD',
  },
  description:
    '42 İstanbul Kampüsü bünyesinde hayalî olarak kurulan, fiilen faaliyet gösteren SK Team Derneği’nin resmî kurumsal sitesi. Tüzük, duyurular, yönetim kurulu ve faaliyetler.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'SK Team Derneği (SKTD)',
    description:
      'Birlikte derleriz, birlikte hata alırız. 42 İstanbul Kampüsü’nün resmî olmayan resmî derneği.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1c2a4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`bg-background ${inter.variable} ${serifDisplay.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
