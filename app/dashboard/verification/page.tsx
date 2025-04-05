"use client"

import { useState } from "react"
import { PageHeader } from "@/components/ui-custom/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/auth-context"
import { RoleGuard } from "@/components/role-guard"
import { FileText, CheckCircle, Eye } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import { mockPendingDocuments, mockPendingCGPA } from "@/lib/mock-data"

export default function VerificationPage() {
  const { user } = useAuth()
  const [pendingDocuments, setPendingDocuments] = useState(mockPendingDocuments)
  const [pendingCGPA, setPendingCGPA] = useState(mockPendingCGPA)
  const [isVerifying, setIsVerifying] = useState(false)

  const handleVerifyDocument = async (documentId: string) => {
    setIsVerifying(true)

    try {
      // Mock verification - in a real app, this would call your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Remove the document from the pending list
      setPendingDocuments((prev) => prev.filter((doc) => doc.id !== documentId))

      toast({
        title: "Document verified",
        description: "The document has been verified successfully.",
      })
    } catch (error) {
      toast({
        title: "Verification failed",
        description: "There was an error verifying the document. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsVerifying(false)
    }
  }

  const handleVerifyCGPA = async (studentId: string) => {
    setIsVerifying(true)

    try {
      // Mock verification - in a real app, this would call your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Remove the student from the pending list
      setPendingCGPA((prev) => prev.filter((student) => student.id !== studentId))

      toast({
        title: "CGPA verified",
        description: "The student's CGPA has been verified successfully.",
      })
    } catch (error) {
      toast({
        title: "Verification failed",
        description: "There was an error verifying the CGPA. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsVerifying(false)
    }
  }

  if (!user) return null

  return (
    <RoleGuard allowedRoles={["po", "pr"]}>
      <div className="container py-8">
        <PageHeader
          title={user.role === "po" ? "Verify Students" : "Assist Verification"}
          description="Verify student documents and academic information"
        />

        <Tabs defaultValue="documents">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="cgpa">CGPA</TabsTrigger>
          </TabsList>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Pending Document Verifications</CardTitle>
                <CardDescription>{pendingDocuments.length} documents pending verification</CardDescription>
              </CardHeader>
              <CardContent>
                {pendingDocuments.length > 0 ? (
                  <div className="space-y-4">
                    {pendingDocuments.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={doc.studentAvatar} alt={doc.studentName} />
                            <AvatarFallback>{doc.studentName.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{doc.studentName}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <FileText className="h-3 w-3 mr-1" />
                              {doc.documentType}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Uploaded on {new Date(doc.uploadedAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" /> View
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center"
                            onClick={() => handleVerifyDocument(doc.id)}
                            disabled={isVerifying}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            {isVerifying ? "Verifying..." : "Verify"}
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/dashboard/student/${doc.studentId}`}>Profile</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <p className="text-muted-foreground">No pending document verifications.</p>
                    <p className="text-sm text-muted-foreground mt-1">All student documents have been verified.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cgpa">
            <Card>
              <CardHeader>
                <CardTitle>Pending CGPA Verifications</CardTitle>
                <CardDescription>{pendingCGPA.length} students pending CGPA verification</CardDescription>
              </CardHeader>
              <CardContent>
                {pendingCGPA.length > 0 ? (
                  <div className="space-y-4">
                    {pendingCGPA.map((student) => (
                      <div key={student.id} className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={student.studentAvatar} alt={student.studentName} />
                            <AvatarFallback>{student.studentName.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{student.studentName}</h3>
                            <p className="text-sm text-muted-foreground">
                              {student.department}, {student.batch}
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">CGPA:</span> {student.currentCGPA}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center"
                            onClick={() => handleVerifyCGPA(student.id)}
                            disabled={isVerifying}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            {isVerifying ? "Verifying..." : "Verify CGPA"}
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/dashboard/student/${student.studentId}`}>Profile</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <p className="text-muted-foreground">No pending CGPA verifications.</p>
                    <p className="text-sm text-muted-foreground mt-1">All student CGPAs have been verified.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </RoleGuard>
  )
}
