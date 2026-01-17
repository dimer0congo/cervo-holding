import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Building2, Globe, Users, Award, CheckCircle, MapPin } from "lucide-react"

export const metadata = {
  title: "À Propos | CERVO HOLDING LTD",
  description:
    "Découvrez CERVO HOLDING LTD, votre partenaire de confiance pour la facilitation des opérations d'import-export entre la RDC et la Zambie depuis 2020.",
}

const milestones = [
  { year: "2020", event: "Création de CERVO HOLDING LTD à Lubumbashi, RDC" },
  { year: "2021", event: "Extension des opérations au poste frontalier de Kasumbalesa" },
  { year: "2022", event: "Ouverture du bureau de Kitwe, Zambie" },
  { year: "2023", event: "Développement du réseau sur les postes de Sakanya et Kipushi" },
  { year: "2024", event: "Extension vers Kolwezi et consolidation des partenariats stratégiques" },
]

const strengths = [
  "Expertise approfondie du corridor RDC-Zambie",
  "Présence physique aux principaux postes frontaliers",
  "Connaissance des réglementations locales et internationales",
  "Relations établies avec les autorités douanières",
  "Équipe bilingue (français/anglais)",
  "Accompagnement personnalisé de bout en bout",
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0B2C4D] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">À propos de nous</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight text-balance">
                Votre passerelle commerciale entre la RDC et la Zambie
              </h1>
              <p className="mt-6 text-xl text-white/80 leading-relaxed">
                Depuis 2020, CERVO HOLDING LTD s'impose comme un acteur majeur de la facilitation du commerce
                transfrontalier sur le corridor stratégique RDC-Zambie.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0B2C4D] mb-6">Qui sommes-nous ?</h2>
                <div className="space-y-4 text-[#64748B] leading-relaxed">
                  <p>
                    <strong className="text-[#0B2C4D]">CERVO HOLDING LTD</strong> est une société spécialisée dans la
                    facilitation des opérations d'import-export entre la République Démocratique du Congo (RDC) et la
                    Zambie. Notre expertise couvre l'ensemble des services nécessaires au bon déroulement des échanges
                    commerciaux transfrontaliers.
                  </p>
                  <p>
                    Fondée en 2020, notre entreprise est née de la volonté de simplifier les procédures complexes du
                    commerce international dans cette région stratégique de l'Afrique australe. Nous avons rapidement
                    développé un réseau de compétences et de partenariats permettant d'offrir un service complet et
                    fiable à nos clients.
                  </p>
                  <p>
                    Notre statut juridique en règle dans les deux pays nous permet d'opérer en toute légalité et
                    transparence, garantissant à nos clients une conformité totale avec les réglementations douanières
                    et commerciales en vigueur.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F9FC] rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#0B2C4D] mb-6">Informations clés</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0B2C4D] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-[#C9A24D]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2C4D]">Raison sociale</p>
                      <p className="text-[#64748B]">CERVO HOLDING LTD</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0B2C4D] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[#C9A24D]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2C4D]">Année de création</p>
                      <p className="text-[#64748B]">2020</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0B2C4D] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-[#C9A24D]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2C4D]">Pays d'opération</p>
                      <p className="text-[#64748B]">RDC & Zambie</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0B2C4D] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#C9A24D]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2C4D]">Sièges</p>
                      <p className="text-[#64748B]">Lubumbashi (RDC) • Kitwe (Zambie)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-[#F7F9FC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Notre parcours</span>
              <h2 className="mt-4 text-3xl font-bold text-[#0B2C4D]">Historique de l'entreprise</h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E2E8F0] hidden lg:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div
                        className={`bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0] ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"} max-w-md`}
                      >
                        <p className="text-[#C9A24D] font-bold text-lg">{milestone.year}</p>
                        <p className="text-[#0B2C4D] mt-2">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-[#C9A24D] rounded-full border-4 border-[#F7F9FC] hidden lg:block z-10" />
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Role */}
        <section className="py-20 bg-[#0B2C4D]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Notre rôle</span>
                <h2 className="mt-4 text-3xl font-bold text-white">Positionnement stratégique</h2>
                <p className="mt-6 text-white/70 leading-relaxed">
                  Le corridor RDC-Zambie représente l'une des routes commerciales les plus actives d'Afrique centrale et
                  australe. Avec ses ressources minières exceptionnelles, la région du Haut-Katanga (RDC) et la
                  Copperbelt (Zambie) génèrent un volume d'échanges considérable.
                </p>
                <p className="mt-4 text-white/70 leading-relaxed">
                  CERVO HOLDING LTD s'est positionnée comme un facilitateur clé de ce commerce, offrant aux entreprises
                  une expertise locale indispensable pour naviguer les complexités administratives et logistiques de ce
                  corridor stratégique.
                </p>
              </div>

              <div className="bg-[#1F4E79] rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Nos atouts</h3>
                <ul className="space-y-4">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Notre équipe</span>
              <h2 className="mt-4 text-3xl font-bold text-[#0B2C4D]">Une expertise au service de votre réussite</h2>
              <p className="mt-4 text-[#64748B]">
                Notre équipe réunit des professionnels expérimentés du commerce international, de la logistique et des
                procédures douanières, tous engagés à faciliter vos opérations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F7F9FC] rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-[#0B2C4D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-[#C9A24D]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B2C4D] mb-2">Équipe dédiée</h3>
                <p className="text-[#64748B]">
                  Des professionnels qualifiés présents sur le terrain pour un accompagnement personnalisé
                </p>
              </div>

              <div className="bg-[#F7F9FC] rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-[#0B2C4D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-[#C9A24D]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B2C4D] mb-2">Bilingue</h3>
                <p className="text-[#64748B]">
                  Communication fluide en français et en anglais pour servir tous nos clients
                </p>
              </div>

              <div className="bg-[#F7F9FC] rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-[#0B2C4D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-[#C9A24D]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B2C4D] mb-2">Expérience</h3>
                <p className="text-[#64748B]">Des années d'expertise dans le commerce transfrontalier RDC-Zambie</p>
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
