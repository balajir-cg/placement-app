"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"

interface ProfileImageUploadProps {
  currentImage?: string
  userName: string
}

export function ProfileImageUpload({ currentImage, userName }: ProfileImageUploadProps) {
  const [image, setImage] = useState<string | null>(currentImage || null)
  const [isUploading, setIsUploading] = useState(false)

  const handleImageUpload = () => {
    setIsUploading(true)

    // This is a placeholder - in a real implementation, you would upload the image to your backend
    setTimeout(() => {
      setIsUploading(false)
      toast({
        title: "Profile image upload",
        description: "This is a placeholder. Image upload will be implemented in the future.",
      })
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Image</CardTitle>
        <CardDescription>Upload or update your profile picture</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={image || undefined} alt={userName} />
          <AvatarFallback className="text-2xl">{userName.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex gap-4">
          <Button variant="outline" onClick={handleImageUpload} disabled={isUploading}>
            {isUploading ? "Uploading..." : "Upload Image"}
          </Button>
          {image && (
            <Button variant="outline" onClick={() => setImage(null)} disabled={isUploading}>
              Remove
            </Button>
          )}
        </div>
        <p className="text-xs text-muted-foreground text-center">Supported formats: JPEG, PNG. Max size: 2MB.</p>
      </CardContent>
    </Card>
  )
}
