"use client"

import { useState } from "react"
import { PageHeader } from "@/components/ui-custom/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { RoleGuard } from "@/components/role-guard"
import { BlogPostForm } from "@/components/blog-post-form"
import { toast } from "@/components/ui/use-toast"

export default function AdminLitePage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("blog")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleBlogSubmit = async (data: {
    title: string
    content: string
    category: string
    excerpt?: string
  }) => {
    // This is a placeholder - in a real implementation, you would submit the post to your backend
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Blog post published",
      description: "Your post has been published successfully.",
    })
  }

  if (!user) return null

  return (
    <RoleGuard allowedRoles={["pr"]}>
      <div className="container py-8">
        <PageHeader title="Admin Panel" description="Create blog posts and assist with student verification" />

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="verification">Verification Status</TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <div className="max-w-3xl mx-auto">
              <BlogPostForm onSubmit={handleBlogSubmit} />
            </div>
          </TabsContent>

          <TabsContent value="verification">
            <Card>
              <CardHeader>
                <CardTitle>Verification Status</CardTitle>
                <CardDescription>Overview of student document and CGPA verification status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Document Verification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Total Students</span>
                          <span className="font-medium">120</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Verified</span>
                          <span className="font-medium text-green-500">98</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Pending</span>
                          <span className="font-medium text-yellow-500">22</span>
                        </div>

                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "82%" }}></div>
                        </div>
                        <p className="text-sm text-muted-foreground text-center">
                          82% of students have verified documents
                        </p>

                        <Button
                          className="w-full"
                          variant="outline"
                          onClick={() => (window.location.href = "/dashboard/verification")}
                        >
                          Assist with Verification
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">CGPA Verification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Total Students</span>
                          <span className="font-medium">120</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Verified</span>
                          <span className="font-medium text-green-500">105</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Pending</span>
                          <span className="font-medium text-yellow-500">15</span>
                        </div>

                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "88%" }}></div>
                        </div>
                        <p className="text-sm text-muted-foreground text-center">88% of students have verified CGPA</p>

                        <Button
                          className="w-full"
                          variant="outline"
                          onClick={() => (window.location.href = "/dashboard/verification")}
                        >
                          Assist with Verification
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </RoleGuard>
  )
}
