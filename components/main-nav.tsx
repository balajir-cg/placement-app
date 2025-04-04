"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface MainNavProps {
  userRole: string
}

export function MainNav({ userRole }: MainNavProps) {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Home" },
    { href: "/dashboard/blog", label: "Blog" },
    { href: "/dashboard/timeline", label: "Timeline" },
    { href: "/dashboard/profile", label: "Profile" },
  ]

  // Add role-specific nav items
  if (userRole === "po") {
    navItems.push({ href: "/dashboard/manage-students", label: "Manage Students" })
    navItems.push({ href: "/dashboard/manage-companies", label: "Manage Companies" })
  } else if (userRole === "recruiter") {
    navItems.push({ href: "/dashboard/job-postings", label: "Job Postings" })
    navItems.push({ href: "/dashboard/applications", label: "Applications" })
  }

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-muted-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

