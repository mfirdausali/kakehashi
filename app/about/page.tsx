import Image from "next/image"

export const metadata = {
  title: "About Us | Kakehashi",
  description: "Learn about Kakehashi's mission to bridge Malaysia and Japan through quality journalism",
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">About Kakehashi</h1>

        <div className="relative aspect-[16/9] mb-8">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Kakehashi team"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Our Mission</h2>
          <p>
            Kakehashi, meaning "bridge" in Japanese, was founded with a clear mission: to connect Malaysia and Japan
            through insightful journalism, cultural exchange, and business intelligence. We believe that deeper
            understanding between these two vibrant nations can lead to meaningful collaboration and mutual growth.
          </p>

          <h2>Our Story</h2>
          <p>
            Established in 2020, Kakehashi began as a small digital publication focused on trade relations between
            Malaysia and Japan. Our founding team, consisting of journalists from both countries, recognized the need
            for dedicated coverage of this important bilateral relationship.
          </p>

          <p>
            As our readership grew, so did our scope. Today, Kakehashi covers a wide range of topics including business,
            technology, culture, and world affairs, always with a special focus on developments relevant to Malaysia and
            Japan.
          </p>

          <h2>Our Team</h2>
          <p>
            Our diverse editorial team includes journalists, analysts, and subject matter experts based in Kuala Lumpur,
            Tokyo, and other major cities across both countries. This distributed presence allows us to provide
            on-the-ground reporting and local insights that other publications cannot match.
          </p>

          <h2>Editorial Standards</h2>
          <p>
            At Kakehashi, we are committed to the highest standards of journalistic integrity. Our reporting is
            fact-based, balanced, and independent. We strive for accuracy in all our content and promptly correct any
            errors.
          </p>

          <h2>Our Approach</h2>
          <p>
            We believe in journalism that goes beyond headlines to provide context, analysis, and understanding. Our
            premium content offers in-depth coverage of important trends and developments, helping our readers make
            informed decisions in an increasingly complex world.
          </p>

          <h2>Join Us</h2>
          <p>
            Whether you're a casual reader interested in learning more about Malaysia-Japan relations or a business
            professional seeking actionable intelligence, Kakehashi offers valuable perspectives you won't find
            elsewhere. We invite you to subscribe to our premium content and become part of our growing community.
          </p>
        </div>
      </div>
    </main>
  )
}
