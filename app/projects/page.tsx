"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Ticaret Platformu / E-Commerce Platform",
      category: "ecommerce",
      description:
        "Gerçek zamanlı envanter yönetimi ile full-stack e-ticaret çözümü / Full-stack e-commerce solution with real-time inventory management",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "VR Eğitim Simülatörü / VR Training Simulator",
      category: "vr",
      description:
        "Endüstriyel güvenlik protokolleri için sürükleyici VR eğitim ortamı / Immersive VR training environment for industrial safety protocols",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Unity", "C#", "Oculus SDK", "3D Modeling"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Dijital Pazarlama Paneli / Digital Marketing Dashboard",
      category: "marketing",
      description:
        "SEO ve sosyal medya analitikleri için kapsamlı pazarlama paneli / Comprehensive marketing dashboard for SEO and social media analytics",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Google Analytics API"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Emlak Portalı / Real Estate Portal",
      category: "web",
      description:
        "Gelişmiş arama özellikleri ile modern emlak listeleme platformu / Modern property listing platform with advanced search capabilities",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "İhracat Yönetim Sistemi / Export Management System",
      category: "software",
      description:
        "Uluslararası ticaret süreçleri için kapsamlı yönetim sistemi / Comprehensive management system for international trade processes",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "VR Sanat Galerisi / VR Art Gallery",
      category: "vr",
      description:
        "Etkileşimli sergiler ile sanal sanat galerisi deneyimi / Virtual art gallery experience with interactive exhibitions",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Unreal Engine", "Blueprint", "VR SDK", "3D Art"],
      github: "#",
      demo: "#",
    },
  ]

  const filters = [
    { id: "all", label: t("projects.filters.all") },
    { id: "web", label: t("projects.filters.web") },
    { id: "vr", label: t("projects.filters.vr") },
    { id: "ecommerce", label: t("projects.filters.ecommerce") },
    { id: "marketing", label: t("projects.filters.marketing") },
    { id: "software", label: t("projects.filters.software") },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen py-20 px-4 page-content">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-muted-foreground mb-4">{t("projects.title")}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("projects.heading")}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("projects.description")}</p>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="font-mono text-xs sm:text-sm"
                size="sm"
              >
                <Filter className="w-4 h-4 mr-1 sm:mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          {t("projects.demo")}
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          {t("projects.code")}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-base sm:text-lg">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="font-mono text-muted-foreground">{t("projects.noProjects")}</div>
          </div>
        )}
      </div>
    </div>
  )
}
