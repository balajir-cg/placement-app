"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/components/ui/use-toast"
import { ProfileImageUpload } from "@/components/profile-image-upload"
import { FileText, Download, Eye } from "lucide-react"
import Link from "next/link"

// Mock data for profile
const mockProfileData = {
  about:
    "I am a passionate student interested in technology and innovation. I have experience in web development and machine learning.",
  skills: ["JavaScript", "React", "Node.js", "Python", "Machine Learning"],
  links: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    leetcode: "https://leetcode.com/johndoe",
  },
  resumeUrl: "#",
  documents: [
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
  ],
}

export default function ProfilePage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [profileData, setProfileData] = useState(mockProfileData)

  const handleSaveProfile = async () => {
    if (!user) return

    try {
      setIsSaving(true)

      // Mock API call - in a real app, this would call your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })

      setIsEditing(false)
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skillsString = e.target.value
    const skillsArray = skillsString
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean)
    setProfileData((prev) => ({ ...prev, skills: skillsArray }))
  }

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      links: {
        ...prev.links,
        [id.replace("link-", "")]: value,
      },
    }))
  }

  const handleDocumentUpload = async (e: React.ChangeEvent<HTMLInputElement>, semester: string) => {
    if (!e.target.files || e.target.files.length === 0) return

    try {
      const file = e.target.files[0]

      toast({
        title: "Uploading document",
        description: "Please wait while we upload your document...",
      })

      // Mock upload - in a real app, this would call your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Add new document to the list
      const newDoc = {
        id: Math.random().toString(36).substring(7),
        type: `Semester ${semester} Marksheet`,
        name: file.name,
        url: "#",
        verified: false,
        uploadedAt: new Date().toISOString(),
      }

      setProfileData((prev) => ({
        ...prev,
        documents: [...prev.documents, newDoc],
      }))

      toast({
        title: "Document uploaded",
        description: "Your document has been uploaded successfully.",
      })
    } catch (error) {
      console.error("Error uploading document:", error)
      toast({
        title: "Error",
        description: "Failed to upload document. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (!user) return null

  return (
    <div className="container py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and documents</p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit Profile"}</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ProfileImageUpload currentImage={user.avatarUrl} userName={user.name} />

              <div className="space-y-2 pt-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Email:</span>
                  <span className="text-sm text-muted-foreground">{user.email}</span>
                </div>
                {user.role === "student" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Roll Number:</span>
                      <span className="text-sm text-muted-foreground">{user.rollNumber || "Not set"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">CGPA:</span>
                      <span className="text-sm text-muted-foreground">{user.cgpa || "Not set"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Batch:</span>
                      <span className="text-sm text-muted-foreground">{user.batch || "Not set"}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-medium">External Profiles</h4>
                <div className="flex flex-col space-y-2">
                  {profileData.links.github && (
                    <Link
                      href={profileData.links.github}
                      target="_blank"
                      className="text-sm text-rose-500 hover:underline"
                    >
                      GitHub Profile
                    </Link>
                  )}
                  {profileData.links.linkedin && (
                    <Link
                      href={profileData.links.linkedin}
                      target="_blank"
                      className="text-sm text-rose-500 hover:underline"
                    >
                      LinkedIn Profile
                    </Link>
                  )}
                  {profileData.links.leetcode && (
                    <Link
                      href={profileData.links.leetcode}
                      target="_blank"
                      className="text-sm text-rose-500 hover:underline"
                    >
                      LeetCode Profile
                    </Link>
                  )}
                  {!profileData.links.github && !profileData.links.linkedin && !profileData.links.leetcode && (
                    <span className="text-sm text-muted-foreground">No external profiles added</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={profileData.about}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, about: e.target.value }))}
                      className="min-h-[150px]"
                      placeholder="Write a brief description about yourself, your interests, and career goals."
                    />
                  ) : (
                    <p>{profileData.about || "No information provided yet."}</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <div className="space-y-2">
                      <Label htmlFor="skills">Skills (comma separated)</Label>
                      <Input
                        id="skills"
                        value={profileData.skills.join(", ")}
                        onChange={handleSkillsChange}
                        placeholder="JavaScript, React, Node.js, Python, Machine Learning"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.length > 0 ? (
                        profileData.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-rose-500/10 text-rose-500 border-rose-500/20"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-muted-foreground">No skills added yet.</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>External Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="link-github">GitHub URL</Label>
                        <Input
                          id="link-github"
                          value={profileData.links.github}
                          onChange={handleLinkChange}
                          placeholder="https://github.com/username"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="link-linkedin">LinkedIn URL</Label>
                        <Input
                          id="link-linkedin"
                          value={profileData.links.linkedin}
                          onChange={handleLinkChange}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="link-leetcode">LeetCode URL</Label>
                        <Input
                          id="link-leetcode"
                          value={profileData.links.leetcode}
                          onChange={handleLinkChange}
                          placeholder="https://leetcode.com/username"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">GitHub:</span>
                        {profileData.links.github ? (
                          <Link
                            href={profileData.links.github}
                            target="_blank"
                            className="text-rose-500 hover:underline"
                          >
                            {profileData.links.github.replace("https://", "")}
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">Not provided</span>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">LinkedIn:</span>
                        {profileData.links.linkedin ? (
                          <Link
                            href={profileData.links.linkedin}
                            target="_blank"
                            className="text-rose-500 hover:underline"
                          >
                            {profileData.links.linkedin.replace("https://", "")}
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">Not provided</span>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">LeetCode:</span>
                        {profileData.links.leetcode ? (
                          <Link
                            href={profileData.links.leetcode}
                            target="_blank"
                            className="text-rose-500 hover:underline"
                          >
                            {profileData.links.leetcode.replace("https://", "")}
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">Not provided</span>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {isEditing && (
                <div className="flex justify-end">
                  <Button onClick={handleSaveProfile} disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="resume" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resume</CardTitle>
                  <CardDescription>Upload and manage your resume</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="resume">Upload Resume</Label>
                      <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                      <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX</p>
                    </div>

                    {profileData.resumeUrl && (
                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center space-x-2">
                          <div className="h-10 w-10 flex items-center justify-center bg-muted rounded">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Resume</p>
                            <p className="text-xs text-muted-foreground">
                              Last updated: {new Date().toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={profileData.resumeUrl} target="_blank">
                              View
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={profileData.resumeUrl} download>
                              Download
                            </Link>
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Semester Marksheets</CardTitle>
                  <CardDescription>Upload and manage your semester marksheets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="semester">Semester</Label>
                        <select
                          id="semester"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                        >
                          <option value="1">Semester 1</option>
                          <option value="2">Semester 2</option>
                          <option value="3">Semester 3</option>
                          <option value="4">Semester 4</option>
                          <option value="5">Semester 5</option>
                          <option value="6">Semester 6</option>
                          <option value="7">Semester 7</option>
                          <option value="8">Semester 8</option>
                        </select>
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="marksheet">Upload Marksheet</Label>
                        <Input
                          id="marksheet"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const semester = (document.getElementById("semester") as HTMLSelectElement).value
                            handleDocumentUpload(e, semester)
                          }}
                        />
                      </div>
                    </div>

                    <div className="space-y-4 mt-6">
                      {profileData.documents.length > 0 ? (
                        profileData.documents.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                            <div className="flex items-center space-x-2">
                              <div className="h-10 w-10 flex items-center justify-center bg-muted rounded">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">{doc.type}</p>
                                <p className="text-xs text-muted-foreground">
                                  Uploaded on {new Date(doc.uploadedAt).toLocaleDateString()}
                                </p>
                              </div>
                              {doc.verified && (
                                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-500/10 text-green-500 border-green-500/20">
                                  Verified
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
                        ))
                      ) : (
                        <p className="text-muted-foreground">No documents uploaded yet.</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
