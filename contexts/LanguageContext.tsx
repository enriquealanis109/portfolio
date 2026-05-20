'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import type { Lang } from '@/lib/content'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (obj: { en: string; es: string }) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (obj) => obj.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = (obj: { en: string; es: string }) => obj[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
