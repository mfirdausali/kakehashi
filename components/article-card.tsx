import type { Article } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <div className="relative aspect-[4/3] mb-4">
        <Image
          src={article.image || "/placeholder.svg?height=300&width=400"}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-serif font-bold group-hover:text-red-700 transition-colors">{article.title}</h3>
        {article.premium && (
          <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">Premium</span>
        )}
      </div>
      <p className="text-gray-600 mb-2 line-clamp-2">{article.excerpt}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span>By {article.author}</span>
        <span className="mx-2">|</span>
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </div>
    </Link>
  )
}
