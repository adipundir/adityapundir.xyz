"use client"

import { useState } from "react"
import { PortfolioLayout } from "@/components/portfolio-layout"
import { ChatInterface } from "@/components/chat-interface"
import { Achievements } from "@/components/sections/achievements"
import { Education } from "@/components/sections/education"
import { Projects } from "@/components/sections/projects"
import { WorkHistory } from "@/components/sections/work-history"
import { CurrentWork } from "@/components/sections/current-work"
import { SocialLinks } from "@/components/sections/social-links"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("chat")

  // Map of section IDs to their respective components
  const sectionComponents = {
    chat: <ChatInterface />,
    achievements: <Achievements />,
    education: <Education />,
    projects: <Projects />,
    workHistory: <WorkHistory />,
    currentWork: <CurrentWork />,
    socialLinks: <SocialLinks />,
  }

  // Navigation items for the sidebar with their labels
  const navigationLabels = {
    chat: "Chat with Me",
    achievements: "Achievements",
    projects: "Projects",
    education: "Educational History",
    workHistory: "Work History",
    currentWork: "What I'm Working On",
    socialLinks: "Social Links",
  }

  return (
    <PortfolioLayout 
      activeSection={activeSection} 
      onSectionChange={setActiveSection}
      header={navigationLabels[activeSection as keyof typeof navigationLabels]}
    >
      {sectionComponents[activeSection as keyof typeof sectionComponents]}
    </PortfolioLayout>
  )
}
