import { FolderKanban, Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A real-time analytics platform with predictive insights using machine learning algorithms",
      technologies: ["React", "Node.js", "TensorFlow", "AWS"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=180&width=320",
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution with personalized recommendations and inventory management",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=180&width=320",
    },
    {
      title: "Sustainability Tracker",
      description: "Mobile application to track and reduce carbon footprint through daily activities",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=180&width=320",
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader icon={FolderKanban} title="Projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-48 w-full object-cover" />
            <CardHeader>
              <CardTitle className="hidden md:block">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className={cn({"md:mt-0 -mt-4": !project.technologies.length})}>{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
