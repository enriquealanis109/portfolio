import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'
import { torneaData } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Case Study — Tornea | Enrique Alanis',
  description: 'Building a SaaS platform for sports tournament management in México. Multi-role system for organizers, coaches, and referees.',
}

export default function Page() {
  return <CaseStudyPage data={torneaData} />
}
