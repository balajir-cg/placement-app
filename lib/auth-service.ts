import { ID, Query } from "appwrite"
import { account, databases, USERS_COLLECTION_ID, DATABASE_ID, avatars } from "./appwrite"

export type UserData = {
  name: string
  email: string
  role: "student" | "pr" | "po" | "recruiter"
  rollNumber?: string
  department?: string
  batch?: string
  company?: string
  position?: string
}

export const authService = {
  // Create a new account
  async createAccount(email: string, password: string, userData: UserData) {
    try {
      // Create the user account
      const newAccount = await account.create(ID.unique(), email, password, userData.name)

      if (!newAccount) throw Error("Failed to create account")

      // Create a session
      await account.createEmailSession(email, password)

      // Get the user's avatar URL
      const avatarUrl = avatars.getInitials(userData.name)

      // Create a user document in the database
      const newUser = await databases.createDocument(DATABASE_ID, USERS_COLLECTION_ID, ID.unique(), {
        userId: newAccount.$id,
        email: email,
        name: userData.name,
        role: userData.role,
        rollNumber: userData.rollNumber || "",
        department: userData.department || "",
        batch: userData.batch || "",
        company: userData.company || "",
        position: userData.position || "",
        avatarUrl: avatarUrl,
        createdAt: new Date().toISOString(),
      })

      return newUser
    } catch (error) {
      console.error("Error creating account:", error)
      throw error
    }
  },

  // Sign in with email and password
  async signIn(email: string, password: string) {
    try {
      return await account.createEmailSession(email, password)
    } catch (error) {
      console.error("Error signing in:", error)
      throw error
    }
  },

  // Sign out
  async signOut() {
    try {
      return await account.deleteSession("current")
    } catch (error) {
      console.error("Error signing out:", error)
      throw error
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const currentAccount = await account.get()

      if (!currentAccount) throw Error("No user logged in")

      // Get user data from database
      const users = await databases.listDocuments(DATABASE_ID, USERS_COLLECTION_ID, [
        Query.equal("userId", currentAccount.$id),
      ])

      if (!users.documents.length) throw Error("User not found in database")

      const userData = users.documents[0]

      return {
        id: currentAccount.$id,
        name: userData.name,
        email: userData.email,
        role: userData.role,
        avatarUrl: userData.avatarUrl,
        rollNumber: userData.rollNumber,
        department: userData.department,
        batch: userData.batch,
        company: userData.company,
        position: userData.position,
      }
    } catch (error) {
      console.error("Error getting current user:", error)
      return null
    }
  },

  // Check if user is logged in
  async isLoggedIn() {
    try {
      const currentAccount = await account.get()
      return !!currentAccount
    } catch (error) {
      return false
    }
  },
}
