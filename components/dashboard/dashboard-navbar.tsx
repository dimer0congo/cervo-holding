"use client"

import { useUser, UserButton } from "@clerk/nextjs"
import { Bell, Search, Menu, UserCircle } from "lucide-react"

export function DashboardNavbar() {
    const { user, isLoaded } = useUser()

    if (!isLoaded) return <header className="bg-white border-b border-[#E2E8F0] h-20" />

    const role = (user?.publicMetadata?.role as string) || 'client'

    return (
        <header className="bg-white border-b border-[#E2E8F0] h-20 sticky top-0 z-40 flex items-center justify-between px-8">
            {/* Search Bar */}
            <div className="flex-1 max-w-md relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                <input
                    type="text"
                    placeholder={role === 'admin' ? "Rechercher un article..." : "Rechercher une opération..."}
                    className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2C4D]/10 transition-all"
                />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 ml-auto">
                <button className="relative p-2 text-[#64748B] hover:text-[#0B2C4D] transition-colors group">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C9A24D] rounded-full border-2 border-white group-hover:scale-110 transition-transform" />
                </button>

                <div className="h-8 w-px bg-[#E2E8F0]" />

                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-[#0B2C4D]">
                            {user?.fullName || "Partenaire"}
                        </p>
                        <p className="text-[10px] text-[#C9A24D] font-bold uppercase tracking-widest flex items-center justify-end gap-1">
                            <UserCircle className="w-3 h-3" />
                            {role === 'admin' ? 'Administrateur' : 'Espace Client'}
                        </p>
                    </div>
                    <UserButton afterSignOutUrl="/" appearance={{
                        elements: {
                            userButtonAvatarBox: 'w-10 h-10 border-2 border-[#C9A24D]/20'
                        }
                    }} />
                </div>
            </div>
        </header>
    )
}
