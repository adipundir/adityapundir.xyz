import { GraduationCap } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SectionWrapper } from "@/components/ui/section-wrapper"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "ABES Engineering College",
      location: "Ghaziabad, India",
      period: "2022 - 2026",
      description: "Coursework: Data Structures, Algorithms, Database Management Systems, Computer Networks, Operating Systems",
    },
    {
      degree: "Higher Secondary Education (PCM)",
      institution: "K. L. International School",
      location: "Meerut, Uttar Pradesh, India",
      period: "Completed in 2021",
      description: "Coursework: Physics, Chemistry, Mathematics",
    },
  ]

  return (
    <SectionWrapper>
      <div className="space-y-6">
        <SectionHeader icon={GraduationCap} title="Educational History" />

        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{`${edu.institution}, ${edu.location} • ${edu.period}`}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
