import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { PainPoints } from "@/components/landing/pain-points"
import { Features } from "@/components/landing/features"
import { ForWho } from "@/components/landing/for-who"
import { SocialProof } from "@/components/landing/social-proof"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#07080a] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <ForWho />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
