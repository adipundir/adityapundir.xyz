import { Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { MobileOptimizedCard } from "@/components/ui/mobile-optimized-card"

export function Achievements() {
  const achievements = [
    {
      title: "Best Web Application Award",
      description: "Received for developing an innovative e-commerce platform with AI-powered recommendations",
      year: "2023",
    },
    {
      title: "Open Source Contributor of the Year",
      description: "Recognized for significant contributions to React ecosystem libraries",
      year: "2022",
    },
    {
      title: "Hackathon Winner",
      description: "First place at TechCrunch Disrupt for a sustainability tracking application",
      year: "2021",
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader icon={Trophy} title="Achievements" />

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <MobileOptimizedCard 
            key={index}
            title={achievement.title}
            description={achievement.year}
          >
            <p>{achievement.description}</p>
          </MobileOptimizedCard>
        ))}
      </div>
    </div>
  )
}
