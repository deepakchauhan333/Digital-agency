import type { ServicePageData } from "@/types/services";

export const webDevData: ServicePageData = {
  slug: "web-development", name: "Web Development", tagline: "Websites & Platforms",
  heroHeadline: "Sites That Convert,\nNot Just Look Good.",
  heroSubtext: "Custom websites, e-commerce platforms, web apps, CMS builds — we engineer digital experiences that drive business outcomes, not just impress designers.",
  heroVisualDesc: "Responsive website mockup showing conversion-optimized layout with analytics overlay.",
  primaryCTA: "Get Free Web Audit", secondaryCTA: "See Portfolio", primaryCTALink: "/contact", secondaryCTALink: "/case-studies",
  pullQuote: "Your website is not a brochure. It is your hardest working employee — if it is built right.",
  problemText: "Most websites are built to look good at launch and then forgotten. No conversion tracking, no speed optimization, no content updates. A website without a growth strategy is just an expensive business card nobody reads.",
  sectionLabel: "THE WEB DEVELOPMENT DEPARTMENT", sectionTitle: "Websites Engineered for Growth.",
  capabilities: [
    { title: "Custom Website Development", desc: "Next.js, React, WordPress — bespoke sites built for speed, SEO, and conversions." },
    { title: "E-Commerce Development", desc: "Shopify, WooCommerce, custom stores — platforms that sell while you sleep." },
    { title: "Web Application Development", desc: "SaaS dashboards, portals, internal tools — complex functionality, simple UX." },
    { title: "CMS & Content Platforms", desc: "WordPress, Webflow, headless CMS — easy-to-manage content systems." },
    { title: "Performance & CRO", desc: "Core Web Vitals, A/B testing, conversion rate optimization — data-driven improvements." },
  ],
  subServices: [
    { name: "Custom Website Design & Development", slug: "custom-website", desc: "Bespoke websites built from scratch with unique designs." },
    { name: "E-Commerce Development", slug: "ecommerce-development", desc: "Shopify, WooCommerce, custom stores with payment integration." },
    { name: "WordPress Development", slug: "wordpress-development", desc: "Custom themes, plugins, and enterprise WordPress solutions." },
    { name: "Landing Page Development", slug: "landing-pages", desc: "High-converting landing pages for campaigns and launches." },
    { name: "Web App Development", slug: "web-app", desc: "Full-stack web applications with React/Next.js." },
    { name: "Website Redesign", slug: "website-redesign", desc: "Modernize outdated websites without losing SEO equity." },
    { name: "CRO & A/B Testing", slug: "cro-testing", desc: "Conversion rate optimization with data-driven experiments." },
    { name: "Website Maintenance", slug: "website-maintenance", desc: "Ongoing updates, security, backups, and performance monitoring." },
    { name: "API Integration", slug: "api-integration", desc: "Connect your website to CRMs, payment gateways, and tools." },
    { name: "Website Speed Optimization", slug: "speed-optimization", desc: "Core Web Vitals, caching, CDN — sub-2-second load times." },
  ],
  processSteps: [
    { number: "01", title: "Discovery & Wireframing", desc: "Requirements, user flows, wireframes, and conversion architecture." },
    { number: "02", title: "Design & Prototyping", desc: "High-fidelity mockups, interactive prototypes, design system creation." },
    { number: "03", title: "Development & Testing", desc: "Clean code, responsive build, QA testing, performance optimization." },
    { number: "04", title: "Launch & Iterate", desc: "Deployment, analytics setup, CRO monitoring, continuous improvement." },
  ],
  caseStudies: [
    { industry: "SAAS", client: "Fintech Startup", result: "+180% Conversion Rate", metrics: ["Page speed 4.1s → 0.9s", "Bounce rate reduced 67%", "MQL volume tripled"], timeframe: "10 weeks" },
  ],
  clientProfiles: [
    { label: "Profile 1", desc: "Your website is 3+ years old, loads slowly, and does not generate leads or sales the way it should." },
    { label: "Profile 2", desc: "You are launching a new business and need a website that positions you as credible and converts visitors from day one." },
    { label: "Profile 3", desc: "You need an e-commerce platform that can handle 10,000+ products and scale with your growth." },
  ],
  tools: ["Next.js", "React", "WordPress", "Shopify", "Webflow", "Figma", "Vercel", "AWS", "Google Analytics 4", "Hotjar", "VWO"],
  faqs: [
    { question: "How long does a website project take?", answer: "Landing pages: 1-2 weeks. Corporate sites: 4-8 weeks. E-commerce: 6-12 weeks. Web apps: 8-16 weeks." },
    { question: "Do you design and develop or just develop?", answer: "Both. We have in-house designers and developers working collaboratively from day one." },
    { question: "Will I be able to update content myself?", answer: "Yes. Every site comes with a user-friendly CMS and training documentation so your team can manage content independently." },
    { question: "Do you provide hosting?", answer: "We recommend the best hosting for your specific needs (Vercel, AWS, managed WordPress) and handle the full setup." },
  ],
  relatedServices: [
    { name: "SEO", href: "/services/seo", desc: "SEO-optimized development from the ground up." },
    { name: "App Development", href: "/services/app-development", desc: "Extend your web platform to mobile." },
    { name: "Graphic Design", href: "/services/graphic-design", desc: "Visual identity for your digital presence." },
  ],
  ctaHeadline: "Your Website Should Be Your Best Salesperson. Is It?",
  ctaSubtext: "Get a free website audit — we will show you exactly what is costing you conversions and how to fix it.",
};
