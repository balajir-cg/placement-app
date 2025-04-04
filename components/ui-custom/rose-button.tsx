import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface RoseButtonProps extends ButtonProps {
  glow?: boolean
  variant?: "default" | "outline" | "ghost"
}

export const RoseButton = forwardRef<HTMLButtonElement, RoseButtonProps>(
  ({ className, glow = false, variant = "default", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "transition-all duration-300",
          variant === "default" && "bg-rose-500 text-white hover:bg-rose-600",
          variant === "outline" && "border-rose-500 text-rose-500 hover:bg-rose-500/10",
          variant === "ghost" && "text-rose-500 hover:bg-rose-500/10",
          glow && "rose-glow",
          className,
        )}
        {...props}
      />
    )
  },
)

RoseButton.displayName = "RoseButton"

