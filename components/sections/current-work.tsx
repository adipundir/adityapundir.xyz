import { Hammer } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SectionHeader } from "@/components/ui/section-header"
import Image from "next/image"

export function CurrentWork() {
  const currentProject = {
    title: "Personal Portfolio Website",
    image: "/working.png",
    progress: 70
  }

  return (
    <div className="space-y-6 px-4 pb-8">
      <SectionHeader icon={Hammer} title="What I'm Working On" />

      <Card className="overflow-hidden max-w-3xl mx-auto pt-0">
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image 
            src={currentProject.image}
            alt={currentProject.title}
            fill
            className="object-cover"
          />
        </div>
        
        <CardContent className="pt-6 px-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Progress</span>
              <span className="font-medium">{currentProject.progress}%</span>
            </div>
            <Progress 
              value={currentProject.progress} 
              className="h-3"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
