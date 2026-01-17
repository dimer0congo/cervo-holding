import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Package, ShoppingBag, Building, Pickaxe, Wheat, Factory, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Clients Cibles | CERVO HOLDING LTD",
  description:
    "CERVO HOLDING LTD accompagne importateurs, exportateurs, entreprises minières, agro-alimentaires et industries dans leurs opérations transfrontalières RDC-Zambie.",
}

const clientTypes = [
  {
    icon: Package,
    title: "Importateurs",
    description:
      "Entreprises important des produits, équipements ou matières premières en RDC depuis la Zambie ou via la Zambie.",
    needs: [
      "Dédouanement rapide et conforme",
      "Réduction des coûts d'importation",
      "Gestion documentaire complète",
      "Suivi des livraisons",
    ],
    solutions: [
      "Procédures douanières optimisées",
      "Conseil sur les régimes douaniers avantageux",
      "Préparation de tous les documents requis",
      "Tracking en temps réel",
    ],
    examples: [
      "Équipements industriels et machinerie",
      "Produits de consommation",
      "Pièces détachées",
      "Produits alimentaires",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Exportateurs",
    description:
      "Sociétés congolaises exportant leurs produits vers la Zambie ou utilisant la Zambie comme corridor de transit.",
    needs: [
      "Accès aux marchés zambiens",
      "Conformité aux normes d'export",
      "Optimisation logistique",
      "Paiements sécurisés",
    ],
    solutions: [
      "Assistance à l'exportation complète",
      "Certification et documentation",
      "Coordination du transport transfrontalier",
      "Conseil sur les opportunités de marché",
    ],
    examples: ["Produits agricoles", "Minerais et concentrés", "Produits manufacturés", "Artisanat et produits locaux"],
  },
  {
    icon: Building,
    title: "Commerçants transfrontaliers",
    description:
      "Opérateurs du commerce régional effectuant des échanges réguliers entre les deux pays aux points frontaliers.",
    needs: ["Procédures simplifiées", "Coûts maîtrisés", "Rapidité de passage", "Accompagnement régulier"],
    solutions: [
      "Forfaits adaptés au commerce régulier",
      "Tarification transparente",
      "Traitement prioritaire",
      "Interlocuteur dédié",
    ],
    examples: [
      "Commerçants de Kasumbalesa",
      "Grossistes régionaux",
      "Petites et moyennes entreprises",
      "Coopératives commerciales",
    ],
  },
  {
    icon: Pickaxe,
    title: "Entreprises minières",
    description:
      "Acteurs du secteur minier de la Copperbelt congolaise et zambienne nécessitant des services logistiques spécialisés.",
    needs: [
      "Import d'équipements lourds",
      "Export de minerais",
      "Conformité environnementale",
      "Logistique spécialisée",
    ],
    solutions: [
      "Expertise du secteur minier",
      "Gestion des permis spéciaux",
      "Coordination avec les autorités",
      "Transport sécurisé",
    ],
    examples: [
      "Compagnies d'extraction",
      "Sous-traitants miniers",
      "Fournisseurs d'équipements",
      "Sociétés de traitement",
    ],
  },
  {
    icon: Wheat,
    title: "Secteur agro-alimentaire",
    description:
      "Industries de transformation alimentaire et négociants agricoles échangeant des produits entre les deux pays.",
    needs: ["Respect des normes sanitaires", "Chaîne du froid", "Certification phytosanitaire", "Rapidité du transit"],
    solutions: [
      "Conformité aux normes SPS",
      "Partenaires logistiques spécialisés",
      "Documentation sanitaire",
      "Transit accéléré",
    ],
    examples: [
      "Producteurs alimentaires",
      "Négociants en céréales",
      "Exportateurs de produits frais",
      "Industries de transformation",
    ],
  },
  {
    icon: Factory,
    title: "Industries manufacturières",
    description:
      "Secteur manufacturier et industriel nécessitant des approvisionnements réguliers et l'export de produits finis.",
    needs: ["Approvisionnement régulier", "Gestion des stocks", "Export de production", "Optimisation des coûts"],
    solutions: [
      "Planification logistique",
      "Contrats récurrents",
      "Solutions d'exportation",
      "Analyse et optimisation",
    ],
    examples: ["Usines de production", "Assembleurs", "Fabricants de matériaux", "Industries chimiques"],
  },
]

const whyUs = [
  {
    title: "Nous comprenons votre réalité",
    description:
      "Notre présence sur le terrain nous donne une compréhension intime des défis auxquels vous faites face quotidiennement.",
  },
  {
    title: "Solutions adaptées",
    description:
      "Nous adaptons nos services à vos besoins spécifiques, que vous soyez une PME ou une grande entreprise.",
  },
  {
    title: "Partenariat durable",
    description: "Nous construisons des relations de long terme basées sur la confiance et les résultats.",
  },
]

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0B2C4D] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Qui nous servons</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">Nos Clients Cibles</h1>
              <p className="mt-6 text-xl text-white/80 leading-relaxed">
                CERVO HOLDING LTD accompagne une diversité d'acteurs économiques dans leurs opérations commerciales
                transfrontalières entre la RDC et la Zambie.
              </p>
            </div>
          </div>
        </section>

        {/* Client Types Overview */}
        <section className="py-16 bg-[#F7F9FC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clientTypes.map((client, index) => (
                <a
                  key={index}
                  href={`#${client.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white rounded-xl p-5 border border-[#E2E8F0] hover:border-[#C9A24D] hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0B2C4D] rounded-lg flex items-center justify-center group-hover:bg-[#C9A24D] transition-colors">
                      <client.icon className="w-6 h-6 text-[#C9A24D] group-hover:text-[#0B2C4D] transition-colors" />
                    </div>
                    <h3 className="font-semibold text-[#0B2C4D]">{client.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Client Sections */}
        {clientTypes.map((client, index) => (
          <section
            key={index}
            id={client.title.toLowerCase().replace(/\s+/g, "-")}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]"} scroll-mt-24`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Info */}
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#0B2C4D] rounded-xl flex items-center justify-center flex-shrink-0">
                      <client.icon className="w-8 h-8 text-[#C9A24D]" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[#0B2C4D]">{client.title}</h2>
                      <p className="text-[#64748B] mt-1">{client.description}</p>
                    </div>
                  </div>

                  {/* Needs */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#0B2C4D] mb-4">Vos besoins</h3>
                    <ul className="space-y-2">
                      {client.needs.map((need, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-[#C9A24D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-[#C9A24D] rounded-full" />
                          </div>
                          <span className="text-[#64748B]">{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="bg-[#0B2C4D] rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Nos solutions</h3>
                    <ul className="space-y-3">
                      {client.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C9A24D] flex-shrink-0 mt-0.5" />
                          <span className="text-white/80">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Examples */}
                <div>
                  <div className="bg-[#F7F9FC] rounded-xl p-6 border border-[#E2E8F0]">
                    <h3 className="text-lg font-semibold text-[#0B2C4D] mb-4">Exemples de clients</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {client.examples.map((example, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-lg p-3 text-center text-sm text-[#64748B] border border-[#E2E8F0]"
                        >
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button asChild className="w-full bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D]">
                      <Link href="/contact">
                        Discutons de vos besoins
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Why Us Section */}
        <section className="py-20 bg-[#0B2C4D]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-white">Nous comprenons vos réalités terrain</h2>
              <p className="mt-4 text-white/70">
                Quelle que soit votre activité, nous adaptons nos services pour répondre à vos besoins spécifiques.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyUs.map((item, index) => (
                <div key={index} className="bg-[#1F4E79] rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D]">
                <Link href="/contact">
                  Devenez notre client
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
