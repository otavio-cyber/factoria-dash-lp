"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Funciona com qualquer conta Google Ads e Meta?",
    answer: "Sim! O Factoria se conecta a qualquer conta Google Ads ou Meta Ads através de OAuth seguro. Basta autorizar o acesso e suas métricas aparecem em minutos.",
  },
  {
    question: "Preciso dar acesso às minhas contas de cliente?",
    answer: "Você concede acesso somente de leitura. O Factoria nunca faz alterações nas suas campanhas — apenas lê os dados para exibir no dashboard.",
  },
  {
    question: "Os dados são atualizados em tempo real?",
    answer: "Os dados são sincronizados a cada 15 minutos automaticamente. Você também pode forçar uma atualização manual a qualquer momento.",
  },
  {
    question: "Posso testar antes de pagar?",
    answer: "Claro! Oferecemos 14 dias de teste grátis em todos os planos, sem precisar cadastrar cartão de crédito. Cancele quando quiser.",
  },
  {
    question: "E se eu tiver mais dúvidas?",
    answer: "Nosso time está disponível pelo chat dentro da plataforma ou pelo email suporte@factoria.dev.br. Respondemos em até 24 horas úteis.",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#0f1117] rounded-xl border border-white/[0.06] px-6 data-[state=open]:border-[#4F8EF7]/30"
              >
                <AccordionTrigger className="text-left text-white hover:text-white hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
