import { Metadata } from "next"
import { CTASection } from "@/components/home/cta-section"
import { MapPin, Truck, Building, Factory, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Zones d'Intervention | CERVO HOLDING LTD",
  description:
    "Découvrez nos zones d'intervention stratégiques sur le corridor RDC-Zambie : Kasumbalesa, Sakanya, Kipushi, Lubumbashi, Kolwezi et Kitwe.",
}

const zonesRDC = [
  {
    name: "Kasumbalesa",
    type: "Poste frontalier principal",
    description:
      "Le poste frontalier de Kasumbalesa est le plus important point de passage entre la RDC et la Zambie. Il gère plus de 70% du trafic commercial entre les deux pays.",
    importance: [
      "Volume d'échanges le plus élevé du corridor",
      "Infrastructure douanière moderne",
      "Opérationnel 24h/24",
      "Point de passage stratégique pour le secteur minier",
    ],
    icon: Truck,
  },
  {
    name: "Sakanya",
    type: "Poste frontalier secondaire",
    description:
      "Sakanya offre une alternative pour les échanges commerciaux, particulièrement pour les marchandises en provenance ou à destination du nord de la Zambie.",
    importance: [
      "Décongestionnement de Kasumbalesa",
      "Accès direct à la Copperbelt nord",
      "Procédures simplifiées",
      "Idéal pour certains types de marchandises",
    ],
    icon: MapPin,
  },
  {
    name: "Kipushi",
    type: "Frontière historique",
    description:
      "Kipushi représente un point de passage historique avec des liens commerciaux établis de longue date entre les communautés frontalières.",
    importance: [
      "Héritage historique important",
      "Commerce local et régional",
      "Proximité avec Lubumbashi",
      "Passage pour marchandises spécifiques",
    ],
    icon: Building,
  },
  {
    name: "Lubumbashi",
    type: "Centre économique majeur",
    description:
      "Capitale économique du Haut-Katanga, Lubumbashi est le hub logistique et commercial de la région. C'est là que se trouve notre siège principal en RDC.",
    importance: [
      "Centre de décision économique",
      "Hub logistique régional",
      "Concentration d'entreprises",
      "Infrastructure développée",
    ],
    icon: Factory,
  },
  {
    name: "Kolwezi",
    type: "Cœur minier",
    description:
      "Kolwezi est au cœur de l'industrie minière congolaise, avec d'importantes opérations de cobalt et de cuivre nécessitant des services logistiques spécialisés.",
    importance: [
      "Capital minier de la RDC",
      "Demande logistique importante",
      "Équipements et fournitures minières",
      "Exportations de minerais",
    ],
    icon: Factory,
  },
]

const zonesZambie = [
  {
    name: "Kitwe",
    type: "Hub logistique zambien",
    description:
      "Kitwe est la deuxième plus grande ville de Zambie et le cœur de la Copperbelt zambienne. Notre bureau de Kitwe assure une présence locale essentielle.",
    importance: [
      "Centre industriel de la Copperbelt",
      "Proximité avec les frontières RDC",
      "Infrastructure logistique développée",
      "Base de nombreuses entreprises minières",
    ],
    icon: Factory,
  },
]

