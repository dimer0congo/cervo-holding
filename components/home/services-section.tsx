"use client"

import Link from "next/link"
import { ArrowRight, Ship, FileCheck, Truck, FileText, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Ship,
    title: "Facilitation Import-Export",
    description:
      "Accompagnement complet de vos opérations commerciales entre la RDC et la Zambie, de la négociation à la livraison.",
    href: "/services#import-export",
  },
  {
    icon: FileCheck,
    title: "Dédouanement",
    description:
      "Gestion intégrale des formalités douanières, déclarations et paiements des droits et taxes aux frontières.",
    href: "/services#dedouanement",
  },
  {
    icon: Truck,
    title: "Transit & Logistique",
    description: "Organisation et suivi du transport transfrontalier de vos marchandises en toute sécurité.",
    href: "/services#transit",
  },
  {
    icon: FileText,
    title: "Assistance Documentaire",
    description: "Préparation de tous vos documents commerciaux : factures, certificats, licences et autorisations.",
    href: "/services#documents",
  },
  {
    icon: Briefcase,
    title: "Conseil en Commerce",
    description:
      "Expertise stratégique sur les réglementations, opportunités et meilleures pratiques du commerce international.",
    href: "/services#conseil",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-[#F7F9FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Ce que nous offrons</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B2C4D]">Nos Services</h2>
            <p className="mt-4 text-[#64748B] max-w-2xl">
              Une gamme complète de services pour faciliter vos échanges commerciaux entre la République Démocratique du
              Congo et la Zambie.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-[#0B2C4D] text-[#0B2C4D] hover:bg-[#0B2C4D] hover:text-white w-fit bg-transparent hover:scale-105 transition-all"
          >
            <Link href="/services">
              Tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#C9A24D] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
            >
              <div className="w-14 h-14 bg-[#0B2C4D] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A24D] group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-[#C9A24D] group-hover:text-[#0B2C4D] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B2C4D] mb-3">{service.title}</h3>
              <p className="text-[#64748B] leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center text-[#C9A24D] font-medium text-sm group-hover:gap-2 transition-all">
                En savoir plus
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
