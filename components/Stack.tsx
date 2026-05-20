'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'
import { content } from '@/lib/content'

const stackGroups = [
  {
    category: { en: 'Frontend', es: 'Frontend' },
    items: ['Next.js', 'React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: { en: 'Backend & DB', es: 'Backend & BD' },
    items: ['Supabase', 'PostgreSQL', 'SQL Server', '.NET', 'REST APIs'],
  },
  {
    category: { en: 'Tools & AI', es: 'Herramientas & IA' },
    items: ['Git', 'Vercel', 'n8n', 'Claude AI', 'Figma'],
  },
]

export default function Stack() {
  const { t } = useLang()

  return (
    <section className="py-24 px-6 border-t border-[#18181B]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6] mb-3">
            Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]">
            {t(content.stack.title)}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stackGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
              className="p-5 rounded-2xl bg-[#18181B] border border-[#27272A]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3B82F6] mb-4">
                {t(group.category)}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-medium text-[#A1A1AA] bg-[#09090B] border border-[#27272A] rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
