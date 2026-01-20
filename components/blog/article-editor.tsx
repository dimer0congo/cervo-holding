"use client"

import { useState, useEffect } from "react"
import { Save, X, Image as ImageIcon, Layout, Type, Send, Loader2 } from "lucide-react"
import RichTextEditor from "./rich-text-editor"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FileUploaderRegular } from '@uploadcare/react-uploader'
import '@uploadcare/react-uploader/core.css'
import { createArticle, updateArticle, getCategories } from "@/lib/actions/blog"
import { Status, Article } from "@prisma/client"
import { toast } from "sonner"

interface ArticleEditorProps {
    article?: any // Using any for simplicity in mapping from Prisma
    mode: "create" | "edit"
}

export function ArticleEditor({ article, mode }: ArticleEditorProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [categories, setCategories] = useState<any[]>([])
    const [formData, setFormData] = useState({
        title: article?.title || "",
        content: article?.content || "",
        excerpt: article?.excerpt || "",
        featuredImage: article?.featuredImage || "",
        categoryId: article?.categoryId || "",
        slug: article?.slug || ""
    })

    useEffect(() => {
        setMounted(true)
        const fetchCategories = async () => {
            const cats = await getCategories()
            setCategories(cats)
            if (cats.length > 0 && !formData.categoryId) {
                setFormData(prev => ({ ...prev, categoryId: cats[0].id }))
            }
        }
        fetchCategories()
    }, [formData.categoryId])

    const handleUploadComplete = (info: any) => {
        const file = info.allEntries.filter((f: any) => f.status === 'success')[0]
        if (file) {
            setFormData(prev => ({ ...prev, featuredImage: file.cdnUrl }))
            toast.success("Image téléchargée avec succès")
        }
    }

    const handleSubmit = async (status: Status) => {
        if (!formData.title || !formData.content || !formData.categoryId) {
            toast.error("Veuillez remplir tous les champs obligatoires")
            return
        }

        setLoading(true)
        try {
            const slug = formData.slug || formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')

            let result
            if (mode === "create") {
                result = await createArticle({
                    ...formData,
                    slug,
                    status
                })
            } else {
                result = await updateArticle(article.id, {
                    ...formData,
                    slug,
                    status
                })
            }

            if (result.success) {
                toast.success(status === Status.PUBLISHED ? "Article publié !" : "Brouillon enregistré")
                router.push("/dashboard/blog")
                router.refresh()
            } else {
                toast.error(result.error as string)
            }
        } catch (error) {
            toast.error("Une erreur est survenue")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-[#0B2C4D] font-serif">
                        {mode === "create" ? "Rédiger un Article" : "Modifier l'Article"}
                    </h1>
                    <p className="text-[#64748B] mt-1">
                        {mode === "create" ? "Créez un nouveau contenu pour votre audience." : "Mettez à jour votre contenu existant."}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/dashboard/blog"
                        className="px-6 py-3 border border-[#E2E8F0] text-[#64748B] rounded-xl hover:bg-[#F8FAFC] transition-all font-bold text-xs uppercase tracking-widest"
                    >
                        Annuler
                    </Link>
                    <button
                        disabled={loading}
                        onClick={() => handleSubmit(Status.PUBLISHED)}
                        className="flex items-center gap-2 px-6 py-3 bg-[#0B2C4D] text-white rounded-xl hover:bg-[#1F4E79] transition-all shadow-lg shadow-[#0B2C4D]/20 font-bold text-xs uppercase tracking-widest disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        {mode === "create" ? "Publier" : "Mettre à jour"}
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Editor Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-[#E2E8F0] shadow-sm space-y-6">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-2">Titre de l'article</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                placeholder="Entrez un titre accrocheur..."
                                className="w-full text-2xl font-serif font-bold text-[#0B2C4D] border-none focus:ring-0 placeholder:text-[#E2E8F0] bg-transparent"
                            />
                        </div>

                        <div className="h-px bg-[#F1F5F9]" />

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-4">Contenu de l'article</label>
                            <RichTextEditor
                                content={formData.content}
                                onChange={(content: string) => setFormData((prev: any) => ({ ...prev, content }))}
                            />
                        </div>
                    </div>
                </div>

                {/* Settings Area */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-[#E2E8F0] shadow-sm space-y-6">
                        <div>
                            <h3 className="text-sm font-bold text-[#0B2C4D] mb-4 flex items-center gap-2 uppercase tracking-wider">
                                <Layout className="w-4 h-4 text-[#C9A24D]" />
                                Paramètres
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-2">Catégorie</label>
                                    <select
                                        value={formData.categoryId}
                                        onChange={(e) => setFormData((prev: any) => ({ ...prev, categoryId: e.target.value }))}
                                        className="w-full p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm text-[#0B2C4D] focus:outline-none"
                                    >
                                        <option value="" disabled>Sélectionner une catégorie</option>
                                        {categories.map((cat: any) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-2">Image à la une</label>
                                    <div className="space-y-4">
                                        {formData.featuredImage && (
                                            <div className="aspect-video relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                                                <img src={formData.featuredImage} alt="Featured" className="w-full h-full object-cover" />
                                                <button
                                                    onClick={() => setFormData((prev: any) => ({ ...prev, featuredImage: "" }))}
                                                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:text-red-500"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}
                                        {mounted && (
                                            <FileUploaderRegular
                                                pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY || "demopublickey"}
                                                onChange={handleUploadComplete}
                                                imgOnly={true}
                                                multiple={false}
                                                className="uc-light"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-2">Résumé (Excerpt)</label>
                                    <textarea
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                                        placeholder="Bref résumé pour les aperçus..."
                                        className="w-full p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm text-[#0B2C4D] h-24 resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-2">Slug (URL)</label>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                                        placeholder="mon-article-sur-la-logistique"
                                        className="w-full p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm text-[#64748B] font-mono"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            onClick={() => handleSubmit(Status.DRAFT)}
                            className="w-full py-4 border border-[#0B2C4D] text-[#0B2C4D] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#0B2C4D] hover:text-white transition-all disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Sauvegarder en brouillon"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
