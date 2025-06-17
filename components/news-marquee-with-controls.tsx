"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import type { Article } from "@/lib/types"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function NewsMarqueeWithControls({ articles }: { articles: Article[] }) {
  const [isPaused, setIsPaused] = useState(false)
  const [speed, setSpeed] = useState(30) // Default speed (30s duration)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const marqueeContentRef = useRef<HTMLDivElement>(null)

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

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  // Update animation speed when the speed state changes
  useEffect(() => {
    if (marqueeContentRef.current) {
      marqueeContentRef.current.style.animationDuration = `${speed}s`
    }
  }, [speed])

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
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={marqueeContentRef}
          className="flex animate-marquee"
          style={{ animationPlayState: isPaused ? "paused" : "running", animationDuration: `${speed}s` }}
        >
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

      {/* Speed controls - can be shown/hidden with a state or CSS */}
      <div className="absolute bottom-full left-0 right-0 bg-red-800 p-2 flex items-center gap-4 text-sm">
        <button
          onClick={togglePause}
          className="p-1 hover:bg-red-700 rounded transition-colors"
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>

        <div className="flex items-center gap-2 flex-1">
          <span>Slow</span>
          <Slider
            value={[speed]}
            min={10}
            max={60}
            step={5}
            onValueChange={(value) => setSpeed(value[0])}
            className="flex-1"
          />
          <span>Fast</span>
        </div>

        <div className="text-xs opacity-80">
          Speed: {speed === 10 ? "Fastest" : speed === 60 ? "Slowest" : `${Math.round(100 - (speed / 60) * 100)}%`}
        </div>
      </div>
    </div>
  )
}
