export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  imageCaption?: string
  featured?: boolean
  premium?: boolean
}

export interface User {
  id: string
  name: string
  email: string
  subscription?: {
    plan: "basic" | "premium" | "business"
    status: "active" | "expired" | "canceled"
    expiresAt: string
  }
}
