import { Share2, Github, Linkedin, Twitter, Globe, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      username: "@johnportfolio",
      url: "https://github.com/johnportfolio",
      icon: Github,
      color: "bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700",
    },
    {
      name: "LinkedIn",
      username: "John Portfolio",
      url: "https://linkedin.com/in/johnportfolio",
      icon: Linkedin,
      color: "bg-[#0077B5] hover:bg-[#006699]",
    },
    {
      name: "Twitter",
      username: "@johnportfolio",
      url: "https://twitter.com/johnportfolio",
      icon: Twitter,
      color: "bg-[#1DA1F2] hover:bg-[#0c85d0]",
    },
    {
      name: "Personal Website",
      username: "johnportfolio.dev",
      url: "https://johnportfolio.dev",
      icon: Globe,
      color: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      name: "Email",
      username: "hello@johnportfolio.dev",
      url: "mailto:hello@johnportfolio.dev",
      icon: Mail,
      color: "bg-amber-600 hover:bg-amber-700",
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader icon={Share2} title="Social Links" />

      <Card>
        <CardHeader className="hidden md:block">
          <CardTitle>Connect with me</CardTitle>
          <CardDescription>Find me on these platforms and get in touch</CardDescription>
        </CardHeader>
        <CardContent className="md:pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="default"
                className={`h-auto justify-start gap-3 p-4 text-white ${link.color}`}
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{link.name}</span>
                    <span className="text-xs opacity-90">{link.username}</span>
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
