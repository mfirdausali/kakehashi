"use client"

import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function BillingToggle() {
  const [isAnnual, setIsAnnual] = useState(true)

  const toggleBilling = () => {
    setIsAnnual(!isAnnual)
  }

  useEffect(() => {
    // Basic plan
    const basicPrice = document.getElementById("basic-price")
    const basicPeriod = document.getElementById("basic-period")
    const basicMonthly = document.getElementById("basic-monthly")
    const basicCompare = document.getElementById("basic-compare")

    // Premium plan
    const premiumPrice = document.getElementById("premium-price")
    const premiumPeriod = document.getElementById("premium-period")
    const premiumMonthly = document.getElementById("premium-monthly")
    const premiumCompare = document.getElementById("premium-compare")

    // Business plan
    const businessPrice = document.getElementById("business-price")
    const businessPeriod = document.getElementById("business-period")
    const businessMonthly = document.getElementById("business-monthly")
    const businessCompare = document.getElementById("business-compare")

    if (isAnnual) {
      // Annual pricing
      if (basicPrice) basicPrice.textContent = "RM150"
      if (basicPeriod) basicPeriod.textContent = "/year"
      if (basicMonthly) {
        basicMonthly.textContent = "RM12.50/month (Save 17%)"
        basicMonthly.classList.remove("hidden")
      }
      if (basicCompare) basicCompare.classList.add("hidden")

      if (premiumPrice) premiumPrice.textContent = "RM250"
      if (premiumPeriod) premiumPeriod.textContent = "/year"
      if (premiumMonthly) {
        premiumMonthly.textContent = "RM20.83/month (Save 17%)"
        premiumMonthly.classList.remove("hidden")
      }
      if (premiumCompare) premiumCompare.classList.add("hidden")

      if (businessPrice) businessPrice.textContent = "RM500"
      if (businessPeriod) businessPeriod.textContent = "/year"
      if (businessMonthly) {
        businessMonthly.textContent = "RM41.67/month (Save 17%)"
        businessMonthly.classList.remove("hidden")
      }
      if (businessCompare) businessCompare.classList.add("hidden")
    } else {
      // Monthly pricing
      if (basicPrice) basicPrice.textContent = "RM15"
      if (basicPeriod) basicPeriod.textContent = "/month"
      if (basicMonthly) basicMonthly.classList.add("hidden")
      if (basicCompare) {
        basicCompare.textContent = "RM150/year if paid annually"
        basicCompare.classList.remove("hidden")
      }

      if (premiumPrice) premiumPrice.textContent = "RM25"
      if (premiumPeriod) premiumPeriod.textContent = "/month"
      if (premiumMonthly) premiumMonthly.classList.add("hidden")
      if (premiumCompare) {
        premiumCompare.textContent = "RM250/year if paid annually"
        premiumCompare.classList.remove("hidden")
      }

      if (businessPrice) businessPrice.textContent = "RM50"
      if (businessPeriod) businessPeriod.textContent = "/month"
      if (businessMonthly) businessMonthly.classList.add("hidden")
      if (businessCompare) {
        businessCompare.textContent = "RM500/year if paid annually"
        businessCompare.classList.remove("hidden")
      }
    }
  }, [isAnnual])

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-8 mb-2">
        <span className={`text-lg ${isAnnual ? "font-bold text-red-700" : "text-gray-500"}`}>Annual</span>
        <div className="flex items-center space-x-2">
          <Switch id="billing-toggle" checked={!isAnnual} onCheckedChange={toggleBilling} />
          <Label htmlFor="billing-toggle" className="sr-only">
            Toggle billing period
          </Label>
        </div>
        <span className={`text-lg ${!isAnnual ? "font-bold text-red-700" : "text-gray-500"}`}>Monthly</span>
      </div>
      <p className="text-sm text-gray-600">
        {isAnnual ? "Save 17% with annual billing" : "Switch to annual billing for a 17% discount"}
      </p>
    </div>
  )
}
