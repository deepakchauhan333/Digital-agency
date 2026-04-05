"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const services = [
  { name: "SEO", href: "/services/seo", desc: "Search Engine Optimization" },
  { name: "Paid Ads", href: "/services/paid-ads", desc: "PPC & Performance Marketing" },
  { name: "Social Media", href: "/services/social-media", desc: "Social Media Marketing" },
  { name: "Web Development", href: "/services/web-development", desc: "Websites & Platforms" },
  { name: "App Development", href: "/services/app-development", desc: "iOS, Android & Cross-Platform" },
  { name: "Graphic Design", href: "/services/graphic-design", desc: "Brand Identity & Creatives" },
  { name: "AI Automation", href: "/services/ai-automation", desc: "CRM, Chatbots & Workflows" },
  { name: "Lead Generation", href: "/services/lead-generation", desc: "B2B & Multi-Channel Leads" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/DGP logo.webp" 
              alt="DigitalGrowPedia" 
              className={styles.logoImage}
            />
          </Link>

          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <div
              className={styles.dropdown}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={styles.navLink}>
                Services <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className={styles.dropdownMenu}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className={styles.dropdownItem}>
                        <span className={styles.dropdownName}>{s.name}</span>
                        <span className={styles.dropdownDesc}>{s.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/pricing" className={styles.navLink}>Pricing</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/case-studies" className={styles.navLink}>Case Studies</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>

          <div className={styles.navActions}>
            <Link href="/contact" className="btn btn-primary">
              Get Free Audit
            </Link>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.mobileLinks}>
              <Link href="/" className={styles.mobileLink} onClick={() => setIsMobileOpen(false)}>Home</Link>
              <div className={styles.mobileServiceSection}>
                <span className={styles.mobileSectionLabel}>Services</span>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={styles.mobileServiceLink}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
              <Link href="/pricing" className={styles.mobileLink} onClick={() => setIsMobileOpen(false)}>Pricing</Link>
              <Link href="/about" className={styles.mobileLink} onClick={() => setIsMobileOpen(false)}>About</Link>
              <Link href="/case-studies" className={styles.mobileLink} onClick={() => setIsMobileOpen(false)}>Case Studies</Link>
              <Link href="/blog" className={styles.mobileLink} onClick={() => setIsMobileOpen(false)}>Blog</Link>
              <Link href="/contact" className={styles.mobileLink} onClick={() => setIsMobileOpen(false)}>Contact</Link>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "2rem", width: "100%", justifyContent: "center" }} onClick={() => setIsMobileOpen(false)}>
                Get Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
