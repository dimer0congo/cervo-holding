"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

const services = [
  "Facilitation import-export",
  "Dédouanement",
  "Transit & Logistique",
  "Assistance documentaire",
  "Conseil en commerce international",
  "Autre",
]

const clientTypes = [
  "Importateur",
  "Exportateur",
  "Commerçant transfrontalier",
  "Entreprise minière",
  "Secteur agro-alimentaire",
  "Industrie",
  "Autre",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#F7F9FC] rounded-xl p-8 text-center border border-[#E2E8F0]">
        <div className="w-16 h-16 bg-[#0B2C4D] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-[#C9A24D]" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B2C4D] mb-2">Message envoyé !</h3>
        <p className="text-[#64748B] mb-6">
          Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-[#0B2C4D] hover:bg-[#1F4E79] text-white">
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-[#0B2C4D]">
            Prénom <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="Votre prénom"
            className="border-[#E2E8F0] focus:border-[#C9A24D] focus:ring-[#C9A24D]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[#0B2C4D]">
            Nom <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Votre nom"
            className="border-[#E2E8F0] focus:border-[#C9A24D] focus:ring-[#C9A24D]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-[#0B2C4D]">
          Entreprise
        </Label>
        <Input
          id="company"
          name="company"
          placeholder="Nom de votre entreprise"
          className="border-[#E2E8F0] focus:border-[#C9A24D] focus:ring-[#C9A24D]"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#0B2C4D]">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre@email.com"
            className="border-[#E2E8F0] focus:border-[#C9A24D] focus:ring-[#C9A24D]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#0B2C4D]">
            Téléphone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+243 XX XXX XXXX"
            className="border-[#E2E8F0] focus:border-[#C9A24D] focus:ring-[#C9A24D]"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="clientType" className="text-[#0B2C4D]">
            Type de client
          </Label>
          <Select name="clientType">
            <SelectTrigger className="border-[#E2E8F0] focus:border-[#C9A24D] focus:ring-[#C9A24D]">
              <SelectValue placeholder="Sélectionnez" />
            </SelectTrigger>
            <SelectContent>
              {clientTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="service" className="text-[#0B2C4D]">
            Service souhaité
          </Label>
          <Select name="service">
            <SelectTrigger className="border-[#E2E8F0] focus:border-[#C9A24D] focus:ring-[#C9A24D]">
              <SelectValue placeholder="Sélectionnez" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#0B2C4D]">
          Votre message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet ou votre demande..."
          className="border-[#E2E8F0] focus:border-[#C9A24D] focus:ring-[#C9A24D] resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#C9A24D] hover:bg-[#B8923B] text-[#0B2C4D] font-semibold py-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer le message"
        )}
      </Button>

      <p className="text-[#64748B] text-sm text-center">
        En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
      </p>
    </form>
  )
}
