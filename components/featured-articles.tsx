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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main featured article */}
      <div className="lg:col-span-2">
        <Link href={`/articles/${mainArticle.slug}`} className="group">
          <div className="relative aspect-[16/9] mb-4">
            <Image
              src={mainArticle.image || "/placeholder.svg?height=600&width=800"}
              alt={mainArticle.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl md:text-3xl font-serif font-bold group-hover:text-red-700 transition-colors">
              {mainArticle.title}
            </h3>
            {mainArticle.premium && (
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">Premium</span>
            )}
          </div>
          <p className="text-gray-600 mb-2">{mainArticle.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>By {mainArticle.author}</span>
            <span className="mx-2">|</span>
            <time dateTime={mainArticle.date}>{formatDate(mainArticle.date)}</time>
          </div>
        </Link>
      </div>

      {/* Secondary featured articles */}
      <div className="space-y-6">
        {secondaryArticles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="block group">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="relative aspect-[4/3] sm:w-1/3 lg:w-full">
                <Image
                  src={article.image || "/placeholder.svg?height=300&width=400"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="sm:w-2/3 lg:w-full">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-serif font-bold group-hover:text-red-700 transition-colors">
                    {article.title}
                  </h3>
                  {article.premium && (
                    <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      Premium
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
