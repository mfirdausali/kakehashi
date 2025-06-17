import type React from "react"
import { redirect } from "next/navigation"
import AdminSidebar from "@/components/admin/admin-sidebar"

// This is a placeholder for actual authentication check
// In a real app, you would use Supabase auth or similar
const checkAuth = () => {
  // For demo purposes, we'll consider the user authenticated
  // In a real app, you would check for auth tokens/cookies
  return true
}

export const metadata = {
  title: "Admin Dashboard | Kakehashi",
  description: "Manage content and users for Kakehashi news platform",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // In a real app, you would check authentication and admin status
  const isAuthenticated = checkAuth()

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  )
}
