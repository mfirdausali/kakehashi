import type { Article } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export default function FeaturedArticles({ articles }: { articles: Article[] }) {
  // Get the main featured article and the rest
  const mainArticle = articles[0]
  const secondaryArticles = articles.slice(1, 4)

  if (!mainArticle) return null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Main featured article - The Economist Style with Centered Headline */}
      <div className="lg:col-span-2 lg:border-r lg:border-gray-300 lg:pr-10">
        <Link href={`/articles/${mainArticle.slug}`} className="group block">
          <div className="relative aspect-[16/9] mb-6">
            <Image
              src={mainArticle.image || "/placeholder.svg?height=600&width=800"}
              alt={mainArticle.title}
              fill
              className="object-cover"
              priority
            />
            {mainArticle.imageCaption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-1">
                {mainArticle.imageCaption}
              </div>
            )}
          </div>

          {/* Centered Headline - The Economist trademark style */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-economist-red">
                {mainArticle.category}
              </span>
              {mainArticle.premium && (
                <span className="bg-economist-red text-white px-2 py-0.5 text-xs font-bold uppercase">Premium</span>
              )}
            </div>
            <h3 className="text-2xl md:text-4xl font-serif font-bold leading-tight group-hover:text-economist-red transition-colors mb-4">
              {mainArticle.title}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">{mainArticle.excerpt}</p>
          </div>

          <div className="text-center text-xs text-gray-500 uppercase tracking-wide">
            {formatDate(mainArticle.date)}
          </div>
        </Link>
      </div>

      {/* Secondary featured articles - The Economist Style */}
      <div className="space-y-8">
        {secondaryArticles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="block group pb-8 border-b border-gray-300 last:border-b-0 last:pb-0">
            <div className="mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-economist-red">
                {article.category}
              </span>
            </div>
            <h3 className="text-lg font-serif font-bold leading-tight mb-2 group-hover:text-economist-red transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2 line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center gap-2">
              <time className="text-xs text-gray-500 uppercase tracking-wide" dateTime={article.date}>
                {formatDate(article.date)}
              </time>
              {article.premium && (
                <span className="bg-economist-red text-white px-2 py-0.5 text-xs font-bold uppercase">Premium</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
