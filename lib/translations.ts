export const translations = {
  tr: {
    language: "tr",
    // Navigation
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      projects: "Projeler",
      about: "Hakkımızda",
      contact: "İletişim",
    },
    // Home Page
    home: {
      welcome: "// Innovative Trademark'a Hoş Geldiniz",
      title: "Innovative Trademark",
      heroDescription: "Web uygulamaları, e-ticaret, VR ve özel yazılım çözümleriyle işletmenizi dijital dünyada öne çıkarıyoruz.",
      subtitle: `/* 
 * Kod ile dijital deneyimler yaratıyoruz
 * Web Uygulamaları, VR, E-ticaret ve Özel Yazılım çözümlerinde uzmanız
 * İnovasyon ile uygulamanın buluştuğu yer
 */`,
      exploreServices: "Hizmetleri Keşfet",
      getInTouch: "İletişime Geç",
      cleanCode: "Temiz Kod",
      cleanCodeDesc: "// Sürdürülebilir, ölçeklenebilir çözümler yazıyoruz",
      fastDelivery: "Hızlı Teslimat",
      fastDeliveryDesc: "// Hızlı iterasyonlarla çevik geliştirme",
      teamFocus: "Takım Odaklı",
      teamFocusDesc: "// Her projede işbirlikçi yaklaşım",
      qualityAssurance: "Kalite Güvencesi",
      qualityAssuranceDesc: "// Güvenilir çözümler için titiz testler",
      dataDriven: "Veri Odaklı",
      dataDrivenDesc: "// Analitik tabanlı karar verme",
      globalReach: "Küresel Erişim",
      globalReachDesc: "// Uluslararası pazarlar için çözümler",
      readyToStart: "// Projenizi başlatmaya hazır mısınız?",
      buildAmazing: "Birlikte Harika Şeyler Yapalım",
      buildAmazingDesc:
        "Konseptten dağıtıma kadar, etki yaratan dijital çözümler oluşturmanızda size yardımcı olacağız.",
      startProject: "Projenizi Başlatın",
      trustedBy: "MÜŞTERİLERİMİZ",
      ourFeatures: "ÖZELLİKLERİMİZ",
      whyChooseUs: "Neden Bizi Seçmelisiniz?",
      whyChooseUsDesc:
        "Yenilikçi çözümler, güvenilir hizmet ve uzman ekibimizle işinizi bir sonraki seviyeye taşıyoruz.",
      ourServices: "HİZMETLERİMİZ",
      comprehensiveSolutions: "Kapsamlı Çözümler",
      comprehensiveSolutionsDesc: "İşletmenizin ihtiyaçlarına özel tasarlanmış teknoloji çözümleri sunuyoruz.",
      learnMore: "Daha Fazla Bilgi",
      projectsCompleted: "Tamamlanan Proje",
      clientSatisfaction: "Müşteri Memnuniyeti",
      yearsExperience: "Yıllık Deneyim",
      supportAvailable: "Destek Hizmeti",
      testimonials: "MÜŞTERİ YORUMLARI",
      whatClientsSay: "Müşterilerimiz Ne Diyor?",
      whatClientsSayDesc: "Başarılı projelerimiz ve memnun müşterilerimizin deneyimleri.",
      viewOurWork: "Projelerimizi İnceleyin",
      yearsOf: "yıllık",
      experience: "deneyim",
    },
    // Services Page
    services: {
      title: "// Hizmetlerimiz",
      heading: "Neler Yapıyoruz",
      description:
        "Web uygulamalarından sanal gerçeklik deneyimlerine, e-ticaretten pazarlama çözümlerine kadar işinizi ileriye taşıyan son teknoloji çözümler sunuyoruz.",
      webDev: {
        title: "Web Uygulama Geliştirme",
        description: "Modern framework'ler ve en iyi uygulamalarla full-stack web uygulamaları.",
        features: ["React/Next.js", "Node.js/Python", "Bulut Dağıtım", "API Entegrasyonu"],
        code: `function WebApp() {
  return (
    <ModernSolution 
      scalable={true}
      responsive={true}
      performance="optimized"
    />
  );
}`,
      },
      vr: {
        title: "Sanal Gerçeklik Geliştirme",
        description: "Eğitim, eğlence ve iş uygulamaları için sürükleyici VR deneyimleri.",
        features: ["Unity/Unreal Engine", "Çapraz Platform VR", "3D Modelleme", "Etkileşimli Tasarım"],
        code: `class VRExperience {
  constructor() {
    this.immersion = "maksimum";
    this.platforms = ["Oculus", "HTC", "PSVR"];
    this.engagement = "olağanüstü";
  }
}`,
      },
      ecommerce: {
        title: "E-ticaret Çözümleri",
        description: "Kapsamlı e-ticaret platformları, ödeme sistemleri ve envanter yönetimi.",
        features: ["Online Mağaza", "Ödeme Entegrasyonu", "Envanter Yönetimi", "Mobil Uyumlu"],
        code: `const ecommerceSolution = {
  platform: "modern",
  payment: "secure",
  inventory: "automated",
  mobile: "responsive"
};`,
      },
      marketing: {
        title: "Dijital Pazarlama & Reklamcılık",
        description: "SEO, sosyal medya pazarlama, Google Ads ve dijital reklam kampanyaları.",
        features: ["SEO Optimizasyonu", "Sosyal Medya", "Google Ads", "İçerik Pazarlama"],
        code: `function DigitalMarketing() {
  return {
    seo: "optimized",
    socialMedia: "engaging",
    ads: "targeted",
    roi: "maximized"
  };
}`,
      },
      trade: {
        title: "İthalat & İhracat Danışmanlığı",
        description: "Uluslararası ticaret süreçleri, gümrük işlemleri ve lojistik çözümleri.",
        features: ["Gümrük İşlemleri", "Lojistik Planlama", "Ticaret Danışmanlığı", "Belge Yönetimi"],
        code: `class InternationalTrade {
  constructor() {
    this.customs = "compliant";
    this.logistics = "optimized";
    this.documentation = "complete";
  }
}`,
      },
      software: {
        title: "Özel Yazılım Çözümleri",
        description: "İş ihtiyaçlarınıza özel tasarlanmış yazılım çözümleri.",
        features: ["Masaüstü Uygulamaları", "Mobil Uygulamalar", "Sistem Entegrasyonu", "Legacy Modernizasyon"],
        code: `const customSolution = {
  requirements: userNeeds,
  architecture: "scalable", 
  delivery: "on-time",
  support: "ongoing"
};`,
      },
      getStarted: "Başlayın",
      readyToDiscuss: "// Projenizi konuşmaya hazır mısınız?",
      talkAboutNeeds: "İhtiyaçlarınızı Konuşalım",
      talkAboutNeedsDesc:
        "Her proje benzersizdir. Gereksinimlerinizi anlayıp işiniz için en iyi çözümü önermek isteriz.",
      scheduleConsultation: "Danışmanlık Randevusu Alın",
    },
    // Projects Page
    projects: {
      title: "// Çalışmalarımız",
      heading: "Proje Portföyü",
      description:
        "Son projelerimizi keşfedin ve işletmelerin fikirlerini dijital gerçekliğe dönüştürmelerine nasıl yardımcı ettiğimizi görün.",
      filters: {
        all: "Tüm Projeler",
        web: "Web Uygulamaları",
        vr: "VR Projeleri",
        ecommerce: "E-ticaret",
        marketing: "Pazarlama",
        software: "Yazılım",
      },
      demo: "Demo",
      code: "Kod",
      noProjects: "// Bu filtre için proje bulunamadı",
    },
    // About Page
    about: {
      title: "// Hakkımızda",
      heading: "Hikayemiz",
      story: `/*
 * 2020 yılında basit bir misyonla kurulduk:
 * İnovatif fikirleri güçlü dijital çözümlere dönüştürmek
 * 
 * Teknolojinin hayatı daha iyi hale getirmesi gerektiğine inanan
 * tutkulu geliştiriciler, tasarımcılar ve hayalperestlerden oluşan bir takımız.
 */`,
      mission: "Misyonumuz",
      missionDesc:
        "Hayal gücü ile uygulama arasındaki köprüyü kurmak, sadece bugünün ihtiyaçlarını karşılamakla kalmayıp yarının olanaklarını da öngören dijital deneyimler yaratmak.",
      meetTeam: "// Takımla Tanışın",
      peopleTitle: "Kodun Arkasındaki İnsanlar",
      team: [
        {
          name: "Hüseyin Kocatürk",
          role: "Full-Stack Geliştirici",
          bio: "Modern web teknolojilerinde 3+ yıl deneyimli full-stack geliştirici.",
          img: "/hus.png",
        },
        {
          name: "Abdullah Aldemir",
          role: "VR Uzmanı",
          bio: "Sürükleyici dijital deneyimler yaratma konusunda tutkulu VR/AR geliştiricisi.",
          img: "/abdullah.png",
        },
        {
          name: "Emre Aygür",
          role: "DevOps Mühendisi",
          bio: "CI/CD boru hatları ve bulut altyapısına odaklanan DevOps mühendisi.",
          img: "/emre.png",
        },
    
      ],
      journey: "// Yolculuğumuz",
      milestones: "Şirket Kilometre Taşları",
      timeline: [
        { year: "2020", event: "Şirket Kuruldu", description: "İnovasyon vizyonuyla başladık" },
        { year: "2021", event: "İlk VR Projesi", description: "İlk VR eğitim simülatörümüzü başlattık" },
        { year: "2022", event: "Takım Genişlemesi", description: "10+ yetenekli geliştiriciye ulaştık" },
        { year: "2023", event: "50+ Proje", description: "Çeşitli sektörlere çözümler sunduk" },
        { year: "2024", event: "AI Entegrasyonu", description: "Geliştirme sürecimize AI'ı dahil ettik" },
      ],
      values: "// Değerlerimiz",
      valuesTitle: "Bizi Yönlendiren Değerler",
      valuesList: [
        {
          title: "İnovasyon Öncelikli",
          description: "Karmaşık problemleri çözmek için son teknoloji teknolojileri benimseriz.",
        },
        {
          title: "İşbirlikçi Ruh",
          description: "En iyi çözümlerin çeşitli bakış açılarından geldiğine inanırız.",
        },
        {
          title: "Kalite Odaklı",
          description: "Her kod satırında mükemmellik sunma konusunda kararlıyız.",
        },
      ],
    },
    // Contact Page
    contact: {
      title: "// İletişime Geçin",
      heading: "Bir Konuşma Başlatalım",
      subtitle: `/*
 * Fikirlerinizi hayata geçirmeye hazır mısınız?
 * Projeniz hakkında duymak ve hedeflerinize nasıl
 * ulaşabileceğinizi konuşmak isteriz.
 */`,
      sendMessage: "Bize Mesaj Gönderin",
      form: {
        name: "// İsim",
        namePlaceholder: "Adınız Soyadınız",
        email: "// E-posta",
        emailPlaceholder: "eposta@sirket.com",
        company: "// Şirket (Opsiyonel)",
        companyPlaceholder: "Şirket adınız",
        message: "// Proje Detayları",
        messagePlaceholder: "Projeniz, zaman çizelgeniz ve gereksinimleriniz hakkında bize bilgi verin...",
        send: "Mesaj Gönder",
      },
      info: {
        title: "İletişim Bilgileri",
        email: "E-posta",
        phone: "Telefon",
        location: "Konum",
      },
      social: {
        title: "Bizi Takip Edin",
        description: "// Güncellemeler ve sahne arkası içerikler için bizi takip edin",
      },
      response: {
        title: "Hızlı Yanıt",
        description:
          "Genellikle tüm sorulara 24 saat içinde yanıt veriyoruz. Acil durumlar için bizi doğrudan arayabilirsiniz.",
        hours: "// Pazartesi - Cuma, 09:00 - 18:00 arası müsaitiz",
      },
      map: {
        title: "// Etkileşimli harita burada entegre edilecek",
        location: "İstanbul, Türkiye",
      },
    },
    // Footer
    footer: {
      description:
        "İnovatif web geliştirme, VR deneyimleri, e-ticaret çözümleri ve özel yazılımlar aracılığıyla fikirleri güçlü dijital çözümlere dönüştürüyoruz.",
      services: "Hizmetler",
      company: "Şirket",
      resources: "Kaynaklar",
      links: {
        webDev: "Web Geliştirme",
        vrDev: "VR Geliştirme",
        ecommerce: "E-ticaret",
        marketing: "Dijital Pazarlama",
        trade: "İthalat/İhracat",
        customSoftware: "Özel Yazılım",
        consulting: "Danışmanlık",
        aboutUs: "Hakkımızda",
        ourTeam: "Takımımız",
        careers: "Kariyer",
        contact: "İletişim",
        portfolio: "Portföy",
        caseStudies: "Vaka Çalışmaları",
        blog: "Blog",
        documentation: "Dokümantasyon",
      },
      copyright: "// ",
      rights: "Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Şartları",
    },
    // Theme
    theme: {
      light: "Açık",
      dark: "Koyu",
      system: "Sistem",
    },
  },
  en: {
    language: "en",
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    // Home Page
    home: {
      welcome: "// Welcome to Innovative Trademark",
      title: "Innovative Trademark",
      heroDescription: "Elevating your business in the digital world with web applications, e-commerce, VR, and custom software solutions.",
      subtitle: `/* 
 * Crafting digital experiences through code
 * Specializing in Web Apps, VR, E-commerce and Custom Software
 * Where innovation meets implementation
 */`,
      exploreServices: "Explore Services",
      getInTouch: "Get in Touch",
      cleanCode: "Clean Code",
      cleanCodeDesc: "// Writing maintainable, scalable solutions",
      fastDelivery: "Fast Delivery",
      fastDeliveryDesc: "// Agile development with rapid iterations",
      teamFocus: "Team Focus",
      teamFocusDesc: "// Collaborative approach to every project",
      qualityAssurance: "Quality Assurance",
      qualityAssuranceDesc: "// Rigorous testing for reliable solutions",
      dataDriven: "Data-Driven",
      dataDrivenDesc: "// Analytics-based decision making",
      globalReach: "Global Reach",
      globalReachDesc: "// Solutions for international markets",
      readyToStart: "// Ready to start your project?",
      buildAmazing: "Let's Build Something Amazing",
      buildAmazingDesc: "From concept to deployment, we'll help you create digital solutions that make an impact.",
      startProject: "Start Your Project",
      trustedBy: "CLIENTS",
      ourFeatures: "OUR FEATURES",
      whyChooseUs: "Why Choose Us?",
      whyChooseUsDesc:
        "We take your business to the next level with innovative solutions, reliable service, and our expert team.",
      ourServices: "OUR SERVICES",
      comprehensiveSolutions: "Comprehensive Solutions",
      comprehensiveSolutionsDesc: "We offer technology solutions tailored to your business needs.",
      learnMore: "Learn More",
      projectsCompleted: "Projects Completed",
      clientSatisfaction: "Client Satisfaction",
      yearsExperience: "Years Experience",
      supportAvailable: "Support Available",
      testimonials: "TESTIMONIALS",
      whatClientsSay: "What Our Clients Say",
      whatClientsSayDesc: "Successful projects and experiences of our satisfied customers.",
      viewOurWork: "View Our Work",
      yearsOf: "years",
      experience: "of experience",
    },
    // Services Page
    services: {
      title: "// Our Services",
      heading: "What We Build",
      description:
        "From web applications to virtual reality experiences, e-commerce to marketing solutions, we deliver cutting-edge solutions that drive your business forward.",
      webDev: {
        title: "Web Application Development",
        description: "Full-stack web applications built with modern frameworks and best practices.",
        features: ["React/Next.js", "Node.js/Python", "Cloud Deployment", "API Integration"],
        code: `function WebApp() {
  return (
    <ModernSolution 
      scalable={true}
      responsive={true}
      performance="optimized"
    />
  );
}`,
      },
      vr: {
        title: "Virtual Reality Development",
        description: "Immersive VR experiences for training, entertainment, and business applications.",
        features: ["Unity/Unreal Engine", "Cross-platform VR", "3D Modeling", "Interactive Design"],
        code: `class VRExperience {
  constructor() {
    this.immersion = "maximum";
    this.platforms = ["Oculus", "HTC", "PSVR"];
    this.engagement = "extraordinary";
  }
}`,
      },
      ecommerce: {
        title: "E-commerce Solutions",
        description: "Comprehensive e-commerce platforms, payment systems, and inventory management.",
        features: ["Online Store", "Payment Integration", "Inventory Management", "Mobile Responsive"],
        code: `const ecommerceSolution = {
  platform: "modern",
  payment: "secure", 
  inventory: "automated",
  mobile: "responsive"
};`,
      },
      marketing: {
        title: "Digital Marketing & Advertising",
        description: "SEO, social media marketing, Google Ads, and digital advertising campaigns.",
        features: ["SEO Optimization", "Social Media", "Google Ads", "Content Marketing"],
        code: `function DigitalMarketing() {
  return {
    seo: "optimized",
    socialMedia: "engaging",
    ads: "targeted",
    roi: "maximized"
  };
}`,
      },
      trade: {
        title: "Import & Export Consulting",
        description: "International trade processes, customs procedures, and logistics solutions.",
        features: ["Customs Procedures", "Logistics Planning", "Trade Consulting", "Document Management"],
        code: `class InternationalTrade {
  constructor() {
    this.customs = "compliant";
    this.logistics = "optimized";
    this.documentation = "complete";
  }
}`,
      },
      software: {
        title: "Custom Software Solutions",
        description: "Tailored software solutions designed specifically for your business needs.",
        features: ["Desktop Applications", "Mobile Apps", "System Integration", "Legacy Modernization"],
        code: `const customSolution = {
  requirements: userNeeds,
  architecture: "scalable",
  delivery: "on-time", 
  support: "ongoing"
};`,
      },
      getStarted: "Get Started",
      readyToDiscuss: "// Ready to discuss your project?",
      talkAboutNeeds: "Let's Talk About Your Needs",
      talkAboutNeedsDesc:
        "Every project is unique. We'd love to understand your requirements and propose the best solution for your business.",
      scheduleConsultation: "Schedule a Consultation",
    },
    // Projects Page
    projects: {
      title: "// Our Work",
      heading: "Project Portfolio",
      description:
        "Explore our recent projects and see how we've helped businesses transform their ideas into digital reality.",
      filters: {
        all: "All Projects",
        web: "Web Apps",
        vr: "VR Projects",
        ecommerce: "E-commerce",
        marketing: "Marketing",
        software: "Software",
      },
      demo: "Demo",
      code: "Code",
      noProjects: "// No projects found for this filter",
    },
    // About Page
    about: {
      title: "// About Us",
      heading: "Our Story",
      story: `/*
 * Founded in 2020 with a simple mission:
 * Transform innovative ideas into powerful digital solutions
 * 
 * We're a team of passionate developers, designers, and dreamers
 * who believe technology should make life better, not more complicated.
 */`,
      mission: "Our Mission",
      missionDesc:
        "To bridge the gap between imagination and implementation, creating digital experiences that not only meet today's needs but anticipate tomorrow's possibilities.",
      meetTeam: "// Meet the Team",
      peopleTitle: "The People Behind the Code",
      team: [
        {
          name: "Hüseyin Kocatürk",
          role: "Lead Developer",
          bio: "Full-stack developer with 3+ years of experience in modern web technologies.",
          img: "/hus.png",
        },
        {
          name: "Abdullah Aldemir",
          role: "VR Specialist",
          bio: "VR/AR developer passionate about creating immersive digital experiences.",
          img: "/abdullah.png",
        },
        {
          name: "Emre Aygür",
          role: "DevOps Engineer",
          bio: "DevOps engineer focused on CI/CD pipelines and cloud infrastructure.",
          img: "/emre.png",
        },
     
      ],
      journey: "// Our Journey",
      milestones: "Company Milestones",
      timeline: [
        { year: "2020", event: "Company Founded", description: "Started with a vision to innovate" },
        { year: "2021", event: "First VR Project", description: "Launched our first VR training simulator" },
        { year: "2022", event: "Team Expansion", description: "Grew to 10+ talented developers" },
        { year: "2023", event: "50+ Projects", description: "Delivered solutions for diverse industries" },
        { year: "2024", event: "AI Integration", description: "Incorporated AI into our development process" },
      ],
      values: "// Our Values",
      valuesTitle: "What Drives Us",
      valuesList: [
        {
          title: "Innovation First",
          description: "We embrace cutting-edge technologies to solve complex problems.",
        },
        {
          title: "Collaborative Spirit",
          description: "We believe the best solutions come from diverse perspectives.",
        },
        {
          title: "Quality Focused",
          description: "We're committed to delivering excellence in every line of code.",
        },
      ],
    },
    // Contact Page
    contact: {
      title: "// Get in Touch",
      heading: "Let's Start a Conversation",
      subtitle: `/*
 * Ready to bring your ideas to life?
 * We'd love to hear about your project and discuss
 * how we can help you achieve your goals.
 */`,
      sendMessage: "Send us a Message",
      form: {
        name: "// Name",
        namePlaceholder: "Your full name",
        email: "// Email",
        emailPlaceholder: "your.email@company.com",
        company: "// Company (Optional)",
        companyPlaceholder: "Your company name",
        message: "// Project Details",
        messagePlaceholder: "Tell us about your project, timeline, and requirements...",
        send: "Send Message",
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      social: {
        title: "Follow Us",
        description: "// Follow us for updates and behind-the-scenes content",
      },
      response: {
        title: "Quick Response",
        description:
          "We typically respond to all inquiries within 24 hours. For urgent matters, feel free to call us directly.",
        hours: "// Available Monday - Friday, 9 AM - 6 PM PST",
      },
      map: {
        title: "// Interactive map would be integrated here",
        location: "Kocaeli, Turkey",
      },
    },
    // Footer
    footer: {
      description:
        "Transforming ideas into powerful digital solutions through innovative web development, VR experiences, e-commerce solutions, and custom software.",
      services: "Services",
      company: "Company",
      resources: "Resources",
      links: {
        webDev: "Web Development",
        vrDev: "VR Development",
        ecommerce: "E-commerce",
        marketing: "Digital Marketing",
        trade: "Import/Export",
        customSoftware: "Custom Software",
        consulting: "Consulting",
        aboutUs: "About Us",
        ourTeam: "Our Team",
        careers: "Careers",
        contact: "Contact",
        portfolio: "Portfolio",
        caseStudies: "Case Studies",
        blog: "Blog",
        documentation: "Documentation",
      },
      copyright: "// ",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    // Theme
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.tr
