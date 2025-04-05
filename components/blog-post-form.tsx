"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

interface BlogPostFormProps {
  onSubmit?: (data: {
    title: string
    content: string
    category: string
    excerpt?: string
  }) => Promise<void>
}

export function BlogPostForm({ onSubmit }: BlogPostFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    excerpt: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.content || !formData.category) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Placeholder for future implementation
        await new Promise((resolve) => setTimeout(resolve, 1500))
        toast({
          title: "Blog post created",
          description: "This is a placeholder. Blog post creation will be implemented in the future.",
        })
      }

      // Reset form
      setFormData({
        title: "",
        content: "",
        category: "",
        excerpt: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error creating your blog post. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Create Blog Post</CardTitle>
          <CardDescription>Share your experience or knowledge with others</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter a descriptive title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={handleCategoryChange}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Interview Experience">Interview Experience</SelectItem>
                <SelectItem value="Preparation Resources">Preparation Resources</SelectItem>
                <SelectItem value="Company Insights">Company Insights</SelectItem>
                <SelectItem value="Career Advice">Career Advice</SelectItem>
                <SelectItem value="Placement News">Placement News</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt (Optional)</Label>
            <Input
              id="excerpt"
              name="excerpt"
              placeholder="A brief summary of your post"
              value={formData.excerpt}
              onChange={handleChange}
            />
            <p className="text-xs text-muted-foreground">
              If left empty, an excerpt will be generated from your content.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Write your blog post content here..."
              value={formData.content}
              onChange={handleChange}
              className="min-h-[200px]"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
