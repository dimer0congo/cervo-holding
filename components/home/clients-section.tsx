"use client"

import { Factory, Pickaxe, Wheat, ShoppingBag, Package, Building } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const clientTypes = [
  {
    icon: Package,
    title: "Importateurs",
    description: "Entreprises important des produits en RDC ou en Zambie",
  },
  {
    icon: ShoppingBag,
    title: "Exportateurs",
    description: "Sociétés exportant leurs produits vers les marchés voisins",
  },
  {
    icon: Building,
    title: "Commerçants transfrontaliers",
    description: "Opérateurs du commerce régional quotidien",
  },
  {
    icon: Pickaxe,
    title: "Entreprises minières",
    description: "Acteurs du secteur minier de la Copperbelt",
  },
  {
    icon: Wheat,
    title: "Agro-alimentaire",
    description: "Industries de transformation et négoce agricole",
  },
  {
    icon: Factory,
    title: "Industries",
    description: "Secteur manufacturier et industriel",
  },
]

export function ClientsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-[#F7F9FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Qui nous servons</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B2C4D]">Nos Clients Cibles</h2>
          <p className="mt-4 text-[#64748B]">
            CERVO HOLDING LTD comprend les réalités terrain de chaque secteur et adapte ses services aux besoins
            spécifiques de ses clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#C9A24D] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
            >
              <div className="w-14 h-14 bg-[#0B2C4D] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <client.icon className="w-7 h-7 text-[#C9A24D]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B2C4D] mb-2">{client.title}</h3>
              <p className="text-[#64748B] text-sm">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
