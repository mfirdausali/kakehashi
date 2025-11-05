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
    <header className="bg-white">
      {/* Red Masthead - The Economist Style */}
      <div className="bg-economist-red">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 hover:text-white">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="py-4">
                    <SheetClose asChild>
                      <Link href="/" className="block mb-6">
                        <div className="bg-economist-red px-4 py-2">
                          <h1 className="text-2xl font-bold text-white uppercase tracking-tight">Kakehashi</h1>
                        </div>
                      </Link>
                    </SheetClose>

                    <nav className="grid gap-4">
                      {categories.map((category) => (
                        <SheetClose asChild key={category.name}>
                          <Link href={category.href} className="block py-2 text-lg hover:text-economist-red transition-colors">
                            {category.name}
                          </Link>
                        </SheetClose>
                      ))}
                      <SheetClose asChild>
                        <Link href="/about" className="block py-2 text-lg hover:text-economist-red transition-colors">
                          About Us
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/contact" className="block py-2 text-lg hover:text-economist-red transition-colors">
                          Contact
                        </Link>
                      </SheetClose>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>

              <Link href="/" className="flex items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Kakehashi</h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(!showSearch)}
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </Link>

              <Link href="/subscribe" className="hidden sm:block">
                <Button className="bg-white text-economist-red hover:bg-gray-100 font-bold uppercase text-xs px-4 py-2 h-auto">
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-b border-gray-300">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex items-center justify-center gap-8 py-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-bold uppercase tracking-wide hover:text-economist-red transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <Link href="/about" className="text-sm font-bold uppercase tracking-wide hover:text-economist-red transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-bold uppercase tracking-wide hover:text-economist-red transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {showSearch && (
        <div className="border-b border-gray-300">
          <div className="container mx-auto px-4 py-4">
            <SearchForm onSearch={() => setShowSearch(false)} />
          </div>
        </div>
      )}
    </header>
  )
}
