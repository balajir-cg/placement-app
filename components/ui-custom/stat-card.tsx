import type React from "react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  icon?: React.ReactNode
  className?: string
}

export function StatCard({ value, label, icon, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 text-center rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-rose-500/50",
        className,
      )}
    >
      {icon && <div className="mb-2 text-rose-500 transition-transform duration-300 group-hover:scale-110">{icon}</div>}
      <div className="text-3xl font-bold mb-1 text-rose-500">{value}</div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}

