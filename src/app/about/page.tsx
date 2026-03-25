import { Metadata } from "next";
import AnimatedSection from "@/components/motion/AnimatedSection";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import Link from "next/link";
import { ArrowRight, Target, Users, BarChart3, Zap, Globe, Shield } from "lucide-react";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Growthpedia — India's Most Trusted Growth Agency",
  description: "8 departments. 80+ specialists. 200+ clients served. Learn about the team, values, and data-driven philosophy behind India's most trusted digital growth agency.",
  alternates: { canonical: "/about" },
  keywords: ["about Growthpedia", "digital marketing agency team", "growth agency India", "marketing specialists", "agency philosophy"],
  openGraph: {
    title: "About Growthpedia — India's #1 Digital Growth Agency",
    description: "8 departments. 80+ specialists. 200+ clients. Meet the team behind the growth.",
    url: "https://growthpedia.in/about",
    type: "website",
  },
};

const values = [
  { icon: Target, title: "Results Over Rhetoric", desc: "We do not sell promises. We sell outcomes. Every engagement has clear KPIs and measurable targets." },
  { icon: BarChart3, title: "Data-Driven Everything", desc: "Gut feelings do not run campaigns. Data does. Every decision we make is backed by analytics and testing." },
  { icon: Users, title: "Specialists, Not Generalists", desc: "Each department has its own team of domain experts. Your SEO is not done by your social media manager." },
  { icon: Zap, title: "Speed of Execution", desc: "Ideas are worthless without execution. We move faster than any agency you have worked with before." },
  { icon: Globe, title: "Full-Stack Growth", desc: "We do not offer one service and hope it works. We engineer full-stack growth systems that compound." },
  { icon: Shield, title: "Radical Transparency", desc: "Real-time dashboards. Weekly updates. No hiding behind vanity metrics. You always know where your money goes." },
];

const stats = [
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 50, suffix: "Cr+", prefix: "₹", label: "Revenue Generated" },
  { value: 80, suffix: "+", label: "Specialists" },
  { value: 15, suffix: "+", label: "Industries" },
  { value: 8, suffix: "", label: "Departments" },
  { value: 96, suffix: "%", label: "Client Retention" },
];

const team = [
  { name: "Founder & CEO", role: "Growth Strategy & Vision", bio: "15+ years in digital marketing. Previously led growth at 3 funded startups." },
  { name: "Head of SEO", role: "Search & Content", bio: "Ex-Google. Managed SEO for Fortune 500 brands. Expert in programmatic and enterprise SEO." },
  { name: "Head of Paid Media", role: "PPC & Performance", bio: "₹100Cr+ in managed ad spend. Google & Meta certified partner." },
  { name: "Head of Development", role: "Web & App Engineering", bio: "Full-stack architect. Built platforms serving 10M+ users." },
  { name: "Head of Design", role: "Brand & Creative", bio: "Award-winning creative director. 12+ years in brand identity and UI/UX." },
  { name: "Head of AI & Automation", role: "AI Systems", bio: "ML engineer turned agency builder. Building AI-first growth systems." },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">About Us</span>
            <h1 className={styles.heroTitle}>
              We Are Not An Agency.<br />
              <span className="text-gradient-gold">We Are a Growth Engine.</span>
            </h1>
            <p className={styles.heroSubtext}>
              Growthpedia was built on a simple frustration — agencies that talk big and deliver small.
              We decided to build the agency we always wished existed: specialists-only, data-obsessed,
              and relentlessly focused on measurable outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>
                    <AnimatedCounter end={s.value} suffix={s.suffix} prefix={s.prefix || ""} />
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Our Principles</span>
            <h2>What We Believe In</h2>
          </AnimatedSection>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 0.08}>
                  <div className={styles.valueCard}>
                    <Icon size={24} className={styles.valueIcon} />
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.teamSection}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Leadership</span>
            <h2>The Minds Behind the Machine</h2>
          </AnimatedSection>
          <div className={styles.teamGrid}>
            {team.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className={styles.teamCard}>
                  <div className={styles.teamAvatar}>{t.name.charAt(0)}</div>
                  <h3>{t.name}</h3>
                  <span className={styles.teamRole}>{t.role}</span>
                  <p>{t.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimatedSection>
            <h2>Ready to Work With a Team That Actually Delivers?</h2>
            <p style={{ color: "var(--on-surface-muted)", fontSize: "1.125rem", maxWidth: 520, margin: "1rem auto 2rem" }}>
              Book a free 30-minute consultation. No pitch. Just answers.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Let&apos;s Talk <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
