import { Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/ui/section-header"
import { MobileOptimizedCard } from "@/components/ui/mobile-optimized-card"

export function WorkHistory() {
  const workHistory = [
    {
      position: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      responsibilities: [
        "Lead a team of 5 developers building enterprise SaaS applications",
        "Architect and implement scalable microservices architecture",
        "Mentor junior developers and conduct code reviews",
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    },
    {
      position: "Full-Stack Developer",
      company: "Digital Solutions LLC",
      location: "New York, NY",
      period: "2018 - 2021",
      responsibilities: [
        "Developed and maintained client web applications",
        "Implemented CI/CD pipelines for automated testing and deployment",
        "Collaborated with design team to create responsive UI components",
      ],
      technologies: ["Angular", "Express", "MongoDB", "Azure"],
    },
    {
      position: "Frontend Developer Intern",
      company: "StartUp Co.",
      location: "Boston, MA",
      period: "Summer 2017",
      responsibilities: [
        "Built responsive UI components using React",
        "Participated in daily stand-ups and sprint planning",
        "Optimized application performance and loading times",
      ],
      technologies: ["React", "Redux", "SCSS", "Webpack"],
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader icon={Briefcase} title="Work History" />

      <div className="space-y-6">
        {workHistory.map((job, index) => (
          <MobileOptimizedCard
            key={index}
            title={job.position}
            description={`${job.company}, ${job.location} • ${job.period}`}
          >
            <div className="space-y-4">
              <ul className="ml-6 list-disc space-y-2">
                {job.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>

              <div>
                <p className="mb-2 font-medium">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </MobileOptimizedCard>
        ))}
      </div>
    </div>
  )
}
