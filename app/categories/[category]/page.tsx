import { getArticles } from "@/lib/articles"
import ArticleCard from "@/components/article-card"
import { notFound } from "next/navigation"
import { capitalize } from "@/lib/utils"

export async function generateStaticParams() {
  return [
    { category: "world" },
    { category: "business" },
    { category: "technology" },
    { category: "science" },
    { category: "culture" },
  ]
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category

  return {
    title: `${capitalize(category)} News | Kakehashi`,
    description: `Latest ${category} news and analysis from Kakehashi, bridging Malaysia and Japan`,
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.toLowerCase()
  const validCategories = ["world", "business", "technology", "science", "culture"]

  if (!validCategories.includes(category)) {
    notFound()
  }

  const articles = await getArticles()
  const categoryArticles = articles.filter((article) => article.category.toLowerCase() === category)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gray-900">{capitalize(category)}</h1>

        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No articles found in this category.</p>
            <p className="mt-2 text-gray-500">Check back soon for updates or explore other categories.</p>
          </div>
        )}
      </div>
    </main>
  )
}
