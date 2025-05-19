import { Hammer } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SectionHeader } from "@/components/ui/section-header"
import { MobileOptimizedCard } from "@/components/ui/mobile-optimized-card"

export function CurrentWork() {
  const currentProjects = [
    {
      title: "Machine Learning Course",
      description: "Taking Stanford's online course on advanced machine learning techniques",
      progress: 65,
      eta: "Completion expected by August 2023",
    },
    {
      title: "Open Source Library",
      description: "Building a React component library for data visualization",
      progress: 40,
      eta: "Completion expected by October 2023",
    },
    {
      title: "Personal Blog",
      description: "Writing technical articles about web development and AI",
      progress: 80,
      eta: "Ongoing project",
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader icon={Hammer} title="What I'm Working On" />

      <div className="space-y-4">
        {currentProjects.map((project, index) => (
          <MobileOptimizedCard
            key={index}
            title={project.title}
          >
            <div className="space-y-4">
              <p>{project.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>
              <p className="text-sm text-muted-foreground">{project.eta}</p>
            </div>
          </MobileOptimizedCard>
        ))}
      </div>
    </div>
  )
}
