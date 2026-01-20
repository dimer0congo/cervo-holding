"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Trash, Package, X, Loader2 } from "lucide-react"
import { getCategories, createCategory, deleteCategory } from "@/lib/actions/blog"
import { toast } from "sonner"

export default function CategoriesPage() {
    const [categories, setCategories] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newCategory, setNewCategory] = useState({ name: "", slug: "", description: "" })
    const [submitting, setSubmitting] = useState(false)

    const fetchCategories = async () => {
        setLoading(true)
        const data = await getCategories()
        setCategories(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newCategory.name || !newCategory.slug) {
            toast.error("Veuillez remplir les champs obligatoires")
            return
        }

        setSubmitting(true)
        try {
            const result = await createCategory(newCategory)
            if (result.success) {
                toast.success("Catégorie créée !")
                setIsModalOpen(false)
                setNewCategory({ name: "", slug: "", description: "" })
                fetchCategories()
            } else {
                toast.error(result.error as string)
            }
        } catch (error) {
            toast.error("Une erreur est survenue")
        } finally {
            setSubmitting(false)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            const result = await deleteCategory(id)
            if (result.success) {
                toast.success("Catégorie supprimée")
                fetchCategories()
            } else {
                toast.error(result.error as string)
            }
        } catch (error) {
            toast.error("Une erreur est survenue lors de la suppression")
        }
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-[#0B2C4D] font-serif">Catégories du Blog</h1>
                    <p className="text-[#64748B] mt-1">Gérez les thématiques de votre contenu éditorial.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-[#0B2C4D] text-white rounded-xl hover:bg-[#1F4E79] transition-all shadow-lg shadow-[#0B2C4D]/20 font-bold text-xs uppercase tracking-widest"
                >
                    <Plus className="w-4 h-4" />
                    Nouvelle Catégorie
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Categories List */}
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-[#E2E8F0] shadow-sm overflow-hidden min-h-[400px]">
                    {loading ? (
                        <div className="flex items-center justify-center h-[400px]">
                            <Loader2 className="w-8 h-8 animate-spin text-[#C9A24D]" />
                        </div>
                    ) : categories.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-[400px] text-center p-8">
                            <Package className="w-12 h-12 text-[#E2E8F0] mb-4" />
                            <p className="text-[#64748B] font-medium">Aucune catégorie trouvée.</p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-4 text-[#C9A24D] font-bold text-xs uppercase tracking-widest hover:underline"
                            >
                                Créer la première catégorie
                            </button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Nom</th>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Slug</th>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-[#64748B] text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#F1F5F9]">
                                    {categories.map((cat) => (
                                        <tr key={cat.id} className="hover:bg-[#F8FAFC] transition-colors group">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-lg bg-[#0B2C4D]/5 flex items-center justify-center`}>
                                                        <Package className="w-4 h-4 text-[#0B2C4D]" />
                                                    </div>
                                                    <p className="font-bold text-[#0B2C4D]">{cat.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-sm font-medium text-[#64748B]">{cat.slug}</td>
                                            <td className="px-8 py-5 text-right">
                                                <div className="flex items-center justify-end">
                                                    <button
                                                        onClick={() => {
                                                            if (confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")) {
                                                                handleDelete(cat.id)
                                                            }
                                                        }}
                                                        className="p-2 text-[#64748B] hover:text-red-500 hover:bg-white rounded-lg transition-all"
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

                {/* Quick Help / Info */}
                <div className="space-y-8">
                    <div className="bg-[#0B2C4D] rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A24D] rounded-full blur-[60px] opacity-20" />
                        <h2 className="text-xl font-bold mb-4 font-serif relative z-10">Organisation</h2>
                        <p className="text-white/70 text-sm leading-relaxed relative z-10 mb-6">
                            Les catégories permettent de structurer votre blog et d'aider vos visiteurs à trouver le contenu qui les intéresse.
                        </p>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 relative z-10">
                            <p className="text-xs font-bold text-[#C9A24D] uppercase tracking-widest mb-2">Astuce CMS</p>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Utilisez des noms courts et explicites pour vos catégories afin d'optimiser le SEO.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de création */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-[#0B2C4D]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 shadow-2xl">
                    <div className="bg-white rounded-[2.5rem] w-full max-w-md p-8 animate-in zoom-in-95 fade-in duration-300 relative border border-[#E2E8F0]">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 text-[#64748B] hover:text-[#0B2C4D]"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <h2 className="text-2xl font-bold text-[#0B2C4D] font-serif mb-6">Nouvelle Catégorie</h2>

                        <form onSubmit={handleCreate} className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-2">Nom de la catégorie</label>
                                <input
                                    type="text"
                                    required
                                    value={newCategory.name}
                                    onChange={(e) => {
                                        const name = e.target.value
                                        setNewCategory(prev => ({
                                            ...prev,
                                            name,
                                            slug: name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
                                        }))
                                    }}
                                    className="w-full p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[#0B2C4D] focus:outline-none focus:ring-2 focus:ring-[#C9A24D]/20 transition-all font-medium"
                                    placeholder="Ex: Logistique Internationale"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-2">Slug (URL)</label>
                                <input
                                    type="text"
                                    required
                                    value={newCategory.slug}
                                    onChange={(e) => setNewCategory(prev => ({ ...prev, slug: e.target.value }))}
                                    className="w-full p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm text-[#64748B] font-mono"
                                    placeholder="logistique-internationale"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-2">Description (Optionnel)</label>
                                <textarea
                                    value={newCategory.description}
                                    onChange={(e) => setNewCategory(prev => ({ ...prev, description: e.target.value }))}
                                    className="w-full p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[#0B2C4D] h-24 resize-none"
                                    placeholder="Brève description..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-4 bg-[#0B2C4D] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#1F4E79] transition-all shadow-lg shadow-[#0B2C4D]/20 disabled:opacity-50"
                            >
                                {submitting ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Créer la catégorie"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
