"use client"

import Link from "next/link"
import { Terminal, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    [t("footer.services")]: [
      { label: t("footer.links.webDev"), href: "/services" },
      { label: t("footer.links.vrDev"), href: "/services" },
      { label: t("footer.links.ecommerce"), href: "/services" },
      { label: t("footer.links.marketing"), href: "/services" },
      { label: t("footer.links.trade"), href: "/services" },
      { label: t("footer.links.customSoftware"), href: "/services" },
    ],
    [t("footer.company")]: [
      { label: t("footer.links.aboutUs"), href: "/about" },
      { label: t("footer.links.ourTeam"), href: "/about" },
      { label: t("footer.links.careers"), href: "/contact" },
      { label: t("footer.links.contact"), href: "/contact" },
    ],
    [t("footer.resources")]: [
      { label: t("footer.links.portfolio"), href: "/projects" },
      { label: t("footer.links.caseStudies"), href: "/projects" },
      { label: t("footer.links.blog"), href: "#" },
      { label: t("footer.links.documentation"), href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@innovativetrademark.com", label: "Email" },
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-primary-foreground" />
              </div>
              Innovative Trademark
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">{t("footer.description")}</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-mono font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-mono">
            {t("footer.copyright")}&copy; {currentYear} Innovative Trademark. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
