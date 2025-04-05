import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/ui-custom/page-header"

// Mock data for placed students
const placedStudents = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Google",
    role: "Software Engineer",
    package: "₹24 LPA",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "Thrilled to announce that I've accepted a Software Engineer role at Google! Thanks to everyone who supported me on this journey.",
    timestamp: "2 days ago",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    company: "Microsoft",
    role: "Product Manager",
    package: "₹22 LPA",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "Excited to share that I'll be joining Microsoft as a Product Manager! Grateful for the guidance from my professors and mentors.",
    timestamp: "1 week ago",
  },
  {
    id: 3,
    name: " Patel",
    company: "Amazon",
    role: "Data Scientist",
    package: "₹20 LPA",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "I'm happy to announce that I've accepted a Data Scientist position at Amazon! Looking forward to this new chapter.",
    timestamp: "2 weeks ago",
  },
]

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Welcome to CampusConnect"
        description="Stay updated with placement activities and success stories"
      />

      <div className="grid gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-rose-600">
            Placement Success Stories
          </h2>
          <div className="grid gap-6">
            {placedStudents.map((student) => (
              <Card key={student.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={student.image} alt={student.name} />
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{student.name}</CardTitle>
                      <CardDescription>
                        {student.role} at {student.company} | {student.package}
                      </CardDescription>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">{student.timestamp}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{student.content}</p>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <Button variant="ghost" size="sm">
                    Like
                  </Button>
                  <Button variant="ghost" size="sm">
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm">
                    Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
