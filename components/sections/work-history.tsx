import { Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/ui/section-header"

export function WorkHistory() {
  const workHistory = [
    {
      position: "Junior Engineer",
      company: "Mentibus",
      location: "San Francisco, CA, USA (Remote)",
      period: "2024 - Present",
      responsibilities: [
        "Setup CI/CD pipelines for automated testing and deployment",
        "Backend development and implementation of new features",
        "Continuous optimization and maintenance of servers for thousands of users",
      ],
      technologies: ["Next.js", "AWS", "Jenkins", "Algolia", "Hasura"],
    },
    {
      position: "Frontend Developer",
      company: "Simplifii Labs Pvt Ltd",
      location: "Delhi, India (Remote)",
      period: "Nov 2023 - Oct 2024",
      responsibilities: [
        "Built and optimized UI components",
        "Developed responsive user interfaces",
        "Collaborated with the development team on feature implementation",
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS"],
    },
  ]

  return (
    <div className="space-y-6 pb-8">
      <SectionHeader icon={Briefcase} title="Work History" />

      <div className="space-y-6">
        {workHistory.map((job, index) => (
          <Card key={index}>
            <CardHeader className="space-y-1">
              <CardTitle><span className="text-xl">{job.position}</span></CardTitle>
              <CardDescription>{`${job.company}, ${job.location} • ${job.period}`}</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
