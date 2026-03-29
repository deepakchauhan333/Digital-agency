"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import styles from "./StatsSection.module.css";

/* ─── animated counter hook ─── */
function useCounter(end: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, started]);
  return count;
}

/* ─── individual stat card ─── */
function StatCard({
  icon,
  end,
  prefix = "",
  suffix = "",
  label,
  sub,
  delay,
  started,
}: {
  icon: React.ReactNode;
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
  delay: number;
  started: boolean;
}) {
  const [localStarted, setLocalStarted] = useState(false);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setLocalStarted(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);
  const count = useCounter(end, 1800, localStarted);

  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>{icon}</div>
      <div className={styles.valueRow}>
        <span className={styles.value}>
          {prefix}{count.toLocaleString("en-IN")}{suffix}
        </span>
      </div>
      <span className={styles.label}>{label}</span>
      <span className={styles.sub}>{sub}</span>
      <div className={styles.bar} />
    </div>
  );
}

/* ─── SVG icons ─── */
const IconClients = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconRevenue = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const IconTraffic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const IconIndustries = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const STATS = [
  {
    icon: <IconClients />,
    end: 200,
    prefix: "",
    suffix: "+",
    label: "Clients Served",
    sub: "Across India since 2019",
    delay: 0,
  },
  {
    icon: <IconRevenue />,
    end: 50,
    prefix: "₹",
    suffix: " Cr+",
    label: "Revenue Generated",
    sub: "Measured across all client accounts",
    delay: 150,
  },
  {
    icon: <IconTraffic />,
    end: 847,
    prefix: "",
    suffix: "%",
    label: "Avg. Traffic Growth",
    sub: "12-month YoY across SEO campaigns",
    delay: 300,
  },
  {
    icon: <IconIndustries />,
    end: 15,
    prefix: "",
    suffix: "+",
    label: "Industries Covered",
    sub: "From e-commerce to healthcare",
    delay: 450,
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.stats} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>BY THE NUMBERS</p>
          <h2 className={styles.title}>Results that speak louder than claims</h2>
          <p className={styles.desc}>
            We don&apos;t make promises — we show you proof. Every number below is tracked, verified, and earned across real campaigns.
          </p>
        </div>
        <div className={styles.grid}>
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} started={inView} />
          ))}
        </div>
        <div className={styles.disclaimer}>
          * Numbers as of Q1 2026 · Tracked across active &amp; completed client accounts
        </div>
      </div>
    </section>
  );
}
