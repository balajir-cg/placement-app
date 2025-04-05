"use client"

import { useState } from "react"
import { PageHeader } from "@/components/ui-custom/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/auth-context"
import { RoleGuard } from "@/components/role-guard"
import { Search, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { mockStudents } from "@/lib/mock-data"

export default function StudentDirectoryPage() {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("")
  const [batchFilter, setBatchFilter] = useState("")
  const [verificationFilter, setVerificationFilter] = useState("")

  // Convert mockStudents object to array
  const studentsArray = Object.values(mockStudents)

  // Filter students based on search and filters
  const filteredStudents = studentsArray.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = departmentFilter ? student.department === departmentFilter : true
    const matchesBatch = batchFilter ? student.batch === batchFilter : true

    // Check if all documents are verified
    const allDocsVerified = student.documents?.every((doc) => doc.verified) || false
    const hasDocuments = student.documents?.length > 0 || false

    const matchesVerification =
      verificationFilter === "verified"
        ? allDocsVerified
        : verificationFilter === "pending"
          ? hasDocuments && !allDocsVerified
          : true

    return matchesSearch && matchesDepartment && matchesBatch && matchesVerification
  })

  // Get unique departments and batches for filters
  const departments = Array.from(new Set(studentsArray.map((s) => s.department)))
  const batches = Array.from(new Set(studentsArray.map((s) => s.batch)))

  if (!user) return null

  return (
    <RoleGuard allowedRoles={["po", "pr"]}>
      <div className="container py-8">
        <PageHeader title="Student Directory" description="View and manage student profiles" />

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search and Filter</CardTitle>
            <CardDescription>Find students by name, roll number, or email</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, roll number, or email"
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={batchFilter} onValueChange={setBatchFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Batches</SelectItem>
                  {batches.map((batch) => (
                    <SelectItem key={batch} value={batch}>
                      {batch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={verificationFilter} onValueChange={setVerificationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Verification Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Students</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="pending">Pending Verification</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => {
              // Check if all documents are verified
              const allDocsVerified = student.documents?.every((doc) => doc.verified) || false
              const hasDocuments = student.documents?.length > 0 || false
              const documentsVerified = hasDocuments && allDocsVerified

              return (
                <Card key={student.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={student.avatarUrl} alt={student.name} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">{student.rollNumber}</p>
                        </div>
                      </div>

                      <div className="hidden md:flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm">{student.department}</p>
                          <p className="text-sm text-muted-foreground">{student.batch}</p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm">CGPA: {student.cgpa}</p>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                        </div>

                        <div className="flex items-center">
                          {documentsVerified ? (
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-500/10 text-green-500 border-green-500/20">
                              <CheckCircle className="h-3 w-3 mr-1" /> Verified
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                              <AlertCircle className="h-3 w-3 mr-1" /> Pending
                            </span>
                          )}
                        </div>
                      </div>

                      <Button asChild>
                        <Link href={`/dashboard/student/${student.id}`}>View Profile</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No students found matching your search criteria.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchTerm("")
                  setDepartmentFilter("")
                  setBatchFilter("")
                  setVerificationFilter("")
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </RoleGuard>
  )
}
