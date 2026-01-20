"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
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
  LayoutGrid,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

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
  { name: "Blog", href: "/blog", hasMega: false },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (name: string) => {
    setActiveMega(name)
  }

  const handleMouseLeave = () => {
    setActiveMega(null)
  }

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name)
  }

  // Derived state for colors based on scroll
  const textColor = scrolled ? "text-[#0B2C4D]" : "text-white"
  const logoFilter = scrolled ? "none" : "brightness(0) invert(1)"
  const borderColor = scrolled ? "border-black/5" : "border-white/10"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-lg py-3"
        : "bg-transparent py-6"
        } ${borderColor}`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="CERVO HOLDING LTD Logo"
                width={56}
                height={56}
                style={{ filter: logoFilter }}
                className={`object-contain transition-all duration-500 ${scrolled ? "w-10 h-10" : "w-12 h-12"}`}
              />
            </div>
            <div className="hidden sm:block">
              <p className={`font-bold tracking-widest uppercase transition-all duration-500 ${textColor} ${scrolled ? "text-sm" : "text-base"}`}>
                Cervo Holding
              </p>
              <p className={`${scrolled ? "text-[#C9A24D]" : "text-white/80"} text-[10px] tracking-[0.3em] font-medium uppercase`}>LTD</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-10" ref={navRef}>
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasMega && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`relative group flex items-center gap-1 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${textColor} hover:text-[#C9A24D]`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.hasMega && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${activeMega === item.name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A24D] transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Mega Dropdown - Ultra Premium */}
                {item.hasMega && activeMega === item.name && megaMenuData[item.name as keyof typeof megaMenuData] && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-8">
                    {/* Invisible bridge to keep hover active */}
                    <div className="absolute -top-8 left-0 right-0 h-8" />

                    <div className="bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-1 animate-in fade-in slide-in-from-top-4 duration-300 ring-1 ring-black/5">
                      <div className="bg-[#F8FAFC] rounded-lg p-6 min-w-[380px]">
                        <div className="flex flex-col gap-2">
                          {megaMenuData[item.name as keyof typeof megaMenuData].items.map((subItem, index) => (
                            <Link
                              key={index}
                              href={subItem.href}
                              onClick={() => setActiveMega(null)}
                              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-all duration-200 group/item hover:shadow-sm border border-transparent hover:border-[#E2E8F0]"
                            >
                              <div className="w-8 h-8 rounded-full bg-[#0B2C4D]/5 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#0B2C4D] transition-all duration-300">
                                <subItem.icon className="w-4 h-4 text-[#0B2C4D] group-hover/item:text-[#C9A24D] transition-colors duration-300" />
                              </div>
                              <div>
                                <p className="font-bold text-[#0B2C4D] text-xs uppercase tracking-wide group-hover/item:text-[#1F4E79] transition-colors">
                                  {subItem.name}
                                </p>
                                <p className="text-[#64748B] text-[11px] mt-1 leading-relaxed font-medium">{subItem.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-[#E2E8F0]/50 flex justify-center">
                          <Link
                            href={item.href}
                            onClick={() => setActiveMega(null)}
                            className="text-[10px] text-[#C9A24D] hover:text-[#0B2C4D] font-bold uppercase tracking-[0.2em] transition-colors flex items-center gap-2"
                          >
                            Tout découvrir
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  className={`font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-lg ${scrolled
                    ? "bg-[#0B2C4D] text-white hover:bg-[#1F4E79] shadow-lg shadow-[#0B2C4D]/20 h-10 px-6"
                    : "bg-white text-[#0B2C4D] hover:bg-[#F8FAFC] hover:scale-105 h-11 px-7 border-0"
                    }`}
                >
                  Connexion
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-6">
                <Link
                  href="/dashboard"
                  className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${textColor} hover:text-[#C9A24D]`}
                >
                  Tableau de Bord
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-10 h-10 border-2 border-[#C9A24D]'
                    }
                  }}
                />
              </div>
            </SignedIn>

            <Button
              asChild
              className={`font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-lg ${scrolled
                ? "bg-[#C9A24D] text-[#0B2C4D] hover:bg-[#D4B05C] h-10 px-6"
                : "bg-transparent text-white border border-white/20 hover:bg-white/10 h-11 px-7"
                }`}
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 transition-colors ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 py-4 px-4 bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl animate-in slide-in-from-top-2 duration-300 h-screen">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-[#0B2C4D] border-b border-gray-100 pb-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 space-y-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button className="w-full bg-transparent border border-[#0B2C4D] text-[#0B2C4D] hover:bg-[#0B2C4D] hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                      Se connecter
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] hover:border-[#C9A24D] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0B2C4D] flex items-center justify-center">
                      <LayoutGrid className="w-4 h-4 text-[#C9A24D]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#0B2C4D]">Tableau de Bord</span>
                      <span className="text-[10px] text-[#64748B] uppercase tracking-wider">Gérer vos opérations</span>
                    </div>
                  </Link>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E2E8F0]">
                    <UserButton />
                    <span className="text-sm font-bold text-[#0B2C4D]">Mon Profil</span>
                  </div>
                </SignedIn>

                <Button className="w-full bg-[#0B2C4D] text-white" asChild onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
