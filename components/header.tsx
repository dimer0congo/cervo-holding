"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef } from "react"
import {
  Menu,
  X,
  ChevronDown,
  Ship,
  FileCheck,
  Truck,
  FileText,
  Briefcase,
  MapPin,
  Building2,
  TrendingUp,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const megaMenuData = {
  Entreprise: {
    items: [
      { name: "À propos", href: "/a-propos", icon: Building2, description: "Découvrez notre histoire et notre équipe" },
      { name: "Mission & Vision", href: "/mission-vision", icon: Target, description: "Nos engagements et objectifs" },
      { name: "Valeur ajoutée", href: "/valeur-ajoutee", icon: TrendingUp, description: "Ce qui nous différencie" },
    ],
  },
  Services: {
    items: [
      {
        name: "Facilitation Import-Export",
        href: "/services#import-export",
        icon: Ship,
        description: "Accompagnement complet de vos opérations",
      },
      {
        name: "Dédouanement",
        href: "/services#dedouanement",
        icon: FileCheck,
        description: "Gestion des formalités douanières",
      },
      {
        name: "Transit & Logistique",
        href: "/services#transit",
        icon: Truck,
        description: "Transport transfrontalier sécurisé",
      },
      {
        name: "Assistance Documentaire",
        href: "/services#documents",
        icon: FileText,
        description: "Préparation de vos documents",
      },
      { name: "Conseil en Commerce", href: "/services#conseil", icon: Briefcase, description: "Expertise stratégique" },
    ],
  },
  Zones: {
    items: [
      {
        name: "RDC - Kasumbalesa",
        href: "/zones#kasumbalesa",
        icon: MapPin,
        description: "Principal poste frontalier",
      },
      {
        name: "RDC - Lubumbashi",
        href: "/zones#lubumbashi",
        icon: MapPin,
        description: "Centre économique du Haut-Katanga",
      },
      { name: "Zambie - Kitwe", href: "/zones#kitwe", icon: MapPin, description: "Hub logistique de la Copperbelt" },
    ],
  },
}

const navigation = [
  { name: "Accueil", href: "/", hasMega: false },
  { name: "Entreprise", href: "/a-propos", hasMega: true },
  { name: "Services", href: "/services", hasMega: true },
  { name: "Zones", href: "/zones", hasMega: true },
  { name: "Clients", href: "/clients", hasMega: false },
  { name: "Contact", href: "/contact", hasMega: false },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (name: string) => {
    setActiveMega(name)
  }

  const handleMouseLeave = () => {
    setActiveMega(null)
  }

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-[#E2E8F0]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CERVO HOLDING LTD Logo"
              width={56}
              height={56}
              className="w-14 h-14 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-[#0B2C4D] font-bold text-lg tracking-wide">CERVO HOLDING</p>
              <p className="text-[#C9A24D] text-xs tracking-widest font-semibold">LTD</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1" ref={navRef}>
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasMega && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#0B2C4D] hover:text-[#C9A24D] transition-colors duration-200"
                >
                  {item.name}
                  {item.hasMega && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeMega === item.name ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Mega Dropdown */}
                {item.hasMega && activeMega === item.name && megaMenuData[item.name as keyof typeof megaMenuData] && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    {/* Invisible bridge to keep hover active */}
                    <div className="absolute -top-2 left-0 right-0 h-2" />
                    <div className="bg-white rounded-xl shadow-2xl border border-[#E2E8F0] p-4 min-w-[320px] animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="space-y-1">
                        {megaMenuData[item.name as keyof typeof megaMenuData].items.map((subItem, index) => (
                          <Link
                            key={index}
                            href={subItem.href}
                            onClick={() => setActiveMega(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F7F9FC] transition-colors group"
                          >
                            <div className="w-10 h-10 bg-[#0B2C4D] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A24D] transition-colors">
                              <subItem.icon className="w-5 h-5 text-[#C9A24D] group-hover:text-[#0B2C4D] transition-colors" />
                            </div>
                            <div>
                              <p className="font-medium text-[#0B2C4D] text-sm">{subItem.name}</p>
                              <p className="text-[#64748B] text-xs mt-0.5">{subItem.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-[#E2E8F0]">
                        <Link
                          href={item.href}
                          onClick={() => setActiveMega(null)}
                          className="flex items-center justify-center gap-2 text-sm text-[#C9A24D] hover:text-[#0B2C4D] font-medium transition-colors"
                        >
                          Voir tout
                          <ChevronDown className="w-4 h-4 -rotate-90" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D] font-semibold">
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-[#0B2C4D] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E2E8F0] animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasMega ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full px-4 py-3 text-[#0B2C4D] hover:text-[#C9A24D] hover:bg-[#F7F9FC] rounded-lg transition-colors flex items-center justify-between font-medium"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileDropdown === item.name && megaMenuData[item.name as keyof typeof megaMenuData] && (
                        <div className="pl-4 mt-1 mb-2 space-y-1 animate-in slide-in-from-top-2 duration-150 bg-[#F7F9FC] rounded-lg py-2 mx-2">
                          {megaMenuData[item.name as keyof typeof megaMenuData].items.map((subItem, index) => (
                            <Link
                              key={index}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 text-[#0B2C4D]/80 hover:text-[#C9A24D] rounded-lg transition-colors"
                            >
                              <subItem.icon className="w-4 h-4 text-[#C9A24D]" />
                              <span className="text-sm">{subItem.name}</span>
                            </Link>
                          ))}
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-[#C9A24D] rounded-lg transition-colors font-medium"
                          >
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                            <span className="text-sm">Voir tout {item.name}</span>
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-3 text-[#0B2C4D] hover:text-[#C9A24D] hover:bg-[#F7F9FC] rounded-lg transition-colors flex items-center font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="mt-4 bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D] font-semibold">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
