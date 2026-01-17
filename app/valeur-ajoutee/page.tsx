import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { FileCheck, Network, TrendingDown, Users, ArrowRight, CheckCircle, Star, Zap, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Valeur Ajoutée | CERVO HOLDING LTD",
  description:
    "Découvrez la valeur ajoutée de CERVO HOLDING LTD : expertise réglementaire, réseau aux frontières, réduction des coûts et accompagnement personnalisé.",
}

const valueProps = [
  {
    icon: FileCheck,
    title: "Maîtrise de la réglementation RDC–Zambie",
    description:
      "Notre expertise approfondie des législations douanières et commerciales des deux pays vous garantit une conformité totale de vos opérations.",
    details: [
      "Connaissance des procédures douanières RDC et Zambie",
      "Veille réglementaire permanente",
      "Anticipation des changements législatifs",
      "Conseil sur les régimes douaniers optimaux",
    ],
    stat: "100%",
    statLabel: "Conformité garantie",
  },
  {
    icon: Network,
    title: "Réseau établi aux frontières",
    description:
      "Nos relations de longue date avec les autorités et opérateurs frontaliers facilitent le passage de vos marchandises.",
    details: [
      "Relations avec les services douaniers",
      "Partenariats avec les transporteurs locaux",
      "Contacts avec les autorités sanitaires",
      "Réseau de transitaires de confiance",
    ],
    stat: "6+",
    statLabel: "Années de présence",
  },
  {
    icon: TrendingDown,
    title: "Réduction des coûts et délais",
    description:
      "Notre expertise et notre réseau nous permettent d'optimiser vos opérations pour réduire significativement vos coûts et délais.",
    details: [
      "Optimisation des itinéraires logistiques",
      "Négociation des tarifs de transport",
      "Réduction des temps d'immobilisation",
      "Évitement des pénalités et amendes",
    ],
    stat: "30%",
    statLabel: "Économies moyennes",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur dédié pour chaque client, disponible pour répondre à vos questions et suivre vos opérations.",
    details: [
      "Gestionnaire de compte attitré",
      "Disponibilité et réactivité",
      "Suivi personnalisé des opérations",
      "Reporting adapté à vos besoins",
    ],
    stat: "24h",
    statLabel: "Délai de réponse",
  },
  {
    icon: Zap,
    title: "Rapidité des procédures",
    description:
      "Nos processus optimisés et notre connaissance du terrain permettent un traitement accéléré de vos dossiers.",
    details: [
      "Procédures dématérialisées",
      "Anticipation des formalités",
      "Traitement prioritaire",
      "Coordination efficace des intervenants",
    ],
    stat: "48h",
    statLabel: "Délai moyen de transit",
  },
]

const comparisons = [
  {
    aspect: "Délai de dédouanement",
    without: "3-5 jours",
    with: "24-48 heures",
  },
  {
    aspect: "Risque de pénalités",
    without: "Élevé",
    with: "Quasi nul",
  },
  {
    aspect: "Coordination logistique",
    without: "Multiple interlocuteurs",
    with: "Un seul contact",
  },
  {
    aspect: "Conformité réglementaire",
    without: "Incertaine",
    with: "Garantie à 100%",
  },
  {
    aspect: "Suivi des opérations",
    without: "Limité",
    with: "Temps réel",
  },
]

export default function ValeurAjouteePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0B2C4D] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Notre différence</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
                La valeur ajoutée CERVO HOLDING
              </h1>
              <p className="mt-6 text-xl text-white/80 leading-relaxed">
                Découvrez pourquoi nos clients nous font confiance pour leurs opérations d'import-export entre la RDC et
                la Zambie.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-[#C9A24D] py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-[#0B2C4D]">500+</p>
                <p className="text-[#0B2C4D]/70 text-sm">Opérations réalisées</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-[#0B2C4D]">98%</p>
                <p className="text-[#0B2C4D]/70 text-sm">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-[#0B2C4D]">30%</p>
                <p className="text-[#0B2C4D]/70 text-sm">Économies moyennes</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-[#0B2C4D]">24h</p>
                <p className="text-[#0B2C4D]/70 text-sm">Délai de réponse</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#0B2C4D]">Ce qui nous distingue</h2>
              <p className="mt-4 text-[#64748B]">
                Notre valeur ajoutée repose sur cinq piliers fondamentaux qui font de nous le partenaire idéal pour vos
                opérations commerciales.
              </p>
            </div>

            <div className="space-y-8">
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#0B2C4D] rounded-xl flex items-center justify-center flex-shrink-0">
                        <prop.icon className="w-7 h-7 text-[#C9A24D]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0B2C4D]">{prop.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#64748B] text-lg mb-6">{prop.description}</p>
                    <ul className="space-y-3">
                      {prop.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C9A24D] flex-shrink-0 mt-0.5" />
                          <span className="text-[#0B2C4D]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="bg-[#F7F9FC] rounded-2xl p-8 text-center">
                      <div className="w-20 h-20 bg-[#C9A24D] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-[#0B2C4D]">{prop.stat}</span>
                      </div>
                      <p className="text-[#0B2C4D] font-semibold">{prop.statLabel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#F7F9FC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-[#0B2C4D]">Avec ou sans CERVO HOLDING</h2>
              <p className="mt-4 text-[#64748B]">Comparez la différence que nous apportons à vos opérations</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0B2C4D] text-white p-4">
                <div className="font-semibold">Aspect</div>
                <div className="text-center font-semibold">Sans nous</div>
                <div className="text-center font-semibold text-[#C9A24D]">Avec CERVO</div>
              </div>
              {comparisons.map((comparison, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]"} border-t border-[#E2E8F0]`}
                >
                  <div className="font-medium text-[#0B2C4D]">{comparison.aspect}</div>
                  <div className="text-center text-[#64748B]">{comparison.without}</div>
                  <div className="text-center font-semibold text-[#0B2C4D]">{comparison.with}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial/Trust Section */}
        <section className="py-20 bg-[#0B2C4D]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Award className="w-16 h-16 text-[#C9A24D] mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Un partenariat axé sur vos résultats</h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Notre succès se mesure à celui de nos clients. Nous nous engageons à fournir un service d'excellence
                  qui contribue directement à la croissance de votre activité commerciale sur le corridor RDC-Zambie.
                </p>
                <Button asChild className="bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D]">
                  <Link href="/contact">
                    Parlons de votre projet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-[#1F4E79] rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C9A24D] fill-[#C9A24D]" />
                  ))}
                </div>
                <blockquote className="text-white/90 text-lg italic mb-6">
                  « CERVO HOLDING a transformé nos opérations d'import-export. Leur expertise du corridor RDC-Zambie et
                  leur accompagnement personnalisé nous ont permis de réduire nos délais de 40% et d'éliminer les
                  problèmes de conformité. »
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C9A24D]/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#C9A24D]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Entreprise minière</p>
                    <p className="text-white/60 text-sm">Client depuis 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
