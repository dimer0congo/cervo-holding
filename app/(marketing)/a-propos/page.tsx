import { Metadata } from "next"
import { CTASection } from "@/components/home/cta-section"
import { Building2, Globe, Users, Award, CheckCircle, MapPin } from "lucide-react"

export const metadata: Metadata = {
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
    <main>
      {/* Hero Section - Premium Centered */}
      <section className="bg-[#0B2C4D] pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="absolute top-0 right-0 w-[800px] h-[800px] text-[#C9A24D]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.7C59.6,43.9,48.3,53.4,36.4,61.7C24.5,70,12,77.1,-1.5,79.7C-15,82.3,-29.9,80.4,-43.3,73.4C-56.7,66.4,-68.6,54.3,-76.5,40.1C-84.4,25.9,-88.3,9.6,-86.3,-5.7C-84.3,-21,-76.4,-35.3,-65.3,-46.8C-54.2,-58.3,-39.9,-67,-25.6,-74.3C-11.3,-81.6,2.9,-87.5,17.2,-88.1L44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16 text-center relative z-10">
          <span className="text-[#C9A24D] font-bold text-xs uppercase tracking-[0.3em] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
            À propos de nous
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 text-balance animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100 font-serif">
            Votre passerelle commerciale entre la <span className="text-[#C9A24D] italic">RDC</span> et la <span className="text-[#C9A24D] italic">Zambie</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Depuis 2020, CERVO HOLDING LTD s'impose comme un acteur majeur de la facilitation du commerce
            transfrontalier sur le corridor stratégique RDC-Zambie.
          </p>
        </div>
      </section>

      {/* Company Overview - Editorial Split */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Text Content */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-[#0B2C4D] mb-8 font-serif leading-tight">Qui sommes-nous ?</h2>
              <div className="space-y-6 text-[#64748B] text-lg leading-relaxed">
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
                <p className="border-l-4 border-[#C9A24D] pl-6 italic text-[#0B2C4D]/80">
                  Notre statut juridique en règle dans les deux pays nous permet d'opérer en toute légalité et
                  transparence, garantissant à nos clients une conformité totale avec les réglementations douanières
                  et commerciales en vigueur.
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] rounded-[2rem] p-8 md:p-10 border border-[#E2E8F0] sticky top-32">
                <h3 className="text-xl font-bold text-[#0B2C4D] mb-8 font-serif">Informations clés</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-[#E2E8F0]/50">
                    <div className="w-10 h-10 bg-[#0B2C4D]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-[#0B2C4D]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B2C4D] text-sm uppercase tracking-wide mb-1">Raison sociale</p>
                      <p className="text-[#64748B] font-medium">CERVO HOLDING LTD</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-[#E2E8F0]/50">
                    <div className="w-10 h-10 bg-[#0B2C4D]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[#0B2C4D]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B2C4D] text-sm uppercase tracking-wide mb-1">Année de création</p>
                      <p className="text-[#64748B] font-medium">2020</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-[#E2E8F0]/50">
                    <div className="w-10 h-10 bg-[#0B2C4D]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-[#0B2C4D]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B2C4D] text-sm uppercase tracking-wide mb-1">Pays d'opération</p>
                      <p className="text-[#64748B] font-medium">RDC & Zambie</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-[#E2E8F0]/50">
                    <div className="w-10 h-10 bg-[#0B2C4D]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#0B2C4D]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B2C4D] text-sm uppercase tracking-wide mb-1">Sièges</p>
                      <p className="text-[#64748B] font-medium">Lubumbashi (RDC)<br />Kitwe (Zambie)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Elegant Vertical */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="mx-auto max-w-4xl px-8 md:px-12 lg:px-16">
          <div className="text-center mb-20">
            <span className="text-[#C9A24D] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Notre parcours</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C4D] font-serif">Historique de l'entreprise</h2>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#C9A24D]/30 md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content Box */}
                  <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`bg-white rounded-2xl p-8 shadow-sm border border-[#E2E8F0] hover:border-[#C9A24D]/50 transition-all duration-300 relative group md:max-w-md ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                    >
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-[1px] bg-[#C9A24D]/30 ${index % 2 === 0 ? "-right-4" : "-left-4"}`} />
                      <p className="text-[#C9A24D] font-bold text-4xl mb-3 font-serif">{milestone.year}</p>
                      <p className="text-[#0B2C4D] text-lg leading-relaxed group-hover:text-[#1F4E79] transition-colors">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Circle Marker */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#C9A24D] rounded-full border-4 border-[#F7F9FC] md:-translate-x-1/2 z-10 shadow-lg shadow-[#C9A24D]/20 -translate-x-1/2 md:translate-x-[-50%]" />

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Role - Immersive */}
      <section className="py-24 bg-[#0B2C4D] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#C9A24D] rounded-full blur-[150px]" />
        </div>

        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A24D] font-bold text-xs uppercase tracking-[0.3em] mb-6 block">Notre rôle</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif leading-tight">Positionnement <span className="text-[#C9A24D] italic">stratégique</span></h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light">
                <p>
                  Le corridor RDC-Zambie représente l'une des routes commerciales les plus actives d'Afrique centrale et
                  australe. Avec ses ressources minières exceptionnelles, la région du Haut-Katanga (RDC) et la
                  Copperbelt (Zambie) génèrent un volume d'échanges considérable.
                </p>
                <p>
                  CERVO HOLDING LTD s'est positionnée comme un facilitateur clé de ce commerce, offrant aux entreprises
                  une expertise locale indispensable pour naviguer les complexités administratives et logistiques de ce
                  corridor stratégique.
                </p>
              </div>
            </div>

            <div className="bg-[#1F4E79]/50 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 font-serif">Nos atouts majeurs</h3>
              <ul className="space-y-6">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#C9A24D] flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-[#0B2C4D]" />
                    </div>
                    <span className="text-white text-lg leading-relaxed">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Clean */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C9A24D] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Notre équipe</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C4D] font-serif mb-6">Une expertise au service de votre réussite</h2>
            <p className="text-[#64748B] text-lg leading-relaxed">
              Notre équipe réunit des professionnels expérimentés du commerce international, de la logistique et des
              procédures douanières, tous engagés à faciliter vos opérations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] rounded-[2rem] p-8 text-center border border-transparent hover:border-[#E2E8F0] hover:shadow-lg transition-all duration-300 group">
              <div className="w-20 h-20 bg-[#0B2C4D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0B2C4D]/20">
                <Users className="w-10 h-10 text-[#C9A24D]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2C4D] mb-3">Équipe dédiée</h3>
              <p className="text-[#64748B] leading-relaxed">
                Des professionnels qualifiés présents sur le terrain pour un accompagnement personnalisé
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-[2rem] p-8 text-center border border-transparent hover:border-[#E2E8F0] hover:shadow-lg transition-all duration-300 group">
              <div className="w-20 h-20 bg-[#0B2C4D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0B2C4D]/20">
                <Globe className="w-10 h-10 text-[#C9A24D]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2C4D] mb-3">Bilingue</h3>
              <p className="text-[#64748B] leading-relaxed">
                Communication fluide en français et en anglais pour servir tous nos clients
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-[2rem] p-8 text-center border border-transparent hover:border-[#E2E8F0] hover:shadow-lg transition-all duration-300 group">
              <div className="w-20 h-20 bg-[#0B2C4D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0B2C4D]/20">
                <Award className="w-10 h-10 text-[#C9A24D]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2C4D] mb-3">Expérience</h3>
              <p className="text-[#64748B] leading-relaxed">Des années d'expertise dans le commerce transfrontalier RDC-Zambie</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
