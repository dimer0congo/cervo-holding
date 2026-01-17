"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, FileCheck } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B2C4D] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-[#C9A24D] rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-[#C9A24D] rounded-full animate-[pulse_5s_ease-in-out_infinite_0.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#1F4E79] rounded-full animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content - Added staggered fade-in animations */}
          <div className="text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-[#1F4E79]/50 rounded-full mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-2 h-2 bg-[#C9A24D] rounded-full animate-pulse" />
              <span className="text-[#C9A24D] text-sm font-medium">Partenaire de confiance depuis 2020</span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Facilitation d'import-export <span className="text-[#C9A24D]">RDC – Zambie</span>, rapide, fiable et
              conforme
            </h1>

            <p
              className={`mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              CERVO HOLDING LTD simplifie vos opérations commerciales transfrontalières. Bénéficiez de notre expertise
              en dédouanement, transit et logistique pour un commerce fluide entre la République Démocratique du Congo
              et la Zambie.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D] font-semibold px-8 hover:scale-105 transition-transform"
              >
                <Link href="/services">
                  Nos services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent hover:scale-105 transition-transform"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>

            {/* Trust Indicators - Added counter animation */}
            <div
              className={`mt-12 grid grid-cols-3 gap-6 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C9A24D] mb-2">
                  <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-2xl text-white">100%</span>
                </div>
                <p className="text-white/60 text-sm">Conformité</p>
              </div>
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C9A24D] mb-2">
                  <Clock className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-2xl text-white">24-48h</span>
                </div>
                <p className="text-white/60 text-sm">Délai moyen</p>
              </div>
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C9A24D] mb-2">
                  <FileCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-2xl text-white">5+</span>
                </div>
                <p className="text-white/60 text-sm">Années d'expérience</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual - Added entrance animation */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4E79] to-[#0B2C4D] rounded-3xl transform rotate-6 animate-[pulse_6s_ease-in-out_infinite]" />
              <div className="absolute inset-0 bg-[#1F4E79] rounded-3xl overflow-hidden">
                <img
                  src="/aerial-view-of-cargo-trucks-crossing-border-checkp.jpg"
                  alt="Opérations logistiques transfrontalières RDC-Zambie"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C4D] via-transparent to-transparent" />
              </div>

              {/* Floating Card - Added float animation */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl animate-[bounce_3s_ease-in-out_infinite]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#C9A24D]" />
                  </div>
                  <div>
                    <p className="text-[#0B2C4D] font-semibold">Corridor sécurisé</p>
                    <p className="text-[#64748B] text-sm">RDC – Zambie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#C9A24D] rounded-full animate-[bounce_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
