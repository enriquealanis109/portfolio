'use client'

import { useLang } from '@/contexts/LanguageContext'
import { content } from '@/lib/content'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-[#18181B] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#3F3F46]">
          {t(content.footer.made)} · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-md bg-[#3B82F6] flex items-center justify-center text-white text-[9px] font-bold">
            EA
          </div>
          <span className="text-xs text-[#3F3F46] ml-1">enriquealanis.dev</span>
        </div>
      </div>
    </footer>
  )
}
