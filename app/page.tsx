"use client"

import { useState, useEffect } from "react"
import { PortfolioLayout } from "@/components/portfolio-layout"
import { ChatInterface } from "@/components/chat-interface"
import { Achievements } from "@/components/sections/achievements"
import { Education } from "@/components/sections/education"
import { Projects } from "@/components/sections/projects"
import { WorkHistory } from "@/components/sections/work-history"
import { CurrentWork } from "@/components/sections/current-work"
import { SocialLinks } from "@/components/sections/social-links"

export default function PortfolioPage() {
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

  // Get initial section from URL hash or default to "chat"
  const [activeSection, setActiveSection] = useState("chat")
  
  // Handle section changes and update URL hash
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    window.location.hash = section
  }
  
  // Update active section when URL hash changes or on initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && Object.keys(sectionComponents).includes(hash)) {
        setActiveSection(hash)
      } else if (!hash && activeSection !== "chat") {
        setActiveSection("chat")
      }
    }
    
    // Set initial section from hash on page load
    if (typeof window !== 'undefined') {
      handleHashChange()
      
      // Listen for hash changes
      window.addEventListener('hashchange', handleHashChange)
      return () => window.removeEventListener('hashchange', handleHashChange)
    }
  }, [sectionComponents])

  return (
    <PortfolioLayout 
      activeSection={activeSection} 
      onSectionChange={handleSectionChange}
      header={navigationLabels[activeSection as keyof typeof navigationLabels]}
    >
      {sectionComponents[activeSection as keyof typeof sectionComponents]}
    </PortfolioLayout>
  )
}
