import { ID, Query } from "appwrite"
import { databases, DATABASE_ID, BLOG_POSTS_COLLECTION_ID } from "./appwrite"

export const blogService = {
  // Get all blog posts
  async getAllPosts() {
    try {
      const posts = await databases.listDocuments(DATABASE_ID, BLOG_POSTS_COLLECTION_ID, [Query.orderDesc("createdAt")])

      return posts.documents
    } catch (error) {
      console.error("Error getting blog posts:", error)
      throw error
    }
  },

  // Get posts by category
  async getPostsByCategory(category: string) {
    try {
      const posts = await databases.listDocuments(DATABASE_ID, BLOG_POSTS_COLLECTION_ID, [
        Query.equal("category", category),
        Query.orderDesc("createdAt"),
      ])

      return posts.documents
    } catch (error) {
      console.error("Error getting posts by category:", error)
      throw error
    }
  },

  // Get post by ID
  async getPostById(postId: string) {
    try {
      return await databases.getDocument(DATABASE_ID, BLOG_POSTS_COLLECTION_ID, postId)
    } catch (error) {
      console.error("Error getting post by ID:", error)
      throw error
    }
  },

  // Create new post
  async createPost(userId: string, userName: string, userImage: string, data: any) {
    try {
      return await databases.createDocument(DATABASE_ID, BLOG_POSTS_COLLECTION_ID, ID.unique(), {
        title: data.title,
        content: data.content,
        category: data.category,
        excerpt: data.excerpt || data.content.substring(0, 150) + "...",
        authorId: userId,
        author: userName,
        authorImage: userImage,
        createdAt: new Date().toISOString(),
        readTime: `${Math.ceil(data.content.split(" ").length / 200)} min read`,
      })
    } catch (error) {
      console.error("Error creating post:", error)
      throw error
    }
  },
}
