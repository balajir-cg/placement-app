import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for company visits
const companyVisits = [
  {
    id: 1,
    company: "Google",
    logo: "/placeholder.svg?height=40&width=40",
    date: "June 15, 2025",
    positions: ["Software Engineer", "Product Manager"],
    eligibility: "CGPA ≥ 8.0",
    status: "Upcoming",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "/placeholder.svg?height=40&width=40",
    date: "June 10, 2025",
    positions: ["Software Engineer", "Data Scientist"],
    eligibility: "CGPA ≥ 7.5",
    status: "Upcoming",
  },
  {
    id: 3,
    company: "Amazon",
    logo: "/placeholder.svg?height=40&width=40",
    date: "May 20, 2025",
    positions: ["SDE", "Business Analyst"],
    eligibility: "CGPA ≥ 7.0",
    status: "Completed",
  },
  {
    id: 4,
    company: "Adobe",
    logo: "/placeholder.svg?height=40&width=40",
    date: "May 5, 2025",
    positions: ["Software Engineer", "UX Designer"],
    eligibility: "CGPA ≥ 7.5",
    status: "Completed",
  },
  {
    id: 5,
    company: "IBM",
    logo: "/placeholder.svg?height=40&width=40",
    date: "April 25, 2025",
    positions: ["Software Developer", "Data Analyst"],
    eligibility: "CGPA ≥ 7.0",
    status: "Completed",
  },
]

export default function TimelinePage() {
  // Separate upcoming and past visits
  const upcomingVisits = companyVisits.filter((visit) => visit.status === "Upcoming")
  const pastVisits = companyVisits.filter((visit) => visit.status === "Completed")

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Campus Visit Timeline</h1>
        <p className="text-muted-foreground">Track upcoming and past company visits to your campus</p>
      </div>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Visits</h2>
          <div className="grid gap-6">
            {upcomingVisits.map((visit) => (
              <Card key={visit.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded overflow-hidden">
                      <img
                        src={visit.logo || "/placeholder.svg"}
                        alt={visit.company}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{visit.company}</CardTitle>
                      <CardDescription>{visit.date}</CardDescription>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                        {visit.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div>
                      <span className="font-medium">Positions:</span> {visit.positions.join(", ")}
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span> {visit.eligibility}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Past Visits</h2>
          <div className="grid gap-6">
            {pastVisits.map((visit) => (
              <Card key={visit.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded overflow-hidden">
                      <img
                        src={visit.logo || "/placeholder.svg"}
                        alt={visit.company}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{visit.company}</CardTitle>
                      <CardDescription>{visit.date}</CardDescription>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-50 text-gray-700 border-gray-200">
                        {visit.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div>
                      <span className="font-medium">Positions:</span> {visit.positions.join(", ")}
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span> {visit.eligibility}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
