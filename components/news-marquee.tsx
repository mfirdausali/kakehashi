"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import type { Article } from "@/lib/types"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function NewsMarquee({ articles }: { articles: Article[] }) {
  const [isPaused, setIsPaused] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Duplicate articles to create a seamless loop
  const marqueeArticles = [...articles, ...articles]

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const scrollLeft = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: -10000, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: 10000, behavior: "smooth" })
    }
  }

  return (
    <div className="relative bg-red-700 text-white py-3 overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
        <button
          onClick={scrollLeft}
          className="p-1 bg-red-800 hover:bg-red-900 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={marqueeRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          animationPlayState: isPaused ? "paused" : "running",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex animate-marquee" style={{ animationPlayState: isPaused ? "paused" : "running" }}>
          {marqueeArticles.map((article, index) => (
            <Link
              key={`${article.slug}-${index}`}
              href={`/articles/${article.slug}`}
              className="inline-block px-4 py-1 hover:underline whitespace-nowrap font-medium"
            >
              {article.title}
              <span className="mx-6 text-red-300">•</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center">
        <button
          onClick={scrollRight}
          className="p-1 bg-red-800 hover:bg-red-900 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
