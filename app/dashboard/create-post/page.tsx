"use client"

import { PageHeader } from "@/components/ui-custom/page-header"
import { BlogPostForm } from "@/components/blog-post-form"
import { useAuth } from "@/contexts/auth-context"
import { RoleGuard } from "@/components/role-guard"
import { toast } from "@/components/ui/use-toast"

export default function CreatePostPage() {
  const { user } = useAuth()

  const handleSubmit = async (data: {
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
    <RoleGuard allowedRoles={["student", "po", "pr"]}>
      <div className="container py-8">
        <PageHeader title="Create Blog Post" description="Share your experience or knowledge with others" />

        <div className="max-w-3xl mx-auto">
          <BlogPostForm onSubmit={handleSubmit} />
        </div>
      </div>
    </RoleGuard>
  )
}
