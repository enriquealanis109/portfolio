'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { content } from '@/lib/content'
import { projects } from '@/lib/projects'

const statusConfig = {
  live:   { color: 'text-[#4ade80] bg-[#052e16] border-[#14532d]' },
  wip:    { color: 'text-[#facc15] bg-[#1c1a05] border-[#713f12]' },
  agency: { color: 'text-[#60a5fa] bg-[#0c1a3d] border-[#1e3a8a]' },
}

export default function Projects() {
  const { t } = useLang()
  const c = content.projects

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6] mb-3">
            Selected work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]">
            {t(c.title)}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const badge = statusConfig[project.status]
            return (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col border border-[#27272A] rounded-2xl overflow-hidden hover:border-[#3F3F46] transition-all bg-[#0d0d0f] cursor-pointer"
              >
                {/* Logo area */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `radial-gradient(ellipse at center, ${project.brandColor}18 0%, #09090B 75%)`,
                    borderBottom: '1px solid #27272A',
                    overflow: 'hidden',
                  }}
                >
                  {/* Glow */}
                  <div style={{
                    position: 'absolute',
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    background: project.brandColor,
                    opacity: 0.07,
                    filter: 'blur(40px)',
                  }} />
                  {/* Logo */}
                  <div style={{ position: 'relative', width: 140, height: 80 }}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="140px"
                      style={{ objectFit: 'contain', transition: 'transform 0.5s ease' }}
                      className="group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-[#FAFAFA] tracking-tight">
                        {project.name}
                      </h3>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[9px] font-semibold uppercase tracking-wide ${badge.color}`}>
                        {project.status === 'live' && (
                          <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
                        )}
                        {t(c[project.status as keyof typeof c] as { en: string; es: string })}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-[#3F3F46] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5"
                    />
                  </div>

                  <p className="text-xs text-[#71717A] mb-3">{t(project.tagline)}</p>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4 flex-1">
                    {t(project.description)}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-medium text-[#52525B] bg-[#18181B] border border-[#27272A] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
