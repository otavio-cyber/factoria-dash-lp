'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  animated?: boolean
  variant?: 'full' | 'icon'
}

export function FactoriaLogo({ className = '', animated = false, variant = 'full' }: LogoProps) {
  const iconContent = (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 ${className}`}
    >
      {/* Atom/Connectivity Logo */}
      <defs>
        <linearGradient id="factoriaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F8EF7" />
          <stop offset="100%" stopColor="#A259FF" />
        </linearGradient>
        <linearGradient id="factoriaAccent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A259FF" />
          <stop offset="100%" stopColor="#4F8EF7" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Orbital rings */}
      {/* Outer ring - tilted */}
      <ellipse
        cx="24"
        cy="24"
        rx="16"
        ry="8"
        fill="none"
        stroke="url(#factoriaGradient)"
        strokeWidth="1.5"
        opacity="0.6"
        transform="rotate(-25 24 24)"
      />

      {/* Middle ring - tilted other direction */}
      <ellipse
        cx="24"
        cy="24"
        rx="12"
        ry="10"
        fill="none"
        stroke="url(#factoriaAccent)"
        strokeWidth="1.5"
        opacity="0.5"
        transform="rotate(35 24 24)"
      />

      {/* Inner ring - vertical */}
      <circle
        cx="24"
        cy="24"
        r="7"
        fill="none"
        stroke="url(#factoriaGradient)"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Nucleus - core */}
      <circle
        cx="24"
        cy="24"
        r="3.5"
        fill="url(#factoriaGradient)"
        filter="url(#glow)"
      />

      {/* Electrons on outer orbit - 3 positions */}
      {/* Top electron */}
      <circle
        cx="24"
        cy="8"
        r="2"
        fill="url(#factoriaAccent)"
        filter="url(#glow)"
      />

      {/* Bottom-left electron */}
      <circle
        cx="10"
        cy="34"
        r="2"
        fill="url(#factoriaGradient)"
        filter="url(#glow)"
      />

      {/* Bottom-right electron */}
      <circle
        cx="38"
        cy="34"
        r="2"
        fill="url(#factoriaAccent)"
        filter="url(#glow)"
      />

      {/* Connection lines from electrons to nucleus */}
      <line
        x1="24"
        y1="10"
        x2="24"
        y2="20"
        stroke="url(#factoriaGradient)"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <line
        x1="12"
        y1="32"
        x2="20"
        y2="26"
        stroke="url(#factoriaAccent)"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <line
        x1="36"
        y1="32"
        x2="28"
        y2="26"
        stroke="url(#factoriaGradient)"
        strokeWidth="0.8"
        opacity="0.3"
      />
    </svg>
  )

  const logoContent = (
    <div className="flex items-center gap-2">
      {animated ? (
        <motion.div
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {iconContent}
        </motion.div>
      ) : (
        iconContent
      )}
      {variant === 'full' && (
        <span className="text-xl font-bold text-white tracking-tight hidden sm:inline" style={{ fontFamily: 'var(--font-display)' }}>
          FactoriA.
        </span>
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {logoContent}
      </motion.div>
    )
  }

  return logoContent
}
