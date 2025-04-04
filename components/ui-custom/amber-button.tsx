import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AmberButtonProps extends ButtonProps {
  glow?: boolean
  variant?: "default" | "outline" | "ghost"
}

export const AmberButton = forwardRef<HTMLButtonElement, AmberButtonProps>(
  ({ className, glow = false, variant = "default", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "transition-all duration-300",
          variant === "default" && "bg-amber-500 text-black hover:bg-amber-600",
          variant === "outline" && "border-amber-500 text-amber-500 hover:bg-amber-500/10",
          variant === "ghost" && "text-amber-500 hover:bg-amber-500/10",
          glow && "amber-glow",
          className,
        )}
        {...props}
      />
    )
  },
)

AmberButton.displayName = "AmberButton"

