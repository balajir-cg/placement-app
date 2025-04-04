"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

// Mock user data - in a real app, this would come from authentication
const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  role: "student",
  image: "/placeholder.svg?height=32&width=32",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user] = useState(mockUser)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/dashboard"
              className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-rose-600"
            >
              CampusConnect
            </Link>
            <MainNav userRole={user.role} />
          </div>
          <UserNav user={user} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 CampusConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Help
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

