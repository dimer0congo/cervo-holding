import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { MapPin, Truck, Building, Factory, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
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
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0B2C4D] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Notre couverture</span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Zones d'intervention stratégiques
                </h1>
                <p className="mt-6 text-xl text-white/80 leading-relaxed">
                  Présents aux points clés du corridor RDC-Zambie, nous assurons un accompagnement de proximité pour
                  toutes vos opérations commerciales transfrontalières.
                </p>
              </div>

              <div className="bg-[#1F4E79] rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Notre réseau</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0B2C4D] rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-[#C9A24D]">6</p>
                    <p className="text-white/70 text-sm">Zones couvertes</p>
                  </div>
                  <div className="bg-[#0B2C4D] rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-[#C9A24D]">3</p>
                    <p className="text-white/70 text-sm">Postes frontaliers</p>
                  </div>
                  <div className="bg-[#0B2C4D] rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-[#C9A24D]">2</p>
                    <p className="text-white/70 text-sm">Pays d'opération</p>
                  </div>
                  <div className="bg-[#0B2C4D] rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-[#C9A24D]">2</p>
                    <p className="text-white/70 text-sm">Bureaux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-[#F7F9FC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 lg:h-96 bg-[#0B2C4D] rounded-xl overflow-hidden">
                  <img
                    src="/stylized-map-of-drc-congo-zambia-border-region-wit.jpg"
                    alt="Carte du corridor RDC-Zambie"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C4D] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white">Corridor stratégique RDC–Zambie</h3>
                    <p className="text-white/70 text-sm mt-2">
                      L'un des corridors commerciaux les plus actifs d'Afrique centrale et australe
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0B2C4D] mb-4">Un corridor commercial vital</h3>
                  <p className="text-[#64748B] mb-6">
                    Le corridor RDC-Zambie est essentiel pour l'économie de la région. Il permet le transit de
                    marchandises, d'équipements et de ressources entre deux des pays les plus riches en ressources
                    naturelles du continent africain.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C9A24D]" />
                      <span className="text-[#0B2C4D]">Corridor minier stratégique</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C9A24D]" />
                      <span className="text-[#0B2C4D]">Volume d'échanges en croissance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C9A24D]" />
                      <span className="text-[#0B2C4D]">Infrastructure en développement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RDC Zones */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-[#0B2C4D] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">RDC</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#0B2C4D]">République Démocratique du Congo</h2>
                <p className="text-[#64748B]">5 zones d'intervention stratégiques</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zonesRDC.map((zone, index) => (
                <div
                  key={index}
                  className="bg-[#F7F9FC] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#C9A24D] transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#0B2C4D] rounded-lg flex items-center justify-center flex-shrink-0">
                      <zone.icon className="w-6 h-6 text-[#C9A24D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#0B2C4D]">{zone.name}</h3>
                      <p className="text-[#C9A24D] text-sm font-medium">{zone.type}</p>
                    </div>
                  </div>
                  <p className="text-[#64748B] text-sm mb-4">{zone.description}</p>
                  <h4 className="text-sm font-semibold text-[#0B2C4D] mb-2">Importance stratégique :</h4>
                  <ul className="space-y-2">
                    {zone.importance.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-[#64748B]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zambie Zones */}
        <section className="py-20 bg-[#F7F9FC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-[#1F4E79] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">ZM</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#0B2C4D]">Zambie</h2>
                <p className="text-[#64748B]">Notre présence dans la Copperbelt</p>
              </div>
            </div>

            <div className="max-w-2xl">
              {zonesZambie.map((zone, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#C9A24D] transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#1F4E79] rounded-lg flex items-center justify-center flex-shrink-0">
                      <zone.icon className="w-7 h-7 text-[#C9A24D]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#0B2C4D]">{zone.name}</h3>
                      <p className="text-[#C9A24D] font-medium">{zone.type}</p>
                    </div>
                  </div>
                  <p className="text-[#64748B] mb-6">{zone.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {zone.importance.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#0B2C4D]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Zones */}
        <section className="py-20 bg-[#0B2C4D]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-white">Pourquoi ces zones ?</h2>
              <p className="mt-4 text-white/70">
                Notre choix de zones d'intervention est stratégique et répond aux besoins réels du commerce
                transfrontalier RDC-Zambie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1F4E79] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Volume d'échanges</h3>
                <p className="text-white/70">
                  Ces zones représentent plus de 90% du volume commercial transfrontalier entre les deux pays.
                </p>
              </div>
              <div className="bg-[#1F4E79] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Secteur minier</h3>
                <p className="text-white/70">
                  La Copperbelt RDC-Zambie est l'une des régions minières les plus importantes au monde.
                </p>
              </div>
              <div className="bg-[#1F4E79] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Proximité client</h3>
                <p className="text-white/70">
                  Notre présence locale garantit une réactivité optimale et une connaissance fine du terrain.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D]">
                <Link href="/contact">
                  Contactez notre équipe locale
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
