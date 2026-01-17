import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
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
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0B2C4D] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Nos services</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
                Une gamme complète de services pour votre commerce transfrontalier
              </h1>
              <p className="mt-6 text-xl text-white/80 leading-relaxed">
                De la facilitation des opérations au conseil stratégique, nous offrons tout ce dont vous avez besoin
                pour réussir vos échanges commerciaux entre la RDC et la Zambie.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-[#F7F9FC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={`#${service.id}`}
                  className="bg-white rounded-xl p-5 border border-[#E2E8F0] hover:border-[#C9A24D] hover:shadow-md transition-all text-center group"
                >
                  <div className="w-12 h-12 bg-[#0B2C4D] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C9A24D] transition-colors">
                    <service.icon className="w-6 h-6 text-[#C9A24D] group-hover:text-[#0B2C4D] transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#0B2C4D]">
                    {service.title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        {services.map((service, index) => (
          <section
            key={index}
            id={service.id}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]"} scroll-mt-24`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="w-16 h-16 bg-[#0B2C4D] rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#C9A24D]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0B2C4D] mb-4">{service.title}</h2>
                  <p className="text-lg text-[#64748B] mb-6">{service.fullDescription}</p>

                  {/* Benefits */}
                  <div className="bg-[#0B2C4D] rounded-xl p-6 mt-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingDown className="w-5 h-5 text-[#C9A24D]" />
                      Bénéfices clients
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C9A24D] flex-shrink-0 mt-0.5" />
                          <span className="text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Process */}
                  <div className="bg-[#F7F9FC] rounded-xl p-6 border border-[#E2E8F0]">
                    <h3 className="text-lg font-semibold text-[#0B2C4D] mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#C9A24D]" />
                      Processus simplifié
                    </h3>
                    <div className="space-y-4">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-[#0B2C4D] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-[#C9A24D] font-semibold text-sm">{idx + 1}</span>
                          </div>
                          <p className="text-[#64748B]">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-[#C9A24D] rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-[#0B2C4D] mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Résultat attendu
                    </h3>
                    <p className="text-[#0B2C4D]/80">{service.result}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <Button asChild className="flex-1 bg-[#0B2C4D] hover:bg-[#1F4E79] text-white">
                      <Link href="/contact">
                        Demander ce service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
