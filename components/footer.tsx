import Link from "next/link"
import { MapPin, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0B2C4D] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#C9A24D] rounded-lg flex items-center justify-center">
                <span className="text-[#0B2C4D] font-bold text-xl">CH</span>
              </div>
              <div>
                <p className="font-semibold text-lg">CERVO HOLDING</p>
                <p className="text-[#C9A24D] text-xs tracking-widest">LTD</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Votre partenaire de confiance pour la facilitation des opérations d'import-export entre la RDC et la
              Zambie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#C9A24D] font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-white/70 hover:text-[#C9A24D] transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-[#C9A24D] transition-colors text-sm">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/zones" className="text-white/70 hover:text-[#C9A24D] transition-colors text-sm">
                  Zones d'intervention
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#C9A24D] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#C9A24D] font-semibold mb-6">Nos services</h3>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">Import-Export RDC-Zambie</li>
              <li className="text-white/70 text-sm">Dédouanement</li>
              <li className="text-white/70 text-sm">Transit & Logistique</li>
              <li className="text-white/70 text-sm">Conseil en commerce</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C9A24D] font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A24D] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Lubumbashi, RDC
                  <br />
                  Kitwe, Zambie
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                <span className="text-white/70 text-sm">contact@cervoholding.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                <span className="text-white/70 text-sm">Lun - Ven: 8h00 - 17h00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1F4E79] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} CERVO HOLDING LTD. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-white/60 hover:text-[#C9A24D] text-sm transition-colors">
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-white/60 hover:text-[#C9A24D] text-sm transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
