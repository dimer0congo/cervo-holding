"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { Status } from "@prisma/client"

export async function createCategory(data: { name: string; slug: string; description?: string }) {
    const { sessionClaims } = await auth()
    const role = (sessionClaims?.metadata as any)?.role

    if (role !== "admin") {
        throw new Error("Accès refusé: Seuls les administrateurs peuvent gérer les catégories.")
    }

    try {
        const category = await prisma.category.create({
            data,
        })
        revalidatePath("/dashboard/blog/categories")
        return { success: true, category }
    } catch (error: any) {
        console.error("Error creating category:", error)
        return { success: false, error: error.message || "Erreur lors de la création de la catégorie" }
    }
}

export async function getCategories() {
    try {
        return await prisma.category.findMany({
            orderBy: { name: "asc" },
        })
    } catch (error) {
        console.error("Error fetching categories:", error)
        return []
    }
}

export async function deleteCategory(id: string) {
    const { sessionClaims } = await auth()
    const role = (sessionClaims?.metadata as any)?.role

    if (role !== "admin") {
        throw new Error("Accès refusé")
    }

    try {
        // Check if there are articles in this category
        const articleCount = await prisma.article.count({
            where: { categoryId: id }
        })

        if (articleCount > 0) {
            return {
                success: false,
                error: `Impossible de supprimer : cette catégorie contient encore ${articleCount} article(s).`
            }
        }

        await prisma.category.delete({ where: { id } })
        revalidatePath("/dashboard/blog/categories")
        return { success: true }
    } catch (error: any) {
        console.error("Error deleting category:", error)
        return { success: false, error: "Erreur lors de la suppression de la catégorie" }
    }
}

export async function createArticle(data: {
    title: string
    slug: string
    content: string
    excerpt?: string
    featuredImage?: string
    categoryId: string
    status?: Status
}) {
    const { userId, sessionClaims } = await auth()
    const role = (sessionClaims?.metadata as any)?.role

    if (!userId || role !== "admin") {
        throw new Error("Accès refusé")
    }

    try {
        console.log("Creating new article. Content length:", data.content.length)
        const article = await prisma.article.create({
            data: {
                ...data,
                authorId: userId,
                publishedAt: data.status === Status.PUBLISHED ? new Date() : null,
            },
        })
        revalidatePath("/dashboard/blog")
        revalidatePath("/blog")
        return { success: true, article }
    } catch (error: any) {
        console.error("Error creating article:", error)
        return { success: false, error: error.message || "Erreur lors de la création de l'article" }
    }
}

export async function getArticles() {
    try {
        return await prisma.article.findMany({
            include: { category: true },
            orderBy: { createdAt: "desc" },
        })
    } catch (error) {
        console.error("Error fetching articles:", error)
        return []
    }
}

export async function getArticleById(id: string) {
    try {
        return await prisma.article.findUnique({
            where: { id },
            include: { category: true }
        })
    } catch (error) {
        console.error("Error fetching article by ID:", error)
        return null
    }
}

export async function updateArticle(
    id: string,
    data: Partial<{
        title: string
        slug: string
        content: string
        excerpt?: string
        featuredImage?: string
        categoryId: string
        status: Status
    }>
) {
    const { sessionClaims } = await auth()
    const role = (sessionClaims?.metadata as any)?.role

    if (role !== "admin") {
        throw new Error("Accès refusé")
    }

    try {
        console.log("Saving article content. Length:", data.content?.length)
        const article = await prisma.article.update({
            where: { id },
            data: {
                ...data,
                publishedAt: data.status === Status.PUBLISHED ? new Date() : undefined,
            },
        })
        revalidatePath("/dashboard/blog")
        revalidatePath("/blog")
        revalidatePath(`/blog/${article.slug}`)
        return { success: true, article }
    } catch (error: any) {
        console.error("Error updating article:", error)
        return { success: false, error: error.message || "Erreur lors de la mise à jour" }
    }
}

export async function deleteArticle(id: string) {
    const { sessionClaims } = await auth()
    const role = (sessionClaims?.metadata as any)?.role

    if (role !== "admin") {
        throw new Error("Accès refusé")
    }

    try {
        await prisma.article.delete({ where: { id } })
        revalidatePath("/dashboard/blog")
        return { success: true }
    } catch (error) {
        console.error("Error deleting article:", error)
        return { success: false, error: "Erreur lors de la suppression" }
    }
}
