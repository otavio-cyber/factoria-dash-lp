"use client"

import { FactoriaLogo } from "@/components/logo"

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
            <a href="#" className="hover:opacity-80 transition-opacity">
              <FactoriaLogo variant="full" />
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
