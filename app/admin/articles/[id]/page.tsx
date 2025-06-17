"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from Supabase
const categories = [
  { id: "world", name: "World" },
  { id: "business", name: "Business" },
  { id: "technology", name: "Technology" },
  { id: "science", name: "Science" },
  { id: "culture", name: "Culture" },
]

// Mock article data - in a real app, this would be fetched from Supabase
const mockArticle = {
  id: "4",
  title: "Malaysia and Japan Strengthen Economic Ties with New Trade Agreement",
  slug: "malaysia-japan-trade-relations",
  excerpt:
    "The new comprehensive economic partnership aims to boost bilateral trade and investment between the two nations.",
  content:
    "Malaysia and Japan have signed a groundbreaking new trade agreement that promises to significantly strengthen economic ties between the two nations. The Comprehensive Strategic Economic Partnership (CSEP), signed yesterday in Kuala Lumpur, builds upon decades of cooperation and aims to boost bilateral trade and investment in key sectors including manufacturing, technology, and renewable energy.",
  category: "business",
  author: "Ahmad Ibrahim",
  date: "2023-06-15",
  featured: false,
  premium: true,
  image: "/placeholder.svg?height=600&width=800",
  imageCaption: "Malaysian and Japanese officials at trade agreement signing ceremony",
  status: "published",
}

export default function ArticleEditPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const isNew = params.id === "new"
  const [isLoading, setIsLoading] = useState(false)

  const [article, setArticle] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    featured: false,
    premium: false,
    image: "",
    imageCaption: "",
    status: "draft",
  })

  useEffect(() => {
    if (!isNew) {
      // In a real app, this would fetch from Supabase
      setArticle(mockArticle)
    }
  }, [isNew])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setArticle((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setArticle((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setArticle((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would save to Supabase
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: isNew ? "Article created" : "Article updated",
        description: `"${article.title}" has been ${isNew ? "created" : "updated"} successfully.`,
      })

      if (isNew) {
        router.push("/admin/articles")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem saving the article.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/articles">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">{isNew ? "Create New Article" : "Edit Article"}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={article.title}
                onChange={handleChange}
                placeholder="Enter article title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                name="slug"
                value={article.slug}
                onChange={handleChange}
                placeholder="enter-article-slug"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={article.excerpt}
                onChange={handleChange}
                placeholder="Brief summary of the article"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={article.content}
                onChange={handleChange}
                placeholder="Full article content"
                rows={15}
                required
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={article.status} onValueChange={(value) => handleSelectChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={article.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    name="author"
                    value={article.author}
                    onChange={handleChange}
                    placeholder="Author name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Featured Image URL</Label>
                  <Input
                    id="image"
                    name="image"
                    value={article.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageCaption">Image Caption</Label>
                  <Input
                    id="imageCaption"
                    name="imageCaption"
                    value={article.imageCaption}
                    onChange={handleChange}
                    placeholder="Image caption"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="featured" className="cursor-pointer">
                    Featured Article
                  </Label>
                  <Switch
                    id="featured"
                    checked={article.featured}
                    onCheckedChange={(checked) => handleSwitchChange("featured", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="premium" className="cursor-pointer">
                    Premium Article
                  </Label>
                  <Switch
                    id="premium"
                    checked={article.premium}
                    onCheckedChange={(checked) => handleSwitchChange("premium", checked)}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link href="/admin/articles">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  "Saving..."
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    {isNew ? "Create Article" : "Update Article"}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
