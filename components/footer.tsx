import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-economist-red">
      <div className="container mx-auto px-4 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/world" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  World
                </Link>
              </li>
              <li>
                <Link href="/categories/business" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/categories/technology" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/categories/science" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/categories/culture" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Culture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Advertise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-700 hover:text-economist-red transition-colors">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Subscribe</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Get the best of Kakehashi delivered to your inbox.
            </p>
            <Link href="/subscribe">
              <button className="bg-economist-red text-white px-4 py-2 text-xs font-bold uppercase hover:bg-red-700 transition-colors w-full">
                Subscribe
              </button>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-economist-red px-3 py-1">
                <span className="text-white font-bold uppercase tracking-tight text-sm">Kakehashi</span>
              </div>
              <span className="text-xs text-gray-500">© {new Date().getFullYear()}</span>
            </div>
            <p className="text-xs text-gray-500 text-center md:text-right">
              In-depth reporting and analysis bridging Malaysia and Japan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
