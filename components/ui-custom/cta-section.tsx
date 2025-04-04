import type React from "react"
import { cn } from "@/lib/utils"

interface CTASectionProps {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
  background?: "default" | "gradient"
}

export function CTASection({ title, description, children, className, background = "default" }: CTASectionProps) {
  const backgroundClasses = {
    default: "bg-muted",
    gradient: "bg-gradient-to-r from-purple-500 to-blue-500 text-white",
  }

  return (
    <section className={cn("w-full py-12 md:py-16", backgroundClasses[background], className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {description && (
            <p className={cn("max-w-[700px]", background === "gradient" ? "text-white/90" : "text-muted-foreground")}>
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">{children}</div>
        </div>
      </div>
    </section>
  )
}

