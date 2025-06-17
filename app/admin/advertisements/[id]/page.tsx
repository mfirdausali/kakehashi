"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Save, Upload } from "lucide-react"
import Link from "next/link"

// Mock advertisement data - in a real app, this would be fetched from Supabase
const mockAd = {
  id: "2",
  name: "Japan Tourism Board",
  description: "Promotional banner for Japan Tourism Board's summer campaign",
  position: "sidebar",
  startDate: "2023-05-15",
  endDate: "2023-08-15",
  status: "active",
  imageUrl: "/placeholder.svg?height=600&width=300",
  linkUrl: "https://example.com/japan-tourism",
  altText: "Discover Japan - Summer 2023",
  targetAudience: "all",
}

export default function AdvertisementEditPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const isNew = params.id === "new"
  const [isLoading, setIsLoading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState("")

  const [ad, setAd] = useState({
    name: "",
    description: "",
    position: "top",
    startDate: "",
    endDate: "",
    status: "draft",
    imageUrl: "",
    linkUrl: "",
    altText: "",
    targetAudience: "all",
  })

  useEffect(() => {
    if (!isNew) {
      // In a real app, this would fetch from Supabase
      setAd(mockAd)
      setPreviewUrl(mockAd.imageUrl)
    }
  }, [isNew])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAd((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setAd((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, this would upload to storage
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
      setAd((prev) => ({ ...prev, imageUrl: url }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would save to Supabase
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: isNew ? "Advertisement created" : "Advertisement updated",
        description: `"${ad.name}" has been ${isNew ? "created" : "updated"} successfully.`,
      })

      if (isNew) {
        router.push("/admin/advertisements")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem saving the advertisement.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/advertisements">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">{isNew ? "Create New Advertisement" : "Edit Advertisement"}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Advertisement Name</Label>
              <Input
                id="name"
                name="name"
                value={ad.name}
                onChange={handleChange}
                placeholder="Enter advertisement name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={ad.description}
                onChange={handleChange}
                placeholder="Brief description of the advertisement"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkUrl">Destination URL</Label>
              <Input
                id="linkUrl"
                name="linkUrl"
                type="url"
                value={ad.linkUrl}
                onChange={handleChange}
                placeholder="https://example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Advertisement Image</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <Button type="button" variant="outline" onClick={() => document.getElementById("image")?.click()}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
                <span className="text-sm text-gray-500">{previewUrl ? "Image uploaded" : "No image uploaded"}</span>
              </div>

              {previewUrl && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Preview:</p>
                  <div
                    className="relative border border-gray-200 rounded overflow-hidden"
                    style={{
                      height: ad.position === "top" ? "120px" : ad.position === "sidebar" ? "300px" : "250px",
                      width: ad.position === "sidebar" ? "300px" : "100%",
                      maxWidth: ad.position === "top" || ad.position === "inline" ? "728px" : "300px",
                    }}
                  >
                    <Image
                      src={previewUrl || "/placeholder.svg"}
                      alt="Advertisement preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="altText">Alt Text</Label>
              <Input
                id="altText"
                name="altText"
                value={ad.altText}
                onChange={handleChange}
                placeholder="Alternative text for the image"
                required
              />
              <p className="text-xs text-gray-500">Describe the image for accessibility purposes</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Select value={ad.position} onValueChange={(value) => handleSelectChange("position", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="top">Top Banner</SelectItem>
                      <SelectItem value="sidebar">Sidebar</SelectItem>
                      <SelectItem value="inline">In-Article</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500">
                    {ad.position === "top"
                      ? "Displayed at the top of the page (728×90px)"
                      : ad.position === "sidebar"
                        ? "Displayed in the sidebar (300×600px)"
                        : "Displayed within article content (728×250px)"}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={ad.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" name="endDate" type="date" value={ad.endDate} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={ad.status} onValueChange={(value) => handleSelectChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                      <SelectItem value="ended">Ended</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Select
                    value={ad.targetAudience}
                    onValueChange={(value) => handleSelectChange("targetAudience", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select target audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Visitors</SelectItem>
                      <SelectItem value="subscribers">Subscribers Only</SelectItem>
                      <SelectItem value="non-subscribers">Non-Subscribers Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link href="/admin/advertisements">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  "Saving..."
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    {isNew ? "Create Advertisement" : "Update Advertisement"}
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
