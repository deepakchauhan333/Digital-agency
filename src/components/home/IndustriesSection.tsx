"use client";

import AnimatedSection from "@/components/motion/AnimatedSection";
import { ShoppingCart, Code2, Landmark, HeartPulse, Building2, Package, Briefcase, GraduationCap } from "lucide-react";
import styles from "./IndustriesSection.module.css";

const industries = [
  { name: "E-Commerce & D2C", icon: ShoppingCart, count: "60+", desc: "Scaling online brands from ₹0 to ₹10Cr+ revenue" },
  { name: "SaaS & Technology", icon: Code2, count: "35+", desc: "Growth systems for product-led and sales-led SaaS" },
  { name: "FinTech & BFSI", icon: Landmark, count: "20+", desc: "Compliance-first marketing for financial products" },
  { name: "HealthTech & Pharma", icon: HeartPulse, count: "15+", desc: "Patient acquisition and telehealth growth" },
  { name: "Real Estate", icon: Building2, count: "25+", desc: "Lead gen and branding for developers and brokers" },
  { name: "D2C & FMCG", icon: Package, count: "30+", desc: "Brand building and performance for consumer brands" },
  { name: "B2B Services", icon: Briefcase, count: "40+", desc: "Pipeline generation and thought leadership" },
  { name: "Education & EdTech", icon: GraduationCap, count: "18+", desc: "Student acquisition and platform growth" },
];

export default function IndustriesSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Industries We Serve</span>
          <h2 className={styles.title}>
            Growth Is Universal. <br />
            <span className="text-gradient-gold">Our Expertise Is Specific.</span>
          </h2>
          <p className={styles.subtitle}>
            We have built growth systems for 15+ industries. Each gets a strategy designed for its unique challenges.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <AnimatedSection key={ind.name} delay={i * 0.06}>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <Icon size={22} className={styles.icon} />
                    <span className={styles.count}>{ind.count} clients</span>
                  </div>
                  <h3 className={styles.cardTitle}>{ind.name}</h3>
                  <p className={styles.cardDesc}>{ind.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
