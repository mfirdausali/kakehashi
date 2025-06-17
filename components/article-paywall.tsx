"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"

interface ArticlePaywallProps {
  title: string
  excerpt: string
  previewContent: string
}

export default function ArticlePaywall({ title, excerpt, previewContent }: ArticlePaywallProps) {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="mt-8">
      <div className="prose prose-lg max-w-none font-serif mb-8">
        {previewContent.split("\n\n").map((paragraph, index) => (
          <p key={index} className={index > 1 ? "blur-sm select-none" : ""}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
          <Lock className="h-6 w-6 text-red-700" />
        </div>
        <h3 className="text-xl font-serif font-bold mb-2">This article is exclusive to subscribers</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Subscribe to Kakehashi to continue reading and access all of our premium content bridging Malaysia and Japan.
        </p>

        {showLogin ? (
          <div className="space-y-4 max-w-sm mx-auto">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
            <Button className="w-full bg-red-700 hover:bg-red-800">Log in</Button>
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <button onClick={() => setShowLogin(false)} className="text-red-700 hover:underline">
                Subscribe
              </button>
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-red-700 hover:bg-red-800">
                <Link href="/subscribe">Subscribe Now</Link>
              </Button>
              <Button variant="outline" onClick={() => setShowLogin(true)}>
                Already a subscriber? Log in
              </Button>
            </div>
            <p className="text-sm text-gray-500">Starting at only RM15/month. Cancel anytime.</p>
          </div>
        )}
      </div>
    </div>
  )
}
