import { getArticleById } from "@/lib/actions/blog"
import { ArticleEditor } from "@/components/blog/article-editor"
import { notFound } from "next/navigation"

interface EditArticlePageProps {
    params: Promise<{ id: string }>
}

export default async function EditArticlePage({ params }: EditArticlePageProps) {
    const { id } = await params
    const article = await getArticleById(id)

    if (!article) {
        notFound()
    }

    return <ArticleEditor mode="edit" article={article} />
}
