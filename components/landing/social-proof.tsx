"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  {
    value: "R$ 1.7M+",
    label: "em verba gerenciada pela plataforma",
    color: "#4F8EF7",
  },
  {
    value: "67+",
    label: "contas conectadas",
    color: "#A259FF",
  },
  {
    value: "ZERO",
    label: "planilhas — tudo automatizado",
    color: "#22c55e",
  },
]

const testimonials = [
  {
    quote: "Com o monitoramento através do FactorIA eu tenho mais tempo para buscar soluções e oportunidades para meus clientes.",
    author: "Samuel Toulone.",
    role: "Estrategista e PPC",
  },
  {
    quote: "Agora eu e meu time temos em uma única tela de fácil leitura, a visão completa de performance e orçamento de todas as nossas contas de anúncios.",
    author: "Mariana Salomão.",
    role: "Head de Performance",
  },
  {
    quote: "Finalmente consigo ter uma visão em tempo real de todos os meus clientes sem planilha nenhuma.",
    author: "Junior J.",
    role: "Agencia de Marketing Digital",
  },
]

export function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#4F8EF7]/10 via-[#A259FF]/10 to-[#4F8EF7]/10 blur-3xl opacity-50" />
      
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
            Números reais de quem já usa.
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-center"
            >
              <div 
                className="text-5xl lg:text-6xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: stat.color }}
              >
                {stat.value}
              </div>
              <p className="text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-[#0f1117] rounded-2xl p-6 border border-white/[0.06]"
            >
              <p className="text-white mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#A259FF] flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
