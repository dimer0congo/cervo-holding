import { Metadata } from "next"
import { CTASection } from "@/components/home/cta-section"
import {
  Ship,
  FileCheck,
  Truck,
  FileText,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingDown,
  Shield,
  LayoutGrid,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nos Services | CERVO HOLDING LTD",
  description:
    "Découvrez nos services complets de facilitation d'import-export entre la RDC et la Zambie : dédouanement, transit, logistique et conseil.",
}

const services = [
  {
    id: "import-export",
    icon: Ship,
    title: "Facilitation des opérations d'import-export RDC–Zambie",
    description:
      "Nous accompagnons vos opérations commerciales de bout en bout, depuis la négociation jusqu'à la livraison finale de vos marchandises.",
    fullDescription:
      "Notre service de facilitation couvre l'ensemble du processus d'import-export entre la République Démocratique du Congo et la Zambie. Nous prenons en charge la coordination de toutes les parties prenantes, la gestion des délais et le suivi en temps réel de vos opérations.",
    benefits: [
      "Coordination complète de vos opérations",
      "Interlocuteur unique pour simplifier vos démarches",
      "Suivi en temps réel de vos marchandises",
      "Optimisation des coûts de transport",
    ],
    process: ["Analyse de vos besoins", "Planification logistique", "Exécution et suivi", "Livraison et reporting"],
    result: "Des opérations fluides, sans interruption et dans les délais convenus",
  },
  {
    id: "dedouanement",
    icon: FileCheck,
    title: "Dédouanement et formalités douanières",
    description:
      "Gestion intégrale de vos procédures douanières aux frontières RDC-Zambie, avec garantie de conformité totale.",
    fullDescription:
      "Notre équipe d'experts prend en charge l'ensemble des formalités douanières : déclarations, calcul et paiement des droits et taxes, obtention des autorisations nécessaires. Nous assurons la conformité de vos opérations avec les réglementations des deux pays.",
    benefits: [
      "Déclarations douanières précises et conformes",
      "Calcul optimisé des droits et taxes",
      "Traitement accéléré aux postes frontaliers",
      "Évitement des pénalités et retards",
    ],
    process: ["Préparation des documents", "Dépôt des déclarations", "Paiement des droits", "Obtention des mainlevées"],
    result: "Un dédouanement rapide et sans complications pour vos marchandises",
  },
  {
    id: "transit",
    icon: Truck,
    title: "Transit et logistique transfrontalière",
    description:
      "Organisation et supervision du transport de vos marchandises à travers les frontières en toute sécurité.",
    fullDescription:
      "Nous gérons la logistique de bout en bout : sélection des transporteurs, planification des itinéraires, coordination aux postes frontaliers et suivi du transit. Notre réseau de partenaires fiables garantit la sécurité de vos marchandises.",
    benefits: [
      "Réseau de transporteurs certifiés",
      "Couverture de tous les postes frontaliers",
      "Tracking en temps réel",
      "Assurance des marchandises",
    ],
    process: ["Sélection du transporteur", "Chargement et départ", "Transit frontalier", "Livraison au destinataire"],
    result: "Vos marchandises arrivent à destination en toute sécurité et dans les temps",
  },
  {
    id: "documents",
    icon: FileText,
    title: "Assistance documentaire",
    description:
      "Préparation et vérification de tous les documents commerciaux nécessaires à vos opérations internationales.",
    fullDescription:
      "Notre service documentaire couvre la préparation de tous les documents requis pour vos transactions : factures commerciales, certificats d'origine, licences d'import/export, autorisations spéciales, et tout autre document exigé par les autorités.",
    benefits: [
      "Documents conformes aux standards internationaux",
      "Vérification et validation avant soumission",
      "Archivage sécurisé de vos dossiers",
      "Mise à jour selon les évolutions réglementaires",
    ],
    process: [
      "Identification des documents requis",
      "Collecte des informations",
      "Rédaction et vérification",
      "Légalisation si nécessaire",
    ],
    result: "Une documentation complète, conforme et prête pour vos opérations",
  },
  {
    id: "conseil",
    icon: Briefcase,
    title: "Conseil en commerce international",
    description: "Expertise stratégique pour optimiser vos opérations et saisir les opportunités du marché RDC-Zambie.",
    fullDescription:
      "Nos consultants vous accompagnent avec des conseils personnalisés : analyse réglementaire, optimisation fiscale, identification d'opportunités commerciales, et stratégies d'entrée sur le marché. Bénéficiez de notre connaissance approfondie du corridor RDC-Zambie.",
    benefits: [
      "Analyse approfondie des réglementations",
      "Optimisation de vos flux commerciaux",
      "Veille sur les opportunités de marché",
      "Conseils fiscaux et douaniers",
    ],
    process: [
      "Audit de votre situation",
      "Analyse et recommandations",
      "Plan d'action",
      "Accompagnement à la mise en œuvre",
    ],
    result: "Une stratégie commerciale optimisée pour maximiser vos résultats",
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#0B2C4D]">
      {/* Hero Section - Spotlight & Taller */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#0B2C4D]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A24D]/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in zoom-in-95 duration-1000">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#C9A24D] text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
            Solutions Globales
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-serif mb-8">
            L'excellence à chaque <span className="text-[#C9A24D] italic">étape</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
            De la facilitation des opérations au conseil stratégique, nous offrons tout ce dont vous avez besoin
            pour réussir vos échanges commerciaux entre la RDC et la Zambie.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B2C4D] to-transparent" />
      </section>

      {/* Sticky Service Navigation */}
      <div className="sticky top-[60px] z-40 bg-[#0B2C4D]/80 backdrop-blur-xl border-y border-white/5 overflow-x-auto no-scrollbar">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-2 md:justify-center py-2 min-w-max">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
              >
                {service.title.split(" ")[0]} {service.title.split(" ")[1]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services - Sticky Scroll Narrative */}
      <div className="relative z-0">
        {services.map((service, index) => (
          <section
            key={index}
            id={service.id}
            className="relative min-h-[90vh] flex items-center py-20 scroll-mt-32 border-b border-white/5 last:border-0 odd:bg-white/5 even:bg-transparent"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Left Column: Sticky Summary */}
                <div className="lg:sticky lg:top-48 self-start">
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#C9A24D]/20 rounded-full blur-2xl" />
                    <div className="w-20 h-20 bg-gradient-to-br from-[#C9A24D] to-[#8C6D2F] rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-black/20 relative z-10">
                      <service.icon className="w-10 h-10 text-[#0B2C4D]" />
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed font-light mb-8">
                    {service.fullDescription}
                  </p>

                  {/* Result Card */}
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-[#C9A24D]" />
                      <span className="text-white font-bold uppercase tracking-wider text-sm">Résultat attendu</span>
                    </div>
                    <p className="text-[#C9A24D] font-medium">{service.result}</p>
                  </div>
                </div>

                {/* Right Column: Scrollable Details */}
                <div className="space-y-12 pt-8 lg:pt-0">

                  {/* Benefits Card */}
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C9A24D] to-[#0B2C4D] rounded-2xl opacity-20 blur group-hover:opacity-40 transition duration-500" />
                    <div className="relative bg-[#0F375E] rounded-2xl p-8 border border-white/5">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <TrendingDown className="w-6 h-6 text-[#C9A24D]" />
                        Bénéfices clés
                      </h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-[#C9A24D]" />
                            </div>
                            <span className="text-white/80 leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 px-2">
                      <Clock className="w-6 h-6 text-[#C9A24D]" />
                      Notre démarche
                    </h3>
                    <div className="space-y-6 relative ml-4">
                      {/* Line */}
                      <div className="absolute left-0 top-4 bottom-4 w-px bg-white/10" />

                      {service.process.map((step, idx) => (
                        <div key={idx} className="relative pl-10 group">
                          <div className="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-[#0B2C4D] border-2 border-[#C9A24D] group-hover:scale-125 transition-transform duration-300" />
                          <h4 className="text-[#C9A24D] font-bold text-sm uppercase tracking-wide mb-1">Étape {idx + 1}</h4>
                          <p className="text-white text-lg font-medium">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button asChild className="w-full bg-[#C9A24D] hover:bg-[#D4B05C] text-[#0B2C4D] font-bold py-6 text-lg rounded-xl shadow-lg shadow-[#000]/20 hover:shadow-xl hover:translate-y-[-2px] transition-all">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Demander ce service <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>

                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="bg-white">
        <CTASection />
      </div>
    </main>
  )
}
