import type React from "react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
