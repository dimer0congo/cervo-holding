import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Mail, Phone, Clock, Building, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | CERVO HOLDING LTD",
  description:
    "Contactez CERVO HOLDING LTD pour vos besoins en import-export RDC-Zambie. Bureaux à Lubumbashi (RDC) et Kitwe (Zambie).",
}

const offices = [
  {
    country: "République Démocratique du Congo",
    city: "Lubumbashi",
    address: "Avenue du Commerce, Lubumbashi",
    phone: "+243 81 51 94 500",
    email: "rdc@cervoholding.com",
    hours: "Lun - Ven: 8h00 - 17h00",
    flag: "RDC",
  },
  {
    country: "Zambie",
    city: "Kitwe",
    address: "Independence Avenue, Kitwe",
    phone: "+243 81 51 94 500",
    email: "zambia@cervoholding.com",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM",
    flag: "ZM",
  },
]

const reasons = [
  {
    icon: Clock,
    title: "Réponse rapide",
    description: "Nous répondons à toutes les demandes sous 24 heures ouvrées.",
  },
  {
    icon: Globe,
    title: "Présence locale",
    description: "Bureaux en RDC et en Zambie pour un accompagnement de proximité.",
  },
  {
    icon: Building,
    title: "Expertise complète",
    description: "Une équipe qualifiée pour répondre à tous vos besoins.",
  },
]

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section - Premium Centered */}
      <section className="bg-[#0B2C4D] pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C9A24D] rounded-full blur-[150px] opacity-20" />
        </div>

        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16 text-center relative z-10">
          <span className="text-[#C9A24D] font-bold text-xs uppercase tracking-[0.3em] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
            Contactez-nous
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 text-balance animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100 font-serif">
            Démarrons votre opération d'import-export en <span className="text-[#C9A24D] italic">toute sécurité</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Notre équipe est à votre disposition pour discuter de vos besoins et vous proposer les solutions les
            mieux adaptées à votre activité.
          </p>
        </div>
      </section>

      {/* Contact Form & Info - Centered Editorial Layout */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#0B2C4D] mb-4 font-serif">Envoyez-nous un message</h2>
                <p className="text-[#64748B] text-lg">
                  Remplissez le formulaire ci-dessous et nous vous répondons dans les plus brefs délais.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-[#E2E8F0] shadow-sm">
                <ContactForm />
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-[#0B2C4D] mb-8 font-serif">Nos bureaux</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#C9A24D] hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-[#0B2C4D] rounded-xl flex items-center justify-center shadow-lg shadow-[#0B2C4D]/20">
                          <span className="text-white font-bold text-xs">{office.flag}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0B2C4D] text-lg">{office.city}</h3>
                          <p className="text-[#C9A24D] text-sm font-medium uppercase tracking-wide">{office.country}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-2 rounded-lg group-hover:bg-[#F8FAFC] transition-colors">
                          <MapPin className="w-5 h-5 text-[#C9A24D] flex-shrink-0 mt-0.5" />
                          <span className="text-[#64748B] text-sm leading-relaxed">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg group-hover:bg-[#F8FAFC] transition-colors">
                          <Phone className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                          <span className="text-[#64748B] text-sm font-medium">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg group-hover:bg-[#F8FAFC] transition-colors">
                          <Mail className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                          <span className="text-[#64748B] text-sm font-medium">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg group-hover:bg-[#F8FAFC] transition-colors">
                          <Clock className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                          <span className="text-[#64748B] text-sm">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email general */}
              <div className="bg-[#0B2C4D] rounded-2xl p-8 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A24D] rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity" />

                <h3 className="text-lg font-bold text-white mb-4 relative z-10">Contact général</h3>
                <div className="flex items-center justify-center gap-3 relative z-10">
                  <Mail className="w-5 h-5 text-[#C9A24D]" />
                  <a
                    href="mailto:contact@cervoholding.com"
                    className="text-white hover:text-[#C9A24D] transition-colors font-medium"
                  >
                    contact@cervoholding.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us - Minimalist Grid */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[#C9A24D]/20 transition-all duration-300">
                <div className="w-16 h-16 bg-[#0B2C4D]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-[#0B2C4D]" />
                </div>
                <h3 className="font-bold text-[#0B2C4D] mb-3 text-lg font-serif">{reason.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - Premium Style */}
      <section className="py-24 bg-[#C9A24D] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0B2C4D] opacity-10 mix-blend-overlay" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white opacity-20 blur-[100px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-4xl px-8 md:px-12 lg:px-16 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B2C4D] mb-6 font-serif">
            Prêt à simplifier vos opérations commerciales ?
          </h2>
          <p className="text-[#0B2C4D] text-xl max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
            Notre équipe est disponible pour vous accompagner dans vos projets d'import-export entre la RDC et la
            Zambie. N'hésitez pas à nous contacter pour toute question ou demande de devis.
          </p>
        </div>
      </section>
    </main>
  )
}
