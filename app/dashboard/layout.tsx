"use client"

import type React from "react"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { useAuth } from "@/contexts/auth-context"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Redirect to sign in if not authenticated and not loading
    if (!isLoading && !user) {
      router.push("/signin")
    }
  }, [user, isLoading, router])

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-rose-600">
                CampusConnect
              </div>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </header>
        <main className="flex-1 p-8">
          <div className="container">
            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-4 w-full max-w-md mb-8" />
            <div className="grid gap-6">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </main>
      </div>
    )
  }

  // If authenticated, show dashboard
  if (user) {
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
              <MainNav />
            </div>
            <UserNav
              user={{
                name: user.name,
                email: user.email,
                role: user.role,
                image: user.avatarUrl,
              }}
            />
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

  // This should not be reached due to the redirect, but just in case
  return null
}
