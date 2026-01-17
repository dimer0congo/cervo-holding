"use client"

import { Target, Eye, Heart, Shield, Zap, Scale } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const values = [
  {
    icon: Shield,
    title: "Transparence",
    description: "Communication claire et honnête à chaque étape de vos opérations",
  },
  {
    icon: Scale,
    title: "Fiabilité",
    description: "Engagements tenus et résultats garantis pour votre tranquillité",
  },
  {
    icon: Zap,
    title: "Rapidité",
    description: "Procédures optimisées pour réduire vos délais au minimum",
  },
  {
    icon: Heart,
    title: "Conformité",
    description: "Respect strict des réglementations douanières et commerciales",
  },
]

export function MissionVisionSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Notre engagement</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B2C4D]">Mission, Vision & Valeurs</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div
            className={`bg-[#0B2C4D] rounded-2xl p-8 lg:p-10 hover:scale-[1.02] transition-all duration-500 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="w-16 h-16 bg-[#C9A24D]/20 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#C9A24D]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Notre Mission</h3>
            <p className="text-white/80 leading-relaxed">
              Simplifier les procédures d'import-export entre la RDC et la Zambie en offrant des services de
              facilitation complets, réduisant les coûts et délais tout en garantissant une conformité réglementaire
              totale pour nos clients.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`bg-[#1F4E79] rounded-2xl p-8 lg:p-10 hover:scale-[1.02] transition-all duration-500 delay-100 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="w-16 h-16 bg-[#C9A24D]/20 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-[#C9A24D]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Notre Vision</h3>
            <p className="text-white/80 leading-relaxed">
              Devenir le partenaire de référence du commerce transfrontalier sur le corridor RDC-Zambie, reconnu pour
              notre excellence opérationnelle, notre intégrité et notre contribution au développement économique de la
              région.
            </p>
          </div>
        </div>

        {/* Values - Added staggered animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-[#F7F9FC] rounded-xl p-6 text-center group hover:bg-[#0B2C4D] hover:-translate-y-1 transition-all duration-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? `${(index + 2) * 100}ms` : "0ms" }}
            >
              <div className="w-14 h-14 bg-[#C9A24D]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A24D]/20 group-hover:scale-110 transition-all">
                <value.icon className="w-7 h-7 text-[#C9A24D]" />
              </div>
              <h4 className="font-semibold text-[#0B2C4D] group-hover:text-white transition-colors mb-2">
                {value.title}
              </h4>
              <p className="text-[#64748B] text-sm group-hover:text-white/70 transition-colors">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
