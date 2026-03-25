import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.text}>
          The page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            Go Home <ArrowRight size={18} />
          </Link>
          <Link href="/services" className="btn btn-ghost">
            Browse Services <span className="arrow">→</span>
          </Link>
        </div>
        <div className={styles.links}>
          <span className={styles.linksLabel}>Popular pages:</span>
          <Link href="/services/seo">SEO Services</Link>
          <Link href="/services/paid-ads">Paid Ads</Link>
          <Link href="/services/web-development">Web Development</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
