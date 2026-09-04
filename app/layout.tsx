import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-enrique-alanis-projects.vercel.app'),
  title: 'Enrique Alanis — Full Stack Engineer',
  description: 'Systems Engineer building complete web products. Next.js, TypeScript, Supabase. Real clients. Real deployments.',
  openGraph: {
    title: 'Enrique Alanis — Full Stack Engineer',
    description: 'Systems Engineer building complete web products. Next.js · TypeScript · Supabase',
    type: 'website',
    url: 'https://portfolio-enrique-alanis-projects.vercel.app',
    images: [{ url: 'https://portfolio-enrique-alanis-projects.vercel.app/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enrique Alanis — Full Stack Engineer',
    description: 'Systems Engineer building complete web products.',
    images: ['https://portfolio-enrique-alanis-projects.vercel.app/opengraph-image'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
