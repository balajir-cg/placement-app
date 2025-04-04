import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language: string
  code: string[]
  className?: string
}

export function CodeBlock({ language, code, className }: CodeBlockProps) {
  return (
    <div className={cn("code-block", className)}>
      <div className="mb-2 text-xs text-gray-500">{language}</div>
      <div className="space-y-1">
        {code.map((line, index) => (
          <div key={index} className="code-line">
            <span className="code-number">{index + 1}</span>
            <span className="code-content" dangerouslySetInnerHTML={{ __html: line }}></span>
          </div>
        ))}
      </div>
    </div>
  )
}

