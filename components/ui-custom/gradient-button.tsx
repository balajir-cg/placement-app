import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string
  gradientTo?: string
  hoverScale?: boolean
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, gradientFrom = "from-purple-600", gradientTo = "to-blue-600", hoverScale = true, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative text-white overflow-hidden transition-all",
          hoverScale && "hover:scale-105",
          "bg-gradient-to-r",
          gradientFrom,
          gradientTo,
          className,
        )}
        {...props}
      />
    )
  },
)

GradientButton.displayName = "GradientButton"

