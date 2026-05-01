"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { LayoutGrid, BarChart3, Flame } from "lucide-react"

const painPoints = [
  {
    icon: LayoutGrid,
    title: "10 abas abertas ao mesmo tempo",
    description: "Google Ads, Meta, planilha, WhatsApp do cliente, Looker Studio...",
    color: "#f97316",
  },
  {
    icon: BarChart3,
    title: "Relatório manual toda semana",
    description: "Copia, cola, formata, envia. Repete para cada cliente.",
    color: "#f97316",
  },
  {
    icon: Flame,
    title: "Budget estourou e você não viu",
    description: "Cliente gastou 180% do orçamento antes de você perceber.",
    color: "#f97316",
  },
]

export function PainPoints() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Gerir múltiplos clientes hoje é isso aqui:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-[#0f1117] rounded-2xl p-6 border border-[#f97316]/20 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl text-white font-semibold">
            Com o <span className="text-[#4F8EF7]">Factoria</span>, isso acaba.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
