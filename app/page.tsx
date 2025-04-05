import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui-custom/section"
import { FeatureCard } from "@/components/ui-custom/feature-card"
import { StatCard } from "@/components/ui-custom/stat-card"
import { RoseButton } from "@/components/ui-custom/rose-button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl text-rose-500">CampusConnect</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/signin">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <RoseButton glow>Sign Up</RoseButton>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <Section className="pt-20 md:pt-32 pb-16 md:pb-24" pattern="grid">
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col space-y-8">
              <div>
                <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-sm text-rose-500 mb-6">
                  <span className="mr-2 h-2 w-2 rounded-full bg-rose-500"></span>
                  Campus Placement Platform
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-glow">
                  Your Gateway to <span className="text-rose-500">Career Success</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Connect with top companies, share experiences, and kickstart your career journey with our campus
                  placement platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <RoseButton size="lg" glow className="w-full sm:w-auto">
                    Get Started
                  </RoseButton>
                </Link>
                <Link href="/docs">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Documentation
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-rose-500"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Easy Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-rose-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-rose-500"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  </svg>
                  <span>Scalable</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg rose-glow">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Campus Connect Platform"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="mt-20 text-center">
            <p className="text-sm text-muted-foreground mb-6">TRUSTED BY TOP INSTITUTIONS</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-70">
              <div className="h-8 w-auto">
                <img src="/placeholder.svg?height=32&width=120" alt="MIT" className="h-full w-auto" />
              </div>
              <div className="h-8 w-auto">
                <img src="/placeholder.svg?height=32&width=120" alt="Stanford" className="h-full w-auto" />
              </div>
              <div className="h-8 w-auto">
                <img src="/placeholder.svg?height=32&width=120" alt="IIT" className="h-full w-auto" />
              </div>
              <div className="h-8 w-auto">
                <img src="/placeholder.svg?height=32&width=120" alt="Harvard" className="h-full w-auto" />
              </div>
              <div className="h-8 w-auto">
                <img src="/placeholder.svg?height=32&width=120" alt="Oxford" className="h-full w-auto" />
              </div>
            </div>
          </div>
        </Section>

        {/* Features Section */}
        <Section id="features" pattern="dots" darkBg>
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-sm text-rose-500 mb-6">
              <span className="mr-2 h-2 w-2 rounded-full bg-rose-500"></span>
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-3 md:text-4xl">Powerful Features for Everyone</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto md:text-lg">
              Our platform offers a comprehensive set of tools to streamline the campus placement process for all
              stakeholders.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Smart Profile Management"
              description="Create and manage your professional profile with resume, academic records, and skills showcase."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-circle-2"
                >
                  <path d="M18 20a6 6 0 0 0-12 0" />
                  <circle cx="12" cy="10" r="4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              }
            />
            <FeatureCard
              title="Placement Updates"
              description="Stay updated with real-time notifications about upcoming campus visits and placement opportunities."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              }
            />
            <FeatureCard
              title="Interview Experiences"
              description="Learn from peers by reading and sharing interview experiences and preparation strategies."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              }
            />
            <FeatureCard
              title="Company Timeline"
              description="Visualize the campus recruitment schedule with an interactive timeline of company visits."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              }
            />
            <FeatureCard
              title="Resource Sharing"
              description="Access and share preparation resources, study materials, and practice questions."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              }
            />
            <FeatureCard
              title="Role-Based Access"
              description="Tailored experiences for students, placement officers, representatives, and recruiters."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              }
            />
          </div>
        </Section>

        {/* Integration Section */}
        <Section className="py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-sm text-rose-500 mb-6">
                <span className="mr-2 h-2 w-2 rounded-full bg-rose-500"></span>
                Simple Integration
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Easy to Integrate with Your <span className="text-rose-500">Existing Systems</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our API-first approach makes it simple to integrate CampusConnect with your existing college management
                systems, student databases, and recruitment platforms.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">RESTful API</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive API for all platform features</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2z" />
                      <path d="M10 8h4" />
                      <path d="M10 12h4" />
                      <path d="M10 16h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Webhooks</h3>
                    <p className="text-sm text-muted-foreground">Real-time event notifications</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Secure Authentication</h3>
                    <p className="text-sm text-muted-foreground">OAuth 2.0 and JWT support</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/docs/api">
                  <RoseButton>View API Documentation</RoseButton>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg rose-glow">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="API Integration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Stats Section */}
        <Section pattern="grid" darkBg>
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-sm text-rose-500 mb-6">
              <span className="mr-2 h-2 w-2 rounded-full bg-rose-500"></span>
              Our Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-3 md:text-4xl">Transforming Campus Placements</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto md:text-lg">
              Join thousands of students, placement officers, and recruiters who are already using CampusConnect
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              value="10,000+"
              label="Active Students"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <StatCard
              value="500+"
              label="Partner Companies"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-building"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M12 6h.01" />
                  <path d="M12 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 10h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 10h.01" />
                  <path d="M8 14h.01" />
                </svg>
              }
            />
            <StatCard
              value="50+"
              label="Educational Institutions"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              }
            />
            <StatCard
              value="85%"
              label="Placement Rate"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              }
            />
          </div>
        </Section>

        {/* How It Works Section */}
        <Section id="how-it-works" className="py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-sm text-rose-500 mb-6">
              <span className="mr-2 h-2 w-2 rounded-full bg-rose-500"></span>
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-3 md:text-4xl">Simple Process, Powerful Results</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto md:text-lg">
              A streamlined workflow designed for all stakeholders in the campus placement ecosystem
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="relative">
              <div className="absolute left-10 top-10 right-0 bottom-0 border border-rose-500/20 rounded-lg -z-10"></div>
              <div className="gradient-border p-6 bg-card/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
                <p className="text-muted-foreground mb-4">
                  Sign up and build your comprehensive profile with academic details, skills, and documents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Upload resume and academic records
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Showcase your skills and projects
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Link external profiles (GitHub, LinkedIn)
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative mt-8 md:mt-4">
              <div className="absolute left-10 top-10 right-0 bottom-0 border border-rose-500/20 rounded-lg -z-10"></div>
              <div className="gradient-border p-6 bg-card/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Explore Opportunities</h3>
                <p className="text-muted-foreground mb-4">
                  Browse upcoming company visits, job postings, and preparation resources.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    View company visit timeline
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Access interview preparation resources
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Read peer interview experiences
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative mt-8 md:mt-8">
              <div className="absolute left-10 top-10 right-0 bottom-0 border border-rose-500/20 rounded-lg -z-10"></div>
              <div className="gradient-border p-6 bg-card/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Connect & Succeed</h3>
                <p className="text-muted-foreground mb-4">
                  Apply for positions, prepare with shared resources, and land your dream job.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Apply to job openings with one click
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Track application status in real-time
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Share your success story
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section pattern="dots" darkBg className="py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-sm text-rose-500 mb-6">
              <span className="mr-2 h-2 w-2 rounded-full bg-rose-500"></span>
              Get Started Today
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 md:text-4xl">
              Ready to Transform Your Campus Placement Experience?
            </h2>
            <p className="text-muted-foreground mb-8 md:text-lg">
              Join thousands of students, placement officers, and recruiters who are already using CampusConnect to
              streamline the campus placement process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <RoseButton size="lg" glow className="w-full sm:w-auto">
                  Sign Up for Free
                </RoseButton>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border/40 py-12 bg-card/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold mb-4 text-rose-500">CampusConnect</h3>
              <p className="text-muted-foreground">
                Your gateway to career success through streamlined campus placements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-rose-500 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-rose-500 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7V5H8v15h4v-8h4v4h4v-4h4v-4h-4v4h-4V8z" />
                    <rect width="4" height="15" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground">Email: info@campusconnect.com</p>
                <p className="text-muted-foreground">Phone: +1 (123) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center">
            <p className="text-sm text-muted-foreground">© 2025 CampusConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
