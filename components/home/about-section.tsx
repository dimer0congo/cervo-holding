"use client"

import { Building2, Globe, Award } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-[#F7F9FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Added fade-in animation */}
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">À propos de nous</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B2C4D] leading-tight text-balance">
              CERVO HOLDING LTD, votre passerelle commerciale entre la RDC et la Zambie
            </h2>
            <p className="mt-6 text-[#64748B] leading-relaxed">
              Fondée en 2020, CERVO HOLDING LTD s'est imposée comme un acteur majeur de la facilitation du commerce
              transfrontalier sur le corridor stratégique RDC-Zambie. Notre expertise couvre l'ensemble des opérations
              d'import-export, du dédouanement à la logistique.
            </p>
            <p className="mt-4 text-[#64748B] leading-relaxed">
              Avec une présence établie à Lubumbashi (RDC) et Kitwe (Zambie), nous offrons un accompagnement de
              proximité et une connaissance approfondie des réglementations locales pour garantir des opérations fluides
              et conformes.
            </p>

            {/* Stats - Added staggered animation */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div
                className={`flex items-center gap-4 transition-all duration-500 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="w-14 h-14 bg-[#0B2C4D] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-[#C9A24D]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0B2C4D]">2</p>
                  <p className="text-[#64748B] text-sm">Pays d'opération</p>
                </div>
              </div>
              <div
                className={`flex items-center gap-4 transition-all duration-500 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="w-14 h-14 bg-[#0B2C4D] rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7 text-[#C9A24D]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0B2C4D]">6+</p>
                  <p className="text-[#64748B] text-sm">Points frontaliers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid - Added fade-in animation */}
          <div
            className={`relative transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#0B2C4D] rounded-2xl h-48 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/professional-business-meeting-corporate-office-afr.jpg"
                    alt="Réunion d'équipe CERVO HOLDING"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <div className="bg-[#1F4E79] rounded-2xl h-32 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/customs-documents-paperwork-international-trade.jpg"
                    alt="Documents douaniers"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#1F4E79] rounded-2xl h-32 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/cargo-container-shipping-logistics.jpg"
                    alt="Conteneurs cargo"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <div className="bg-[#0B2C4D] rounded-2xl h-48 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/border-crossing-trucks-africa-zambia.jpg"
                    alt="Passage frontalier"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge - Added pulse animation */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#C9A24D] text-[#0B2C4D] px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8" />
                <div>
                  <p className="font-bold text-xl">Depuis 2020</p>
                  <p className="text-sm opacity-80">Votre partenaire de confiance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
