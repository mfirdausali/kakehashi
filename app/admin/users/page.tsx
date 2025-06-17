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
const users = [
  {
    id: "1",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "user",
    subscription: "premium",
    status: "active",
    joinDate: "2023-01-15",
  },
  {
    id: "2",
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "user",
    subscription: "basic",
    status: "active",
    joinDate: "2023-02-22",
  },
  {
    id: "3",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "admin",
    subscription: "business",
    status: "active",
    joinDate: "2022-11-05",
  },
  {
    id: "4",
    name: "Ahmad Ibrahim",
    email: "ahmad.ibrahim@example.com",
    role: "editor",
    subscription: "premium",
    status: "active",
    joinDate: "2023-03-10",
  },
  {
    id: "5",
    name: "Nurul Hasan",
    email: "nurul.hasan@example.com",
    role: "user",
    subscription: "basic",
    status: "inactive",
    joinDate: "2023-01-30",
  },
  {
    id: "6",
    name: "Lee Mei Ling",
    email: "lee.meiling@example.com",
    role: "user",
    subscription: "none",
    status: "active",
    joinDate: "2023-04-18",
  },
]

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = (id: string, name: string) => {
    // In a real app, this would delete from Supabase
    toast({
      title: "User deleted",
      description: `"${name}" has been deleted.`,
    })
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button asChild>
          <Link href="/admin/users/new">
            <Plus className="h-4 w-4 mr-2" />
            New User
          </Link>
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search users..."
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
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Subscription</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <Link href={`/admin/users/${user.id}`} className="hover:underline">
                    {user.name}
                  </Link>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      user.role === "admin"
                        ? "bg-red-100 text-red-700 hover:bg-red-100"
                        : user.role === "editor"
                          ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      user.subscription === "premium"
                        ? "bg-purple-100 text-purple-700 hover:bg-purple-100"
                        : user.subscription === "business"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : user.subscription === "basic"
                            ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    {user.subscription === "none" ? "No subscription" : user.subscription}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      user.status === "active"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-amber-100 text-amber-700 hover:bg-amber-100"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{formatDate(user.joinDate)}</TableCell>
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
                        <Link href={`/admin/users/${user.id}`}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(user.id, user.name)}>
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
