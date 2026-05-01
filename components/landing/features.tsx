"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { LayoutGrid, BarChart3, Bell, TrendingUp, Check, AlertTriangle, Users } from "lucide-react"

const features = [
  {
    id: "multi-client",
    title: "Painel multiclientes em cards",
    description: "Veja todos os seus clientes em uma tela só. Status de cada conta, gasto do mês, alertas de budget — sem precisar entrar em cada conta.",
    icon: LayoutGrid,
  },
  {
    id: "metrics",
    title: "Métricas consolidadas Google + Meta",
    description: "Impressões, cliques, custo, CTR, conversões e leads de ambas as plataformas lado a lado. Filtre por período com um clique.",
    icon: BarChart3,
  },
  {
    id: "alerts",
    title: "Alertas de budget em tempo real",
    description: "Configure o orçamento diário por plataforma e receba alertas quando o gasto estiver acima ou abaixo do esperado. Nunca mais estoure budget sem saber.",
    icon: Bell,
  },
  {
    id: "chart",
    title: "Gráfico de gasto diário por período",
    description: "Evolução do spend dia a dia com linha de budget. Identifique picos, quedas e anomalias num relance.",
    icon: TrendingUp,
  },
]

// Client cards mockup for feature 1
function ClientCardsMockup() {
  const clients = [
    { name: "Imobfinder", avatar: "I", spend: "R$ 5.897", trend: "+97%", status: "on-track" },
    { name: "TechCorp", avatar: "T", impressions: "8.612%", trend: "+03%", status: "on-track" },
    { name: "Loja Virtual", avatar: "L", spend: "R$ 2.340", trend: "+14%", status: "warning" },
    { name: "Clínica Saúde", avatar: "C", conversions: "412", trend: "+54%", status: "on-track" },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {clients.map((client, i) => (
        <div 
          key={client.name}
          className="bg-[#07080a] rounded-xl p-3 border border-white/[0.06]"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
              i % 2 === 0 ? 'bg-[#4F8EF7]/20 text-[#4F8EF7]' : 'bg-[#A259FF]/20 text-[#A259FF]'
            }`}>
              {client.avatar}
            </div>
            <span className="text-xs text-white font-medium">{client.name}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-white">{client.spend || client.impressions || client.conversions}</span>
            <span className={`text-[10px] ${client.status === 'warning' ? 'text-[#f97316]' : 'text-[#22c55e]'}`}>
              {client.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Metrics mockup for feature 2
function MetricsMockup() {
  return (
    <div className="space-y-2">
      {[
        { label: "Impressões", google: "20.455", meta: "517.065" },
        { label: "Cliques", google: "1.394", meta: "2.571" },
        { label: "Conversões", google: "46", meta: "366" },
      ].map((metric) => (
        <div key={metric.label} className="bg-[#07080a] rounded-lg p-3 border border-white/[0.06]">
          <div className="text-[10px] text-muted-foreground mb-1">{metric.label}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
              <span className="text-xs text-white">{metric.google}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A259FF]" />
              <span className="text-xs text-white">{metric.meta}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Alerts mockup for feature 3
function AlertsMockup() {
  return (
    <div className="space-y-3">
      <div className="bg-[#07080a] rounded-lg p-3 border border-[#22c55e]/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#4F8EF7]" />
          <span className="text-xs font-medium text-[#4F8EF7]">Google Ads</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Budget: R$ 105</span>
          <span className="text-white">Gasto: R$ 106</span>
        </div>
        <div className="mt-2 flex items-center gap-1 px-2 py-0.5 rounded bg-[#22c55e]/10 text-[#22c55e] text-[10px] w-fit">
          <Check className="w-3 h-3" />
          <span>No budget</span>
        </div>
      </div>
      <div className="bg-[#07080a] rounded-lg p-3 border border-[#f97316]/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#A259FF]" />
          <span className="text-xs font-medium text-[#A259FF]">Meta Ads</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Budget: R$ 50</span>
          <span className="text-white">Gasto: R$ 91</span>
        </div>
        <div className="mt-2 flex items-center gap-1 px-2 py-0.5 rounded bg-[#f97316]/10 text-[#f97316] text-[10px] w-fit">
          <AlertTriangle className="w-3 h-3" />
          <span>81.5% acima</span>
        </div>
      </div>
    </div>
  )
}

// Mini chart mockup for feature 4
function MiniChartMockup() {
  return (
    <div className="bg-[#07080a] rounded-lg p-3 border border-white/[0.06]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-muted-foreground">Últimos 30 dias</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-0.5 bg-[#4F8EF7]" />
            <span className="text-[10px] text-muted-foreground">Google</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-0.5 bg-[#A259FF]" />
            <span className="text-[10px] text-muted-foreground">Meta</span>
          </div>
        </div>
      </div>
      <svg className="w-full h-20" viewBox="0 0 200 60" preserveAspectRatio="none">
        <defs>
          <linearGradient id="miniGoogleGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F8EF7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4F8EF7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,40 Q25,35 50,30 T100,25 T150,35 T200,15 L200,60 L0,60 Z" fill="url(#miniGoogleGrad)" />
        <path d="M0,40 Q25,35 50,30 T100,25 T150,35 T200,15" fill="none" stroke="#4F8EF7" strokeWidth="2" />
        <path d="M0,45 Q25,50 50,42 T100,38 T150,45 T200,30" fill="none" stroke="#A259FF" strokeWidth="2" />
      </svg>
    </div>
  )
}

const mockups: Record<string, React.ReactNode> = {
  "multi-client": <ClientCardsMockup />,
  "metrics": <MetricsMockup />,
  "alerts": <AlertsMockup />,
  "chart": <MiniChartMockup />,
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="funcionalidades" ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 mb-6">
            <span className="text-xs font-medium text-[#4F8EF7] uppercase tracking-wider">
              Funcionalidades
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tudo que você precisa para gerir clientes de mídia paga.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="relative bg-[#0f1117] rounded-2xl p-6 border border-white/[0.06] h-full card-hover overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F8EF7]/5 to-[#A259FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative grid lg:grid-cols-[1fr,180px] gap-6 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F8EF7]/20 to-[#A259FF]/20 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#4F8EF7]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="hidden lg:block">
                    {mockups[feature.id]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
