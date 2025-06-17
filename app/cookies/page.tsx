export const metadata = {
  title: "Cookie Policy | Kakehashi",
  description: "How Kakehashi uses cookies and similar technologies",
}

export default function CookiesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p>Last updated: May 1, 2023</p>

          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used
            to make websites work more efficiently and provide information to the website owners. Cookies enhance user
            experience by remembering your preferences and enabling certain website features.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>Kakehashi uses cookies for various purposes, including:</p>

          <h3>2.1 Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality such as
            security, network management, and account access. You cannot opt out of these cookies.
          </p>

          <h3>2.2 Preference Cookies</h3>
          <p>
            These cookies allow us to remember choices you make and provide enhanced, personalized features. They may be
            set by us or by third-party providers whose services we have added to our pages.
          </p>

          <h3>2.3 Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting and reporting
            information anonymously. They help us improve the way our website works.
          </p>

          <h3>2.4 Marketing Cookies</h3>
          <p>
            These cookies are used to track visitors across websites. They are set to display targeted advertisements
            based on your interests and online behavior.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third parties on our behalf. These third parties may include analytics providers
            (such as Google Analytics), advertising networks, and social media platforms. These third parties may use
            cookies, web beacons, and similar technologies to collect information about your use of our website and
            other websites.
          </p>

          <h2>4. Cookie Management</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can usually find these settings
            in the "Options" or "Preferences" menu of your browser. You can delete existing cookies, allow or block all
            cookies, or block cookies from particular sites.
          </p>

          <p>
            Please note that if you choose to block cookies, you may not be able to use all the features of our website.
          </p>

          <h2>5. Specific Cookies We Use</h2>

          <table className="w-full border-collapse border border-gray-300 my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                <th className="border border-gray-300 p-2 text-left">Purpose</th>
                <th className="border border-gray-300 p-2 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">session_id</td>
                <td className="border border-gray-300 p-2">Maintains user session</td>
                <td className="border border-gray-300 p-2">Session</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">auth_token</td>
                <td className="border border-gray-300 p-2">Authentication</td>
                <td className="border border-gray-300 p-2">30 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">preferences</td>
                <td className="border border-gray-300 p-2">Stores user preferences</td>
                <td className="border border-gray-300 p-2">1 year</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">_ga</td>
                <td className="border border-gray-300 p-2">Google Analytics</td>
                <td className="border border-gray-300 p-2">2 years</td>
              </tr>
            </tbody>
          </table>

          <h2>6. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
            business practices. Any changes will become effective when we post the revised policy on our website.
          </p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us at privacy@kakehashi.com.</p>
        </div>
      </div>
    </main>
  )
}
