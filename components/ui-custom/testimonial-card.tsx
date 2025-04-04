import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  content: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  className?: string
}

export function TestimonialCard({ content, author, className }: TestimonialCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          <div className="mb-4 text-2xl font-bold">"</div>
          <p className="mb-6 italic">{content}</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author.name}</p>
            <p className="text-sm text-muted-foreground">{author.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

