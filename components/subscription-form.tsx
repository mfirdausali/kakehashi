"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Switch } from "@/components/ui/switch"

export default function SubscriptionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [plan, setPlan] = useState("premium")
  const [isAnnual, setIsAnnual] = useState(true)
  const { toast } = useToast()

  // Get the billing period from the toggle component
  useEffect(() => {
    const billingToggle = document.getElementById("billing-toggle") as HTMLInputElement
    if (billingToggle) {
      setIsAnnual(!billingToggle.checked)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Subscription initiated",
        description: "We've received your subscription request. Please complete payment to activate your account.",
      })
      // In a real app, this would redirect to a payment processor or show payment options
    }, 1500)
  }

  const getPlanPrice = () => {
    if (isAnnual) {
      switch (plan) {
        case "basic":
          return "RM150/year"
        case "premium":
          return "RM250/year"
        case "business":
          return "RM500/year"
        default:
          return "RM250/year"
      }
    } else {
      switch (plan) {
        case "basic":
          return "RM15/month"
        case "premium":
          return "RM25/month"
        case "business":
          return "RM50/month"
        default:
          return "RM25/month"
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" type="text" required />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>

        <div>
          <Label>Select your plan</Label>
          <RadioGroup defaultValue="premium" value={plan} onValueChange={setPlan} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="basic" id="basic" />
              <Label htmlFor="basic" className="cursor-pointer">
                Digital Basic ({isAnnual ? "RM150/year" : "RM15/month"})
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium" className="cursor-pointer">
                Premium Digital ({isAnnual ? "RM250/year" : "RM25/month"})
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="business" id="business" />
              <Label htmlFor="business" className="cursor-pointer">
                Business ({isAnnual ? "RM500/year" : "RM50/month"})
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label>Billing Period</Label>
          <div className="flex items-center space-x-2 mt-2">
            <Switch id="form-billing-toggle" checked={!isAnnual} onCheckedChange={() => setIsAnnual(!isAnnual)} />
            <Label htmlFor="form-billing-toggle" className="cursor-pointer">
              {isAnnual ? "Annual (Save 17%)" : "Monthly"}
            </Label>
          </div>
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <Select defaultValue="malaysia">
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="malaysia">Malaysia</SelectItem>
              <SelectItem value="japan">Japan</SelectItem>
              <SelectItem value="singapore">Singapore</SelectItem>
              <SelectItem value="indonesia">Indonesia</SelectItem>
              <SelectItem value="thailand">Thailand</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="payment-method">Payment Method</Label>
          <Select defaultValue="card">
            <SelectTrigger id="payment-method">
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">Credit/Debit Card</SelectItem>
              <SelectItem value="bank">Online Banking</SelectItem>
              <SelectItem value="ewallet">E-Wallet (Touch n Go, GrabPay)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full bg-red-700 hover:bg-red-800" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : `Continue to Payment (${getPlanPrice()})`}
        </Button>
        <p className="text-xs text-gray-500 mt-2 text-center">
          By subscribing, you agree to our Terms of Service and Privacy Policy. You can cancel anytime.
        </p>
      </div>
    </form>
  )
}
