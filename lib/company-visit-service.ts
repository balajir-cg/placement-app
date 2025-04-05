import { Query } from "appwrite"
import { databases, DATABASE_ID, VISITS_COLLECTION_ID, COMPANIES_COLLECTION_ID } from "./appwrite"

export const companyVisitService = {
  // Get all upcoming company visits
  async getUpcomingVisits() {
    try {
      const today = new Date().toISOString()

      const visits = await databases.listDocuments(DATABASE_ID, VISITS_COLLECTION_ID, [
        Query.greaterThan("date", today),
        Query.orderAsc("date"),
      ])

      return visits.documents
    } catch (error) {
      console.error("Error getting upcoming visits:", error)
      throw error
    }
  },

  // Get all past company visits
  async getPastVisits() {
    try {
      const today = new Date().toISOString()

      const visits = await databases.listDocuments(DATABASE_ID, VISITS_COLLECTION_ID, [
        Query.lessThan("date", today),
        Query.orderDesc("date"),
      ])

      return visits.documents
    } catch (error) {
      console.error("Error getting past visits:", error)
      throw error
    }
  },

  // Get company details
  async getCompanyDetails(companyId: string) {
    try {
      return await databases.getDocument(DATABASE_ID, COMPANIES_COLLECTION_ID, companyId)
    } catch (error) {
      console.error("Error getting company details:", error)
      throw error
    }
  },

  // Get visit details
  async getVisitDetails(visitId: string) {
    try {
      return await databases.getDocument(DATABASE_ID, VISITS_COLLECTION_ID, visitId)
    } catch (error) {
      console.error("Error getting visit details:", error)
      throw error
    }
  },
}
