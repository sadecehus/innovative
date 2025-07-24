"use client"

import { Globe, Headphones, Settings, ArrowRight, ShoppingCart, Megaphone, Truck } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { CodeBlock } from "@/components/code-block"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      icon: Globe,
      title: t("services.webDev.title"),
      description: t("services.webDev.description"),
      features: t("services.webDev.features"),
      codeExample: t("services.webDev.code"),
    },
    {
      icon: Headphones,
      title: t("services.vr.title"),
      description: t("services.vr.description"),
      features: t("services.vr.features"),
      codeExample: t("services.vr.code"),
    },
    {
      icon: ShoppingCart,
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.description"),
      features: t("services.ecommerce.features"),
      codeExample: t("services.ecommerce.code"),
    },
    {
      icon: Megaphone,
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      features: t("services.marketing.features"),
      codeExample: t("services.marketing.code"),
    },
    {
      icon: Truck,
      title: t("services.trade.title"),
      description: t("services.trade.description"),
      features: t("services.trade.features"),
      codeExample: t("services.trade.code"),
    },
    {
      icon: Settings,
      title: t("services.software.title"),
      description: t("services.software.description"),
      features: t("services.software.features"),
      codeExample: t("services.software.code"),
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4 page-content">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-muted-foreground mb-4">{t("services.title")}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("services.heading")}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("services.description")}</p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-mono text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 font-mono text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button asChild className="group/btn">
                      <Link href="/contact">
                        {t("services.getStarted")}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <div className="bg-muted/30 p-8 flex items-center">
                    <CodeBlock className="w-full">{service.codeExample}</CodeBlock>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-20 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
            <div className="font-mono text-sm text-muted-foreground mb-4">{t("services.readyToDiscuss")}</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("services.talkAboutNeeds")}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("services.talkAboutNeedsDesc")}</p>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                {t("services.scheduleConsultation")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
