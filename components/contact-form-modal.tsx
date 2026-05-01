'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormStep = 'form' | 'success'

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [step, setStep] = useState<FormStep>('form')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    agencia: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/mdkwjovd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStep('success')
        setFormData({ nome: '', email: '', telefone: '', cidade: '', agencia: '' })
      } else {
        alert('Erro ao enviar formulário. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setStep('form')
    setFormData({ nome: '', email: '', telefone: '', cidade: '', agencia: '' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 15 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-auto z-50"
          >
            <div className="bg-[#0f1117] border border-white/10 rounded-2xl p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {step === 'form' ? (
                <>
                  {/* Form Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Vamos conversar?
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Preencha seus dados e faremos contato em breve
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nome */}
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-white">
                        Nome <span className="text-[#4F8EF7]">*</span>
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-[#4F8EF7] focus:ring-[#4F8EF7]"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email <span className="text-[#4F8EF7]">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-[#4F8EF7] focus:ring-[#4F8EF7]"
                      />
                    </div>

                    {/* Telefone */}
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-white">
                        Telefone <span className="text-[#4F8EF7]">*</span>
                      </Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(35) 99999-9999"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-[#4F8EF7] focus:ring-[#4F8EF7]"
                      />
                    </div>

                    {/* Cidade */}
                    <div className="space-y-2">
                      <Label htmlFor="cidade" className="text-white">
                        Cidade <span className="text-[#4F8EF7]">*</span>
                      </Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        type="text"
                        placeholder="Sua cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-[#4F8EF7] focus:ring-[#4F8EF7]"
                      />
                    </div>

                    {/* Agência */}
                    <div className="space-y-2">
                      <Label htmlFor="agencia" className="text-white">
                        Agência
                      </Label>
                      <Input
                        id="agencia"
                        name="agencia"
                        type="text"
                        placeholder="Nome da sua agência (opcional)"
                        value={formData.agencia}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-[#4F8EF7] focus:ring-[#4F8EF7]"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#4F8EF7] to-[#A259FF] hover:opacity-90 text-white font-semibold mt-6"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar'
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  {/* Success State */}
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="mb-4 flex justify-center"
                    >
                      <CheckCircle className="w-16 h-16 text-[#22c55e]" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Obrigado!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Recebemos sua mensagem e entraremos em contato em breve.
                      Prepare-se para turbinar suas campanhas com Factoria! 🚀
                    </p>

                    <Button
                      onClick={handleClose}
                      className="w-full bg-[#4F8EF7] hover:bg-[#3d7ce5] text-white font-semibold"
                    >
                      Voltar ao site
                    </Button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
