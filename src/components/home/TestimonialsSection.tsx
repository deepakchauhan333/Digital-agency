"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/motion/AnimatedSection";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  { name: "Rajesh S.", company: "E-Commerce Brand, Delhi", quote: "DigitalGrowPedia took our organic traffic from 2K to 19K monthly visitors in 11 months. The ROI on their SEO work alone paid for a year of services.", metric: "+847%", metricLabel: "Organic Traffic" },
  { name: "Priya M.", company: "SaaS Platform, Bangalore", quote: "Their paid ads team reduced our cost per lead by 62% while tripling our pipeline. We've never had this level of visibility into performance.", metric: "3.2x", metricLabel: "Lead Volume" },
  { name: "Amit K.", company: "HVAC Company, Mumbai", quote: "From invisible on Google Maps to #1 in our city for 12 keywords. The local SEO and GMB work was exceptional.", metric: "+520%", metricLabel: "Google Calls" },
];

export default function TestimonialsSection() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Results</span>
          <h2 className={styles.title}>
            Don&apos;t Take Our Word. <br />
            <span className="text-gradient-gold">Take Their Numbers.</span>
          </h2>
        </AnimatedSection>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <div className={styles.card}>
                <div className={styles.metricBox}>
                  <span className={styles.metricValue}>{t.metric}</span>
                  <span className={styles.metricLabel}>{t.metricLabel}</span>
                </div>
                <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.company}>{t.company}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
