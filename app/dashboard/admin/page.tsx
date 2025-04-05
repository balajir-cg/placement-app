"use client"

import type React from "react"

import { useState } from "react"
import { PageHeader } from "@/components/ui-custom/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/contexts/auth-context"
import { RoleGuard } from "@/components/role-guard"
import { BlogPostForm } from "@/components/blog-post-form"
import { toast } from "@/components/ui/use-toast"
import { Calendar, Clock, Plus } from "lucide-react"

export default function AdminPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("blog")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [announcementTitle, setAnnouncementTitle] = useState("")
  const [announcementContent, setAnnouncementContent] = useState("")
  const [eventTitle, setEventTitle] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [eventLocation, setEventLocation] = useState("")
  const [eventDescription, setEventDescription] = useState("")

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

  const handleAnnouncementSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!announcementTitle || !announcementContent) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Placeholder for future implementation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Announcement published",
        description: "Your announcement has been published successfully.",
      })

      // Reset form
      setAnnouncementTitle("")
      setAnnouncementContent("")
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error publishing your announcement. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!eventTitle || !eventDate || !eventTime || !eventLocation || !eventDescription) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Placeholder for future implementation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Event created",
        description: "Your event has been created successfully.",
      })

      // Reset form
      setEventTitle("")
      setEventDate("")
      setEventTime("")
      setEventLocation("")
      setEventDescription("")
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error creating your event. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!user) return null

  return (
    <RoleGuard allowedRoles={["po"]}>
      <div className="container py-8">
        <PageHeader title="Admin Panel" description="Manage blog posts, announcements, and events" />

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <div className="max-w-3xl mx-auto">
              <BlogPostForm onSubmit={handleBlogSubmit} />
            </div>
          </TabsContent>

          <TabsContent value="announcements">
            <Card>
              <form onSubmit={handleAnnouncementSubmit}>
                <CardHeader>
                  <CardTitle>Create Announcement</CardTitle>
                  <CardDescription>Create important announcements for students and recruiters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="announcement-title">Title</Label>
                    <Input
                      id="announcement-title"
                      placeholder="Enter announcement title"
                      value={announcementTitle}
                      onChange={(e) => setAnnouncementTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="announcement-content">Content</Label>
                    <Textarea
                      id="announcement-content"
                      placeholder="Enter announcement content"
                      value={announcementContent}
                      onChange={(e) => setAnnouncementContent(e.target.value)}
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2">⏳</span> Publishing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Plus className="mr-2 h-4 w-4" /> Publish Announcement
                      </span>
                    )}
                  </Button>
                </CardContent>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <form onSubmit={handleEventSubmit}>
                <CardHeader>
                  <CardTitle>Create Event</CardTitle>
                  <CardDescription>Schedule placement events, workshops, and seminars</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-title">Event Title</Label>
                    <Input
                      id="event-title"
                      placeholder="Enter event title"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="event-date" className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> Date
                      </Label>
                      <Input
                        id="event-date"
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event-time" className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" /> Time
                      </Label>
                      <Input
                        id="event-time"
                        type="time"
                        value={eventTime}
                        onChange={(e) => setEventTime(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event-location">Location</Label>
                      <Input
                        id="event-location"
                        placeholder="Enter location"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-description">Description</Label>
                    <Textarea
                      id="event-description"
                      placeholder="Enter event description"
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2">⏳</span> Creating...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Plus className="mr-2 h-4 w-4" /> Create Event
                      </span>
                    )}
                  </Button>
                </CardContent>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </RoleGuard>
  )
}
