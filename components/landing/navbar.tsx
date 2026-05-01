"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#planos", label: "Planos" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080a]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F8EF7] to-[#A259FF] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Factoria.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Entrar
            </a>
            <Button className="bg-[#4F8EF7] hover:bg-[#3d7ce5] text-white font-medium px-5">
              Começar grátis →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0f1117] border-t border-white/5"
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="text-muted-foreground hover:text-white transition-colors py-2"
            >
              Entrar
            </a>
            <Button className="bg-[#4F8EF7] hover:bg-[#3d7ce5] text-white font-medium w-full mt-2">
              Começar grátis →
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
