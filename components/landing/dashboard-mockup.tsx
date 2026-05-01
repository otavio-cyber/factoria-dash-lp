"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { DollarSign, Eye, MousePointerClick, Target, TrendingUp, TrendingDown, Check, AlertTriangle, Calendar, RefreshCw, LayoutDashboard, Megaphone } from "lucide-react"
import { useRef } from "react"

const kpiCards = [
  {
    title: "Gasto Total",
    value: "R$ 5.897,79",
    icon: DollarSign,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    google: "R$ 3.175,63",
    meta: "R$ 2.722,16",
    trend: "+12.5%",
    trendUp: true,
  },
  {
    title: "Impressões",
    value: "537.520",
    icon: Eye,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    google: "20.455",
    meta: "517.065",
    trend: "+8.3%",
    trendUp: true,
  },
  {
    title: "Cliques",
    value: "3.965",
    icon: MousePointerClick,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    google: "1.394 (6.81%)",
    meta: "2.571 (0.50%)",
    trend: "-2.1%",
    trendUp: false,
  },
  {
    title: "Conversões",
    value: "412",
    icon: Target,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    google: "46 conv.",
    meta: "366 leads",
    trend: "+24.7%",
    trendUp: true,
  },
]

const chartData = [
  { day: "01/04", google: 95, meta: 78 },
  { day: "03/04", google: 110, meta: 92 },
  { day: "05/04", google: 88, meta: 105 },
  { day: "07/04", google: 125, meta: 98 },
  { day: "09/04", google: 102, meta: 85 },
  { day: "11/04", google: 95, meta: 110 },
  { day: "13/04", google: 118, meta: 95 },
  { day: "15/04", google: 105, meta: 88 },
  { day: "17/04", google: 92, meta: 102 },
  { day: "19/04", google: 108, meta: 95 },
  { day: "21/04", google: 85, meta: 78 },
  { day: "23/04", google: 97, meta: 87 },
  { day: "25/04", google: 145, meta: 92 },
  { day: "27/04", google: 165, meta: 88 },
  { day: "29/04", google: 155, meta: 95 },
]

