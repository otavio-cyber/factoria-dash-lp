"use client"

import { TrendingUp } from "lucide-react"

const footerLinks = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#planos", label: "Planos" },
  { href: "#", label: "Contato" },
  { href: "#", label: "Termos" },
  { href: "#", label: "Privacidade" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F8EF7] to-[#A259FF] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Factoria.
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              O dashboard de mídia paga para quem leva performance a sério.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Factoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
