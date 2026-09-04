'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, FileDown } from 'lucide-react'
import { track } from '@vercel/analytics'
import { useLang } from '@/contexts/LanguageContext'
import { content } from '@/lib/content'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const, delay },
  style: { willChange: 'opacity, transform' as const },
})

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(250,250,250,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,250,250,1) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Aurora blobs — hidden on mobile to avoid Safari animation budget issues */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.12, 0.07] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:block absolute -top-32 -left-32 w-[700px] h-[700px] bg-[#3B82F6] rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="hidden sm:block absolute top-1/2 -right-48 w-[600px] h-[600px] bg-[#8B5CF6] rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="hidden sm:block absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-[#06B6D4] rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto w-full pt-24 pb-16">

        {/* Available badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272A] bg-[#18181B] text-xs text-[#A1A1AA] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            {t(content.hero.available)}
          </span>
        </motion.div>

        {/* Name */}
        <motion.p {...fadeUp(0.2)} className="text-[#71717A] text-lg font-medium mb-2 tracking-wide">
          Enrique Alanis
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.3)}
          className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-[#FAFAFA] leading-[0.95] mb-8"
          style={{ letterSpacing: '-0.03em' }}
        >
          {t(content.hero.role).split('\n').map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? <span className="text-[#3B82F6]">{line}</span> : line}
            </span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-base sm:text-lg text-[#71717A] max-w-xl leading-relaxed mb-10"
        >
          {t(content.hero.sub).split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-lg transition-colors"
          >
            {t(content.hero.cta1)}
            <ArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#27272A] hover:border-[#3F3F46] hover:bg-[#18181B] text-[#A1A1AA] hover:text-[#FAFAFA] text-sm font-medium rounded-lg transition-all"
          >
            <Mail size={14} />
            {t(content.hero.cta2)}
          </a>
          <a
            href={t({ en: '/cv-en.html', es: '/cv-es.html' })}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('cv_download')}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#27272A] hover:border-[#3F3F46] hover:bg-[#18181B] text-[#A1A1AA] hover:text-[#FAFAFA] text-sm font-medium rounded-lg transition-all"
          >
            <FileDown size={14} />
            {t({ en: 'View CV', es: 'Ver CV' })}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-0 flex items-center gap-2 text-[#3F3F46] text-xs"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-transparent via-[#3F3F46] to-transparent"
          />
          scroll
        </motion.div>

      </div>
    </section>
  )
}
