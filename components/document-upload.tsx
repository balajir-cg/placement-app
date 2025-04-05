"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { FileText, Upload, X } from "lucide-react"

interface DocumentUploadProps {
  documentTypes: string[]
  onUpload?: (file: File, type: string) => Promise<void>
}

export function DocumentUpload({ documentTypes, onUpload }: DocumentUploadProps) {
  const [selectedType, setSelectedType] = useState<string>("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!selectedFile || !selectedType) {
      toast({
        title: "Error",
        description: "Please select both a document type and a file.",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      if (onUpload) {
        await onUpload(selectedFile, selectedType)
      } else {
        // Placeholder for future implementation
        await new Promise((resolve) => setTimeout(resolve, 1500))
        toast({
          title: "Document uploaded",
          description: "This is a placeholder. Document upload will be implemented in the future.",
        })
      }

      // Reset form
      setSelectedFile(null)
      setSelectedType("")

      // Reset file input
      const fileInput = document.getElementById("document-file") as HTMLInputElement
      if (fileInput) fileInput.value = ""
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your document. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Document</CardTitle>
        <CardDescription>Upload your educational documents and certificates</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="document-type">Document Type</Label>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger id="document-type">
              <SelectValue placeholder="Select document type" />
            </SelectTrigger>
            <SelectContent>
              {documentTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="document-file">File</Label>
          <Input id="document-file" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onChange={handleFileChange} />
          <p className="text-xs text-muted-foreground">Supported formats: PDF, JPEG, PNG, DOC, DOCX. Max size: 5MB.</p>
        </div>

        {selectedFile && (
          <div className="flex items-center justify-between p-2 border rounded-md bg-muted/50">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm truncate max-w-[200px]">{selectedFile.name}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedFile(null)
                const fileInput = document.getElementById("document-file") as HTMLInputElement
                if (fileInput) fileInput.value = ""
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <Button className="w-full" onClick={handleUpload} disabled={!selectedFile || !selectedType || isUploading}>
          {isUploading ? (
            <span className="flex items-center">
              <span className="animate-spin mr-2">⏳</span> Uploading...
            </span>
          ) : (
            <span className="flex items-center">
              <Upload className="mr-2 h-4 w-4" /> Upload Document
            </span>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
