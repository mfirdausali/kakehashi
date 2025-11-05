import type { Article } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block pb-6 mb-6 border-b border-gray-300 last:border-b-0 last:pb-0 last:mb-0">
      {/* Category Label - The Economist Style */}
      <div className="mb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-economist-red">
          {article.category}
        </span>
      </div>

      {/* Title - Bold Serif Typography */}
      <h3 className="text-xl font-serif font-bold leading-tight mb-3 group-hover:text-economist-red transition-colors">
        {article.title}
      </h3>

      {/* Excerpt - The Economist's Text-First Approach */}
      <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-3">{article.excerpt}</p>

      {/* Metadata - Minimalist Style */}
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <time className="uppercase tracking-wide" dateTime={article.date}>
          {formatDate(article.date)}
        </time>
        {article.premium && (
          <span className="bg-economist-red text-white px-2 py-0.5 font-bold uppercase">Premium</span>
        )}
      </div>
    </Link>
  )
}
