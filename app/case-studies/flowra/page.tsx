import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'
import { flowraData } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Agency Profile — Flowra | Enrique Alanis',
  description: 'Flowra is a digital agency focused on building web products, automations, and AI integrations for businesses in México.',
}

export default function Page() {
  return <CaseStudyPage data={flowraData} />
}
