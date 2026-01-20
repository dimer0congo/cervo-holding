"use client"

import { useSearchParams, useRouter, usePathname } from "next/navigation"

interface Category {
    id: string
    name: string
    slug: string
}

interface CategoryFilterProps {
    categories: Category[]
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const activeSlug = searchParams.get("category") || "all"

    const handleFilter = (slug: string) => {
        const params = new URLSearchParams(searchParams)
        if (slug === "all") {
            params.delete("category")
        } else {
            params.set("category", slug)
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    const allCategories = [{ id: "all", name: "Tout", slug: "all" }, ...categories]

    return (
        <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 py-4 overflow-x-auto no-scrollbar">
                    {allCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleFilter(cat.slug)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeSlug === cat.slug
                                    ? "bg-[#0B2C4D] text-white shadow-lg shadow-[#0B2C4D]/20"
                                    : "bg-transparent text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0B2C4D]"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
