import { getArticleBySlug, getArticles, userHasAccessToArticle } from "@/lib/articles"
import { formatDate } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ArticlePaywall from "@/components/article-paywall"
import AdvertisementBanner from "@/components/advertisements/advertisement-banner"

// Mock user for demo purposes - in a real app, this would come from authentication
const mockUser = null // Change to an object with subscription to test access

export async function generateStaticParams() {
  const articles = await getArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title} | Kakehashi`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  const articles = await getArticles()

  if (!article) {
    notFound()
  }

  const hasAccess = userHasAccessToArticle(mockUser, article)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Article Content */}
        <article className="lg:col-span-2">
          {/* The Economist Style: Centered Headline with Air */}
          <div className="text-center mb-10 pb-8 border-b-4 border-economist-red">
            <Link
              href={`/categories/${article.category}`}
              className="text-xs font-bold uppercase tracking-wider text-economist-red hover:underline inline-block mb-4"
            >
              {article.category}
            </Link>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-serif leading-relaxed max-w-3xl mx-auto">{article.excerpt}</p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500 uppercase tracking-wide">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              {article.premium && (
                <span className="bg-economist-red text-white px-2 py-1 font-bold uppercase">Premium</span>
              )}
            </div>
          </div>

          {article.image && (
            <div className="mb-10">
              <div className="relative aspect-video">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {article.imageCaption && (
                <p className="text-xs text-gray-600 mt-2 italic border-l-2 border-gray-300 pl-3">
                  {article.imageCaption}
                </p>
              )}
            </div>
          )}

          {/* Article Content */}
          {hasAccess ? (
            <div className="article-content">
              {article.content.split("\n\n").map((paragraph, index) => (
                <>
                  <p key={index} className="text-base md:text-lg font-serif leading-relaxed text-gray-800 mb-6">
                    {paragraph}
                  </p>

                  {/* In-article advertisement after the 2nd paragraph */}
                  {index === 1 && (
                    <div className="my-10 py-6 border-y border-gray-300">
                      <AdvertisementBanner
                        id="3"
                        imageUrl="/placeholder.svg?height=250&width=728"
                        altText="Tech Conference 2023"
                        linkUrl="https://example.com/tech-conference"
                        position="inline"
                      />
                    </div>
                  )}
                </>
              ))}
            </div>
          ) : (
            <ArticlePaywall title={article.title} excerpt={article.excerpt} previewContent={article.content} />
          )}

          {/* End Mark - The Economist Signature */}
          {hasAccess && (
            <div className="mt-8 pt-8 border-t border-gray-300">
              <div className="w-3 h-3 bg-economist-red" />
            </div>
          )}
        </article>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-8">
            {/* Related Articles - The Economist Style */}
            <div className="border-t-4 border-economist-red pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-economist-red mb-6">Related</h3>
              <div className="space-y-6">
                {articles
                  .filter((a) => a.category === article.category && a.slug !== article.slug)
                  .slice(0, 3)
                  .map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      href={`/articles/${relatedArticle.slug}`}
                      className="block pb-6 border-b border-gray-300 last:border-b-0 group"
                    >
                      <h4 className="font-serif font-bold text-base leading-tight mb-2 group-hover:text-economist-red transition-colors">
                        {relatedArticle.title}
                      </h4>
                      <time className="text-xs text-gray-500 uppercase tracking-wide">
                        {formatDate(relatedArticle.date)}
                      </time>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Advertisement */}
            <div className="border-t-4 border-gray-300 pt-4">
              <AdvertisementBanner
                id="2"
                imageUrl="/placeholder.svg?height=600&width=300"
                altText="Japan Tourism Board"
                linkUrl="https://example.com/japan-tourism"
                position="sidebar"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
