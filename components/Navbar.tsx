'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'
import { content } from '@/lib/content'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#09090B]/95 backdrop-blur-md border-b border-[#27272A]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" onClick={closeMenu} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#3B82F6] flex items-center justify-center text-white text-xs font-bold tracking-tight">
              EA
            </div>
            <span className="text-sm font-medium text-[#FAFAFA] hidden sm:block">
              Enrique Alanis
            </span>
          </a>

          {/* Desktop: links + controls */}
          <div className="hidden sm:flex items-center gap-1">
            <div className="flex items-center gap-1 mr-2">
              {(['work', 'about', 'contact'] as const).map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="px-3 py-1.5 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors rounded-md hover:bg-[#18181B]"
                >
                  {t(content.nav[key])}
                </a>
              ))}
            </div>

            <div className="flex items-center bg-[#18181B] border border-[#27272A] rounded-md overflow-hidden text-xs font-medium">
              {(['en', 'es'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 transition-colors cursor-pointer ${
                    lang === l ? 'bg-[#27272A] text-[#FAFAFA]' : 'text-[#71717A] hover:text-[#A1A1AA]'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="/cv-enrique-alanis.pdf"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#27272A] hover:border-[#3B82F6]/50 hover:bg-[#18181B] text-xs text-[#A1A1AA] hover:text-[#FAFAFA] rounded-md transition-all font-medium"
            >
              ↓ CV
            </a>

            <div className="hidden sm:flex items-center gap-1.5 ml-2 px-3 py-1.5 bg-[#052e16] border border-[#14532d] rounded-full text-xs text-[#4ade80] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              {t(content.nav.open)}
            </div>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <div className="flex items-center bg-[#18181B] border border-[#27272A] rounded-md overflow-hidden text-xs font-medium">
              {(['en', 'es'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1.5 transition-colors cursor-pointer ${
                    lang === l ? 'bg-[#27272A] text-[#FAFAFA]' : 'text-[#71717A]'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-md hover:bg-[#18181B] transition-colors"
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-4 h-px bg-[#A1A1AA] block origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-4 h-px bg-[#A1A1AA] block"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-4 h-px bg-[#A1A1AA] block origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#09090B]/95 backdrop-blur-md border-b border-[#27272A] sm:hidden"
          >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {(['work', 'about', 'contact'] as const).map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={closeMenu}
                  className="px-3 py-3 text-base text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors rounded-md hover:bg-[#18181B]"
                >
                  {t(content.nav[key])}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-1.5 px-3 py-2 text-xs text-[#4ade80]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                {t(content.nav.open)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
