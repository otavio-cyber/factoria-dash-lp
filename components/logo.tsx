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
      {/* Main shape - stylized "F" or abstract design */}
      <defs>
        <linearGradient id="factoriaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F8EF7" />
          <stop offset="100%" stopColor="#A259FF" />
        </linearGradient>
        <linearGradient id="factoriaAccent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A259FF" />
          <stop offset="100%" stopColor="#4F8EF7" />
        </linearGradient>
      </defs>

      {/* Top left square */}
      <rect x="4" y="6" width="12" height="12" rx="2" fill="url(#factoriaGradient)" />

      {/* Top right square */}
      <rect x="20" y="6" width="12" height="12" rx="2" fill="url(#factoriaAccent)" />

      {/* Bottom left section */}
      <path
        d="M 4 22 L 16 22 L 16 34 Q 16 38 12 38 Q 8 38 8 34 L 8 28 L 4 28 Z"
        fill="url(#factoriaGradient)"
      />

      {/* Bottom right section */}
      <path
        d="M 20 22 L 42 22 L 42 34 Q 42 38 38 38 L 20 38 Z"
        fill="url(#factoriaAccent)"
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
          Factoria
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
