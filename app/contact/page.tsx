import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Mail, Phone, Clock, Building, Globe } from "lucide-react"

export const metadata = {
  title: "Contact | CERVO HOLDING LTD",
  description:
    "Contactez CERVO HOLDING LTD pour vos besoins en import-export RDC-Zambie. Bureaux à Lubumbashi (RDC) et Kitwe (Zambie).",
}

const offices = [
  {
    country: "République Démocratique du Congo",
    city: "Lubumbashi",
    address: "Avenue du Commerce, Lubumbashi",
    phone: "+243 XX XXX XXXX",
    email: "rdc@cervoholding.com",
    hours: "Lun - Ven: 8h00 - 17h00",
    flag: "RDC",
  },
  {
    country: "Zambie",
    city: "Kitwe",
    address: "Independence Avenue, Kitwe",
    phone: "+260 XX XXX XXXX",
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
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0B2C4D] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#C9A24D] font-semibold text-sm uppercase tracking-widest">Contactez-nous</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
                Démarrons votre opération d'import-export en toute sécurité
              </h1>
              <p className="mt-6 text-xl text-white/80 leading-relaxed">
                Notre équipe est à votre disposition pour discuter de vos besoins et vous proposer les solutions les
                mieux adaptées à votre activité.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#0B2C4D] mb-2">Envoyez-nous un message</h2>
                <p className="text-[#64748B] mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6">Nos bureaux</h2>

                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-[#F7F9FC] rounded-xl p-6 border border-[#E2E8F0]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#0B2C4D] rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{office.flag}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#0B2C4D]">{office.city}</h3>
                          <p className="text-[#64748B] text-sm">{office.country}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#C9A24D] flex-shrink-0 mt-0.5" />
                          <span className="text-[#64748B] text-sm">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                          <span className="text-[#64748B] text-sm">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                          <span className="text-[#64748B] text-sm">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                          <span className="text-[#64748B] text-sm">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Email general */}
                <div className="mt-8 bg-[#0B2C4D] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact général</h3>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#C9A24D]" />
                    <a
                      href="mailto:contact@cervoholding.com"
                      className="text-white hover:text-[#C9A24D] transition-colors"
                    >
                      contact@cervoholding.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us */}
        <section className="py-16 bg-[#F7F9FC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-[#0B2C4D] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-7 h-7 text-[#C9A24D]" />
                  </div>
                  <h3 className="font-semibold text-[#0B2C4D] mb-2">{reason.title}</h3>
                  <p className="text-[#64748B] text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-[#C9A24D]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2C4D] mb-4">
              Prêt à simplifier vos opérations commerciales ?
            </h2>
            <p className="text-[#0B2C4D]/80 max-w-2xl mx-auto">
              Notre équipe est disponible pour vous accompagner dans vos projets d'import-export entre la RDC et la
              Zambie. N'hésitez pas à nous contacter pour toute question ou demande de devis.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
