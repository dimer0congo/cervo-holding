"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { completeOnboarding } from "@/lib/actions/user"
import { ChevronRight, CheckCircle2, Building2, Globe, Ship, UserCheck } from "lucide-react"

export default function OnboardingPage({ userEmail, isAdmin }: { userEmail: string, isAdmin: boolean }) {
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        activityType: "",
        frequency: "",
        region: "",
        companyName: "",
    })
    const router = useRouter()

    const totalSteps = isAdmin ? 1 : 3

    const handleComplete = async () => {
        setLoading(true)
        try {
            const result = await completeOnboarding(formData)
            if (result.success) {
                // Use replace to prevent back-button loops and force a hard reload
                // which helps refresh the Clerk session token for the middleware
                window.location.replace("/dashboard")
            } else {
                alert(result.error)
                setLoading(false)
            }
        } catch (error) {
            console.error("Error completing onboarding:", error)
            alert("Une erreur est survenue lors de la finalisation.")
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6">
            <div className="max-w-xl w-full">
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-12">
                    {[...Array(totalSteps)].map((_, i) => (
                        <div key={i} className="flex items-center flex-1 last:flex-none">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${step > i + 1 ? "bg-green-500 text-white" :
                                step === i + 1 ? "bg-[#0B2C4D] text-white" :
                                    "bg-white border border-[#E2E8F0] text-[#64748B]"
                                }`}>
                                {step > i + 1 ? <CheckCircle2 className="w-6 h-6" /> : i + 1}
                            </div>
                            {i < totalSteps - 1 && (
                                <div className={`h-1 flex-1 mx-4 rounded-full transition-all duration-500 ${step > i + 1 ? "bg-green-500" : "bg-[#E2E8F0]"
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-[#E2E8F0] animate-in fade-in slide-in-from-bottom-5 duration-500">
                    {isAdmin ? (
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#C9A24D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <UserCheck className="w-8 h-8 text-[#C9A24D]" />
                                </div>
                                <h1 className="text-2xl font-bold text-[#0B2C4D] font-serif mb-2">Configuration Administrateur</h1>
                                <p className="text-[#64748B]">Nous avons reconnu votre accès privilégié ({userEmail}).</p>
                            </div>
                            <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                                <p className="text-sm text-[#0B2C4D] leading-relaxed italic">
                                    "En tant qu'administrateur, vous aurez un accès complet à la gestion du contenu, aux articles de blog et aux statistiques du site."
                                </p>
                            </div>
                            <button
                                onClick={handleComplete}
                                disabled={loading}
                                className="w-full py-4 bg-[#0B2C4D] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#1F4E79] transition-all disabled:opacity-50"
                            >
                                {loading ? "Initialisation..." : "Accéder au Panel Admin"}
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {step === 1 && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <div className="text-center">
                                        <h2 className="text-2xl font-bold text-[#0B2C4D] font-serif mb-2">Parlez-nous de vous</h2>
                                        <p className="text-[#64748B]">Quel est le nom de votre entreprise ?</p>
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        placeholder="Ex: CERVO Logistics Ltd"
                                        className="w-full p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#0B2C4D]/10 outline-none transition-all"
                                    />
                                    <button
                                        onClick={() => setStep(2)}
                                        disabled={!formData.companyName}
                                        className="w-full py-4 bg-[#0B2C4D] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#1F4E79] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        Suivant <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <div className="text-center">
                                        <h2 className="text-2xl font-bold text-[#0B2C4D] font-serif mb-2">Votre activité</h2>
                                        <p className="text-[#64748B]">Quel type d'opérations gérez-vous ?</p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {["Import", "Export", "Transit"].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setFormData({ ...formData, activityType: type })}
                                                className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between group ${formData.activityType === type ? "border-[#C9A24D] bg-[#C9A24D]/5" : "border-[#E2E8F0] hover:border-[#0B2C4D]/30"
                                                    }`}
                                            >
                                                <span className={`font-bold uppercase tracking-widest text-xs ${formData.activityType === type ? "text-[#0B2C4D]" : "text-[#64748B]"}`}>
                                                    {type}
                                                </span>
                                                {formData.activityType === type && <CheckCircle2 className="w-5 h-5 text-[#C9A24D]" />}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(1)} className="flex-1 py-4 border border-[#E2E8F0] text-[#64748B] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#F8FAFC]">Retour</button>
                                        <button onClick={() => setStep(3)} disabled={!formData.activityType} className="flex-1 py-4 bg-[#0B2C4D] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#1F4E79] transition-all">Suivant</button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <div className="text-center">
                                        <h2 className="text-2xl font-bold text-[#0B2C4D] font-serif mb-2">Finalisation</h2>
                                        <p className="text-[#64748B]">Fréquence estimée de vos envois ?</p>
                                    </div>
                                    <select
                                        value={formData.frequency}
                                        onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                                        className="w-full p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#0B2C4D]/10 outline-none transition-all appearance-none"
                                    >
                                        <option value="">Sélectionnez une fréquence</option>
                                        <option value="weekly">Hebdomadaire</option>
                                        <option value="monthly">Mensuel</option>
                                        <option value="quarterly">Trimestriel</option>
                                    </select>
                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(2)} className="flex-1 py-4 border border-[#E2E8F0] text-[#64748B] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#F8FAFC]">Retour</button>
                                        <button
                                            onClick={handleComplete}
                                            disabled={!formData.frequency || loading}
                                            className="flex-1 py-4 bg-[#C9A24D] text-[#0B2C4D] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#D4B05C] transition-all disabled:opacity-50"
                                        >
                                            {loading ? "Création du profil..." : "Démarrer"}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
