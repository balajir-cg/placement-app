import { ID, Query } from "appwrite"
import {
  databases,
  DATABASE_ID,
  USERS_COLLECTION_ID,
  storage,
  PROFILE_BUCKET_ID,
  RESUME_BUCKET_ID,
  DOCUMENTS_BUCKET_ID,
} from "./appwrite"

export const userService = {
  // Get user profile by ID
  async getUserProfile(userId: string) {
    try {
      const users = await databases.listDocuments(DATABASE_ID, USERS_COLLECTION_ID, [Query.equal("userId", userId)])

      if (!users.documents.length) throw Error("User not found")

      return users.documents[0]
    } catch (error) {
      console.error("Error getting user profile:", error)
      throw error
    }
  },

  // Update user profile
  async updateUserProfile(userId: string, data: any) {
    try {
      const users = await databases.listDocuments(DATABASE_ID, USERS_COLLECTION_ID, [Query.equal("userId", userId)])

      if (!users.documents.length) throw Error("User not found")

      const userDoc = users.documents[0]

      return await databases.updateDocument(DATABASE_ID, USERS_COLLECTION_ID, userDoc.$id, data)
    } catch (error) {
      console.error("Error updating user profile:", error)
      throw error
    }
  },

  // Upload profile image
  async uploadProfileImage(userId: string, file: File) {
    try {
      // Upload the file to storage
      const uploadedFile = await storage.createFile(PROFILE_BUCKET_ID, ID.unique(), file)

      // Get the file URL
      const fileUrl = storage.getFileView(PROFILE_BUCKET_ID, uploadedFile.$id)

      // Update user profile with new image URL
      await this.updateUserProfile(userId, {
        avatarUrl: fileUrl,
      })

      return fileUrl
    } catch (error) {
      console.error("Error uploading profile image:", error)
      throw error
    }
  },

  // Upload resume
  async uploadResume(userId: string, file: File) {
    try {
      // Upload the file to storage
      const uploadedFile = await storage.createFile(RESUME_BUCKET_ID, ID.unique(), file)

      // Get the file URL
      const fileUrl = storage.getFileView(RESUME_BUCKET_ID, uploadedFile.$id)

      // Update user profile with new resume URL
      await this.updateUserProfile(userId, {
        resumeUrl: fileUrl,
        resumeId: uploadedFile.$id,
      })

      return {
        url: fileUrl,
        id: uploadedFile.$id,
      }
    } catch (error) {
      console.error("Error uploading resume:", error)
      throw error
    }
  },

  // Upload academic document
  async uploadDocument(userId: string, file: File, documentType: string) {
    try {
      // Upload the file to storage
      const uploadedFile = await storage.createFile(DOCUMENTS_BUCKET_ID, ID.unique(), file)

      // Get the file URL
      const fileUrl = storage.getFileView(DOCUMENTS_BUCKET_ID, uploadedFile.$id)

      // Get current user documents
      const user = await this.getUserProfile(userId)
      const documents = user.documents || []

      // Add new document
      documents.push({
        id: uploadedFile.$id,
        type: documentType,
        url: fileUrl,
        name: file.name,
        uploadedAt: new Date().toISOString(),
      })

      // Update user profile with new documents array
      await this.updateUserProfile(userId, {
        documents: documents,
      })

      return {
        url: fileUrl,
        id: uploadedFile.$id,
      }
    } catch (error) {
      console.error("Error uploading document:", error)
      throw error
    }
  },
}
