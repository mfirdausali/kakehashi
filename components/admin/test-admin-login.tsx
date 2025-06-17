"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { AlertCircle } from "lucide-react"

// Test admin credentials - in a real app, these would be stored securely
const TEST_ADMIN = {
  email: "admin@kakehashi.com",
  password: "admin123",
}

export default function TestAdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple validation for the test account
    if (email === TEST_ADMIN.email && password === TEST_ADMIN.password) {
      // In a real app, this would set authentication cookies/tokens
      toast({
        title: "Logged in as admin",
        description: "You now have access to all admin features.",
      })

      // Simulate a delay for the login process
      setTimeout(() => {
        setIsLoading(false)
        router.push("/admin")
      }, 1000)
    } else {
      setIsLoading(false)
      setError("Invalid credentials. Try the test admin account.")
    }
  }

  const fillTestCredentials = () => {
    setEmail(TEST_ADMIN.email)
    setPassword(TEST_ADMIN.password)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Admin Login</CardTitle>
        <CardDescription>Access the admin dashboard to manage content, users, and advertisements.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@kakehashi.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md flex items-start gap-2">
              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <Button type="submit" className="w-full bg-red-700 hover:bg-red-800" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="text-sm text-gray-500 mb-2">Use the test admin account to explore admin features.</div>
        <Button variant="outline" onClick={fillTestCredentials} className="w-full">
          Fill Test Admin Credentials
        </Button>
      </CardFooter>
    </Card>
  )
}
