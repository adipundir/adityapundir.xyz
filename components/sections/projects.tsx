import { FolderKanban, Github, ExternalLink, Lock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { cn } from "@/lib/utils"

export function Projects() {
  const projects = [
    {
      title: "SimplyQuiz",
      description: "AI automation platform that completes quizzes for college students with 200+ Daily Active Users.",
      technologies: ["Next.js", "LLM", "Langchain", "AWS Event Bridge"],
      github: "#",
      demo: "https://simplyquiz.vercel.app",
      image: "/simply-quiz.png",
      private: true,
    },
    {
      title: "Artha AI",
      description: "AI-powered trading agent that trades based on market sentiments and analyzes whale portfolios.",
      technologies: ["Next.js", "Thirdweb", "Mantle Blockchain", "Chainlink Price Feeds", "Nebula-AI"],
      github: "https://github.com/adipundir/Artha",
      demo: "https://0xartha.vercel.app",
      image: "/artha-ai.png",
      private: false,
    },
    {
      title: "Agentic Screener",
      description: "Reduces hiring costs by up to 80% through automated candidate screening and assessment.",
      technologies: ["Next.js", "LLM", "Langchain", "Resend Email Service"],
      github: "https://github.com/adipundir/agenticScreener",
      demo: "https://agenticscreener.vercel.app",
      image: "/agentic-screener.png",
      private: false,
    },
  ]

  return (
    <SectionWrapper>
      <div className="space-y-8">
        <SectionHeader icon={FolderKanban} title="Projects" />

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col p-0">
              <div className="w-full">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-48 w-full object-cover" />
              </div>
              <CardHeader className="px-5 pt-5 pb-3">
                <CardTitle className="text-xl font-bold mb-3">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="px-5 py-2">
                <p className={cn({"md:mt-0 -mt-4": !project.technologies.length})}>{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between px-5 py-4 mt-auto">
                {project.private ? (
                  <Button variant="outline" size="sm" disabled>
                    <Lock className="mr-2 h-4 w-4" />
                    Private Code
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
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
    </SectionWrapper>
  )
}
