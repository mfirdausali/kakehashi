"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  FileText,
  Users,
  Settings,
  BarChart3,
  Tag,
  MessageSquare,
  LogOut,
  ChevronDown,
  ChevronRight,
  LayoutTemplate,
} from "lucide-react"
import { useState } from "react"

interface SidebarItemProps {
  href: string
  icon: React.ReactNode
  title: string
  isActive: boolean
  children?: { href: string; title: string }[]
}

function SidebarItem({ href, icon, title, isActive, children }: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = children && children.length > 0

  return (
    <div>
      {hasChildren ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center w-full px-3 py-2 text-sm rounded-md",
            isActive ? "bg-red-100 text-red-700" : "text-gray-700 hover:bg-gray-100",
          )}
        >
          <span className="flex items-center flex-1">
            <span className="mr-3">{icon}</span>
            {title}
          </span>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      ) : (
        <Link
          href={href}
          className={cn(
            "flex items-center px-3 py-2 text-sm rounded-md",
            isActive ? "bg-red-100 text-red-700" : "text-gray-700 hover:bg-gray-100",
          )}
        >
          <span className="mr-3">{icon}</span>
          {title}
        </Link>
      )}

      {hasChildren && isOpen && (
        <div className="ml-6 mt-1 space-y-1">
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "block px-3 py-2 text-sm rounded-md",
                href === child.href ? "bg-red-50 text-red-700" : "text-gray-700 hover:bg-gray-100",
              )}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <div className="mb-8">
        <Link href="/admin" className="flex items-center">
          <h1 className="text-xl font-serif font-bold">Kakehashi Admin</h1>
        </Link>
      </div>

      <nav className="space-y-1">
        <SidebarItem
          href="/admin"
          icon={<BarChart3 className="h-5 w-5" />}
          title="Dashboard"
          isActive={pathname === "/admin"}
        />

        <SidebarItem
          href="/admin/articles"
          icon={<FileText className="h-5 w-5" />}
          title="Articles"
          isActive={pathname.startsWith("/admin/articles")}
          children={[
            { href: "/admin/articles", title: "All Articles" },
            { href: "/admin/articles/new", title: "Create New" },
            { href: "/admin/articles/categories", title: "Categories" },
          ]}
        />

        <SidebarItem
          href="/admin/users"
          icon={<Users className="h-5 w-5" />}
          title="Users"
          isActive={pathname.startsWith("/admin/users")}
          children={[
            { href: "/admin/users", title: "All Users" },
            { href: "/admin/users/new", title: "Create New" },
            { href: "/admin/users/subscriptions", title: "Subscriptions" },
          ]}
        />

        <SidebarItem
          href="/admin/advertisements"
          icon={<LayoutTemplate className="h-5 w-5" />}
          title="Advertisements"
          isActive={pathname.startsWith("/admin/advertisements")}
          children={[
            { href: "/admin/advertisements", title: "All Ads" },
            { href: "/admin/advertisements/new", title: "Create New" },
            { href: "/admin/advertisements/analytics", title: "Analytics" },
          ]}
        />

        <SidebarItem
          href="/admin/comments"
          icon={<MessageSquare className="h-5 w-5" />}
          title="Comments"
          isActive={pathname.startsWith("/admin/comments")}
        />

        <SidebarItem
          href="/admin/tags"
          icon={<Tag className="h-5 w-5" />}
          title="Tags"
          isActive={pathname.startsWith("/admin/tags")}
        />

        <SidebarItem
          href="/admin/settings"
          icon={<Settings className="h-5 w-5" />}
          title="Settings"
          isActive={pathname.startsWith("/admin/settings")}
        />

        <div className="pt-4 mt-4 border-t">
          <Link
            href="/admin/login"
            className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Link>
        </div>
      </nav>
    </div>
  )
}
