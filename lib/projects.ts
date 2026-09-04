export type ProjectStatus = 'live' | 'wip' | 'agency'

export interface Project {
  id: string
  number: string
  name: string
  tagline: { en: string; es: string }
  description: { en: string; es: string }
  stack: string[]
  url: string
  status: ProjectStatus
  image: string
  brandColor: string
  caseStudySlug?: string
}

export const projects: Project[] = [
  {
    id: 'panteras',
    number: '01',
    name: 'Panteras Saltillo',
    tagline: {
      en: 'Sports management platform',
      es: 'Plataforma de gestión deportiva',
    },
    description: {
      en: 'Multi-role web platform for a football academy. Admins, coaches, and coordinators each have dedicated panels with attendance tracking, PDF reports, analytics, and PWA support. 10+ active users in production.',
      es: 'Plataforma multi-rol para academia de fútbol. Admin, entrenadores y coordinadores con pase de lista, reportes PDF, analytics y PWA. 10+ usuarios activos en producción.',
    },
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    url: 'https://panteras-saltillo.vercel.app',
    status: 'live',
    image: '/panteras.png',
    brandColor: '#00C853',
    caseStudySlug: 'panteras',
  },
  {
    id: 'stage11',
    number: '02',
    name: 'Stage 11 Danceground',
    tagline: {
      en: 'Dance academy platform',
      es: 'Plataforma para academia de baile',
    },
    description: {
      en: 'Complete platform for a dance academy: public landing page and full admin panel with class management, events, gallery, announcements, and click analytics. Paid client project, live in production.',
      es: 'Plataforma completa para academia de baile: landing pública y panel admin con gestión de clases, eventos, galería, avisos y métricas. Proyecto de cliente cobrado, en producción.',
    },
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    url: 'https://stage11danceground.com',
    status: 'live',
    image: '/stage11.png',
    brandColor: '#8B5CF6',
    caseStudySlug: 'stage11',
  },
  {
    id: 'edutrack',
    number: '03',
    name: 'EduTrack',
    tagline: {
      en: 'Multi-tenant school management SaaS',
      es: 'SaaS multi-tenant de gestión escolar',
    },
    description: {
      en: 'Attendance, weighted grading rubrics, and PDF report cards for teachers. Built multi-tenant from day one — RLS-isolated per teacher — so onboarding the next school requires zero rebuild. Live pilot with a real teacher, installable as a PWA.',
      es: 'Asistencia, rúbricas de calificación ponderadas y boletas en PDF para maestros. Construido multi-tenant desde el día 1 — aislado por RLS por maestro — para incorporar la siguiente escuela sin reconstruir nada. Piloto real en producción, instalable como PWA.',
    },
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PWA'],
    url: 'https://escuela-app-eta.vercel.app',
    status: 'live',
    image: '/edutrack.png',
    brandColor: '#F59E0B',
    caseStudySlug: 'edutrack',
  },
  {
    id: 'tornea',
    number: '04',
    name: 'Tornea',
    tagline: {
      en: 'Sports tournament SaaS',
      es: 'SaaS para torneos deportivos',
    },
    description: {
      en: 'My own SaaS product for organizing sports tournaments in México. Multi-role system for organizers, coaches, and referees. Team management, player roster validation, and match results. Actively in development.',
      es: 'Mi propio SaaS para organizar torneos deportivos en México. Multi-rol: organizador, entrenador, árbitro. Gestión de equipos, validación de roster de jugadores y resultados. En desarrollo activo.',
    },
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Framer Motion'],
    url: 'https://tornea-app.vercel.app',
    status: 'wip',
    image: '/tornea.png',
    brandColor: '#0066FF',
    caseStudySlug: 'tornea',
  },
  {
    id: 'flowra',
    number: '05',
    name: 'Flowra',
    tagline: {
      en: 'My digital agency',
      es: 'Mi agencia digital',
    },
    description: {
      en: 'Digital agency focused on building web products, workflow automations, and AI integrations for businesses in México. From landing pages to full-stack platforms and n8n automation pipelines.',
      es: 'Agencia digital enfocada en construir productos web, automatización de workflows e integraciones con IA para negocios en México. Desde landings hasta plataformas completas y pipelines con n8n.',
    },
    stack: ['Next.js', 'Tailwind CSS', 'n8n', 'Claude AI'],
    url: 'https://www.flowra.digital',
    status: 'agency',
    image: '/flowra.png',
    brandColor: '#06B6D4',
    caseStudySlug: 'flowra',
  },
]
