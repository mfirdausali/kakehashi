import type { Article } from "@/lib/types"
import ArticleCard from "./article-card"

export default function CategorySection({ articles }: { articles: Article[] }) {
  return (
    <div className="space-y-0">
      {articles.slice(0, 4).map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}
