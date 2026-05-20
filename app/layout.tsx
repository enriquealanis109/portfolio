import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enrique Alanis — Full Stack Engineer',
  description: 'Systems Engineer building complete web products. Next.js, TypeScript, Supabase. Real clients. Real deployments.',
  openGraph: {
    title: 'Enrique Alanis — Full Stack Engineer',
    description: 'Systems Engineer building complete web products.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
