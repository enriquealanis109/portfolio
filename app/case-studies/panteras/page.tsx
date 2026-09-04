import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'
import { panterasData } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Case Study — Panteras Saltillo | Enrique Alanis',
  description: 'How I built a sports management platform for a football academy in Saltillo. 151 players, 15 active users, −83% attendance time.',
}

export default function Page() {
  return <CaseStudyPage data={panterasData} />
}
