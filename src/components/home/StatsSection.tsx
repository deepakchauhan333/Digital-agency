"use client";

import AnimatedSection from "@/components/motion/AnimatedSection";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import styles from "./StatsSection.module.css";

const stats = [
  { value: 200, suffix: "+", label: "Clients Served", icon: "🏢" },
  { value: 50, suffix: "Cr+", prefix: "₹", label: "Revenue Generated", icon: "📈" },
  { value: 847, suffix: "%", label: "Avg. Traffic Growth", icon: "🚀" },
  { value: 15, suffix: "+", label: "Industries Covered", icon: "🌐" },
];

export default function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className={styles.card}>
                <span className={styles.icon}>{stat.icon}</span>
                <span className={styles.value}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
                </span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
