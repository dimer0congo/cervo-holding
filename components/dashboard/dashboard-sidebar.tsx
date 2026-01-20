"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutGrid,
    FileText,
    Image,
    Bell,
    Settings,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Truck,
    MessageSquare,
    CreditCard
} from "lucide-react"
import { useState } from "react"
import { SignedIn, UserButton, useUser } from "@clerk/nextjs"

interface NavItem {
    name: string;
    href: string;
    icon: any;
    isParent?: boolean;
    children?: { name: string; href: string }[];
}

const adminNavigation: NavItem[] = [
    { name: "Vue d'ensemble", href: "/dashboard", icon: LayoutGrid },
    {
        name: "Blog",
        href: "/dashboard/blog",
        icon: FileText,
        isParent: true,
        children: [
            { name: "Articles", href: "/dashboard/blog" },
            { name: "Catégories", href: "/dashboard/blog/categories" },
            { name: "Nouvel Article", href: "/dashboard/blog/new" },
        ]
    },
    { name: "Médias", href: "/dashboard/medias", icon: Image },
    { name: "Messages", href: "/dashboard/messages", icon: Bell },
    { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
]

const clientNavigation: NavItem[] = [
    { name: "Tableau de Bord", href: "/dashboard", icon: LayoutGrid },
    { name: "Mes Expéditions", href: "/dashboard/expeditions", icon: Truck },
    { name: "Mes Documents", href: "/dashboard/documents", icon: CreditCard },
    { name: "Support", href: "/dashboard/support", icon: MessageSquare },
    { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar() {
    const { user, isLoaded } = useUser()
    const [collapsed, setCollapsed] = useState(false)
    const [openSubmenu, setOpenSubmenu] = useState<string | null>("Blog")
    const pathname = usePathname()

    if (!isLoaded) return <aside className="bg-[#0B2C4D] w-64 h-screen" />

    const role = (user?.publicMetadata?.role as string) || 'client'
    const navigation = role === 'admin' ? adminNavigation : clientNavigation

    const toggleSubmenu = (name: string) => {
        setOpenSubmenu(openSubmenu === name ? null : name)
    }

    return (
        <aside
            className={`bg-[#0B2C4D] text-white flex flex-col transition-all duration-300 ${collapsed ? "w-20" : "w-64"} h-screen sticky top-0 z-50`}
        >
            {/* Logo Section */}
            <div className="p-6 flex items-center justify-between border-b border-white/10 shrink-0">
                {!collapsed && (
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#C9A24D] flex items-center justify-center font-bold text-[#0B2C4D]">C</div>
                        <span className="font-bold text-sm tracking-widest uppercase">Cervo</span>
                    </Link>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors mx-auto"
                >
                    {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 mt-4 overflow-y-auto no-scrollbar">
                {navigation.map((item) => {
                    const isActive = pathname === item.href || (item.children?.some(child => pathname === child.href))
                    const isSubmenuOpen = openSubmenu === item.name

                    return (
                        <div key={item.name} className="space-y-1">
                            <div
                                className={`flex items-center justify-between p-3 rounded-xl transition-all group cursor-pointer ${isActive && !item.isParent ? "bg-[#C9A24D] text-[#0B2C4D]" : "hover:bg-white/5 text-white/70 hover:text-white"
                                    }`}
                                onClick={() => item.isParent ? toggleSubmenu(item.name) : null}
                            >
                                <Link href={item.isParent ? "#" : item.href} className="flex items-center gap-4 flex-1" onClick={(e) => item.isParent && e.preventDefault()}>
                                    <item.icon className={`w-5 h-5 ${isActive ? "text-[#C9A24D]" : "text-[#C9A24D]"}`} />
                                    {!collapsed && <span className="text-sm font-bold uppercase tracking-wider">{item.name}</span>}
                                </Link>

                                {!collapsed && item.isParent && (
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`} />
                                )}

                                {collapsed && (
                                    <div className="absolute left-20 bg-[#0B2C4D] px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-white/10 whitespace-nowrap z-50">
                                        {item.name}
                                    </div>
                                )}
                            </div>

                            {/* Submenu */}
                            {!collapsed && item.isParent && isSubmenuOpen && (
                                <div className="pl-12 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                                    {item.children?.map((child) => {
                                        const isChildActive = pathname === child.href
                                        return (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className={`block py-2 text-xs font-bold uppercase tracking-widest transition-colors ${isChildActive ? "text-[#C9A24D]" : "text-white/50 hover:text-white"
                                                    }`}
                                            >
                                                {child.name}
                                            </Link>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    )
                })}
            </nav>

            {/* Footer / User */}
            <div className="p-4 border-t border-white/10 shrink-0">
                <SignedIn>
                    <div className={`flex items-center ${collapsed ? "justify-center" : "gap-4"} p-3`}>
                        <UserButton appearance={{
                            elements: {
                                userButtonAvatarBox: 'w-8 h-8 border border-[#C9A24D]'
                            }
                        }} />
                        {!collapsed && (
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#C9A24D]">Session Active</span>
                            </div>
                        )}
                    </div>
                </SignedIn>
            </div>
        </aside>
    )
}
