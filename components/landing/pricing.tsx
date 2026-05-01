"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "R$ 97",
    period: "/mês",
    description: "Para quem está começando",
    features: [
      "Até 5 clientes",
      "Google Ads + Meta Ads",
      "Histórico 90 dias",
      "Suporte por email",
    ],
    cta: "Começar",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 197",
    period: "/mês",
    description: "Para gestores em crescimento",
    badge: "Mais popular",
    features: [
      "Clientes ilimitados",
      "Google Ads + Meta Ads",
      "Histórico completo",
      "Alertas de budget",
      "Relatório por cliente",
      "Suporte prioritário",
    ],
    cta: "Começar grátis",
    highlighted: true,
  },
  {
    name: "Agência",
    price: "R$ 397",
    period: "/mês",
    description: "Para agências e times",
    features: [
      "Tudo do Pro",
      "Multi-usuário",
      "White-label (em breve)",
      "Suporte dedicado",
      "Onboarding personalizado",
    ],
    cta: "Falar com a gente",
    highlighted: false,
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="planos" ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 mb-6">
            <span className="text-xs font-medium text-[#4F8EF7] uppercase tracking-wider">
              Planos
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Simples. Transparente. Sem surpresa.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative ${plan.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Glow for highlighted plan */}
              {plan.highlighted && (
                <div className="absolute -inset-px bg-gradient-to-b from-[#4F8EF7] to-[#A259FF] rounded-2xl blur opacity-20" />
              )}
              
              <div 
                className={`relative h-full rounded-2xl p-6 lg:p-8 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-b from-[#0f1117] to-[#0a0b0d] border-2 border-[#4F8EF7]/50' 
                    : 'bg-[#0f1117] border border-white/[0.06]'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#A259FF] text-white text-xs font-medium">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span 
                      className="text-4xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted 
                          ? 'bg-[#4F8EF7]/20 text-[#4F8EF7]' 
                          : 'bg-white/5 text-muted-foreground'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-[#4F8EF7] hover:bg-[#3d7ce5] text-white' 
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
