import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Pricing & Service Packages 2026 | DigitalGrowPedia',
  description: 'View transparent pricing for SEO, Web Design, Paid Ads, Social Media, App Development, AI Automation, and B2B Lead Generation in India. No hidden costs.',
};

const pricingCategories = [
  {
    title: "Search Engine Optimization (SEO)",
    href: "/pricing/seo",
    desc: "Boost your organic visibility with Indian SEO experts. We execute deep technical audits, high-authority backlink building, and local Google My Business optimization to secure top keyword rankings and drive targeted organic search traffic to your domain.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <polyline points="11 8 11 11 14 14"></polyline>
      </svg>
    )
  },
  {
    title: "Paid Ads & PPC Setup",
    href: "/pricing/paid-ads",
    desc: "Maximize ROI with data-driven PPC campaigns. Our performance marketing team manages Google Ads, Facebook advertising, and Meta Ads. We optimize cost-per-acquisition (CPA), scale lead generation, and use advanced retargeting pixels for profitable revenue growth.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: "Web Design & Development",
    href: "/pricing/web-design",
    desc: "Develop lightning-fast, high-converting Next.js websites. We specialize in custom UI/UX design, mobile-responsive Shopify E-commerce stores, and high-performance React web applications optimized for Core Web Vitals, speed, and seamless user experiences.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    title: "Social Media Marketing",
    href: "/pricing/social-media",
    desc: "Build massive brand authority across Instagram, YouTube, and LinkedIn. We create viral short-form reels, manage influencer marketing, and deploy strategic social media management content to capture audience attention and convert followers into paying customers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    title: "App Development",
    href: "/pricing/app-development",
    desc: "Launch secure, crash-free mobile applications on Android and iOS. Using cross-platform React Native architecture, we build scalable E-commerce apps, MVP prototypes, and enterprise custom software fully integrated with robust backends and Razorpay payment gateways.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    title: "Graphic Design & Branding",
    href: "/pricing/graphic-design",
    desc: "Elevate your visual identity with premium corporate branding. We deliver stunning vector logos, print-ready packaging designs, engaging social media creatives, and investor pitch decks that establish immediate market trust and professional agency-level aesthetics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    )
  },
  {
    title: "AI & Workflow Automation",
    href: "/pricing/ai-automation",
    desc: "Scale your operations while reducing manual staffing costs. We deploy intelligent ChatGPT WhatsApp bots, seamless Zapier workflow integrations, and automated Zoho CRM syncing to instantly capture leads and nurture B2B relationships 24/7.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
        <line x1="8" y1="16" x2="8" y2="16"></line>
        <line x1="16" y1="16" x2="16" y2="16"></line>
      </svg>
    )
  },
  {
    title: "B2B Lead Generation",
    href: "/pricing/lead-generation",
    desc: "Flood your sales pipeline with verified B2B appointments. Our outbound systems combine cold email infrastructure, LinkedIn automation scraping, and professional telecom dialing scripts to deliver exclusive, high-intent prospects directly to your calendar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  }
];

export default function PricingHub() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className="section-label">Pricing Architecture</div>
            <h1 className="mb-4">Transparent Pricing for<br />Every Growth Stage</h1>
            <p style={{ maxWidth: '800px', fontSize: '18px', color: 'var(--on-surface-variant)', margin: '0 auto', textAlign: 'center' }}>
              We believe in honest, upfront pricing. Whether you need a massive custom E-commerce application 
              or a targeted local SEO retainer, discover exactly what you get without hidden fees or surprise upcharges.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles.mainPricingGrid}>
          {pricingCategories.map((category) => (
            <Link href={category.href} key={category.href} className={styles.pricingServiceCard}>
              <div className={styles.cardIcon}>
                {category.icon}
              </div>
              <h2 className={styles.cardTitle}>{category.title}</h2>
              <p className={styles.cardDesc}>{category.desc}</p>
              
              <div className={styles.cardAction}>
                View Plans & Prices
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section style={{ backgroundColor: 'var(--surface)', padding: '80px 0', borderTop: '1px solid var(--outline-ghost)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="mb-4">Need a Custom Enterprise Bundle?</h2>
          <p className="mx-auto mb-6" style={{ maxWidth: '600px', fontSize: '18px', color: 'var(--on-surface-variant)' }}>
            If you need 3 or more services combined (e.g. Website + SEO + Automation), book a free audit with us. We offer heavy retainer discounts for bundled services.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
            Book Full Marketing Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
