'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'
import { content } from '@/lib/content'

export default function About() {
  const { t } = useLang()
  const c = content.about

  return (
    <section id="about" className="py-24 px-6 border-t border-[#18181B]">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6] mb-3">
              Who I am
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA] mb-8">
              {t(c.title)}
            </h2>

            <div className="space-y-4 text-[#A1A1AA] text-sm leading-relaxed">
              <p>{t(c.p1)}</p>
              <p>{t(c.p2)}</p>
              <p>{t(c.p3)}</p>
            </div>
          </motion.div>

          {/* Right: facts + photo placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Photo */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-[#27272A]">
              <Image
                src="/foto.jpeg"
                alt="Enrique Alanis"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center center', background: '#18181B' }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/40 to-transparent" />
            </div>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-3">
              {c.facts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="p-4 rounded-xl bg-[#18181B] border border-[#27272A]"
                >
                  <p className="text-[10px] text-[#52525B] uppercase tracking-wider mb-1 font-medium">
                    {t(fact.label)}
                  </p>
                  <p className="text-sm font-medium text-[#FAFAFA]">
                    {t(fact.value)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
