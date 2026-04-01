import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import styles from "./case-studies.module.css";

export const metadata: Metadata = {
  title: "Case Studies — Real Results from Real Clients",
  description: "See how we've helped 200+ clients grow. SEO, Paid Ads, Social Media, Web Development — real numbers, real timelines, real outcomes. +847% traffic. 8.7x ROAS.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/case-studies" },
  keywords: [
    "digital marketing case studies", "SEO results", "PPC case study",
    "social media marketing results", "web development portfolio",
    "agency case studies India", "growth marketing results",
  ],
  openGraph: {
    title: "Case Studies — Real Results from Real Clients | DigitalGrowPedia",
    description: "200+ clients. Real numbers. +847% traffic. 8.7x ROAS. See the proof.",
    url: "https://www.digitalgrowpedia.com/case-studies",
    type: "website",
  },
};

const cases = [
  { industry: "E-Commerce", client: "D2C Skincare Brand", service: "SEO", result: "+847% Organic Traffic", metrics: ["#1 rankings for 34 keywords", "₹2.1Cr revenue from SEO", "DA 12 → 47"], timeframe: "11 months", color: "var(--secondary)" },
  { industry: "SaaS", client: "HR Tech Platform", service: "Paid Ads", result: "-62% Cost Per Lead", metrics: ["3.2x more leads", "ROAS 1.8x → 5.4x", "Pipeline ₹4.2Cr"], timeframe: "6 months", color: "var(--primary)" },
  { industry: "D2C Brand", client: "Organic Skincare", service: "Social Media", result: "+340% Engagement", metrics: ["5K → 78K followers", "₹18L/month social revenue", "Influencer ROI 6.2x"], timeframe: "8 months", color: "var(--secondary)" },
  { industry: "Fintech", client: "Payment Gateway", service: "Off-Page SEO", result: "DA 18 → 52", metrics: ["127 editorial backlinks", "Organic traffic 5x", "Top 3 for 67 keywords"], timeframe: "9 months", color: "var(--primary)" },
  { industry: "Healthcare", client: "Dental Clinic, Pune", service: "Local SEO", result: "#1 Map Pack", metrics: ["520% more Google calls", "Walk-ins 3x", "5-star reviews doubled"], timeframe: "4 months", color: "var(--secondary)" },
  { industry: "Fintech", client: "Neobank", service: "Digital PR", result: "47 Media Placements", metrics: ["Forbes, Mint, Economic Times", "Brand search 3x", "DA 60+ links acquired"], timeframe: "6 months", color: "var(--primary)" },
  { industry: "Real Estate", client: "Property Developer", service: "AI Automation", result: "40 hrs/week saved", metrics: ["Lead response 4hrs → 30sec", "CRM adoption 100%", "Conversion +35%"], timeframe: "8 weeks", color: "var(--secondary)" },
  { industry: "IT Services", client: "Cloud Consulting", service: "Lead Generation", result: "47 meetings/month", metrics: ["Email reply rate 12%", "LinkedIn acceptance 34%", "Pipeline ₹2.8Cr/quarter"], timeframe: "3 months", color: "var(--primary)" },
  { industry: "SaaS", client: "Fintech Startup", service: "Web Development", result: "+180% Conversion", metrics: ["Speed 4.1s → 0.9s", "Bounce rate -67%", "MQLs tripled"], timeframe: "10 weeks", color: "var(--secondary)" },
  { industry: "HealthTech", client: "Telemedicine App", service: "App Development", result: "50K+ Downloads", metrics: ["4.8★ App Store rating", "12K daily active users", "42% retention rate"], timeframe: "14 weeks", color: "var(--primary)" },
  { industry: "Fintech", client: "Payment App", service: "Graphic Design", result: "Complete Rebrand", metrics: ["Brand recognition +280%", "Trust score 4.2 → 4.8", "Downloads 2.5x post-rebrand"], timeframe: "6 weeks", color: "var(--secondary)" },
  { industry: "D2C Fashion", client: "Fashion Brand", service: "Paid Ads", result: "8.7x ROAS", metrics: ["₹12L/month ad revenue", "CPA ₹890 → ₹340", "40% repeat rate"], timeframe: "4 months", color: "var(--primary)" },
];

export default function CaseStudiesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Case Studies</span>
            <h1 className={styles.heroTitle}>
              Real Numbers. <br />
              <span className="text-gradient-gold">Real Clients. Real Growth.</span>
            </h1>
            <p className={styles.heroSub}>200+ clients. 8 departments. Every result independently verifiable.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className={styles.statsRow}>
              <div className={styles.stat}><span className={styles.statNum}><AnimatedCounter end={200} suffix="+" /></span><span>Clients</span></div>
              <div className={styles.stat}><span className={styles.statNum}><AnimatedCounter end={50} prefix="₹" suffix="Cr+" /></span><span>Revenue Generated</span></div>
              <div className={styles.stat}><span className={styles.statNum}><AnimatedCounter end={96} suffix="%" /></span><span>Retention</span></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.grid}>
        <div className="container">
          <div className={styles.caseGrid}>
            {cases.map((c, i) => (
              <AnimatedSection key={c.client} delay={i * 0.05}>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.industry}>{c.industry}</span>
                    <span className={styles.service} style={{ color: c.color }}>{c.service}</span>
                  </div>
                  <h3 className={styles.client}>{c.client}</h3>
                  <div className={styles.result} style={{ color: c.color }}>{c.result}</div>
                  <ul className={styles.metrics}>
                    {c.metrics.map(m => <li key={m}>{m}</li>)}
                  </ul>
                  <span className={styles.time}>{c.timeframe}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimatedSection>
            <h2>Want Results Like These?</h2>
            <p style={{ color: "var(--on-surface-muted)", maxWidth: 500, margin: "1rem auto 2rem", fontSize: "1.1rem" }}>
              Book a free growth consultation. We will show you exactly what is possible for your business.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get Your Free Audit <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
