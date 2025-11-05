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
      {/* Top News Ticker - The Economist Style */}
      <div className="border-b border-gray-300">
        <NewsMarquee articles={latestArticles} />
      </div>

      {/* Main Content - The Economist Grid Layout */}
      <div className="container mx-auto px-4 py-6">
        {/* Featured Section - "On The Cover" Style */}
        <section className="mb-10 pb-10 border-b border-gray-300">
          <div className="text-center mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-economist-red mb-2">This Week</h2>
            <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-900">Featured Stories</h1>
          </div>
          <FeaturedArticles articles={featuredArticles} />
        </section>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2">
            {/* World Section */}
            <section className="mb-10 pb-10 border-b border-gray-300">
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-economist-red border-t-4 border-economist-red inline-block pt-2">
                  World
                </h2>
              </div>
              <CategorySection articles={articles.filter((article) => article.category === "world")} />
            </section>

            {/* Business Section */}
            <section className="mb-10 pb-10 border-b border-gray-300">
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-economist-red border-t-4 border-economist-red inline-block pt-2">
                  Business
                </h2>
              </div>
              <CategorySection articles={articles.filter((article) => article.category === "business")} />
            </section>

            {/* Technology Section */}
            <section className="mb-10">
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-economist-red border-t-4 border-economist-red inline-block pt-2">
                  Technology
                </h2>
              </div>
              <CategorySection articles={articles.filter((article) => article.category === "technology")} />
            </section>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-8">
              {/* Most Read */}
              <div className="border-t-4 border-economist-red pt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-economist-red mb-4">Most Read</h3>
                <ol className="space-y-4">
                  {articles.slice(0, 5).map((article, index) => (
                    <li key={article.id} className="flex gap-3">
                      <span className="text-4xl font-serif font-bold text-gray-200 leading-none">{index + 1}</span>
                      <a
                        href={`/articles/${article.slug}`}
                        className="text-sm font-serif leading-tight hover:text-economist-red transition-colors"
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Newsletter */}
              <div className="border-t-4 border-gray-300 pt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Newsletter</h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Stay updated with the latest analysis bridging Malaysia and Japan.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-400 text-sm focus:outline-none focus:border-economist-red"
                  />
                  <button className="w-full bg-economist-red text-white px-4 py-2 text-sm font-bold uppercase hover:bg-red-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Advertisement */}
              <div className="border-t-4 border-gray-300 pt-4">
                <SidebarAd ad={sidebarAd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
