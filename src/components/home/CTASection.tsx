"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.glow} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div className={styles.inner}>
            <span className="section-label" style={{ color: "var(--primary)" }}>Ready to Grow?</span>
            <h2 className={styles.title}>
              Your Competitors Are Already<br />
              Working With Someone.<br />
              <span className="text-gradient-gold">The Question Is — Who Are You Working With?</span>
            </h2>
            <p className={styles.subtitle}>
              Book a free 30-minute growth audit. We will show you exactly where you are 
              losing revenue and how we would fix it — whether you hire us or not.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-primary">
                Grow Your Business Now <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies" className="btn btn-ghost">
                Or see our results first <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
