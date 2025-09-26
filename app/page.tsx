"use client"

import { ArrowRight, Code, Zap, Users, CheckCircle, BarChart, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function HomePage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("web")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: Code,
      title: t("home.cleanCode"),
      description: t("home.cleanCodeDesc"),
    },
    {
      icon: Zap,
      title: t("home.fastDelivery"),
      description: t("home.fastDeliveryDesc"),
    },
    {
      icon: Users,
      title: t("home.teamFocus"),
      description: t("home.teamFocusDesc"),
    },
    {
      icon: CheckCircle,
      title: t("home.qualityAssurance"),
      description: t("home.qualityAssuranceDesc"),
    },
    {
      icon: BarChart,
      title: t("home.dataDriven"),
      description: t("home.dataDrivenDesc"),
    },
    {
      icon: Globe,
      title: t("home.globalReach"),
      description: t("home.globalReachDesc"),
    },
  ]

  const testimonials = [
    {
      quote:
        "Innovative Trademark transformed our business with their e-commerce solution. Sales increased by 40% in the first quarter.",
      author: "Ahmet Yılmaz",
      role: "CEO, TechRetail",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Their VR training platform reduced our onboarding time by 60% while improving knowledge retention significantly.",
      author: "Zeynep Kaya",
      role: "HR Director, Industrial Solutions",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The custom software they developed streamlined our logistics operations and saved us thousands in operational costs.",
      author: "Mehmet Demir",
      role: "Operations Manager, Global Trade Co.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const clients = [{ 
      name: "Kocatürk Danışmanlık", 
      logo: "/kocaturklogo.png" 
    },
    { 
      name: "KGS", 
      logo: "kgs.png" 
    }
    
  ]

  const stats = [
    { value: "40+", label: t("home.projectsCompleted") },
    { value: "98%", label: t("home.clientSatisfaction") },
   
    { value: "24/7", label: t("home.supportAvailable") },
  ]

  const tabs = [
    {
      id: "web",
      label: "Web",
      icon: Code,
      title: t("services.webDev.title"),
      description: t("services.webDev.description"),
      features: t("services.webDev.features"),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "vr",
      label: "VR",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z" />
          <path d="m21 3-6 6" />
          <path d="m21 21-6-6" />
          <path d="M3 3v18" />
        </svg>
      ),
      title: t("services.vr.title"),
      description: t("services.vr.description"),
      features: t("services.vr.features"),
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "ecommerce",
      label: "E-commerce",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ),
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.description"),
      features: t("services.ecommerce.features"),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      ),
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      features: t("services.marketing.features"),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "trade",
      label: "Trade",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
          <path d="M12 3v6" />
        </svg>
      ),
      title: t("services.trade.title"),
      description: t("services.trade.description"),
      features: t("services.trade.features"),
      image: "https://eratradetr.com/wp-content/uploads/2023/09/sc3rewldv0iyzcqtzdflsw.jpg",
    },
    {
      id: "software",
      label: "Software",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 12a4 4 0 0 0 0-8H6v8" />
          <path d="M6 12a4 4 0 0 0 0 8h12v-8" />
        </svg>
      ),
      title: t("services.software.title"),
      description: t("services.software.description"),
      features: t("services.software.features"),
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ]

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background to-primary/5 pt-20">
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 decorative-circle opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 decorative-circle opacity-20 animate-float"></div>
        <div className="absolute inset-0 pattern-grid opacity-[0.015]"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="text-left">
                <Badge variant="outline" className="mb-4 px-3 py-1 text-xs border-primary/30 bg-primary/5">
                  {t("home.welcome")}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="gradient-text">{t("home.title")}</span>
                  <br />
                  <span className="text-foreground">
                    {t("language") === "tr" ? "Teknoloji Çözümleri" : "Technology Solutions"}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  {t("home.heroDescription")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="corporate-button">
                    <Link href="/services">
                      {t("home.exploreServices")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">{t("home.getInTouch")}</Link>
                  </Button>
                </div>

            
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 animate-pulse-slow"></div>
                <div className="relative bg-card rounded-2xl overflow-hidden border shadow-xl">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="p-1">
                    <div className="bg-muted/50 rounded-xl p-4 font-mono text-sm">
                      <div className="flex items-center gap-1 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-2 text-xs text-muted-foreground">terminal</div>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <div>
                          <span className="text-primary">$</span> init innovative-trademark
                        </div>
                        <div>
                          <span className="text-green-500">✓</span> Initializing project...
                        </div>
                        <div>
                          <span className="text-green-500">✓</span> Setting up environment...
                        </div>
                        <div>
                          <span className="text-green-500">✓</span> Installing dependencies...
                        </div>
                        <div>
                          <span className="text-green-500">✓</span> Configuring services...
                        </div>
                        <div className="flex items-center">
                          <span className="text-primary">$</span> run deploy
                          <span className="ml-1 animate-pulse">▌</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">{t("home.trustedBy")}</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="corporate-client">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="h-20 w-20 dark:grayscale-0 grayscale hover:grayscale-0 object-contain transition-transform duration-300 hover:scale-150"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="corporate-section bg-background relative">
        <div className="absolute inset-0 pattern-dots opacity-[0.03]"></div>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="corporate-section-header">
              <Badge variant="outline" className="mb-4 px-3 py-1 text-xs border-primary/30 bg-primary/5">
                {t("home.ourFeatures")}
              </Badge>
              <h2 className="corporate-section-title">{t("home.whyChooseUs")}</h2>
              <p className="corporate-section-subtitle">{t("home.whyChooseUsDesc")}</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="corporate-card h-full">
                  <CardContent className="p-6">
                    <div className="corporate-feature">
                      <div className="corporate-feature-icon">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="corporate-feature-title">{feature.title}</h3>
                      <p className="corporate-feature-description">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="corporate-section bg-muted/30 relative">
        <div className="absolute inset-0 pattern-grid opacity-[0.02]"></div>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="corporate-section-header">
              <Badge variant="outline" className="mb-4 px-3 py-1 text-xs border-primary/30 bg-primary/5">
                {t("home.ourServices")}
              </Badge>
              <h2 className="corporate-section-title">{t("home.comprehensiveSolutions")}</h2>
              <p className="corporate-section-subtitle">{t("home.comprehensiveSolutionsDesc")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-12">
              {/* Custom Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-background/80 backdrop-blur-sm rounded-xl p-1 border shadow-sm">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                          : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                      }`}
                    >
                      <motion.div
                        animate={activeTab === tab.id ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <tab.icon className="h-4 w-4" />
                      </motion.div>
                      <span className="hidden sm:inline">{tab.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Tab Content with Animation */}
              <div className="relative min-h-[500px]">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 1.02 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1], // Daha yumuşak easing
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.5 },
                      y: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                    }}
                  >
                    <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-background to-background/50">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Content Side */}
                        <motion.div
                          className="p-8 md:p-12 flex flex-col justify-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{
                            delay: 0.1,
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                          >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                              <activeTabData.icon className="h-6 w-6 text-primary" />
                            </div>
                            <Badge variant="outline" className="px-3 py-1 text-xs">
                              {activeTabData.label}
                            </Badge>
                          </motion.div>

                          <motion.h3
                            className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.5 }}
                          >
                            {activeTabData.title}
                          </motion.h3>

                          <motion.p
                            className="text-muted-foreground mb-8 text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                          >
                            {activeTabData.description}
                          </motion.p>

                          <motion.div
                            className="space-y-4 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35, duration: 0.4 }}
                          >
                            {activeTabData.features.map((feature: string, idx: number) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.4 + idx * 0.08,
                                  duration: 0.4,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="flex items-center gap-3 group"
                              >
                                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">{feature}</span>
                              </motion.div>
                            ))}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
                          >
                            <Button asChild size="lg" className="corporate-button group">
                              <Link href="/services">
                                {t("home.learnMore")}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </Button>
                          </motion.div>
                        </motion.div>

                        {/* Image Side */}

                          <div className="relative w-full max-w-md flex items-center justify-center mx-auto">
                              <Image
                                src={activeTabData.image || "/placeholder.svg"}
                                alt={activeTabData.title}
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-md"
                              />
                           

                            {/* Floating Elements */}
                           
                          </div>
                        
                      </div>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="corporate-stat">
                  <div className="corporate-stat-value">{stat.value}</div>
                  <div className="corporate-stat-label text-center">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="corporate-section bg-background relative">
        <div className="absolute inset-0 pattern-grid opacity-[0.02]"></div>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="corporate-section-header">
              <Badge variant="outline" className="mb-4 px-3 py-1 text-xs border-primary/30 bg-primary/5">
                {t("home.testimonials")}
              </Badge>
              <h2 className="corporate-section-title">{t("home.whatClientsSay")}</h2>
              <p className="corporate-section-subtitle">{t("home.whatClientsSayDesc")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-12">
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="corporate-testimonial h-full">
                          <CardContent className="p-6">
                            <div className="mb-4">
                              <svg
                                className="w-8 h-8 text-primary/20"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                              >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                              </svg>
                            </div>
                            <p className="corporate-testimonial-quote">"{testimonial.quote}"</p>
                            <div className="corporate-testimonial-author">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.author}
                                width={48}
                                height={48}
                                className="corporate-testimonial-avatar"
                              />
                              <div className="corporate-testimonial-info">
                                <div className="corporate-testimonial-name">{testimonial.author}</div>
                                <div className="corporate-testimonial-role">{testimonial.role}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="corporate-section bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 px-3 py-1 text-xs border-white/30 bg-white/10 text-white">
                {t("home.readyToStart")}
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t("home.buildAmazing")}</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{t("home.buildAmazingDesc")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">
                    {t("home.startProject")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/projects">{t("home.viewOurWork")}</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
