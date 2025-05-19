"use client"

import * as React from "react"
import { MessageSquare, Trophy, GraduationCap, FolderKanban, Briefcase, Star, Hammer, Share2, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"

interface PortfolioLayoutProps {
  children: React.ReactNode
  activeSection: string
  onSectionChange: (section: string) => void
  header?: string
}

const navigationItems = [
  { id: "chat", label: "Chat with Me", icon: MessageSquare },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "workHistory", label: "Work History", icon: Briefcase },
  { id: "education", label: "Educational History", icon: GraduationCap },
  { id: "currentWork", label: "What I'm Working On", icon: Hammer },
  { id: "socialLinks", label: "Social Links", icon: Share2 },
]

export function PortfolioLayout({ children, activeSection, onSectionChange, header }: PortfolioLayoutProps) {
  // State to control the sheet open/close
  const [sheetOpen, setSheetOpen] = React.useState(false);
  
  // Get the current section label for display in the mobile header
  const currentSectionLabel = React.useMemo(() => {
    const activeItem = navigationItems.find(item => item.id === activeSection);
    return activeItem?.label || header || "";
  }, [activeSection, header]);

  // Function to handle navigation item click that also closes the mobile sheet
  const handleItemClick = (id: string) => {
    onSectionChange(id);
    setSheetOpen(false); // Close the sheet when an item is clicked
  };

  // Sidebar content component shared between desktop and mobile views
  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {/* Header */}
      <div className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/aditya.jpg" alt="Profile" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">Aditya Pundir</span>
            <span className="text-xs text-muted-foreground">Full-Stack Developer</span>
          </div>
        </div>
      </div>

      {/* Content/Navigation */}
      <div className="flex-1 overflow-y-auto py-2">
        <nav className="flex flex-col gap-1 px-2">
          {navigationItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {index === 0 && <div className="h-2" />}
              {isMobile ? (
                <SheetClose asChild>
                  <button
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors text-left",
                      activeSection === item.id
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    )}
                    onClick={() => onSectionChange(item.id)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                </SheetClose>
              ) : (
                <button
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                    activeSection === item.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                  onClick={() => onSectionChange(item.id)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              )}
              {index === 0 && <div className="h-[1px] bg-sidebar-border my-2 mx-2" />}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center justify-start">
          <ThemeToggle />
        </div>
      </div>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-background">
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:flex md:w-64 md:min-w-64 h-full border-r border-sidebar-border bg-sidebar text-sidebar-foreground flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Header with Menu Button */}
      <div className="md:hidden fixed top-0 left-0 right-0 flex p-4 border-b border-sidebar-border w-full bg-sidebar text-sidebar-foreground z-10">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Avatar className="h-10 w-10 cursor-pointer mr-3">
              <AvatarImage src="/aditya.jpg" alt="Profile" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 max-w-xs w-[80vw] bg-sidebar text-sidebar-foreground">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <SidebarContent isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-col">
          <h1 className="font-bold text-lg text-sidebar-accent-foreground">{currentSectionLabel}</h1>
          <span className="text-xs text-muted-foreground">Aditya Pundir • Full-Stack Developer</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto pt-20 md:pt-0 h-full w-full">
        <div className="h-full w-full p-4 pb-16 sm:p-6 sm:pb-16 md:p-8 md:pb-24">
          {children}
        </div>
      </main>
    </div>
  )
}