export default function ZonesPage() {
  return (
    <main>
      {/* Hero Section - Centered & Premium */}
      <section className="bg-[#0B2C4D] pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16 text-center relative z-10">
          <span className="text-[#C9A24D] font-bold text-xs uppercase tracking-[0.3em] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
            Notre couverture
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 text-balance animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Zones d'intervention <span className="text-[#C9A24D] italic font-serif">stratégiques</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Présents aux points clés du corridor RDC-Zambie, nous assurons un accompagnement de proximité pour
            toutes vos opérations commerciales transfrontalières.
          </p>

          {/* Stats - Centered Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-12 animate-in fade-in zoom-in duration-700 delay-300">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#C9A24D] mb-2">6</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">Zones couvertes</p>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#C9A24D] mb-2">3</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">Postes frontaliers</p>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#C9A24D] mb-2">2</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">Pays</p>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#C9A24D] mb-2">2</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">Bureaux</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Focused */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="mx-auto max-w-6xl px-8 md:px-12 lg:px-16">
          <div className="bg-white rounded-[2rem] p-4 shadow-xl shadow-black/5 overflow-hidden ring-1 ring-black/5">
            <div className="bg-[#0B2C4D] rounded-[1.5rem] relative overflow-hidden aspect-[21/9] group">
              <img
                src="/stylized-map-of-drc-congo-zambia-border-region-wit.jpg"
                alt="Carte du corridor RDC-Zambie"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C4D] via-transparent to-transparent opacity-90" />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Un corridor commercial <span className="text-[#C9A24D] italic">vital</span></h3>
                <p className="text-white/80 max-w-2xl text-lg mb-8 leading-relaxed">
                  Le corridor RDC-Zambie est l'artère principale de l'économie régionale, connectant les richesses minières aux marchés mondiaux.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <CheckCircle className="w-4 h-4 text-[#C9A24D]" />
                    <span className="text-white text-sm font-medium">Corridor minier</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <CheckCircle className="w-4 h-4 text-[#C9A24D]" />
                    <span className="text-white text-sm font-medium">Exchanges croissants</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <CheckCircle className="w-4 h-4 text-[#C9A24D]" />
                    <span className="text-white text-sm font-medium">Infrastructure clé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RDC Zones - Centered Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-8 md:px-12 lg:px-16">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B2C4D] rounded-2xl mb-6 shadow-lg shadow-[#0B2C4D]/20">
              <span className="text-white font-bold text-xl">RDC</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B2C4D] mb-6">République Démocratique du Congo</h2>
            <p className="text-[#64748B] text-lg leading-relaxed">Découvrez nos 5 points d'intervention stratégiques pour vos opérations congolaises.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zonesRDC.map((zone, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-[#0B2C4D]/5 transition-all duration-300 border border-transparent hover:border-[#E2E8F0] group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-[#0B2C4D]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#0B2C4D] transition-all duration-300">
                    <zone.icon className="w-7 h-7 text-[#0B2C4D] group-hover:text-[#C9A24D] transition-colors" />
                  </div>
                  <span className="text-[#C9A24D] text-xs font-bold uppercase tracking-wider bg-[#C9A24D]/10 px-3 py-1 rounded-full">
                    RDC
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0B2C4D] mb-2 group-hover:text-[#1F4E79] transition-colors">{zone.name}</h3>
                <p className="text-[#C9A24D] text-sm font-medium mb-4">{zone.type}</p>

                <p className="text-[#64748B] text-sm leading-relaxed mb-6">{zone.description}</p>

                <div className="border-t border-[#E2E8F0] pt-6">
                  <h4 className="text-xs font-bold text-[#0B2C4D] uppercase tracking-wide mb-4 opacity-80">Points Clés</h4>
                  <ul className="space-y-3">
                    {zone.importance.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#64748B] group-hover:text-[#475569] transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zambie Zones - Centered Single */}
      <section className="py-24 bg-[#0B2C4D] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A24D] blur-[150px] opacity-10 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F4E79] blur-[150px] opacity-20 rounded-full pointer-events-none" />

        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/10">
              <span className="text-white font-bold text-xl">ZM</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Zambie</h2>
            <p className="text-white/70 text-lg">Notre ancrage stratégique dans la Copperbelt.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {zonesZambie.map((zone, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-white/10 hover:border-[#C9A24D]/50 transition-all duration-500 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                  <div className="w-20 h-20 bg-[#C9A24D] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#C9A24D]/20">
                    <zone.icon className="w-10 h-10 text-[#0B2C4D]" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{zone.name}</h3>
                    <p className="text-[#C9A24D] font-medium text-lg">{zone.type}</p>
                  </div>
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-10 border-l-2 border-[#C9A24D] pl-6">
                  {zone.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 bg-[#0B2C4D]/50 rounded-2xl p-8 border border-white/5">
                  {zone.importance.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                      <span className="text-base text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Zones - Minimalist */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16">
          <div className="bg-[#F8FAFC] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C4D] mb-6">Pourquoi ces zones ?</h2>
              <p className="text-[#64748B] text-lg max-w-2xl mx-auto mb-12">
                Notre maillage territorial n'est pas un hasard. Il correspond exactement aux nœuds logistiques critiques du corridor.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#0B2C4D] mb-3">Volume</h3>
                  <p className="text-[#64748B] text-sm">90% du flux commercial régional</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#0B2C4D] mb-3">Mines</h3>
                  <p className="text-[#64748B] text-sm">Au cœur de la ceinture de cuivre</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#0B2C4D] mb-3">Proximité</h3>
                  <p className="text-[#64748B] text-sm">Réactivité d'intervention maximale</p>
                </div>
              </div>

              <Button asChild className="bg-[#0B2C4D] hover:bg-[#1F4E79] text-white text-base py-6 px-8 rounded-xl shadow-xl shadow-[#0B2C4D]/10 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Link href="/contact">
                  Contactez notre équipe locale
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A24D]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0B2C4D]/5 rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