function generateSmoothPath(data: typeof chartData, key: "google" | "meta", maxValue: number, width: number, height: number) {
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - (d[key] / maxValue) * height
  }))
  
  if (points.length < 2) return ""
  
  let path = `M ${points[0].x},${points[0].y}`
  
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] || p2
    
    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6
    
    path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`
  }
  
  return path
}

export function DashboardMockup() {
  const maxValue = 180
  const containerRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-5, 5]), { stiffness: 100, damping: 30 })
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }
  
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }
  
  const googlePath = generateSmoothPath(chartData, "google", maxValue, 400, 160)
  const metaPath = generateSmoothPath(chartData, "meta", maxValue, 400, 160)
  
  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-8 bg-gradient-to-r from-[#4F8EF7]/20 via-[#A259FF]/15 to-[#4F8EF7]/20 blur-3xl opacity-60 rounded-3xl" />
      
      {/* Dashboard container */}
      <div className="relative bg-[#0a0b0f] rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Browser chrome effect */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1015] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-white/5 text-[10px] text-muted-foreground">
              dashboard.factoria.dev.br
            </div>
          </div>
        </div>
        
        {/* Sidebar + Main content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden lg:flex w-[200px] flex-col border-r border-white/[0.06] bg-[#07080a]">
            {/* Logo */}
            <div className="flex items-center gap-2 px-4 py-4 border-b border-white/[0.06]">
              <div className="w-7 h-7 rounded-lg bg-[#4F8EF7] flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>F</span>
              </div>
              <span className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>Factoria.</span>
            </div>
            <div className="px-3 py-2">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider px-2">Menu Principal</span>
            </div>
            <div className="flex flex-col gap-1 px-3">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#4F8EF7]/10 text-[#4F8EF7]">
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-xs font-medium">Dashboard</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 transition-colors">
                <Megaphone className="w-4 h-4" />
                <span className="text-xs">Campanhas</span>
              </div>
            </div>
            {/* User */}
            <div className="mt-auto border-t border-white/[0.06] p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#A259FF] flex items-center justify-center text-white text-xs font-medium">
                  I
                </div>
                <div>
                  <p className="text-xs text-white font-medium">Imobfinder</p>
                  <p className="text-[10px] text-muted-foreground">Administrador</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <div>
                <h3 className="text-white font-semibold text-base" style={{ fontFamily: 'var(--font-display)' }}>Dashboard</h3>
                <p className="text-xs text-muted-foreground">Visão geral de mídia paga</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/[0.08] hover:bg-white/[0.07] transition-colors cursor-pointer">
                  <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-white">1 abr — 30 abr 2026</span>
                  <span className="text-[10px] text-muted-foreground bg-white/10 px-1.5 py-0.5 rounded">Últimos 30 dias</span>
                </div>
                <button className="p-2 rounded-lg bg-white/5 border border-white/[0.08] hover:bg-white/[0.07] transition-colors">
                  <RefreshCw className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-5">
              {kpiCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group bg-[#0f1015] rounded-xl p-4 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="text-[11px] text-muted-foreground mb-1.5 uppercase tracking-wide">{card.title}</p>
                      <p className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        {card.value}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded ${card.trendUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                      {card.trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      <span>{card.trend}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">vs período anterior</span>
                  </div>
                  
                  <div className="space-y-1.5 pt-3 border-t border-white/[0.04]">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#4F8EF7] ring-2 ring-[#4F8EF7]/20" />
                        <span className="text-muted-foreground">Google</span>
                      </div>
                      <span className="text-white font-medium">{card.google}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#A259FF] ring-2 ring-[#A259FF]/20" />
                        <span className="text-muted-foreground">Meta</span>
                      </div>
                      <span className="text-white font-medium">{card.meta}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart Section */}
            <div className="px-5 pb-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-[#0f1015] rounded-xl p-5 border border-white/[0.06]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>Gasto Diário</h4>
                    <p className="text-xs text-muted-foreground">Comparativo entre plataformas</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {/* Budget Cards */}
                    <div className="bg-[#07080a] rounded-xl p-3.5 border border-[#4F8EF7]/20 min-w-[160px]">
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#4F8EF7] ring-2 ring-[#4F8EF7]/20" />
                        <span className="text-xs font-semibold text-[#4F8EF7]">Google Ads</span>
                      </div>
                      <div className="flex items-center gap-5 text-xs mb-2.5">
                        <div>
                          <span className="text-muted-foreground text-[10px]">Budget diário</span>
                          <p className="text-white font-bold text-sm">R$ 105</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground text-[10px]">Custo médio/dia</span>
                          <p className="text-white font-bold text-sm">R$ 106</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium w-fit">
                        <Check className="w-3 h-3" />
                        <span>No budget</span>
                      </div>
                    </div>

                    <div className="bg-[#07080a] rounded-xl p-3.5 border border-[#A259FF]/20 min-w-[160px]">
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#A259FF] ring-2 ring-[#A259FF]/20" />
                        <span className="text-xs font-semibold text-[#A259FF]">Meta Ads</span>
                      </div>
                      <div className="flex items-center gap-5 text-xs mb-2.5">
                        <div>
                          <span className="text-muted-foreground text-[10px]">Budget diário</span>
                          <p className="text-white font-bold text-sm">R$ 50</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground text-[10px]">Custo médio/dia</span>
                          <p className="text-white font-bold text-sm">R$ 91</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-medium w-fit">
                        <AlertTriangle className="w-3 h-3" />
                        <span>81.5% acima do budget</span>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-col justify-center gap-2.5 ml-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-[#4F8EF7] rounded-full" />
                        <span className="text-xs text-muted-foreground">Google</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-[#A259FF] rounded-full" />
                        <span className="text-xs text-muted-foreground">Meta</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="relative h-52">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-6 w-14 flex flex-col justify-between text-[10px] text-muted-foreground pr-2 text-right">
                    <span>R$ 180</span>
                    <span>R$ 135</span>
                    <span>R$ 90</span>
                    <span>R$ 45</span>
                    <span>R$ 0</span>
                  </div>
                  
                  {/* Chart area */}
                  <div className="ml-16 h-full relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pb-6">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="border-t border-white/[0.04]" />
                      ))}
                    </div>

                    {/* SVG Chart */}
                    <svg className="w-full h-[calc(100%-24px)]" preserveAspectRatio="none" viewBox="0 0 400 160">
                      <defs>
                        <linearGradient id="googleGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4F8EF7" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#4F8EF7" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="metaGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#A259FF" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#A259FF" stopOpacity="0" />
                        </linearGradient>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Meta area */}
                      <path
                        d={`${metaPath} L400,160 L0,160 Z`}
                        fill="url(#metaGradient)"
                      />
                      
                      {/* Google area */}
                      <path
                        d={`${googlePath} L400,160 L0,160 Z`}
                        fill="url(#googleGradient)"
                      />
                      
                      {/* Meta line */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        d={metaPath}
                        fill="none"
                        stroke="#A259FF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        filter="url(#glow)"
                      />
                      
                      {/* Google line */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        d={googlePath}
                        fill="none"
                        stroke="#4F8EF7"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        filter="url(#glow)"
                      />
                      
                      {/* Data points for Google */}
                      {chartData.map((d, i) => (
                        <motion.circle
                          key={`google-${i}`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.5 + i * 0.03 }}
                          cx={(i / (chartData.length - 1)) * 400}
                          cy={160 - (d.google / maxValue) * 160}
                          r="3"
                          fill="#0f1015"
                          stroke="#4F8EF7"
                          strokeWidth="2"
                        />
                      ))}
                      
                      {/* Data points for Meta */}
                      {chartData.map((d, i) => (
                        <motion.circle
                          key={`meta-${i}`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.6 + i * 0.03 }}
                          cx={(i / (chartData.length - 1)) * 400}
                          cy={160 - (d.meta / maxValue) * 160}
                          r="3"
                          fill="#0f1015"
                          stroke="#A259FF"
                          strokeWidth="2"
                        />
                      ))}
                    </svg>

                    {/* X-axis labels */}
                    <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
                      <span>01/04</span>
                      <span>05/04</span>
                      <span>09/04</span>
                      <span>13/04</span>
                      <span>17/04</span>
                      <span>21/04</span>
                      <span>25/04</span>
                      <span>29/04</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
