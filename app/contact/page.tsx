"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AnimatedSection } from "@/components/animated-section"
import { CodeBlock } from "@/components/code-block"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: "hello@innovativetrademark.com",
      href: "mailto:hello@innovativetrademark.com",
    },
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: "+90 (212) 123-4567",
      href: "tel:+902121234567",
    },
    {
      icon: MapPin,
      label: t("contact.info.location"),
      value: language === "tr" ? "Kocaeli, Türkiye" : "Kocaeli, Turkey",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <div className="min-h-screen py-20 px-4 page-content">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-muted-foreground mb-4">{t("contact.title")}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("contact.heading")}</h1>
            <div className="max-w-3xl mx-auto">
              <CodeBlock>{t("contact.subtitle")}</CodeBlock>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-mono text-xl">{t("contact.sendMessage")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-sm text-muted-foreground">
                      {t("contact.form.name")}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.form.namePlaceholder")}
                      required
                      className="font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-sm text-muted-foreground">
                      {t("contact.form.email")}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                      className="font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-mono text-sm text-muted-foreground">
                      {t("contact.form.company")}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t("contact.form.companyPlaceholder")}
                      className="font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-sm text-muted-foreground">
                      {t("contact.form.message")}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={6}
                      required
                      className="font-mono resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full group">
                    <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {t("contact.form.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-8">
            <AnimatedSection delay={0.3}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">{t("contact.info.title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-mono text-sm text-muted-foreground">{info.label}</p>
                        <a href={info.href} className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">{t("contact.social.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mt-4 font-mono">{t("contact.social.description")}</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-mono text-lg font-semibold mb-2">{t("contact.response.title")}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{t("contact.response.description")}</p>
                  <div className="font-mono text-xs text-muted-foreground">{t("contact.response.hours")}</div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Map Section */}
        <AnimatedSection delay={0.6}>
          <div className="mt-20">
            <Card className="overflow-hidden">
              <div className="h-80 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781.9652636645598!2d29.955808897168914!3d40.76378134769987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f000ea44a99%3A0xb448015c176cedd9!2sInnovative%20Trademark%20-%20RBG%20%C4%B0%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1721302800000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Innovative Trademark Office Location"
                  className="rounded-lg"
                />
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
