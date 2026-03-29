"use client";

import Link from "next/link";
import { ArrowUpRight, Search, Target, Share2, Globe, Smartphone, Palette, Bot, Users } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import styles from "./ServicesSection.module.css";

const services = [
  {
    name: "SEO",
    href: "/services/seo",
    icon: Search,
    accent: "#4edea3",
    metric: "+340% avg. organic traffic",
    desc: "Your competitors rank. Your customers can't find you. We close that gap — technically, structurally, and for the long term.",
    proof: "40+ websites · 12 specialisations",
    peek: ["Technical SEO", "Local SEO", "E-commerce SEO"],
  },
  {
    name: "Paid Ads",
    href: "/services/paid-ads",
    icon: Target,
    accent: "#f7be1d",
    metric: "3.8x avg. ROAS",
    desc: "Running ads without a tracking system is guesswork. We build campaigns where every rupee has a measurable job.",
    proof: "₹2Cr+ managed monthly · 10 specialisations",
    peek: ["Google Ads", "Meta Ads", "YouTube Ads"],
  },
  {
    name: "Social Media",
    href: "/services/social-media",
    icon: Share2,
    accent: "#4edea3",
    metric: "4.2x avg. reach growth",
    desc: "Followers alone don't build a business. We create content and community that moves people from scrolling to buying.",
    proof: "60+ brand accounts · 10 specialisations",
    peek: ["Content Strategy", "Reels Production", "Community Management"],
  },
  {
    name: "Web Development",
    href: "/services/web-development",
    icon: Globe,
    accent: "#f7be1d",
    metric: "Avg. 2.1s load time",
    desc: "A website that looks good but doesn't load fast, rank, or convert is a liability. We build sites that earn their keep.",
    proof: "150+ sites delivered · 10 specialisations",
    peek: ["Landing Pages", "E-commerce Stores", "CMS Websites"],
  },
  {
    name: "App Development",
    href: "/services/app-development",
    icon: Smartphone,
    accent: "#4edea3",
    metric: "Avg. 4.6★ store rating",
    desc: "An app is only as good as its retention. We build native and cross-platform apps that people keep using after the first week.",
    proof: "25+ apps launched · 10 specialisations",
    peek: ["iOS & Android", "Flutter Apps", "MVP Development"],
  },
  {
    name: "Graphic Design",
    href: "/services/graphic-design",
    icon: Palette,
    accent: "#f7be1d",
    metric: "48hr avg. turnaround",
    desc: "You have under a second to make a credible first impression. If your visual identity isn't doing that job, it's working against you.",
    proof: "500+ brand assets delivered · 10 specialisations",
    peek: ["Logo & Branding", "Social Creatives", "Packaging Design"],
  },
  {
    name: "AI Automation",
    href: "/services/ai-automation",
    icon: Bot,
    accent: "#4edea3",
    metric: "Avg. 12hr/week saved per team",
    desc: "Most teams spend a third of their week on repeatable tasks. We build systems that handle the repetition — so your team handles growth.",
    proof: "Deployed across 30+ businesses · 10 specialisations",
    peek: ["CRM Automation", "AI Chatbots", "Workflow Systems"],
  },
  {
    name: "Lead Generation",
    href: "/services/lead-generation",
    icon: Users,
    accent: "#f7be1d",
    metric: "3.2x avg. lead volume",
    desc: "Salespeople who spend half their day finding leads aren't selling. We keep the pipeline full so your team can focus on closing.",
    proof: "B2B & D2C sectors · 10 specialisations",
    peek: ["Cold Outreach", "LinkedIn Lead Gen", "Funnel Building"],
  },
];

export default function ServicesSection() {
  return (
    <section className={`section ${styles.services}`}>
      <div className="container">
        <AnimatedSection>
          <span className="section-label">What We Do</span>
          <h2 className={styles.title}>
            8 departments. <span className="text-gradient-gold">80+ specialisations.</span>
          </h2>
          <p className={styles.subtitle}>
            Each department has its own team, its own process, and its own results framework.
            No generalists. Pick the one that fits your exact problem.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.name} delay={i * 0.07}>
                <Link
                  href={service.href}
                  className={styles.card}
                  style={{ "--accent": service.accent } as React.CSSProperties}
                >
                  {/* accent border rendered via CSS ::before + --accent var */}
                  <div className={styles.cardHead}>
                    <div className={styles.iconWrap} style={{ color: service.accent }}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className={styles.metricBadge}>{service.metric}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{service.name}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>

                  <div className={styles.cardFoot}>
                    <span className={styles.proof}>{service.proof}</span>
                    <div className={styles.peekRow}>
                      {service.peek.map((p) => (
                        <span key={p} className={styles.peekChip}>{p}</span>
                      ))}
                      <ArrowUpRight size={13} className={styles.peekArrow} />
                    </div>
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
