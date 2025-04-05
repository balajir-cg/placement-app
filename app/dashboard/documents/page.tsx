"use client"

import { useState } from "react"
import { PageHeader } from "@/components/ui-custom/page-header"
import { DocumentUpload } from "@/components/document-upload"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { RoleGuard } from "@/components/role-guard"
import { FileText, Download, Eye } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

// Mock data for documents
const mockDocuments = [
  {
    id: "1",
    type: "Semester 1 Marksheet",
    name: "sem1_marksheet.pdf",
    url: "#",
    verified: true,
    uploadedAt: "2023-05-15T10:30:00Z",
  },
  {
    id: "2",
    type: "Semester 2 Marksheet",
    name: "sem2_marksheet.pdf",
    url: "#",
    verified: false,
    uploadedAt: "2023-12-20T14:45:00Z",
  },
  {
    id: "3",
    type: "10th Certificate",
    name: "10th_certificate.pdf",
    url: "#",
    verified: true,
    uploadedAt: "2022-08-10T09:15:00Z",
  },
]

const documentTypes = [
  "10th Certificate",
  "12th Certificate",
  "Semester 1 Marksheet",
  "Semester 2 Marksheet",
  "Semester 3 Marksheet",
  "Semester 4 Marksheet",
  "Semester 5 Marksheet",
  "Semester 6 Marksheet",
  "Semester 7 Marksheet",
  "Semester 8 Marksheet",
  "Degree Certificate",
  "Resume",
  "Other",
]

export default function DocumentsPage() {
  const { user } = useAuth()
  const [documents, setDocuments] = useState(mockDocuments)

  const handleUpload = async (file: File, type: string) => {
    // This is a placeholder - in a real implementation, you would upload the document to your backend
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Add the new document to the list
    const newDoc = {
      id: Math.random().toString(36).substring(7),
      type,
      name: file.name,
      url: "#",
      verified: false,
      uploadedAt: new Date().toISOString(),
    }

    setDocuments((prev) => [...prev, newDoc])

    toast({
      title: "Document uploaded",
      description: "Your document has been uploaded successfully and is pending verification.",
    })
  }

  if (!user) return null

  return (
    <RoleGuard allowedRoles={["student"]}>
      <div className="container py-8">
        <PageHeader title="My Documents" description="Upload and manage your educational documents and certificates" />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <DocumentUpload documentTypes={documentTypes} onUpload={handleUpload} />
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Uploaded Documents</CardTitle>
                <CardDescription>View and manage your uploaded documents</CardDescription>
              </CardHeader>
              <CardContent>
                {documents.length > 0 ? (
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{doc.type}</p>
                            <p className="text-xs text-muted-foreground">
                              Uploaded on {new Date(doc.uploadedAt).toLocaleDateString()}
                            </p>
                          </div>
                          {doc.verified ? (
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-500/10 text-green-500 border-green-500/20">
                              Verified
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                              Pending
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" /> View
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Download className="h-4 w-4 mr-1" /> Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No documents uploaded yet.</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Upload your educational documents to get them verified.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </RoleGuard>
  )
}
