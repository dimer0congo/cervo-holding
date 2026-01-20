import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ClerkProvider } from "@clerk/nextjs"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "CERVO HOLDING LTD | Facilitation Import-Export RDC-Zambie",
  description:
    "CERVO HOLDING LTD est votre partenaire de confiance pour la facilitation des opérations d'import-export entre la RDC et la Zambie. Dédouanement rapide, conformité réglementaire et accompagnement personnalisé.",
  keywords:
    "import export, RDC, Zambie, dédouanement, transit, logistique, commerce transfrontalier, Kasumbalesa, Lubumbashi",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#0B2C4D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
    >
      <html lang="fr">
        <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
