"use client";

import AnimatedSection from "@/components/motion/AnimatedSection";
import styles from "./ProcessSection.module.css";

const steps = [
  { number: "01", title: "Discovery & Audit", desc: "We tear apart your current setup. 150-point audit. Competitor analysis. Opportunity mapping. Nothing is assumed — everything is measured." },
  { number: "02", title: "Strategy & Roadmap", desc: "A 90-day battle plan with clear priorities, traffic projections, and measurable milestones. You know what happens and when." },
  { number: "03", title: "Build & Execute", desc: "Technical foundations, content systems, campaigns — all deployed simultaneously. No waiting 6 months for the first move." },
  { number: "04", title: "Optimize & Scale", desc: "Weekly tracking. Monthly reporting. Quarterly strategy reviews. We compound what works and kill what doesn't." },
];

export default function ProcessSection() {
  return (
    <section className={`section--alt ${styles.process}`}>
      <div className="container">
        <AnimatedSection>
          <span className="section-label">How We Work</span>
          <h2 className={styles.title}>
            Precision Execution. <br />
            <span className="text-gradient-emerald">No Guesswork.</span>
          </h2>
        </AnimatedSection>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className={styles.card}>
                <span className={styles.number}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
