import { Account, Avatars, Client, Databases, ID, Storage } from "appwrite"

// Initialize the Appwrite client
export const client = new Client()

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint if self-hosted
  .setProject("YOUR_PROJECT_ID") // Replace with your project ID

// Initialize Appwrite services
export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)

// Database and collection IDs
export const DATABASE_ID = "campus_placement_db"
export const USERS_COLLECTION_ID = "users"
export const COMPANIES_COLLECTION_ID = "companies"
export const VISITS_COLLECTION_ID = "company_visits"
export const BLOG_POSTS_COLLECTION_ID = "blog_posts"
export const APPLICATIONS_COLLECTION_ID = "applications"

// Storage bucket IDs
export const PROFILE_BUCKET_ID = "profile_images"
export const RESUME_BUCKET_ID = "resumes"
export const DOCUMENTS_BUCKET_ID = "documents"

// Helper function to generate a unique ID
export const generateId = () => ID.unique()
