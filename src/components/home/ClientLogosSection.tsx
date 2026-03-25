"use client";

import { motion } from "framer-motion";
import styles from "./ClientLogosSection.module.css";

const logos = [
  "Flipkart", "Razorpay", "Swiggy", "PhonePe", "Zerodha",
  "Ola", "CRED", "Nykaa", "BoAt", "Mamaearth",
  "Lenskart", "Urban Company", "CarDekho", "PolicyBazaar", "Meesho",
];

export default function ClientLogosSection() {
  return (
    <section className={styles.section} aria-label="Trusted by leading brands">
      <div className="container">
        <p className={styles.label}>Trusted by 200+ brands across India</p>
      </div>
      <div className={styles.ticker}>
        <motion.div
          className={styles.track}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((name, i) => (
            <span key={`${name}-${i}`} className={styles.logo} aria-label={`${name} logo`}>
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
