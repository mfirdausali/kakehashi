"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { Edit, Eye, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data - in a real app, this would come from Supabase
const advertisements = [
  {
    id: "1",
    name: "Malaysia Airlines Promotion",
    position: "top",
    startDate: "2023-06-01",
    endDate: "2023-07-01",
    status: "active",
    impressions: 12450,
    clicks: 423,
    imageUrl: "/placeholder.svg?height=120&width=728",
    linkUrl: "https://example.com/promotion",
  },
  {
    id: "2",
    name: "Japan Tourism Board",
    position: "sidebar",
    startDate: "2023-05-15",
    endDate: "2023-08-15",
    status: "active",
    impressions: 8932,
    clicks: 312,
    imageUrl: "/placeholder.svg?height=600&width=300",
    linkUrl: "https://example.com/japan-tourism",
  },
  {
    id: "3",
    name: "Tech Conference 2023",
    position: "inline",
    startDate: "2023-07-01",
    endDate: "2023-07-15",
    status: "scheduled",
    impressions: 0,
    clicks: 0,
    imageUrl: "/placeholder.svg?height=250&width=728",
    linkUrl: "https://example.com/tech-conference",
  },
  {
    id: "4",
    name: "Business Summit Kuala Lumpur",
    position: "inline",
    startDate: "2023-04-10",
    endDate: "2023-05-10",
    status: "ended",
    impressions: 15678,
    clicks: 532,
    imageUrl: "/placeholder.svg?height=250&width=728",
    linkUrl: "https://example.com/business-summit",
  },
  {
    id: "5",
    name: "Japanese Language Course",
    position: "sidebar",
    startDate: "2023-06-15",
    endDate: "2023-09-15",
    status: "active",
    impressions: 4567,
    clicks: 189,
    imageUrl: "/placeholder.svg?height=600&width=300",
    linkUrl: "https://example.com/language-course",
  },
]

export default function AdvertisementsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  const filteredAds = advertisements.filter(
    (ad) =>
      ad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.status.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = (id: string, name: string) => {
    // In a real app, this would delete from Supabase
    toast({
      title: "Advertisement deleted",
      description: `"${name}" has been deleted.`,
    })
  }

  const getPositionLabel = (position: string) => {
    switch (position) {
      case "top":
        return "Top Banner"
      case "sidebar":
        return "Sidebar"
      case "inline":
        return "In-Article"
      default:
        return position
    }
  }

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 hover:bg-green-100"
      case "scheduled":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100"
      case "ended":
        return "bg-gray-100 text-gray-700 hover:bg-gray-100"
      case "paused":
        return "bg-amber-100 text-amber-700 hover:bg-amber-100"
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100"
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Advertisements</h1>
        <Button asChild>
          <Link href="/admin/advertisements/new">
            <Plus className="h-4 w-4 mr-2" />
            New Advertisement
          </Link>
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search advertisements..."
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
              <TableHead>Preview</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAds.map((ad) => (
              <TableRow key={ad.id}>
                <TableCell>
                  <div className="relative w-16 h-16 bg-gray-100">
                    <Image src={ad.imageUrl || "/placeholder.svg"} alt={ad.name} fill className="object-cover" />
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <Link href={`/admin/advertisements/${ad.id}`} className="hover:underline">
                    {ad.name}
                  </Link>
                </TableCell>
                <TableCell>{getPositionLabel(ad.position)}</TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div>{formatDate(ad.startDate)}</div>
                    <div className="text-gray-500">to</div>
                    <div>{formatDate(ad.endDate)}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusBadgeClass(ad.status)}>{ad.status}</Badge>
                </TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div>{ad.impressions.toLocaleString()} impressions</div>
                    <div>{ad.clicks.toLocaleString()} clicks</div>
                    {ad.impressions > 0 && (
                      <div className="text-xs text-gray-500">
                        CTR: {((ad.clicks / ad.impressions) * 100).toFixed(2)}%
                      </div>
                    )}
                  </div>
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
                        <Link href={`/admin/advertisements/${ad.id}`}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={ad.linkUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(ad.id, ad.name)}>
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
