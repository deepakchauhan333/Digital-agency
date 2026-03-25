"use client";

import Link from "next/link";
import { ArrowUpRight, Search, Target, Share2, Globe, Smartphone, Palette, Bot, Users } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import styles from "./ServicesSection.module.css";

const services = [
  { name: "SEO", href: "/services/seo", desc: "Own page one. Own your market.", icon: Search, subCount: 12, color: "#4edea3" },
  { name: "Paid Ads", href: "/services/paid-ads", desc: "Every rupee tracked. Every click optimized.", icon: Target, subCount: 10, color: "#f7be1d" },
  { name: "Social Media", href: "/services/social-media", desc: "Build audiences that buy.", icon: Share2, subCount: 10, color: "#4edea3" },
  { name: "Web Development", href: "/services/web-development", desc: "Sites that convert, not just look good.", icon: Globe, subCount: 10, color: "#f7be1d" },
  { name: "App Development", href: "/services/app-development", desc: "Native, cross-platform, and beyond.", icon: Smartphone, subCount: 10, color: "#4edea3" },
  { name: "Graphic Design", href: "/services/graphic-design", desc: "Visual identity that demands attention.", icon: Palette, subCount: 10, color: "#f7be1d" },
  { name: "AI Automation", href: "/services/ai-automation", desc: "Automate growth. Eliminate manual work.", icon: Bot, subCount: 10, color: "#4edea3" },
  { name: "Lead Generation", href: "/services/lead-generation", desc: "Fill your pipeline. Close more deals.", icon: Users, subCount: 10, color: "#f7be1d" },
];

export default function ServicesSection() {
  return (
    <section className={`section ${styles.services}`}>
      <div className="container">
        <AnimatedSection>
          <span className="section-label">What We Build</span>
          <h2 className={styles.title}>
            8 Departments. <br />
            <span className="text-gradient-gold">80+ Specializations.</span>
          </h2>
          <p className={styles.subtitle}>
            Each service has its own dedicated team, its own process, and its own results dashboard. 
            No generalists. Only specialists.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.name} delay={i * 0.08}>
                <Link href={service.href} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap} style={{ color: service.color }}>
                      <Icon size={24} />
                    </div>
                    <ArrowUpRight size={18} className={styles.arrow} />
                  </div>
                  <h3 className={styles.cardTitle}>{service.name}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  <div className={styles.cardFoot}>
                    <span className={styles.subCount} style={{ color: service.color }}>
                      {service.subCount} sub-services
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
