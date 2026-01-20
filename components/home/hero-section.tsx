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
    <section className="relative min-h-[90vh] flex items-center bg-[#0B2C4D] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Abstract Gradient Blurs */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#1F4E79]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#C9A24D]/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />

        {/* Animated Rings */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-[#C9A24D]/20 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-[#C9A24D]/20 rounded-full animate-[pulse_5s_ease-in-out_infinite_0.5s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left z-10">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <span className="w-2 h-2 bg-[#C9A24D] rounded-full animate-pulse" />
              <span className="text-[#C9A24D] text-sm font-medium tracking-wide uppercase">Partenaire de confiance depuis 2020</span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight text-balance transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              Facilitation d'import-export <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24D] to-[#e6c97a]">RDC – Zambie</span>, rapide et sécurisé.
            </h1>

            <p
              className={`mt-6 text-lg text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              CERVO HOLDING LTD simplifie vos opérations commerciales transfrontalières. Expertise en dédouanement, transit et logistique pour un commerce fluide.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D] font-bold px-8 py-6 text-base shadow-lg shadow-[#C9A24D]/20 hover:shadow-[#C9A24D]/40 hover:-translate-y-1 transition-all duration-300 rounded-xl"
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
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white hover:border-white/40 px-8 py-6 text-base hover:-translate-y-1 transition-all duration-300 rounded-xl"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`mt-16 grid grid-cols-3 gap-8 py-8 border-t border-white/10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              {[
                { icon: Shield, stat: "100%", label: "Conformité" },
                { icon: Clock, stat: "24-48h", label: "Délai moyen" },
                { icon: FileCheck, stat: "5+", label: "Années d'expérience" },
              ].map((item, idx) => (
                <div key={idx} className="text-center lg:text-left group relative">
                  <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C9A24D] mb-1">
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-bold text-2xl text-white tracking-tight">{item.stat}</span>
                  </div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
          >
            {/* Main Visual Container */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">

              {/* Back Glow */}
              <div className="absolute inset-0 bg-[#C9A24D] rounded-[2rem] blur-2xl opacity-20 transform rotate-6 scale-95" />

              {/* Main Image Mask */}
              <div className="relative h-full w-full bg-[#1F4E79] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2C4D]/80 to-transparent z-10" />
                <img
                  src="/aerial-view-of-cargo-trucks-crossing-border-checkp.jpg"
                  alt="Opérations logistiques transfrontalières RDC-Zambie"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2s]"
                />
              </div>

              {/* Floating Glass Element - Top Right */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 animate-float-slow z-20 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white">24/7</span>
                  <span className="text-[10px] text-white/70 uppercase tracking-widest">Support</span>
                </div>
              </div>

              {/* Floating Glass Element - Bottom Left */}
              <div className="absolute -bottom-8 -left-8 bg-[#0B2C4D]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl animate-float z-20 max-w-[260px]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C9A24D] rounded-xl text-[#0B2C4D] shadow-lg shadow-[#C9A24D]/20">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none mb-1">Corridor Sécurisé</p>
                    <p className="text-white/50 text-sm">Passage frontière optimisé RDC – Zambie</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Decorator Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/30 to-transparent" />
    </section>
  )
}
