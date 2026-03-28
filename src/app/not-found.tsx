import { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";
import { ArrowRight, Search, Home, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found — All India Marketing Solution",
  description: "The page you are looking for doesn't exist. Explore our services or contact us for help.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.text}>
          The page you are looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            <Home size={18} /> Go Home
          </Link>
          <Link href="/services" className="btn btn-ghost">
            <Search size={16} /> Browse Services <span className="arrow">→</span>
          </Link>
        </div>

        {/* Internal links — distributes link equity & helps crawlers */}
        <div className={styles.links}>
          <span className={styles.linksLabel}>Popular pages:</span>
          <Link href="/services/seo">SEO Services</Link>
          <Link href="/services/paid-ads">Paid Ads</Link>
          <Link href="/services/web-development">Web Development</Link>
          <Link href="/services/social-media">Social Media</Link>
          <Link href="/services/ai-automation">AI Automation</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/case-studies">Case Studies</Link>
        </div>
      </div>
    </div>
  );
}
