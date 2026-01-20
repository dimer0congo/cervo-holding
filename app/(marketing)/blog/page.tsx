import { Metadata } from "next"
import { CTASection } from "@/components/home/cta-section"
import { Calendar, ArrowRight, Clock, Search, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { CategoryFilter } from "@/components/blog/category-filter"
import { Status } from "@prisma/client"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Blog & Actualités | CERVO HOLDING LTD",
    description:
        "Restez informés sur les dernières tendances du commerce transfrontalier RDC-Zambie, les réglementations douanières et les actualités de CERVO HOLDING LTD.",
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>
}) {
    const { category } = await searchParams

    // Fetch categories for the filter
    const categories = await prisma.category.findMany({
        orderBy: { name: "asc" },
    })

    // Fetch articles based on filter
    const articles = await prisma.article.findMany({
        where: {
            status: Status.PUBLISHED,
            ...(category && category !== "all" ? { category: { slug: category } } : {}),
        },
        include: {
            category: true,
        },
        orderBy: {
            publishedAt: "desc",
        },
    })

    const featuredArticle = articles.length > 0 ? articles[0] : null
    const remainingArticles = articles.length > 1 ? articles.slice(1) : []

    return (
        <main className="bg-[#F8FAFC]">
            {/* Hero Section - Spotlight */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-[#0B2C4D]">
                <div className="absolute inset-0 bg-[#0B2C4D]">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A24D]/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1F4E79] rounded-full blur-[120px] opacity-30" />
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in zoom-in-95 duration-1000">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#C9A24D] text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
                        Actualités & Insights
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-serif mb-6">
                        L'expertise <span className="text-[#C9A24D] italic">partagée</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto mb-10">
                        Analyses, guides et actualités pour naviguer avec succès dans l'écosystème commercial RDC-Zambie.
                    </p>

                    {/* Search Bar - Decorative */}
                    <div className="max-w-md mx-auto relative group">
                        <div className="absolute inset-0 bg-[#C9A24D] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-3">
                            <Search className="w-5 h-5 text-white/50 mr-3" />
                            <input
                                type="text"
                                placeholder="Rechercher un article..."
                                className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full text-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Nav (Client Component) */}
            <CategoryFilter categories={categories} />

            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {articles.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-[#64748B] text-lg">Aucun article trouvé pour cette thématique.</p>
                        </div>
                    ) : (
                        <>
                            {/* Featured Post */}
                            {featuredArticle && (
                                <div className="mb-20">
                                    <h2 className="text-xs font-bold text-[#C9A24D] uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <span className="w-8 h-[1px] bg-[#C9A24D]" /> À la une
                                    </h2>
                                    <div className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E2E8F0]">
                                        <div className="grid md:grid-cols-2">
                                            <div className="h-64 md:h-auto w-full relative overflow-hidden bg-[#0B2C4D]">
                                                {featuredArticle.featuredImage ? (
                                                    <Image
                                                        src={featuredArticle.featuredImage}
                                                        alt={featuredArticle.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B2C4D] to-[#1F4E79]" />
                                                )}
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-[#0B2C4D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                                    {featuredArticle.category.name}
                                                </div>
                                            </div>
                                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                                <div className="flex items-center gap-4 text-sm text-[#64748B] mb-4">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        {featuredArticle.publishedAt?.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                    </span>
                                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min</span>
                                                </div>
                                                <h3 className="text-2xl md:text-4xl font-bold text-[#0B2C4D] mb-4 font-serif leading-tight group-hover:text-[#C9A24D] transition-colors">
                                                    {featuredArticle.title}
                                                </h3>
                                                <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                                                    {featuredArticle.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between mt-auto">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-[#0B2C4D] flex items-center justify-center text-white font-bold text-xs">CH</div>
                                                        <span className="text-[#0B2C4D] font-medium text-sm">Cervo Holding</span>
                                                    </div>
                                                    <Link href={`/blog/${featuredArticle.slug}`}>
                                                        <Button variant="ghost" className="text-[#C9A24D] font-bold hover:text-[#0B2C4D] hover:bg-transparent p-0 group-hover:translate-x-2 transition-transform">
                                                            Lire l'article <ArrowRight className="ml-2 w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Recent Posts Grid */}
                            {remainingArticles.length > 0 && (
                                <div>
                                    <h2 className="text-xs font-bold text-[#C9A24D] uppercase tracking-widest mb-10 flex items-center gap-2">
                                        <span className="w-8 h-[1px] bg-[#C9A24D]" /> Récents
                                    </h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {remainingArticles.map((post) => (
                                            <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
                                                <article className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full uppercase-none">
                                                    <div className="h-48 w-full relative overflow-hidden bg-[#0B2C4D]">
                                                        {post.featuredImage ? (
                                                            <Image
                                                                src={post.featuredImage}
                                                                alt={post.title}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                            />
                                                        ) : (
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#1F4E79] to-[#C9A24D]/30" />
                                                        )}
                                                        <div className="absolute top-4 left-4">
                                                            <span className="bg-white/90 backdrop-blur text-[#0B2C4D] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                                                                {post.category.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="p-6 flex flex-col flex-grow">
                                                        <div className="flex items-center gap-3 text-xs text-[#94A3B8] mb-3">
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="w-3 h-3" />
                                                                {post.publishedAt?.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                                                            </span>
                                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 4 min</span>
                                                        </div>
                                                        <h3 className="text-xl font-bold text-[#0B2C4D] mb-3 font-serif leading-tight group-hover:text-[#C9A24D] transition-colors line-clamp-2">
                                                            {post.title}
                                                        </h3>
                                                        <p className="text-[#64748B] text-sm leading-relaxed mb-6 line-clamp-3">
                                                            {post.excerpt}
                                                        </p>
                                                        <div className="mt-auto pt-4 border-t border-[#E2E8F0]">
                                                            <span className="text-sm font-bold text-[#0B2C4D] group-hover:text-[#C9A24D] transition-colors flex items-center gap-2">
                                                                Voir plus <ArrowRight className="w-4 h-4" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </article>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-[#0B2C4D] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light" />
                <div className="mx-auto max-w-4xl px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A24D]/10 text-[#C9A24D] text-xs font-bold uppercase tracking-widest mb-6">
                        <Tag className="w-3 h-3" /> Newsletter
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">Ne manquez aucune <span className="text-[#C9A24D] italic">opportunité</span></h2>
                    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                        Inscrivez-vous pour recevoir nos analyses exclusives et les mises à jour réglementaires directement dans votre boîte mail.
                    </p>
                    <form className="max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Votre adresse email"
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 text-white placeholder:text-white/40 outline-none focus:border-[#C9A24D] transition-colors"
                        />
                        <Button className="bg-[#C9A24D] hover:bg-[#D4B05C] text-[#0B2C4D] font-bold rounded-xl px-6">
                            S'inscrire
                        </Button>
                    </form>
                </div>
            </section>

            <CTASection />
        </main>
    )
}
