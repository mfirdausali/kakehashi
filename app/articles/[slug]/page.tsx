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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <article className="lg:col-span-3 max-w-4xl">
          <div className="mb-6">
            <Link
              href={`/categories/${article.category}`}
              className="text-red-700 uppercase text-sm font-bold tracking-wider"
            >
              {article.category}
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4 text-gray-900">{article.title}</h1>
            <p className="text-xl text-gray-600 mb-6 font-serif">{article.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>By {article.author}</span>
              <span className="mx-2">|</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              {article.premium && (
                <>
                  <span className="mx-2">|</span>
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">Premium</span>
                </>
              )}
            </div>
          </div>

          {article.image && (
            <div className="mb-8 relative aspect-video">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
              {article.imageCaption && <p className="text-sm text-gray-500 mt-2 italic">{article.imageCaption}</p>}
            </div>
          )}

          {hasAccess ? (
            <div className="prose prose-lg max-w-none font-serif">
              {article.content.split("\n\n").map((paragraph, index) => (
                <>
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>

                  {/* In-article advertisement after the 2nd paragraph */}
                  {index === 1 && (
                    <div className="my-8">
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
        </article>

        {/* Sidebar with advertisement */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <AdvertisementBanner
              id="2"
              imageUrl="/placeholder.svg?height=600&width=300"
              altText="Japan Tourism Board"
              linkUrl="https://example.com/japan-tourism"
              position="sidebar"
            />

            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h3 className="font-serif font-bold mb-4">Related Articles</h3>
              <ul className="space-y-4">
                {articles
                  .filter((a) => a.category === article.category && a.slug !== article.slug)
                  .slice(0, 3)
                  .map((relatedArticle) => (
                    <li key={relatedArticle.id}>
                      <a href={`/articles/${relatedArticle.slug}`} className="text-sm hover:text-red-700">
                        {relatedArticle.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
