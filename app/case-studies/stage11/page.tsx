import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'
import { stage11Data } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Case Study — Stage 11 Danceground | Enrique Alanis',
  description: 'How I built a complete web platform for a dance academy in Saltillo — from informal WhatsApp to professional site with full admin control.',
}

export default function Page() {
  return <CaseStudyPage data={stage11Data} />
}
