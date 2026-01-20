"use client"

import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { LayoutGrid, Package, Truck, FileText, Bell, Settings, User, Loader2, Plus } from "lucide-react"
import { getArticles, getCategories } from "@/lib/actions/blog"
import Link from "next/link"

export default function DashboardPage() {
    const { user, isLoaded } = useUser()
    const [counts, setCounts] = useState({ articles: 0, categories: 0 })
    const [loadingStats, setLoadingStats] = useState(false)

    useEffect(() => {
        if (isLoaded && user?.publicMetadata?.role === 'admin') {
            const fetchStats = async () => {
                setLoadingStats(true)
                try {
                    const [articles, categories] = await Promise.all([
                        getArticles(),
                        getCategories()
                    ])
                    setCounts({
                        articles: articles.length,
                        categories: categories.length
                    })
                } catch (error) {
                    console.error("Error fetching stats:", error)
                } finally {
                    setLoadingStats(false)
                }
            }
            fetchStats()
        }
    }, [isLoaded, user])

    if (!isLoaded) return null

    const role = (user?.publicMetadata?.role as string) || 'client'

    const adminStats = [
        { name: "Total Articles", value: counts.articles.toString(), icon: FileText, change: "En direct", changeType: "positive" },
        { name: "Catégories", value: counts.categories.toString(), icon: LayoutGrid, change: "Organisées", changeType: "positive" },
        { name: "Messages", value: "0", icon: Bell, change: "À traiter", changeType: "warning" },
    ]

    const clientStats = [
        { name: "Expéditions", value: "12", icon: Truck, change: "+2 cette semaine", changeType: "positive" },
        { name: "Documents", value: "45", icon: FileText, change: "+5 nouveaux", changeType: "positive" },
        { name: "Alertes", value: "2", icon: Bell, change: "Action requise", changeType: "warning" },
    ]

    const stats = role === 'admin' ? adminStats : clientStats

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0B2C4D] font-serif">
                        Bonjour, <span className="text-[#C9A24D] italic">{user?.firstName || "Partenaire"}</span>
                    </h1>
                    <p className="text-[#64748B] mt-2">
                        {role === 'admin'
                            ? "Ravie de vous revoir. Voici l'état actuel du site et de votre contenu."
                            : "Ravie de vous revoir. Voici l'aperçu de vos activités logistiques."}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {role === 'admin' ? (
                        <Link
                            href="/dashboard/blog/new"
                            className="flex items-center gap-2 px-6 py-3 bg-[#0B2C4D] text-white rounded-xl hover:bg-[#1F4E79] transition-all shadow-lg shadow-[#0B2C4D]/20 font-bold text-xs uppercase tracking-widest"
                        >
                            <Plus className="w-4 h-4" />
                            Nouvel Article
                        </Link>
                    ) : (
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#0B2C4D] text-white rounded-xl hover:bg-[#1F4E79] transition-all shadow-lg shadow-[#0B2C4D]/20 font-bold text-xs uppercase tracking-widest">
                            <Truck className="w-4 h-4" />
                            Nouvelle Expédition
                        </button>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 bg-[#0B2C4D]/5 rounded-2xl flex items-center justify-center">
                                <stat.icon className="w-7 h-7 text-[#0B2C4D]" />
                            </div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${stat.changeType === 'positive' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                }`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-[#64748B] text-sm font-medium uppercase tracking-wide mb-1">{stat.name}</p>
                        <h3 className="text-4xl font-bold text-[#0B2C4D]">
                            {loadingStats && role === 'admin' ? (
                                <Loader2 className="w-8 h-8 animate-spin inline-block" />
                            ) : (
                                stat.value
                            )}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Role Specific Content */}
                <div className="lg:col-span-2 space-y-8">
                    {role === 'admin' ? (
                        <div className="bg-white rounded-[2.5rem] p-8 border border-[#E2E8F0] shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold text-[#0B2C4D] font-serif">Aperçu rapide</h2>
                                <Link href="/dashboard/blog" className="text-[#C9A24D] font-bold text-xs uppercase tracking-widest hover:text-[#0B2C4D] transition-colors">
                                    Gérer tout le contenu
                                </Link>
                            </div>

                            <div className="p-12 border-2 border-dashed border-[#F1F5F9] rounded-[2rem] flex flex-col items-center justify-center text-center">
                                <LayoutGrid className="w-12 h-12 text-[#E2E8F0] mb-4" />
                                <p className="text-[#64748B] font-medium mb-6">Prêt à publier de nouveaux contenus ?</p>
                                <Link
                                    href="/dashboard/blog/new"
                                    className="px-8 py-3 bg-[#0B2C4D] text-white rounded-xl hover:bg-[#1F4E79] transition-all font-bold text-xs uppercase tracking-widest"
                                >
                                    Rédiger mon prochain article
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-[2.5rem] p-8 border border-[#E2E8F0] shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold text-[#0B2C4D] font-serif">Expéditions en cours</h2>
                                <button className="text-[#C9A24D] font-bold text-xs uppercase tracking-widest hover:text-[#0B2C4D] transition-colors">
                                    Tout voir
                                </button>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl border border-[#F1F5F9] hover:border-[#C9A24D]/30 transition-all hover:bg-[#F8FAFC] group">
                                        <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                            <div className="w-12 h-12 bg-[#0B2C4D] rounded-xl flex items-center justify-center text-white font-bold text-xs">
                                                {i === 1 ? 'ZM' : 'CD'}
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#0B2C4D]">Cargaison #{12344 + i}</p>
                                                <p className="text-xs text-[#64748B]">Transit Lusaka ➔ Lubumbashi</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between sm:gap-12">
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-[#0B2C4D]">En transit</p>
                                                <p className="text-[10px] text-[#64748B] uppercase tracking-tighter">Étape 3/5</p>
                                            </div>
                                            <div className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Actions / Profile */}
                <div className="space-y-8">
                    <div className="bg-[#0B2C4D] rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A24D] rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity" />

                        <h2 className="text-xl font-bold mb-8 font-serif relative z-10">Documents Récents</h2>
                        <div className="space-y-4 relative z-10">
                            {[1, 2].map((doc) => (
                                <div key={doc} className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="w-10 h-10 rounded-lg bg-[#C9A24D]/20 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-[#C9A24D]" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-bold truncate">Facture_{2024 + doc}_00{doc}.pdf</p>
                                        <p className="text-[10px] text-white/50">Ajouté hier</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm">
                        <h2 className="text-lg font-bold text-[#0B2C4D] mb-6 font-serif">Assistance 24/7</h2>
                        <p className="text-[#64748B] text-sm mb-6 leading-relaxed">
                            {role === 'admin'
                                ? "Un problème technique sur le site ? Contactez le support IT."
                                : "Besoins de conseils sur un poste frontalier ? Contactez votre agent dédié."}
                        </p>
                        <button className="w-full bg-[#C9A24D] text-[#0B2C4D] py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#D4B05C] transition-all">
                            {role === 'admin' ? "Support IT" : "Appeler mon agent"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
