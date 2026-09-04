'use client'

import Link from 'next/link'
import { useLang } from '@/contexts/LanguageContext'
import type { CaseStudyData, SectionContent, BiStr } from '@/lib/caseStudies'

const badgeStyles = {
  green:  'border-[#14532d] bg-[#052e16] text-[#4ade80]',
  yellow: 'border-[#713f12] bg-[#1c1a05] text-[#facc15]',
  blue:   'border-[#1e3a8a] bg-[#0c1a3d] text-[#60a5fa]',
}

function Section({ content, t, lang }: { content: SectionContent; t: (o: BiStr) => string; lang: string }) {
  switch (content.type) {
    case 'metrics':
      return (
        <div className={`grid grid-cols-2 gap-3 ${content.items.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
          {content.items.map((m) => (
            <div key={m.value} className="border border-[#27272A] rounded-xl p-4 bg-[#0d0d0f]">
              <div className="text-3xl font-bold tracking-tight text-[#FAFAFA] leading-none mb-2">{m.value}</div>
              <div className="text-xs text-[#71717A] leading-snug">{t(m.label)}</div>
            </div>
          ))}
        </div>
      )

    case 'text':
      return (
        <div>
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-[#A1A1AA] leading-relaxed mb-3 last:mb-0">{t(p)}</p>
          ))}
          {content.quote && (
            <div className="border border-[#14532d] bg-[#052e16] rounded-xl p-5 my-4">
              <p className="text-sm text-[#4ade80] italic leading-relaxed">{t(content.quote)}</p>
            </div>
          )}
          {content.afterQuote?.map((p, i) => (
            <p key={i} className="text-[#71717A] text-sm leading-relaxed mt-3">{t(p)}</p>
          ))}
        </div>
      )

    case 'cards':
      return (
        <div>
          {content.intro && <p className="text-[#A1A1AA] leading-relaxed mb-5">{t(content.intro)}</p>}
          <div className={`grid grid-cols-1 gap-3 ${content.cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {content.items.map((item, i) => (
              <div key={i} className="border border-[#27272A] rounded-xl p-5 bg-[#0d0d0f]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="text-sm font-semibold text-[#FAFAFA]">{t(item.title)}</div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full border border-[#14532d] bg-[#052e16] text-[#4ade80] text-[9px] font-semibold uppercase tracking-wide">
                      {t(item.badge)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#71717A] leading-relaxed">{t(item.body)}</p>
                {item.result && (
                  <div className="text-xs text-[#4ade80] font-medium mt-2">{t(item.result)}</div>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-medium text-[#52525B] bg-[#18181B] border border-[#27272A] rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )

    case 'before-after':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="border border-[#7f1d1d] bg-[#1c0505] rounded-xl p-5">
            <div className="text-xs font-bold uppercase tracking-wide text-[#f87171] mb-4">
              {lang === 'es' ? 'Antes' : 'Before'}
            </div>
            <ul className="space-y-2.5">
              {content.before.map((item, i) => (
                <li key={i} className="text-sm text-[#fca5a5] flex items-start gap-2 leading-snug">
                  <span className="text-[#ef4444] mt-0.5 shrink-0">✗</span>
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[#14532d] bg-[#052e16] rounded-xl p-5">
            <div className="text-xs font-bold uppercase tracking-wide text-[#4ade80] mb-4">
              {lang === 'es' ? 'Después' : 'After'}
            </div>
            <ul className="space-y-2.5">
              {content.after.map((item, i) => (
                <li key={i} className="text-sm text-[#86efac] flex items-start gap-2 leading-snug">
                  <span className="text-[#4ade80] mt-0.5 shrink-0">✓</span>
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )

    case 'roles':
      return (
        <div>
          <p className="text-[#A1A1AA] leading-relaxed mb-5">{t(content.intro)}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {content.roles.map((role, i) => (
              <div key={i} className="border border-[#27272A] rounded-xl p-4 bg-[#0d0d0f]">
                <div className="text-sm font-semibold text-[#FAFAFA] mb-3">{t(role.name)}</div>
                <ul className="space-y-1.5">
                  {role.items.map((item, j) => (
                    <li key={j} className="text-xs text-[#71717A] flex items-start gap-1.5">
                      <span className="text-[#3F3F46] mt-0.5 shrink-0">·</span>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )

    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-[#27272A]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#27272A] bg-[#0d0d0f]">
                {content.headers.map((h, i) => (
                  <th key={i} className="text-left px-4 py-3 text-xs text-[#52525B] font-semibold uppercase tracking-wide">
                    {t(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181B]">
              {content.rows.map((row, i) => (
                <tr key={i} className="bg-[#09090B] hover:bg-[#0d0d0f] transition-colors">
                  {row.cells.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 text-xs leading-relaxed ${
                      j === row.highlight
                        ? 'font-semibold text-[#4ade80] whitespace-nowrap'
                        : j === 0 ? 'text-[#A1A1AA]'
                        : j === 1 ? 'text-[#52525B]'
                        : 'text-[#71717A]'
                    }`}>
                      {t(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    default:
      return null
  }
}

export default function CaseStudyPage({ data }: { data: CaseStudyData }) {
  const { lang, setLang, t } = useLang()

  return (
    <main className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
      {/* Top bar */}
      <div className="border-b border-[#27272A] sticky top-0 bg-[#09090B]/95 backdrop-blur-md z-50">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#work" className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors">
            ← {lang === 'es' ? 'Volver al portafolio' : 'Back to portfolio'}
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#3F3F46] hidden sm:block">{t(data.topBarLabel)}</span>
            <div className="flex items-center bg-[#18181B] border border-[#27272A] rounded-md overflow-hidden text-xs font-medium">
              {(['en', 'es'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1.5 transition-colors cursor-pointer ${
                    lang === l ? 'bg-[#27272A] text-[#FAFAFA]' : 'text-[#71717A] hover:text-[#A1A1AA]'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold mb-5 ${badgeStyles[data.badge.color]}`}>
            {data.badge.color !== 'blue' && (
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${data.badge.color === 'green' ? 'bg-[#4ade80]' : 'bg-[#facc15]'}`} />
            )}
            {t(data.badge.text)}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA] mb-3">{data.title}</h1>
          <p className="text-lg text-[#71717A] mb-5">{t(data.tagline)}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm">
            {data.meta.map((m, i) => (
              <span key={i} className="text-[#52525B]">
                <span className="text-[#A1A1AA] font-medium">{t(m.label)}:</span> {m.value}
              </span>
            ))}
          </div>
        </div>

        {/* Sections */}
        {data.sections.map((section, i) => {
          const isMetrics = section.content.type === 'metrics'
          return (
            <section key={i} className="mb-10">
              <div className={`text-xs font-semibold uppercase tracking-[0.15em] text-[#3F3F46] ${
                isMetrics ? 'mb-4' : 'border-b border-[#27272A] pb-2 mb-5'
              }`}>
                {t(section.label)}
              </div>
              <Section content={section.content} t={t} lang={lang} />
            </section>
          )
        })}

        {/* Stack */}
        <section className="mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3F3F46] border-b border-[#27272A] pb-2 mb-5">
            {lang === 'es' ? 'Tecnologías utilizadas' : 'Tech stack'}
          </div>
          <div className="flex flex-wrap gap-2">
            {data.stack.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-medium text-[#A1A1AA] bg-[#18181B] border border-[#27272A] rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom nav */}
        <div className="border-t border-[#27272A] pt-8 flex items-center justify-between">
          <Link href="/#work" className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors">
            ← {lang === 'es' ? 'Volver al portafolio' : 'Back to portfolio'}
          </Link>
          <a href={data.projectUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#3B82F6] hover:text-[#60A5FA] transition-colors">
            {t(data.projectUrlLabel)}
          </a>
        </div>
      </div>
    </main>
  )
}
