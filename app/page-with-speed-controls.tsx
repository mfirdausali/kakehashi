import NewsMarqueeWithControls from "@/components/news-marquee-with-controls"
import FeaturedArticles from "@/components/featured-articles"
import CategorySection from "@/components/category-section"
import { getArticles } from "@/lib/articles"

export default async function HomeWithControls() {
  const articles = await getArticles()
  const featuredArticles = articles.filter((article) => article.featured)
  const latestArticles = articles.slice(0, 10)

  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <NewsMarqueeWithControls articles={latestArticles} />
      </div>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Featured Stories</h2>
          <FeaturedArticles articles={featuredArticles} />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">World</h2>
          <CategorySection articles={articles.filter((article) => article.category === "world")} />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Business</h2>
          <CategorySection articles={articles.filter((article) => article.category === "business")} />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Technology</h2>
          <CategorySection articles={articles.filter((article) => article.category === "technology")} />
        </section>
      </div>
    </main>
  )
}
