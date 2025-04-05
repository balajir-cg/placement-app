"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"

export function RoleBasedNav() {
  const pathname = usePathname()
  const { user } = useAuth()

  if (!user) return null

  // Shared navigation items for all roles
  const navItems = [
    { href: "/dashboard", label: "Home" },
    { href: "/dashboard/blog", label: "Blog" },
    { href: "/dashboard/timeline", label: "Timeline" },
    { href: "/dashboard/profile", label: "Profile" },
  ]

  // Role-specific navigation items
  if (user.role === "po") {
    navItems.push({ href: "/dashboard/student-directory", label: "Student Directory" })
    navItems.push({ href: "/dashboard/verification", label: "Verify Students" })
    navItems.push({ href: "/dashboard/admin", label: "Admin Panel" })
  } else if (user.role === "pr") {
    navItems.push({ href: "/dashboard/student-directory", label: "Student Directory" })
    navItems.push({ href: "/dashboard/verification", label: "Assist Verification" })
    navItems.push({ href: "/dashboard/admin-lite", label: "Admin" })
  } else if (user.role === "student") {
    navItems.push({ href: "/dashboard/documents", label: "My Documents" })
    navItems.push({ href: "/dashboard/create-post", label: "Write Post" })
  }

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-rose-500",
            pathname === item.href ? "text-rose-500" : "text-muted-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
