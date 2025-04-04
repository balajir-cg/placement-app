import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/ui-custom/page-header"
import { databases } from "@/lib/appwrite"
import Image from "next/image"

export default async function DashboardPage() {
  const posts = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE!,
    process.env.NEXT_PUBLIC_PLACEMENTPOSTS_COLLECTION!
  );
   
  console.log(posts)
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.documents.map((posts) => (
              <Card key={posts.id} className="overflow-hidden transition-all hover:shadow-md flex flex-col">
                <div className="relative w-full pb-full aspect-square">
                  <Image 
                    src={posts.image} 
                    alt={`${posts.name}'s placement success story`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={posts.image} alt={posts.name} />
                      <AvatarFallback>{posts.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{posts.name}</CardTitle>
                      <CardDescription>
                        {posts.role} at {posts.company} | {posts.package}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{posts.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}