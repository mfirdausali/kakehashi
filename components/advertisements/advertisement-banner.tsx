"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

interface AdvertisementBannerProps {
  id: string
  imageUrl: string
  altText: string
  linkUrl: string
  position: "top" | "inline" | "sidebar"
  className?: string
}

export default function AdvertisementBanner({
  id,
  imageUrl,
  altText,
  linkUrl,
  position,
  className = "",
}: AdvertisementBannerProps) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) {
    return null
  }

  // Different styles based on position
  const styles = {
    top: "w-full h-[90px] md:h-[120px]",
    inline: "w-full h-[250px]",
    sidebar: "w-full h-[300px] md:h-[600px]",
  }

  return (
    <div className={`relative bg-gray-100 overflow-hidden ${styles[position]} ${className}`}>
      <div className="absolute top-0 right-0 z-10">
        <button
          onClick={() => setDismissed(true)}
          className="bg-black/30 hover:bg-black/50 text-white p-1 transition-colors"
          aria-label="Close advertisement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <Link href={linkUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={altText}
            fill
            className="object-cover"
            sizes={
              position === "top"
                ? "100vw"
                : position === "inline"
                  ? "(max-width: 768px) 100vw, 728px"
                  : "(max-width: 768px) 100vw, 300px"
            }
          />
        </div>
      </Link>

      <div className="absolute bottom-0 right-0 bg-black/30 text-white text-xs px-1">Advertisement</div>
    </div>
  )
}
