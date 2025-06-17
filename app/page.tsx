import NewsMarquee from "@/components/news-marquee"
import FeaturedArticles from "@/components/featured-articles"
import CategorySection from "@/components/category-section"
import AdvertisementBanner from "@/components/advertisements/advertisement-banner"
import SidebarAd from "@/components/advertisements/sidebar-ad"
import { getArticles } from "@/lib/articles"

// Mock advertisement data - in a real app, this would come from Supabase
const topAd = {
  id: "1",
  imageUrl: "/placeholder.svg?height=120&width=728",
  altText: "Malaysia Airlines Promotion",
  linkUrl: "https://example.com/promotion",
}

const sidebarAd = {
  id: "2",
  imageUrl: "/placeholder.svg?height=600&width=300",
  altText: "Japan Tourism Board",
  linkUrl: "https://example.com/japan-tourism",
}

export default async function Home() {
  const articles = await getArticles()
  const featuredArticles = articles.filter((article) => article.featured)
  const latestArticles = articles.slice(0, 10)

  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <NewsMarquee articles={latestArticles} />
      </div>

      {/* Top advertisement banner */}
      <div className="container mx-auto px-4 py-4">
        <AdvertisementBanner
          id={topAd.id}
          imageUrl={topAd.imageUrl}
          altText={topAd.altText}
          linkUrl={topAd.linkUrl}
          position="top"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Featured Stories</h2>
              <FeaturedArticles articles={featuredArticles} />
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">World</h2>
              <CategorySection articles={articles.filter((article) => article.category === "world")} />
            </section>

            {/* In-article advertisement */}
            <div className="mb-12">
              <AdvertisementBanner
                id="3"
                imageUrl="/placeholder.svg?height=250&width=728"
                altText="Tech Conference 2023"
                linkUrl="https://example.com/tech-conference"
                position="inline"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Business</h2>
              <CategorySection articles={articles.filter((article) => article.category === "business")} />
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Technology</h2>
              <CategorySection articles={articles.filter((article) => article.category === "technology")} />
            </section>
          </div>

          {/* Sidebar with advertisement */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <SidebarAd ad={sidebarAd} />

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-serif font-bold mb-4">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Stay updated with the latest news bridging Malaysia and Japan.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <button className="bg-red-700 text-white px-3 py-2 rounded-md text-sm">Subscribe</button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-serif font-bold mb-4">Most Read</h3>
                <ul className="space-y-4">
                  {articles.slice(0, 5).map((article) => (
                    <li key={article.id}>
                      <a href={`/articles/${article.slug}`} className="text-sm hover:text-red-700">
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
