"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

// Mock user data
const MOCK_USERS = {
  "student@example.com": {
    id: "student-1",
    email: "student@example.com",
    password: "password",
    name: "John Student",
    role: "student",
    rollNumber: "CS2023001",
    department: "Computer Science",
    batch: "2023-2027",
    cgpa: "8.5",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  "po@example.com": {
    id: "po-1",
    email: "po@example.com",
    password: "password",
    name: "Jane Officer",
    role: "po",
    department: "Placement Cell",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  "pr@example.com": {
    id: "pr-1",
    email: "pr@example.com",
    password: "password",
    name: "Alex Representative",
    role: "pr",
    department: "Computer Science",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
}

type User = {
  id: string
  name: string
  email: string
  role: string
  avatarUrl?: string
  [key: string]: any
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check if user is stored in localStorage on initial load
  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true)
      try {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Error checking auth:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const refreshUser = async () => {
    try {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (error) {
      setUser(null)
    }
  }

  const signIn = async (email: string, password: string) => {
    // Mock authentication
    const mockUser = MOCK_USERS[email.toLowerCase()]

    if (!mockUser || mockUser.password !== password) {
      throw new Error("Invalid email or password")
    }

    // Remove password from user object before storing
    const { password: _, ...userWithoutPassword } = mockUser

    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(userWithoutPassword))
    setUser(userWithoutPassword)
  }

  const signOut = async () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut, refreshUser }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
