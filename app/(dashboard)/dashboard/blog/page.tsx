"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Filter, MoreVertical, Edit, Trash, Eye, Loader2, BookOpen } from "lucide-react"
import Link from "next/link"
import { getArticles, deleteArticle, getCategories } from "@/lib/actions/blog"
import { toast } from "sonner"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

export default function BlogManagementPage() {
    const [articles, setArticles] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState<any[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    const fetchData = async () => {
        setLoading(true)
        try {
            const [articlesData, categoriesData] = await Promise.all([
                getArticles(),
                getCategories()
            ])
            setArticles(articlesData)
            setCategories(categoriesData)
        } catch (error) {
            toast.error("Erreur lors du chargement des données")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id: string, title: string) => {
        if (!confirm(`Êtes-vous sûr de vouloir supprimer l'article "${title}" ?`)) return

        try {
            const result = await deleteArticle(id)
            if (result.success) {
                toast.success("Article supprimé")
                setArticles(prev => prev.filter(a => a.id !== id))
            } else {
                toast.error(result.error as string)
            }
        } catch (error) {
            toast.error("Erreur lors de la suppression")
        }
    }

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || article.categoryId === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-[#0B2C4D] font-serif">Gestion du Blog</h1>
                    <p className="text-[#64748B] mt-1">Créez, éditez et publiez vos articles sur le site Cervo Holding.</p>
                </div>
                <Link
                    href="/dashboard/blog/new"
                    className="flex items-center gap-2 px-6 py-3 bg-[#0B2C4D] text-white rounded-xl hover:bg-[#1F4E79] transition-all shadow-lg shadow-[#0B2C4D]/20 font-bold text-xs uppercase tracking-widest"
                >
                    <Plus className="w-4 h-4" />
                    Rédiger un article
                </Link>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-6 rounded-[2rem] border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Rechercher un article..."
                        className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2C4D]/10"
                    />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#0B2C4D] hover:bg-[#F8FAFC] transition-all">
                        <Filter className="w-4 h-4" />
                        Filtres
                    </button>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2 border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#0B2C4D] bg-white focus:outline-none"
                    >
                        <option value="all">Toutes les catégories</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Articles Table */}
            <div className="bg-white rounded-[2.5rem] border border-[#E2E8F0] shadow-sm overflow-hidden min-h-[400px]">
                {loading ? (
                    <div className="flex items-center justify-center h-[400px]">
                        <Loader2 className="w-8 h-8 animate-spin text-[#C9A24D]" />
                    </div>
                ) : filteredArticles.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[400px] text-center p-8">
                        <BookOpen className="w-12 h-12 text-[#E2E8F0] mb-4" />
                        <p className="text-[#64748B] font-medium">Aucun article trouvé.</p>
                        <Link
                            href="/dashboard/blog/new"
                            className="mt-4 text-[#C9A24D] font-bold text-xs uppercase tracking-widest hover:underline"
                        >
                            Rédiger votre premier article
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Article</th>
                                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Catégorie</th>
                                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Statut</th>
                                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Date</th>
                                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-[#64748B] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F1F5F9]">
                                {filteredArticles.map((article) => (
                                    <tr key={article.id} className="hover:bg-[#F8FAFC] transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                {article.featuredImage && (
                                                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#E2E8F0] flex-shrink-0">
                                                        <img src={article.featuredImage} alt="" className="w-full h-full object-cover" />
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="font-bold text-[#0B2C4D] group-hover:text-[#C9A24D] transition-colors line-clamp-1">{article.title}</p>
                                                    <p className="text-[10px] text-[#64748B] uppercase tracking-wider">ID: {article.slug}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className="px-3 py-1 bg-[#0B2C4D]/5 text-[#0B2C4D] rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                                                {article.category?.name || "Sans catégorie"}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${article.status === 'PUBLISHED' ? 'text-green-600' : 'text-amber-500'}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${article.status === 'PUBLISHED' ? 'bg-green-600' : 'bg-amber-500'}`} />
                                                {article.status === 'PUBLISHED' ? 'Publié' : 'Brouillon'}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-sm text-[#64748B] whitespace-nowrap">
                                            {format(new Date(article.createdAt), "dd MMM yyyy", { locale: fr })}
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/dashboard/blog/edit/${article.id}`} className="p-2 text-[#64748B] hover:text-[#0B2C4D] hover:bg-white rounded-lg transition-all" title="Modifier">
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(article.id, article.title)}
                                                    className="p-2 text-[#64748B] hover:text-red-500 hover:bg-white rounded-lg transition-all"
                                                    title="Supprimer"
                                                >
                                                    <Trash className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
