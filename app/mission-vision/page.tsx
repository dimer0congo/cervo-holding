import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { HeroCarousel } from "@/components/hero-carousel"
import { Target, Eye, Shield, Scale, Zap, Heart, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Mission, Vision & Valeurs | CERVO HOLDING LTD",
  description:
    "Découvrez la mission, la vision et les valeurs qui guident CERVO HOLDING LTD dans sa quête d'excellence pour le commerce transfrontalier RDC-Zambie.",
}

const heroImages = [
  { src: "/images/mission-1.jpg", alt: "CERVO HOLDING - Notre mission" },
  { src: "/images/mission-2.jpg", alt: "CERVO HOLDING - Notre vision" },
]

const values = [
  {
    icon: Shield,
    title: "Transparence",
    description:
      "Nous croyons en une communication ouverte et honnête avec nos clients. Chaque étape de vos opérations est documentée et expliquée clairement, sans frais cachés ni surprises.",
    points: ["Tarification claire et détaillée", "Rapports d'avancement réguliers", "Documentation complète fournie"],
  },
  {
    icon: Scale,
    title: "Fiabilité",
    description:
      "Nos engagements sont nos promesses. Nous mettons tout en œuvre pour respecter les délais convenus et garantir la qualité de nos services à chaque opération.",
    points: ["Respect des délais annoncés", "Qualité de service constante", "Suivi rigoureux des opérations"],
  },
  {
    icon: Zap,
    title: "Rapidité",
    description:
      "Le temps, c'est de l'argent. Nos processus optimisés et notre expertise du terrain nous permettent de réduire significativement les délais de vos opérations.",
    points: ["Procédures accélérées", "Réponse sous 24 heures", "Traitement prioritaire"],
  },
  {
    icon: Heart,
    title: "Conformité",
    description:
      "Nous opérons dans le strict respect des lois et réglementations des deux pays. Votre sécurité juridique est notre priorité absolue.",
    points: ["Respect des réglementations", "Documentation légale complète", "Veille réglementaire continue"],
  },
]

const missionPoints = [
  "Simplifier les procédures administratives complexes",
  "Réduire les coûts logistiques et douaniers",
  "Minimiser les délais de transit",
  "Garantir la conformité réglementaire totale",
  "Accompagner les entreprises de toutes tailles",
  "Contribuer au développement du commerce régional",
]

const visionPoints = [
  "Excellence opérationnelle reconnue",
  "Innovation continue dans nos services",
  "Expansion de notre réseau régional",
  "Digitalisation des processus",
  "Formation et développement des compétences locales",
]

export default function MissionVisionPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0B2C4D] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Notre engagement</span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Mission, Vision & Valeurs
                </h1>
                <p className="mt-6 text-xl text-white/80 leading-relaxed">
                  Les principes fondamentaux qui guident notre action quotidienne et notre vision à long terme pour le
                  commerce transfrontalier RDC-Zambie.
                </p>
              </div>

              {/* Carousel */}
              <div className="h-[300px] sm:h-[400px] lg:h-[450px]">
                <HeroCarousel images={heroImages} autoPlayInterval={5000} />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-[#0B2C4D] rounded-3xl p-10 lg:p-12">
                <div className="w-20 h-20 bg-[#C9A24D]/20 rounded-2xl flex items-center justify-center mb-8">
                  <Target className="w-10 h-10 text-[#C9A24D]" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Notre Mission</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Simplifier les opérations d'import-export entre la République Démocratique du Congo et la Zambie en
                  offrant des services de facilitation complets, professionnels et conformes aux réglementations en
                  vigueur.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B2C4D] mb-6">Ce que cela signifie concrètement</h3>
                <ul className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#C9A24D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-[#C9A24D]" />
                      </div>
                      <span className="text-[#64748B]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-[#F7F9FC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-[#0B2C4D] mb-6">Nos ambitions pour l'avenir</h3>
                <ul className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0B2C4D] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-3 h-3 text-[#C9A24D]" />
                      </div>
                      <span className="text-[#64748B]">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild className="bg-[#0B2C4D] hover:bg-[#1F4E79] text-white">
                    <Link href="/services">
                      Découvrir nos services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2 bg-[#1F4E79] rounded-3xl p-10 lg:p-12">
                <div className="w-20 h-20 bg-[#C9A24D]/20 rounded-2xl flex items-center justify-center mb-8">
                  <Eye className="w-10 h-10 text-[#C9A24D]" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Notre Vision</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Devenir le partenaire de référence du commerce transfrontalier sur le corridor RDC-Zambie, reconnu
                  pour notre excellence opérationnelle, notre intégrité et notre contribution au développement
                  économique de la région.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Nos fondements</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B2C4D]">Nos Valeurs</h2>
              <p className="mt-4 text-[#64748B]">
                Les valeurs qui définissent notre culture d'entreprise et guident chacune de nos actions au quotidien.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#C9A24D] transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 bg-[#0B2C4D] rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-8 h-8 text-[#C9A24D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#0B2C4D] mb-2">{value.title}</h3>
                      <p className="text-[#64748B] mb-4">{value.description}</p>
                      <ul className="space-y-2">
                        {value.points.map((point, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-[#0B2C4D]">
                            <div className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Banner */}
        <section className="py-16 bg-[#C9A24D]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2C4D] mb-4">
                Notre engagement envers vous est total
              </h2>
              <p className="text-[#0B2C4D]/80 max-w-2xl mx-auto mb-8">
                Chaque opération que nous accompagnons reflète nos valeurs. Nous nous engageons à maintenir les plus
                hauts standards d'éthique et de professionnalisme.
              </p>
              <Button asChild className="bg-[#0B2C4D] hover:bg-[#1F4E79] text-white">
                <Link href="/contact">
                  Contactez-nous
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
