import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  pattern?: "none" | "grid" | "dots"
  darkBg?: boolean
}

export function Section({ children, className, id, pattern = "none", darkBg = false }: SectionProps) {
  const patternClasses = {
    none: "",
    grid: "bg-grid-pattern",
    dots: "bg-dots-pattern",
  }

  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 relative overflow-hidden",
        darkBg && "bg-black/50",
        patternClasses[pattern],
        className,
      )}
    >
      <div className="container px-4 md:px-6 relative z-10">{children}</div>
    </section>
  )
}

