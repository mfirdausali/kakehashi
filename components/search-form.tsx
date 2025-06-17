"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function SearchForm({ initialQuery = "", onSearch }: { initialQuery?: string; onSearch?: () => void }) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      if (onSearch) onSearch()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg mx-auto">
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-l-md focus:ring-red-700 focus:border-red-700"
          placeholder="Search articles..."
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-3 text-sm font-medium text-white bg-red-700 rounded-r-md hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
      >
        Search
      </button>
    </form>
  )
}
