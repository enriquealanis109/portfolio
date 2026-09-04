import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'
import { edutrackData } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Case Study — EduTrack | Enrique Alanis',
  description: 'How I built a multi-tenant attendance and grading platform for teachers, with RLS-isolated data from day one. Live pilot in production.',
}

export default function Page() {
  return <CaseStudyPage data={edutrackData} />
}
