"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, BarChart3 } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Animated Background Grid */}
      <div className={styles.bgGrid}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.gridLine}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 3, delay: i * 0.15, repeat: Infinity, repeatDelay: 5 }}
          />
        ))}
      </div>

      {/* Floating Orbs - wrapped so overflow doesn't affect page scroll */}
      <div className={styles.orbsWrapper}>
        <motion.div
          className={styles.orbGold}
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.orbEmerald}
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Zap size={14} />
            <span>200+ Clients. 8 Departments. Real Results.</span>
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We Don&apos;t Do <br />
            Marketing. <br />
            <span className="text-gradient-gold">We Engineer Growth.</span>
          </motion.h1>

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            8 specialized departments. 80+ services. One obsession — turning your business
            into an unstoppable growth machine that compounds month after month.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/contact" className="btn btn-primary">
              Get Free Growth Audit <ArrowRight size={18} />
            </Link>
            <Link href="/case-studies" className="btn btn-ghost">
              See Our Results <span className="arrow">→</span>
            </Link>
          </motion.div>
          {/* Risk-reversal — removes the fear of commitment */}
          <motion.p
            className={styles.riskReversal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <span className={styles.stars}>★★★★★</span> Rated by 200+ clients · No contracts · Free audit
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            className={styles.trust}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>200+</span>
              <span className={styles.trustLabel}>Clients Served</span>
              <span className={styles.trustProof}>Since 2019 · Across India</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>₹50Cr+</span>
              <span className={styles.trustLabel}>Revenue Generated</span>
              <span className={styles.trustProof}>Tracked across accounts</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>15+</span>
              <span className={styles.trustLabel}>Industries</span>
              <span className={styles.trustProof}>E-comm to healthcare</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Animated Dashboard Mockup */}
          <div className={styles.dashboard}>
            <div className={styles.dashHeader}>
              <div className={styles.dashDot} style={{ background: "#ff5f57" }} />
              <div className={styles.dashDot} style={{ background: "#febc2e" }} />
              <div className={styles.dashDot} style={{ background: "#28c840" }} />
              <span className={styles.dashTitle}>Growth Dashboard</span>
            </div>
            <div className={styles.dashBody}>
              {/* Animated Graph */}
              <div className={styles.graph}>
                <svg viewBox="0 0 400 200" className={styles.graphSvg}>
                  <defs>
                    <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4edea3" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#4edea3" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,180 C50,170 80,160 120,140 C160,120 180,100 220,70 C260,40 300,30 350,15 L400,5"
                    fill="none"
                    stroke="#4edea3"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                  />
                  <motion.path
                    d="M0,180 C50,170 80,160 120,140 C160,120 180,100 220,70 C260,40 300,30 350,15 L400,5 L400,200 L0,200Z"
                    fill="url(#graphGrad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                  />
                </svg>
              </div>

              {/* Floating Metric Cards */}
              <motion.div
                className={styles.metricCard}
                style={{ top: "15%", right: "5%" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2 }}
              >
                <TrendingUp size={16} color="#4edea3" />
                <span className={styles.metricValue}>+847%</span>
                <span className={styles.metricLabel}>Organic Traffic</span>
              </motion.div>

              <motion.div
                className={styles.metricCard}
                style={{ top: "45%", left: "5%" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.3 }}
              >
                <BarChart3 size={16} color="#f7be1d" />
                <span className={styles.metricValue}>#1</span>
                <span className={styles.metricLabel}>34 Keywords</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
