import { GraduationCap } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { MobileOptimizedCard } from "@/components/ui/mobile-optimized-card"

export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "MIT",
      location: "Cambridge, MA",
      period: "2014 - 2018",
      description: "Minor in Mathematics. Graduated with honors.",
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader icon={GraduationCap} title="Educational History" />

      <div className="space-y-4">
        {education.map((edu, index) => (
          <MobileOptimizedCard
            key={index}
            title={edu.degree}
            description={`${edu.institution}, ${edu.location} • ${edu.period}`}
          >
            <p>{edu.description}</p>
          </MobileOptimizedCard>
        ))}
      </div>
    </div>
  )
}
