import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
                <DashboardNavbar />
                <div className="p-4 sm:p-6 lg:p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
