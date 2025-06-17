"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent",
        description: "Thank you for contacting us. We'll respond as soon as possible.",
      })
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Have a question, feedback, or business inquiry? We'd love to hear from you. Reach out to the Kakehashi team
          using the form below.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-8">
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Our Offices</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-700 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-medium">Kuala Lumpur</h3>
                    <address className="not-italic text-gray-600">
                      Level 25, Menara XYZ
                      <br />
                      Jalan Sultan Ismail
                      <br />
                      50250 Kuala Lumpur, Malaysia
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-700 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-medium">Tokyo</h3>
                    <address className="not-italic text-gray-600">
                      Shibuya Hikarie 8F
                      <br />
                      2-21-1 Shibuya
                      <br />
                      Shibuya-ku, Tokyo 150-8510, Japan
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-700 shrink-0" />
                  <div>
                    <p className="text-gray-600">Malaysia: +60 3 2123 4567</p>
                    <p className="text-gray-600">Japan: +81 3 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-700 shrink-0" />
                  <div>
                    <p className="text-gray-600">General: info@kakehashi.com</p>
                    <p className="text-gray-600">Press: media@kakehashi.com</p>
                    <p className="text-gray-600">Subscriptions: support@kakehashi.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={6} required />
                </div>

                <Button type="submit" className="w-full bg-red-700 hover:bg-red-800" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
