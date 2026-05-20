'use client'

import { motion } from 'framer-motion'
import { Mail, Link, Code, ArrowUpRight } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { content } from '@/lib/content'

export default function Contact() {
  const { t } = useLang()
  const c = content.contact

  const links = [
    {
      icon: Mail,
      label: c.email,
      href: 'mailto:enriquealanis109@gmail.com',
      value: 'enriquealanis109@gmail.com',
    },
    {
      icon: Link,
      label: c.linkedin,
      href: 'https://linkedin.com/in/enriquealanis-640bb6226',
      value: 'linkedin.com/in/enriquealanis',
    },
    {
      icon: Code,
      label: c.github,
      href: 'https://github.com/enriquealanis109',
      value: 'github.com/enriquealanis109',
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#18181B]">
      <div className="max-w-5xl mx-auto">

        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B82F6] mb-4">
              Get in touch
            </p>
            <h2
              className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#FAFAFA] leading-[0.95] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              {t(c.title).split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <p className="text-sm text-[#71717A] mb-10 leading-relaxed">
              {t(c.sub)}
            </p>
          </motion.div>

          <div className="space-y-3">
            {links.map(({ icon: Icon, label, href, value }, i) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between p-4 rounded-xl border border-[#27272A] hover:border-[#3B82F6]/40 hover:bg-[#18181B] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#18181B] border border-[#27272A] group-hover:border-[#3B82F6]/40 flex items-center justify-center transition-colors">
                    <Icon size={14} className="text-[#71717A] group-hover:text-[#3B82F6] transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#52525B] uppercase tracking-wider font-medium">
                      {t(label)}
                    </p>
                    <p className="text-sm text-[#A1A1AA] group-hover:text-[#FAFAFA] transition-colors font-medium">
                      {value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-[#3F3F46] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
