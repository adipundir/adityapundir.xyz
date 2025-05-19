import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { MobileOptimizedCard } from "@/components/ui/mobile-optimized-card"

export function CurrentHighlights() {
  const highlights = [
    {
      title: "Featured in Tech Magazine",
      description: "My work on AI-powered analytics was featured in the latest issue of Tech Innovations Monthly",
    },
    {
      title: "Conference Speaker",
      description: "Presented 'The Future of Web Development' at ReactConf 2023",
    },
    {
      title: "Open Source Milestone",
      description: "My utility library reached 10,000 downloads on npm",
    },
    {
      title: "Mentorship Program",
      description: "Currently mentoring 3 junior developers through the Tech Mentors Network",
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader icon={Star} title="Current Highlights" />

      <div className="grid gap-4 md:grid-cols-2">
        {highlights.map((highlight, index) => (
          <MobileOptimizedCard
            key={index}
            title={highlight.title}
          >
            <p>{highlight.description}</p>
          </MobileOptimizedCard>
        ))}
      </div>
    </div>
  )
}
