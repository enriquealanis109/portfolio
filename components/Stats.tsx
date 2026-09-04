'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'

const stats = [
  {
    value: 5,
    suffix: '',
    label: { en: 'Products shipped', es: 'Productos entregados' },
    detail: { en: 'From idea to production', es: 'De idea a producción' },
  },
  {
    value: 10,
    suffix: '+',
    label: { en: 'Active users', es: 'Usuarios activos' },
    detail: { en: 'In real production systems', es: 'En sistemas reales' },
  },
  {
    value: 2,
    suffix: '',
    label: { en: 'Paid clients', es: 'Clientes pagados' },
    detail: { en: 'Real revenue generated', es: 'Ingresos reales generados' },
  },
  {
    value: 4,
    suffix: '',
    label: { en: 'Live deployments', es: 'Deploys en producción' },
    detail: { en: 'Running right now', es: 'Corriendo ahora mismo' },
  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const { t } = useLang()

  return (
    <section className="py-16 px-6 border-y border-[#18181B]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#18181B] rounded-2xl overflow-hidden border border-[#27272A]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col gap-1 p-6 sm:p-8 bg-[#09090B] hover:bg-[#0d0d10] transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]" style={{ letterSpacing: '-0.04em' }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-medium text-[#A1A1AA] mt-1">
                {t(stat.label)}
              </span>
              <span className="text-xs text-[#3F3F46]">
                {t(stat.detail)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
