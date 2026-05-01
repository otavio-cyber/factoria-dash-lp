"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, User, TrendingUp } from "lucide-react"

const personas = [
  {
    icon: Building2,
    title: "Agências de performance",
    description: "Gerencie dezenas de clientes sem perder o controle de nenhum budget.",
    color: "#4F8EF7",
  },
  {
    icon: User,
    title: "Gestores de tráfego freelancer",
    description: "Profissionalize seu trabalho com um dashboard próprio e relatórios visuais.",
    color: "#A259FF",
  },
  {
    icon: TrendingUp,
    title: "Times de marketing in-house",
    description: "Centralizar Google e Meta numa visão só para todo o time.",
    color: "#22c55e",
  },
]

export function ForWho() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="para-quem" ref={ref} className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F8EF7]/[0.02] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Feito para quem vive de resultado em mídia paga.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div 
                className="relative bg-[#0f1117] rounded-2xl p-8 border border-white/[0.06] h-full card-hover text-center"
                style={{ 
                  '--glow-color': persona.color,
                } as React.CSSProperties}
              >
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${persona.color}15` }}
                >
                  <persona.icon className="w-8 h-8" style={{ color: persona.color }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {persona.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
