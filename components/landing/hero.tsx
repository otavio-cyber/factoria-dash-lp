"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DashboardMockup } from "./dashboard-mockup"
import { Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-32 pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-8 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
              <span className="text-xs font-medium text-[#4F8EF7]">
                Dashboard para gestores de tráfego
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Todos os seus clientes.{" "}
              <span className="text-[#4F8EF7]">Google</span> e{" "}
              <span className="text-[#A259FF]">Meta</span>.{" "}
              <span className="text-white/90">Em um só lugar.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Pare de abrir 10 abas por cliente. O Factoria centraliza métricas, budgets e campanhas de todas as suas contas em tempo real — com alertas de orçamento e visão consolidada.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <Button 
                size="lg" 
                className="bg-[#4F8EF7] hover:bg-[#3d7ce5] text-white font-semibold px-8 h-12 text-base"
              >
                Começar grátis — 14 dias
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium px-8 h-12 text-base"
              >
                <Play className="w-4 h-4 mr-2" />
                Ver demonstração
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              Sem cartão de crédito. Cancela quando quiser.
            </motion.p>
          </motion.div>

          {/* Right column - Dashboard Mockup */}
          <div className="lg:pl-8">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07080a] to-transparent" />
    </section>
  )
}
