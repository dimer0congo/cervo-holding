import { Metadata } from "next"
import { CTASection } from "@/components/home/cta-section"
import { Package, ShoppingBag, Building, Pickaxe, Wheat, Factory, ArrowRight, CheckCircle, Target, Lightbulb, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Clients Cibles | CERVO HOLDING LTD",
  description:
    "CERVO HOLDING LTD accompagne importateurs, exportateurs, entreprises minières, agro-alimentaires et industries dans leurs opérations transfrontalières RDC-Zambie.",
}

const clientTypes = [
  {
    id: "importateurs",
    icon: Package,
    title: "Importateurs",
    description:
      "Entreprises important des produits, équipements or matières premières en RDC depuis la Zambie or via la Zambie.",
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
    id: "exportateurs",
    icon: ShoppingBag,
    title: "Exportateurs",
    description:
      "Sociétés congolaises exportant leurs produits vers la Zambie or utilisant la Zambie comme corridor de transit.",
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
    id: "commercants",
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
    id: "miniers",
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
    id: "agro",
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
    id: "industries",
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
      "Nous adaptons nos services à vos besoins spécifiques, que vous soyez une PME or une grande entreprise.",
  },
  {
    title: "Partenariat durable",
    description: "Nous construisons des relations de long terme basées sur la confiance et les résultats.",
  },
]

export default function ClientsPage() {
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
            Partenaires Stratégiques
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-serif mb-8">
            Qui nous <span className="text-[#C9A24D] italic">servons</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
            CERVO HOLDING LTD accompagne une diversité d'acteurs économiques dans leurs opérations commerciales
            transfrontalières entre la RDC et la Zambie.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B2C4D] to-transparent" />
      </section>

      {/* Sticky Client Navigation */}
      <div className="sticky top-[60px] z-40 bg-[#0B2C4D]/80 backdrop-blur-xl border-y border-white/5 overflow-x-auto no-scrollbar">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-2 md:justify-center py-2 min-w-max">
            {clientTypes.map((client) => (
              <a
                key={client.id}
                href={`#${client.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
              >
                {client.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Clients - Sticky Scroll Narrative */}
      <div className="relative z-0">
        {clientTypes.map((client, index) => (
          <section
            key={index}
            id={client.id}
            className="relative min-h-[90vh] flex items-center py-24 scroll-mt-32 border-b border-white/5 last:border-0 odd:bg-white/5 even:bg-transparent"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Left Column: Sticky Summary */}
                <div className="lg:sticky lg:top-48 self-start">
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#C9A24D]/20 rounded-full blur-2xl" />
                    <div className="w-20 h-20 bg-gradient-to-br from-[#C9A24D] to-[#8C6D2F] rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-black/20 relative z-10">
                      <client.icon className="w-10 h-10 text-[#0B2C4D]" />
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                    {client.title}
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed font-light mb-8">
                    {client.description}
                  </p>

                  <Button asChild className="hidden lg:inline-flex bg-[#C9A24D] hover:bg-[#D4B05C] text-[#0B2C4D] font-bold rounded-lg px-8">
                    <Link href="/contact">
                      Discuter de vos besoins <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Right Column: Scrollable Details */}
                <div className="space-y-16 pt-8 lg:pt-0">

                  {/* Needs Section */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <Target className="w-6 h-6 text-[#C9A24D]" />
                      Vos besoins
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {client.needs.map((need, idx) => (
                        <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                          <p className="text-white/90">{need}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions Card */}
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C9A24D] to-[#0B2C4D] rounded-2xl opacity-20 blur group-hover:opacity-40 transition duration-500" />
                    <div className="relative bg-[#0F375E] rounded-2xl p-8 border border-white/5">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Lightbulb className="w-6 h-6 text-[#C9A24D]" />
                        Nos solutions
                      </h3>
                      <ul className="space-y-4">
                        {client.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-[#C9A24D]" />
                            </div>
                            <span className="text-white/80 leading-relaxed">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Examples Section */}
                  <div>
                    <h3 className="text-sm font-bold text-[#C9A24D] uppercase tracking-widest mb-4">
                      Exemples concrets
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {client.examples.map((example, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:text-white hover:border-[#C9A24D]/50 transition-all cursor-default">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="lg:hidden pt-4">
                    <Button asChild className="w-full bg-[#C9A24D] hover:bg-[#D4B05C] text-[#0B2C4D] font-bold py-6 rounded-xl">
                      <Link href="/contact">
                        Discuter de vos besoins <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                  </div>

                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Why Us - Premium Integration */}
      <section className="py-32 relative overflow-hidden bg-[#0F375E]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">Nous comprenons vos <span className="text-[#C9A24D] italic">réalités terrain</span></h2>
            <p className="text-white/70 text-xl font-light">
              Quelle que soit votre activité, nous adaptons nos services pour répondre à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#C9A24D]/30 transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-[#C9A24D] mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <CTASection />
      </div>
    </main>
  )
}
