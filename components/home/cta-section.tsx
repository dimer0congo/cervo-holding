import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0B2C4D] rounded-3xl p-8 lg:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F4E79] rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A24D] rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight text-balance">
                Prêt à simplifier vos opérations d'import-export ?
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment CERVO HOLDING LTD peut
                faciliter vos échanges commerciaux entre la RDC et la Zambie.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D] font-semibold">
                  <Link href="/contact">
                    Contactez-nous
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
                >
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#1F4E79] rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C9A24D]/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C9A24D]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white font-medium">contact@cervoholding.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C9A24D]/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C9A24D]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Téléphone</p>
                    <p className="text-white font-medium">+243 XX XXX XXXX</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  Bureaux à <span className="text-[#C9A24D]">Lubumbashi, RDC</span> et{" "}
                  <span className="text-[#C9A24D]">Kitwe, Zambie</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
