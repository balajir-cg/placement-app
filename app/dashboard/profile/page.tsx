"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Mock user data
const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  rollNumber: "CS2023001",
  department: "Computer Science",
  cgpa: "8.7",
  batch: "2023-2027",
  about:
    "Final year Computer Science student passionate about web development and machine learning. Looking for opportunities in software development.",
  skills: ["JavaScript", "React", "Node.js", "Python", "Machine Learning"],
  links: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    leetcode: "https://leetcode.com/johndoe",
  },
  resume: "/path/to/resume.pdf",
  semesterSheets: [
    { semester: 1, url: "/path/to/sem1.pdf" },
    { semester: 2, url: "/path/to/sem2.pdf" },
    { semester: 3, url: "/path/to/sem3.pdf" },
    { semester: 4, url: "/path/to/sem4.pdf" },
  ],
}

export default function ProfilePage() {
  const [user] = useState(mockUser)
  const [isEditing, setIsEditing] = useState(false)

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
              <div className="flex flex-col items-center space-y-3 pb-4">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-muted">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-lg">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.department}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Email:</span>
                  <span className="text-sm text-muted-foreground">{user.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Roll Number:</span>
                  <span className="text-sm text-muted-foreground">{user.rollNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">CGPA:</span>
                  <span className="text-sm text-muted-foreground">{user.cgpa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Batch:</span>
                  <span className="text-sm text-muted-foreground">{user.batch}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-medium">External Profiles</h4>
                <div className="flex flex-col space-y-2">
                  <Link href={user.links.github} target="_blank" className="text-sm text-blue-600 hover:underline">
                    GitHub Profile
                  </Link>
                  <Link href={user.links.linkedin} target="_blank" className="text-sm text-blue-600 hover:underline">
                    LinkedIn Profile
                  </Link>
                  <Link href={user.links.leetcode} target="_blank" className="text-sm text-blue-600 hover:underline">
                    LeetCode Profile
                  </Link>
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
                  {isEditing ? <Textarea defaultValue={user.about} className="min-h-[150px]" /> : <p>{user.about}</p>}
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
                      <Input id="skills" defaultValue={user.skills.join(", ")} />
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
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
                        <Label htmlFor="github">GitHub URL</Label>
                        <Input id="github" defaultValue={user.links.github} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="linkedin">LinkedIn URL</Label>
                        <Input id="linkedin" defaultValue={user.links.linkedin} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="leetcode">LeetCode URL</Label>
                        <Input id="leetcode" defaultValue={user.links.leetcode} />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">GitHub:</span>
                        <Link href={user.links.github} target="_blank" className="text-blue-600 hover:underline">
                          {user.links.github.replace("https://", "")}
                        </Link>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">LinkedIn:</span>
                        <Link href={user.links.linkedin} target="_blank" className="text-blue-600 hover:underline">
                          {user.links.linkedin.replace("https://", "")}
                        </Link>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">LeetCode:</span>
                        <Link href={user.links.leetcode} target="_blank" className="text-blue-600 hover:underline">
                          {user.links.leetcode.replace("https://", "")}
                        </Link>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {isEditing && (
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
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
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="resume">Upload Resume</Label>
                        <Input id="resume" type="file" />
                      </div>
                      <Button>Upload</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="h-10 w-10 flex items-center justify-center bg-muted rounded">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-text"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" x2="8" y1="13" y2="13" />
                              <line x1="16" x2="8" y1="17" y2="17" />
                              <line x1="10" x2="8" y1="9" y2="9" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Resume.pdf</p>
                            <p className="text-xs text-muted-foreground">Uploaded on May 10, 2025</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
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
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="semester">Semester</Label>
                        <select
                          id="semester"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="marksheet">Upload Marksheet</Label>
                        <Input id="marksheet" type="file" />
                      </div>
                      <Button>Upload</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {user.semesterSheets.map((sheet) => (
                        <div key={sheet.semester} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 flex items-center justify-center bg-muted rounded">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-text"
                              >
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" x2="8" y1="13" y2="13" />
                                <line x1="16" x2="8" y1="17" y2="17" />
                                <line x1="10" x2="8" y1="9" y2="9" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Semester {sheet.semester} Marksheet</p>
                              <p className="text-xs text-muted-foreground">Uploaded on May 10, 2025</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

