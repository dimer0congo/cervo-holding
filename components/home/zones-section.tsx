"use client"

import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const zones = {
  rdc: [
    { name: "Kasumbalesa", description: "Principal poste frontalier RDC-Zambie" },
    { name: "Sakanya", description: "Point de passage stratégique" },
    { name: "Kipushi", description: "Frontière historique" },
    { name: "Lubumbashi", description: "Centre économique du Haut-Katanga" },
    { name: "Kolwezi", description: "Cœur minier du pays" },
  ],
  zambie: [{ name: "Kitwe", description: "Hub logistique de la Copperbelt" }],
}

export function ZonesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Notre couverture</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B2C4D]">Zones d'intervention</h2>
          <p className="mt-4 text-[#64748B]">
            Présents aux points stratégiques du corridor RDC-Zambie pour un accompagnement de proximité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Visual - Added slide-in animation */}
          <div
            className={`relative bg-[#0B2C4D] rounded-2xl p-8 min-h-[400px] overflow-hidden hover:scale-[1.01] transition-all duration-500 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="absolute inset-0 opacity-30">
              <img
                src="/stylized-map-of-drc-congo-zambia-border-region-wit.jpg"
                alt="Carte du corridor RDC-Zambie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Corridor RDC – Zambie</h3>
              <p className="text-white/70 mb-8">
                Notre réseau couvre les principaux points de passage et centres économiques du corridor transfrontalier
                le plus actif de la région.
              </p>
              <Button
                asChild
                className="bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D] hover:scale-105 transition-transform"
              >
                <Link href="/zones">
                  Découvrir nos zones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Zones List - Added staggered animation */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* RDC */}
            <div className="bg-[#F7F9FC] rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0B2C4D] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RDC</span>
                </div>
                <h4 className="font-semibold text-[#0B2C4D]">République Démocratique du Congo</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {zones.rdc.map((zone, index) => (
                  <div key={index} className="flex items-start gap-2 group cursor-pointer">
                    <MapPin className="w-4 h-4 text-[#C9A24D] mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="font-medium text-[#0B2C4D] text-sm group-hover:text-[#C9A24D] transition-colors">
                        {zone.name}
                      </p>
                      <p className="text-[#64748B] text-xs">{zone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zambie */}
            <div className="bg-[#F7F9FC] rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1F4E79] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ZM</span>
                </div>
                <h4 className="font-semibold text-[#0B2C4D]">Zambie</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {zones.zambie.map((zone, index) => (
                  <div key={index} className="flex items-start gap-2 group cursor-pointer">
                    <MapPin className="w-4 h-4 text-[#C9A24D] mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="font-medium text-[#0B2C4D] text-sm group-hover:text-[#C9A24D] transition-colors">
                        {zone.name}
                      </p>
                      <p className="text-[#64748B] text-xs">{zone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
