import TestAdminLogin from "@/components/admin/test-admin-login"

export const metadata = {
  title: "Admin Login | Kakehashi",
  description: "Login to access the Kakehashi admin dashboard",
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold">Kakehashi Admin</h1>
          <p className="text-gray-600 mt-2">Login to manage your news platform</p>
        </div>

        <TestAdminLogin />
      </div>
    </div>
  )
}
