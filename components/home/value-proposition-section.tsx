"use client"

import { TrendingDown, Users, Clock, FileCheck, Network } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const advantages = [
  {
    icon: FileCheck,
    title: "Maîtrise réglementaire",
    description: "Connaissance approfondie des législations douanières et commerciales RDC-Zambie",
  },
  {
    icon: Network,
    title: "Réseau aux frontières",
    description: "Relations établies avec les autorités et opérateurs des postes frontaliers",
  },
  {
    icon: TrendingDown,
    title: "Réduction des coûts",
    description: "Optimisation des procédures pour minimiser vos frais logistiques et douaniers",
  },
  {
    icon: Clock,
    title: "Rapidité d'exécution",
    description: "Délais optimisés grâce à notre expertise et nos processus éprouvés",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Un interlocuteur dédié pour suivre vos opérations de bout en bout",
  },
]

export function ValuePropositionSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-[#0B2C4D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Added slide-in animation */}
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Notre différence</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight">
              Pourquoi choisir CERVO HOLDING LTD ?
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              Notre valeur ajoutée réside dans notre expertise du terrain, notre réseau établi et notre engagement à
              simplifier vos opérations commerciales transfrontalières tout en garantissant leur conformité.
            </p>

            <ul className="mt-8 space-y-4">
              {advantages.slice(0, 3).map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-4 group transition-all duration-500 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: isInView ? `${(index + 1) * 150}ms` : "0ms" }}
                >
                  <div className="w-10 h-10 bg-[#C9A24D]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A24D]/30 group-hover:scale-110 transition-all">
                    <item.icon className="w-5 h-5 text-[#C9A24D]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-[#C9A24D] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-sm mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Cards - Added staggered animation */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {advantages.slice(3).map((item, index) => (
              <div
                key={index}
                className="bg-[#1F4E79] rounded-xl p-6 flex items-start gap-4 hover:bg-[#1F4E79]/80 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
              >
                <div className="w-12 h-12 bg-[#C9A24D]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#C9A24D]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Stats Card - Added hover animation */}
            <div className="bg-[#C9A24D] rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#0B2C4D]">500+</p>
                  <p className="text-[#0B2C4D]/70 text-sm">Opérations</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0B2C4D]">98%</p>
                  <p className="text-[#0B2C4D]/70 text-sm">Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0B2C4D]">24h</p>
                  <p className="text-[#0B2C4D]/70 text-sm">Réponse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
