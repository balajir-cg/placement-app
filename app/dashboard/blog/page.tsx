import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const blogPosts = [
  {
    id: 1,
    title: "My Interview Experience at Google",
    author: "Sarah Johnson",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "May 15, 2025",
    category: "Interview Experience",
    excerpt:
      "I recently interviewed at Google for a Software Engineer position. Here's my detailed experience and tips for cracking the interview.",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "How I Prepared for Technical Interviews",
    author: "Rahul Sharma",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "May 10, 2025",
    category: "Preparation Resources",
    excerpt:
      "A comprehensive guide on how I prepared for technical interviews, including resources, practice strategies, and time management.",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Data Structures and Algorithms: A Complete Roadmap",
    author: "Priya Patel",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "May 5, 2025",
    category: "Preparation Resources",
    excerpt:
      "A step-by-step roadmap to master Data Structures and Algorithms for placement interviews, with recommended resources.",
    readTime: "15 min read",
  },
  {
    id: 4,
    title: "My Amazon Interview Journey",
    author: "Amit Kumar",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "April 28, 2025",
    category: "Interview Experience",
    excerpt:
      "From application to offer: My complete journey through Amazon's interview process for a Data Scientist role.",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
  
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground">Interview experiences and preparation resources shared by students</p>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="experiences">Interview Experiences</TabsTrigger>
            <TabsTrigger value="resources">Preparation Resources</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button>Create Post</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/dashboard/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {post.category} • {post.date}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.authorImage} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{post.author}</span>
              </div>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

