// This file exports all design system components for easy imports

// Export custom UI components
export { PageHeader } from "@/components/ui-custom/page-header"
export { Section } from "@/components/ui-custom/section"
export { FeatureCard } from "@/components/ui-custom/feature-card"
export { TestimonialCard } from "@/components/ui-custom/testimonial-card"
export { StatCard } from "@/components/ui-custom/stat-card"
export { CTASection } from "@/components/ui-custom/cta-section"
export { GradientButton } from "@/components/ui-custom/gradient-button"

// Re-export shadcn components that are commonly used
export { Button } from "@/components/ui/button"
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
export { Input } from "@/components/ui/input"
export { Label } from "@/components/ui/label"
export { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Export utility functions
export { cn } from "@/lib/utils"
