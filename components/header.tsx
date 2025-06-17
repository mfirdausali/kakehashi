"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, User } from "lucide-react"
import SearchForm from "./search-form"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)

  const categories = [
    { name: "World", href: "/categories/world" },
    { name: "Business", href: "/categories/business" },
    { name: "Technology", href: "/categories/technology" },
    { name: "Science", href: "/categories/science" },
    { name: "Culture", href: "/categories/culture" },
  ]

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="py-4">
                  <SheetClose asChild>
                    <Link href="/" className="block mb-6">
                      <h1 className="text-2xl font-serif font-bold">Kakehashi</h1>
                    </Link>
                  </SheetClose>

                  <nav className="grid gap-4">
                    {categories.map((category) => (
                      <SheetClose asChild key={category.name}>
                        <Link href={category.href} className="block py-2 text-lg hover:text-red-700 transition-colors">
                          {category.name}
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Link href="/about" className="block py-2 text-lg hover:text-red-700 transition-colors">
                        About Us
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/contact" className="block py-2 text-lg hover:text-red-700 transition-colors">
                        Contact
                      </Link>
                    </SheetClose>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold hidden md:block">Kakehashi</h1>
              <h1 className="text-2xl font-serif font-bold md:hidden">KH</h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium hover:text-red-700 transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <Link href="/about" className="text-sm font-medium hover:text-red-700 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-red-700 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <Link href="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>

            <Link href="/subscribe" className="hidden md:block">
              <Button className="bg-red-700 hover:bg-red-800 text-white">Subscribe</Button>
            </Link>
          </div>
        </div>

        {showSearch && (
          <div className="py-4 border-t border-gray-200">
            <SearchForm onSearch={() => setShowSearch(false)} />
          </div>
        )}
      </div>
    </header>
  )
}
