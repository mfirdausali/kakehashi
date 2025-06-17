import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import SubscriptionForm from "@/components/subscription-form"
import BillingToggle from "@/components/billing-toggle"

export const metadata = {
  title: "Subscribe | Kakehashi",
  description: "Subscribe to Kakehashi for unlimited access to premium content bridging Malaysia and Japan",
}

export default function SubscribePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Subscribe to Kakehashi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get unlimited access to premium content bridging Malaysia and Japan, with exclusive insights, analysis, and
            features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Malaysia and Japan connection"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Bridging Malaysia and Japan</h2>
            <p className="text-gray-600 mb-4">
              Kakehashi means "bridge" in Japanese. Our publication serves as a cultural and informational bridge
              between Malaysia and Japan, bringing you the most important stories from both countries.
            </p>
            <p className="text-gray-600 mb-4">
              With correspondents in Kuala Lumpur and Tokyo, we provide unique perspectives and insights you won't find
              anywhere else.
            </p>
            <p className="text-gray-600">
              Your subscription supports our mission to strengthen understanding and connections between these two
              vibrant nations.
            </p>
          </div>
        </div>

        <div className="mb-8 text-center">
          <BillingToggle />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Digital Basic</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold" id="basic-price">
                    RM150
                  </span>
                  <span className="text-gray-500 ml-1" id="basic-period">
                    /year
                  </span>
                </div>
                <div className="text-sm text-green-600 font-medium mt-1" id="basic-monthly">
                  RM12.50/month (Save 17%)
                </div>
                <div className="hidden text-sm text-gray-500 mt-1" id="basic-compare">
                  RM15/month billed monthly
                </div>
              </div>
              <CardDescription>Essential digital access</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Unlimited access to standard articles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Daily newsletter</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Access on mobile and desktop</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-700 hover:bg-red-800" asChild>
                <Link href="#subscription-form">Subscribe Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-red-700 relative">
            <div className="absolute top-0 right-0 bg-red-700 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-serif">Premium Digital</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold" id="premium-price">
                    RM250
                  </span>
                  <span className="text-gray-500 ml-1" id="premium-period">
                    /year
                  </span>
                </div>
                <div className="text-sm text-green-600 font-medium mt-1" id="premium-monthly">
                  RM20.83/month (Save 17%)
                </div>
                <div className="hidden text-sm text-gray-500 mt-1" id="premium-compare">
                  RM25/month billed monthly
                </div>
              </div>
              <CardDescription>Complete digital experience</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Unlimited access to all articles including premium content</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Exclusive newsletters</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Comment on articles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Access to digital archive</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-700 hover:bg-red-800" asChild>
                <Link href="#subscription-form">Subscribe Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Business</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold" id="business-price">
                    RM500
                  </span>
                  <span className="text-gray-500 ml-1" id="business-period">
                    /year
                  </span>
                </div>
                <div className="text-sm text-green-600 font-medium mt-1" id="business-monthly">
                  RM41.67/month (Save 17%)
                </div>
                <div className="hidden text-sm text-gray-500 mt-1" id="business-compare">
                  RM50/month billed monthly
                </div>
              </div>
              <CardDescription>For professionals and organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>All Premium Digital benefits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Business intelligence reports</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Malaysia-Japan trade insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Team access (up to 5 users)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-700 hover:bg-red-800" asChild>
                <Link href="#subscription-form">Subscribe Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div id="subscription-form" className="max-w-2xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center">Start your subscription</h2>
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </main>
  )
}
