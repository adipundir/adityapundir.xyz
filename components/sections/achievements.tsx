import { Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "Cook01 Hackathon Finalist",
      description: "Created Artha, a AI-powered trading agent that trades based on market sentiments and analyzes whale portfolios to maximize user profits",
      date: "May 2025",
      link: "#",
    },
    {
      title: "Sozu AI Hack Winner",
      description: "Won $350 for Agentic Screener, a project that helps organizations screen candidates faster and reduce hiring costs by up to 80%",
      date: "February 2025",
      link: "https://x.com/sozuhaus/status/1892176966268432426",
    },
    {
      title: "ETHOnline24 Winner",
      description: "Won $800 for Aerodump, a platform that enables project owners to do large token distributions across any token on any chain",
      date: "August 2024",
      link: "https://ethglobal.com/showcase/aerodump-4z48m",
    },
    {
      title: "CEH v9 Certification",
      description: "Obtained Certified Ethical Hacker certification from EC Council",
      date: "August 2016",
      link: "https://drive.google.com/file/d/1kQlb_q6R9Gkbr3ujHdCssEvqlWe90PoC/view?usp=sharing",
    },
  ]

  return (
    <SectionWrapper className="pt-4 md:pt-8 pb-8 px-4 md:px-6">
      <SectionHeader icon={Trophy} title="Achievements" />
      
      <div className="grid gap-4 md:grid-cols-2 pt-6 pb-2">
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <Link 
                  href={achievement.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5"
                >
                  <span className="text-lg font-semibold">{achievement.title}</span>
                  <ExternalLink size={14} className="text-slate-400 transition-colors group-hover:text-blue-600"/>
                </Link>
              </CardTitle>
              <CardDescription>{achievement.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
