"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { Edit, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data - in a real app, this would come from Supabase
const articles = [
  {
    id: "1",
    title: "Global Economy Faces Uncertain Future Amid Rising Inflation",
    slug: "global-economy-outlook-2023",
    category: "business",
    author: "Jane Smith",
    date: "2023-05-15",
    featured: true,
    premium: false,
    status: "published",
  },
  {
    id: "2",
    title: "The AI Revolution: How Artificial Intelligence is Transforming Industries",
    slug: "ai-revolution-transforming-industries",
    category: "technology",
    author: "Michael Johnson",
    date: "2023-06-02",
    featured: true,
    premium: false,
    status: "published",
  },
  {
    id: "3",
    title: "Climate Change Policy: Assessing the Global Response to Environmental Crisis",
    slug: "climate-change-policy-global-response",
    category: "world",
    author: "Sarah Chen",
    date: "2023-04-22",
    featured: true,
    premium: false,
    status: "published",
  },
  {
    id: "4",
    title: "Malaysia and Japan Strengthen Economic Ties with New Trade Agreement",
    slug: "malaysia-japan-trade-relations",
    category: "business",
    author: "Ahmad Ibrahim",
    date: "2023-06-15",
    featured: false,
    premium: true,
    status: "published",
  },
  {
    id: "5",
    title: "The Growing Influence of Japanese Cuisine on Malaysia's Food Scene",
    slug: "japanese-culinary-influence-malaysian-cuisine",
    category: "culture",
    author: "Nurul Hasan",
    date: "2023-05-28",
    featured: false,
    premium: true,
    status: "published",
  },
  {
    id: "6",
    title: "Malaysia and Japan Launch Joint Initiative for Sustainable Technology Development",
    slug: "sustainable-technology-collaboration-malaysia-japan",
    category: "technology",
    author: "Lee Mei Ling",
    date: "2023-04-05",
    featured: false,
    premium: true,
    status: "published",
  },
  {
    id: "7",
    title: "Draft: Upcoming Cultural Exchange Program Between Malaysia and Japan",
    slug: "cultural-exchange-program-draft",
    category: "culture",
    author: "Ahmad Ibrahim",
    date: "2023-06-20",
    featured: false,
    premium: false,
    status: "draft",
  },
]

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = (id: string, title: string) => {
    // In a real app, this would delete from Supabase
    toast({
      title: "Article deleted",
      description: `"${title}" has been deleted.`,
    })
  }

  const handleTogglePremium = (id: string, currentStatus: boolean) => {
    // In a real app, this would update in Supabase
    toast({
      title: currentStatus ? "Article set as standard" : "Article set as premium",
      description: `Article status updated successfully.`,
    })
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Articles</h1>
        <Button asChild>
          <Link href="/admin/articles/new">
            <Plus className="h-4 w-4 mr-2" />
            New Article
          </Link>
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Premium</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArticles.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="font-medium">
                  <Link href={`/admin/articles/${article.id}`} className="hover:underline">
                    {article.title}
                  </Link>
                  {article.featured && (
                    <Badge variant="outline" className="ml-2 bg-yellow-50 text-yellow-700 border-yellow-200">
                      Featured
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="capitalize">{article.category}</TableCell>
                <TableCell>{article.author}</TableCell>
                <TableCell>{formatDate(article.date)}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      article.status === "published"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-amber-100 text-amber-700 hover:bg-amber-100"
                    }
                  >
                    {article.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      article.premium
                        ? "bg-purple-100 text-purple-700 hover:bg-purple-100 cursor-pointer"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                    }
                    onClick={() => handleTogglePremium(article.id, article.premium)}
                  >
                    {article.premium ? "Premium" : "Standard"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/articles/${article.id}`}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDelete(article.id, article.title)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
