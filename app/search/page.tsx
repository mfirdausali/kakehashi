"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { getArticlesBySearch } from "@/lib/articles"
import ArticleCard from "@/components/article-card"
import SearchForm from "@/components/search-form"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchResults() {
      setLoading(true)
      if (query) {
        const results = await getArticlesBySearch(query)
        setArticles(results)
      } else {
        setArticles([])
      }
      setLoading(false)
    }

    fetchResults()
  }, [query])

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif font-bold mb-6 text-gray-900">Search Results</h1>

        <div className="mb-8">
          <SearchForm initialQuery={query} />
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
          </div>
        ) : (
          <>
            {query ? (
              <>
                <p className="mb-6 text-gray-600">
                  {articles.length} {articles.length === 1 ? "result" : "results"} for "{query}"
                </p>

                {articles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article) => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No articles found matching your search.</p>
                    <p className="mt-2 text-gray-500">Try different keywords or browse our categories.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">Enter a search term to find articles.</p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}
