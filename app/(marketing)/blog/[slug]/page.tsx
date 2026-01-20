import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
import Link from "next/link"
import Image from "next/image"
import { CTASection } from "@/components/home/cta-section"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const article = await prisma.article.findUnique({
        where: { slug },
    })

    if (!article) return { title: "Article non trouvé" }

    return {
        title: `${article.title} | CERVO HOLDING LTD`,
        description: article.excerpt || "Découvrez notre dernier article de blog.",
    }
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params
    const article = await prisma.article.findUnique({
        where: { slug },
        include: { category: true },
    })

    if (!article) notFound()

    return (
        <main className={`${inter.className} bg-white dark:bg-zinc-950 font-sans min-h-screen`}>
            {/* Navigation Bar Placeholder (if needed, otherwise relying on global layout) */}

            {/* Scroll Progress Indicator could go here */}

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-white to-white dark:from-slate-900/20 dark:to-zinc-950 pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[#C9A24D] hover:text-[#B8923B] transition-colors font-bold text-xs uppercase tracking-[0.2em]"
                        >
                            <ArrowLeft className="w-3 h-3" />
                            Back to Journal
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6 flex justify-center"
                    >
                        <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-200 dark:border-slate-700">
                            {article.category.name}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#0B2C4D] dark:text-white leading-[1.1] font-serif mb-8 tracking-tight"
                    >
                        {article.title}
                    </motion.h1>

                    {article.excerpt && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-light"
                        >
                            {article.excerpt}
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-500 divide-x divide-slate-200"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#0B2C4D] flex items-center justify-center text-white text-xs font-serif font-bold">
                                CH
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-[#0B2C4D] dark:text-slate-200 text-xs uppercase tracking-wider">Cervo Editorial</p>
                                <p className="text-[10px]">Staff Writer</p>
                            </div>
                        </div>
                        <div className="pl-6 flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {article.publishedAt?.toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                        <div className="pl-6 flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            {Math.ceil(article.content.length / 1000)} min read
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image - Wide & Cinematic */}
            {article.featuredImage && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-[1400px] mx-auto px-4 md:px-8 mb-20"
                >
                    <div className="relative aspect-[21/9] md:aspect-[2/1] w-full overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                            src={article.featuredImage}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                </motion.div>
            )}

            {/* Content Layout */}
            <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">

                {/* Sidebar (Share & TOC) */}
                <aside className="hidden lg:block w-48 shrink-0">
                    <div className="sticky top-32 flex flex-col gap-8">
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Share</p>
                            <div className="flex flex-col gap-3">
                                <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0B2C4D] hover:border-[#0B2C4D] transition-all duration-300">
                                    <Share2 className="w-4 h-4" />
                                </button>
                                {/* Add more functional share buttons here */}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Article Content */}
                <article className="flex-1 max-w-[720px] mx-auto lg:mx-0">
                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                        prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#0B2C4D] dark:prose-headings:text-slate-100
                        prose-p:leading-8 prose-p:text-slate-600 dark:prose-p:text-slate-400
                        prose-a:text-[#C9A24D] prose-a:no-underline prose-a:font-medium hover:prose-a:text-[#B8923B]
                        prose-blockquote:border-l-[#C9A24D] prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-900/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:text-[#1F4E79]
                        prose-img:rounded-xl prose-img:shadow-lg
                        prose-strong:text-[#0B2C4D] dark:prose-strong:text-white"
                    >
                        <div
                            className="article-content-render"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>

                    {/* Mobile Share (Visible only on small screens) */}
                    <div className="lg:hidden mt-12 pt-8 border-t border-slate-200">
                        <p className="text-sm font-bold text-[#0B2C4D] mb-4">Share this article</p>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Author/Footer for Article */}
                    <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#0B2C4D] flex items-center justify-center text-white text-xl font-serif font-bold">
                                CH
                            </div>
                            <div>
                                <h3 className="text-[#0B2C4D] dark:text-white font-bold text-lg font-serif">Cervo Holding Editorial Team</h3>
                                <p className="text-slate-500 text-sm">Delivering insights on finance, technology, and global markets.</p>
                            </div>
                        </div>
                    </div>
                </article>

            </div>

            <CTASection />
        </main>
    )
}
