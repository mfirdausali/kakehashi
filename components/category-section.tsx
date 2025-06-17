import type { Article } from "@/lib/types"
import ArticleCard from "./article-card"

export default function CategorySection({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.slice(0, 3).map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}
