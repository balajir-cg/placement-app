"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { PageHeader } from "@/components/ui-custom/page-header"
import { StudentProfileView } from "@/components/student-profile-view"
import { useAuth } from "@/contexts/auth-context"
import { RoleGuard } from "@/components/role-guard"
import { Skeleton } from "@/components/ui/skeleton"

// Mock student data
const mockStudents = {
  "1": {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    rollNumber: "CS2023001",
    department: "Computer Science",
    batch: "2023-2027",
    cgpa: "9.2",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    about:
      "I am a Computer Science student passionate about web development and machine learning. I have worked on several projects using React, Node.js, and Python.",
    skills: ["JavaScript", "React", "Node.js", "Python", "Machine Learning"],
    links: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      leetcode: "https://leetcode.com/johndoe",
    },
    documents: [
      {
        id: "doc1",
        type: "10th Certificate",
        name: "10th_certificate.pdf",
        url: "#",
        verified: true,
        uploadedAt: "2022-08-10T09:15:00Z",
      },
      {
        id: "doc2",
        type: "12th Certificate",
        name: "12th_certificate.pdf",
        url: "#",
        verified: true,
        uploadedAt: "2022-08-10T09:20:00Z",
      },
      {
        id: "doc3",
        type: "Semester 1 Marksheet",
        name: "sem1_marksheet.pdf",
        url: "#",
        verified: true,
        uploadedAt: "2023-05-15T10:30:00Z",
      },
    ],
  },
  "2": {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    rollNumber: "CS2023002",
    department: "Computer Science",
    batch: "2023-2027",
    cgpa: "8.7",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    about:
      "I am interested in data science and artificial intelligence. I have completed several online courses on these topics and am looking for opportunities to apply my knowledge.",
    skills: ["Python", "Data Science", "SQL", "Machine Learning", "Statistics"],
    links: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    documents: [
      {
        id: "doc4",
        type: "10th Certificate",
        name: "10th_certificate.pdf",
        url: "#",
        verified: true,
        uploadedAt: "2022-07-05T11:20:00Z",
      },
      {
        id: "doc5",
        type: "12th Certificate",
        name: "12th_certificate.pdf",
        url: "#",
        verified: true,
        uploadedAt: "2022-07-05T11:25:00Z",
      },
      {
        id: "doc6",
        type: "Semester 1 Marksheet",
        name: "sem1_marksheet.pdf",
        url: "#",
        verified: true,
        uploadedAt: "2023-05-10T09:45:00Z",
      },
      {
        id: "doc7",
        type: "Semester 2 Marksheet",
        name: "sem2_marksheet.pdf",
        url: "#",
        verified: false,
        uploadedAt: "2023-12-20T14:45:00Z",
      },
    ],
  },
}

export default function StudentProfilePage() {
  const { user } = useAuth()
  const params = useParams()
  const studentId = params.id as string
  const [student, setStudent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching student data
    const fetchStudent = async () => {
      setIsLoading(true)
      try {
        // In a real implementation, you would fetch the student data from your backend
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (mockStudents[studentId]) {
          setStudent(mockStudents[studentId])
        } else {
          // Handle student not found
          console.error("Student not found")
        }
      } catch (error) {
        console.error("Error fetching student:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStudent()
  }, [studentId])

  if (!user) return null

  return (
    <RoleGuard allowedRoles={["po", "pr"]}>
      <div className="container py-8">
        {isLoading ? (
          <>
            <div className="mb-8">
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-96" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-1">
                <Skeleton className="h-[400px] w-full rounded-lg" />
              </div>
              <div className="md:col-span-2">
                <Skeleton className="h-12 w-full mb-4" />
                <Skeleton className="h-[400px] w-full rounded-lg" />
              </div>
            </div>
          </>
        ) : student ? (
          <>
            <PageHeader title={`${student.name}'s Profile`} description={`${student.department} | ${student.batch}`} />

            <StudentProfileView student={student} canVerify={user.role === "po"} canEdit={user.role === "po"} />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Student not found.</p>
          </div>
        )}
      </div>
    </RoleGuard>
  )
}
