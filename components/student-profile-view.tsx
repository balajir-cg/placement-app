"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle, FileText, LinkIcon } from "lucide-react"
import Link from "next/link"

interface StudentDocument {
  id: string
  type: string
  name: string
  url: string
  verified?: boolean
  uploadedAt: string
}

interface StudentProfileProps {
  student: {
    id: string
    name: string
    email: string
    rollNumber: string
    department: string
    batch: string
    cgpa: string
    avatarUrl?: string
    about?: string
    skills?: string[]
    links?: {
      github?: string
      linkedin?: string
      leetcode?: string
    }
    documents?: StudentDocument[]
  }
  canVerify?: boolean
  canEdit?: boolean
}

export function StudentProfileView({ student, canVerify = false, canEdit = false }: StudentProfileProps) {
  const [isVerifying, setIsVerifying] = useState(false)
  const [editCgpa, setEditCgpa] = useState(student.cgpa || "")
  const [isEditingCgpa, setIsEditingCgpa] = useState(false)

  const handleVerifyDocument = async (documentId: string) => {
    setIsVerifying(true)

    try {
      // Placeholder for future implementation
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Document verified",
        description: "This is a placeholder. Document verification will be implemented in the future.",
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

  const handleUpdateCgpa = async () => {
    try {
      // Placeholder for future implementation
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "CGPA updated",
        description: "This is a placeholder. CGPA update will be implemented in the future.",
      })
      setIsEditingCgpa(false)
    } catch (error) {
      toast({
        title: "Update failed",
        description: "There was an error updating the CGPA. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-1">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Student Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-3 pb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={student.avatarUrl} alt={student.name} />
                <AvatarFallback className="text-2xl">{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="font-medium text-lg">{student.name}</h3>
                <p className="text-sm text-muted-foreground">{student.department}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Email:</span>
                <span className="text-sm text-muted-foreground">{student.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Roll Number:</span>
                <span className="text-sm text-muted-foreground">{student.rollNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">CGPA:</span>
                {canEdit && isEditingCgpa ? (
                  <div className="flex items-center space-x-2">
                    <Input
                      value={editCgpa}
                      onChange={(e) => setEditCgpa(e.target.value)}
                      className="h-7 w-20 text-sm"
                    />
                    <Button size="sm" variant="ghost" onClick={handleUpdateCgpa}>
                      Save
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setIsEditingCgpa(false)}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{student.cgpa || "Not set"}</span>
                    {canEdit && (
                      <Button size="sm" variant="ghost" onClick={() => setIsEditingCgpa(true)}>
                        Edit
                      </Button>
                    )}
                  </div>
                )}
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Batch:</span>
                <span className="text-sm text-muted-foreground">{student.batch}</span>
              </div>
            </div>

            {student.links && (
              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-medium">External Profiles</h4>
                <div className="flex flex-col space-y-2">
                  {student.links.github && (
                    <Link
                      href={student.links.github}
                      target="_blank"
                      className="text-sm text-rose-500 hover:underline flex items-center"
                    >
                      <LinkIcon className="h-3 w-3 mr-2" /> GitHub Profile
                    </Link>
                  )}
                  {student.links.linkedin && (
                    <Link
                      href={student.links.linkedin}
                      target="_blank"
                      className="text-sm text-rose-500 hover:underline flex items-center"
                    >
                      <LinkIcon className="h-3 w-3 mr-2" /> LinkedIn Profile
                    </Link>
                  )}
                  {student.links.leetcode && (
                    <Link
                      href={student.links.leetcode}
                      target="_blank"
                      className="text-sm text-rose-500 hover:underline flex items-center"
                    >
                      <LinkIcon className="h-3 w-3 mr-2" /> LeetCode Profile
                    </Link>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-2">
        <Tabs defaultValue="about">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{student.about || "No information provided yet."}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {student.skills && student.skills.length > 0 ? (
                    student.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-rose-500/10 text-rose-500 border-rose-500/20">
                        {skill}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No skills added yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Educational Documents</CardTitle>
                <CardDescription>View and verify student documents</CardDescription>
              </CardHeader>
              <CardContent>
                {student.documents && student.documents.length > 0 ? (
                  <div className="space-y-4">
                    {student.documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{doc.type}</p>
                            <p className="text-xs text-muted-foreground">
                              Uploaded on {new Date(doc.uploadedAt).toLocaleDateString()}
                            </p>
                          </div>
                          {doc.verified && (
                            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                              <CheckCircle className="h-3 w-3 mr-1" /> Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={doc.url} target="_blank">
                              View
                            </Link>
                          </Button>
                          {canVerify && !doc.verified && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleVerifyDocument(doc.id)}
                              disabled={isVerifying}
                            >
                              {isVerifying ? "Verifying..." : "Verify"}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No documents uploaded yet.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
