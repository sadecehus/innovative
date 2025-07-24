"use client"

import Image from "next/image"
import { Calendar, Users, Target, Heart } from "lucide-react"
import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { CodeBlock } from "@/components/code-block"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const values = [
    {
      icon: Target,
      title: t("about.valuesList.0.title"),
      description: t("about.valuesList.0.description"),
    },
    {
      icon: Users,
      title: t("about.valuesList.1.title"),
      description: t("about.valuesList.1.description"),
    },
    {
      icon: Heart,
      title: t("about.valuesList.2.title"),
      description: t("about.valuesList.2.description"),
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4 page-content">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-muted-foreground mb-4">{t("about.title")}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.heading")}</h1>
            <div className="max-w-4xl mx-auto">
              <CodeBlock>{t("about.story")}</CodeBlock>
            </div>
          </div>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-20">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("about.mission")}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("about.missionDesc")}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection delay={0.3}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="font-mono text-sm text-muted-foreground mb-4">{t("about.meetTeam")}</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.peopleTitle")}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t("about.team").map((member: any, index: number) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt={member.name}
                        width={200}
                        height={200}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                    </div>
                    <h3 className="font-mono text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-mono text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.4}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="font-mono text-sm text-muted-foreground mb-4">{t("about.journey")}</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.milestones")}</h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
              <div className="space-y-12">
                {t("about.timeline").map((milestone: any, index: number) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="font-mono flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {milestone.year}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <h3 className="font-semibold mb-2">{milestone.event}</h3>
                          <p className="text-muted-foreground text-sm">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mb-12">
            <div className="font-mono text-sm text-muted-foreground mb-4">{t("about.values")}</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.valuesTitle")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-mono text-lg font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
