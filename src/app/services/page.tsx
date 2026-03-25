import { Metadata } from "next";
import Link from "next/link";
import { Search, Target, Share2, Globe, Smartphone, Palette, Bot, Users, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";

const services = [
  { name: "SEO", href: "/services/seo", desc: "Search Engine Optimization — own page one, own your market.", icon: Search, subCount: 12, color: "#4edea3" },
  { name: "Paid Ads", href: "/services/paid-ads", desc: "PPC & Performance Marketing — every rupee tracked, every click optimized.", icon: Target, subCount: 10, color: "#f7be1d" },
  { name: "Social Media", href: "/services/social-media", desc: "Social Media Marketing — build audiences that buy.", icon: Share2, subCount: 10, color: "#4edea3" },
  { name: "Web Development", href: "/services/web-development", desc: "Websites & Platforms — sites that convert, not just look good.", icon: Globe, subCount: 10, color: "#f7be1d" },
  { name: "App Development", href: "/services/app-development", desc: "iOS, Android & Cross-Platform — native, cross-platform, and beyond.", icon: Smartphone, subCount: 10, color: "#4edea3" },
  { name: "Graphic Design", href: "/services/graphic-design", desc: "Brand Identity & Creatives — visual identity that demands attention.", icon: Palette, subCount: 10, color: "#f7be1d" },
  { name: "AI Automation", href: "/services/ai-automation", desc: "CRM, Chatbots & Workflows — automate growth, eliminate manual work.", icon: Bot, subCount: 10, color: "#4edea3" },
  { name: "Lead Generation", href: "/services/lead-generation", desc: "B2B & Multi-Channel Leads — fill your pipeline, close more deals.", icon: Users, subCount: 10, color: "#f7be1d" },
];

export const metadata: Metadata = {
  title: "Our Services — 8 Departments, 80+ Specializations",
  description: "SEO, Paid Ads, Social Media, Web Development, App Development, Graphic Design, AI Automation, and Lead Generation — all under one roof. 200+ clients served.",
  alternates: { canonical: "/services" },
  keywords: [
    "digital marketing services", "SEO services", "PPC management",
    "social media marketing", "web development", "app development",
    "graphic design", "AI automation", "lead generation", "Growthpedia services",
  ],
  openGraph: {
    title: "All Services — 8 Departments, 80+ Specializations | Growthpedia",
    description: "Full-stack digital growth. SEO, Paid Ads, Social Media, Dev, Design, AI, Lead Gen.",
    url: "https://growthpedia.in/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Our Departments</span>
            <h1 style={{ marginBottom: "1rem" }}>
              8 Departments. <br />
              <span className="text-gradient-gold">80+ Specializations.</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--on-surface-muted)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "3rem" }}>
              Each service has its own dedicated team, its own process, and its own results dashboard. No generalists. Only specialists.
            </p>
          </AnimatedSection>

          <div className="grid grid-2" style={{ gap: "1.5rem" }}>
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.name} delay={i * 0.08}>
                  <Link
                    href={service.href}
                    style={{
                      display: "flex", gap: "1.5rem", padding: "2rem", background: "var(--surface-container-high)",
                      borderRadius: "var(--radius-xl)", textDecoration: "none", transition: "all 0.3s", alignItems: "flex-start",
                    }}
                    className="card"
                  >
                    <div style={{ width: 56, height: 56, borderRadius: "var(--radius-lg)", background: "var(--surface-container)", display: "flex", alignItems: "center", justifyContent: "center", color: service.color, flexShrink: 0 }}>
                      <Icon size={28} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ fontSize: "1.375rem", fontWeight: 700 }}>{service.name}</h2>
                        <ArrowUpRight size={18} style={{ color: "var(--on-surface-muted)" }} />
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "var(--on-surface-muted)", lineHeight: 1.6, marginTop: "0.5rem" }}>{service.desc}</p>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: service.color, marginTop: "0.75rem", display: "block" }}>{service.subCount} sub-services →</span>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
