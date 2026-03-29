"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { FAQSchemaMarkup, BreadcrumbSchemaMarkup } from "@/components/seo/SchemaMarkup";
import type { SubServicePageData } from "@/types/services";
import styles from "./SubServicePageTemplate.module.css";
import ServiceHeroDashboard, { SUB_SERVICE_DASHBOARDS } from "./ServiceHeroDashboard";

/* ── Per-service trust metrics shown under the hero ── */
const SERVICE_TRUST: Record<string, { stat: string; meta: string }[]> = {
  "seo":              [{ stat: "+340%", meta: "Avg. organic traffic growth" }, { stat: "40+",  meta: "Websites optimised" }, { stat: "6 mo.", meta: "Avg. time to visible results" }],
  "paid-ads":         [{ stat: "3.8x",  meta: "Avg. ROAS across campaigns" },   { stat: "₹2Cr+",meta: "Managed monthly" },         { stat: "10",    meta: "Specialisations" }],
  "social-media":     [{ stat: "4.2x",  meta: "Avg. reach growth" },             { stat: "60+",  meta: "Accounts managed" },         { stat: "10",    meta: "Specialisations" }],
  "web-development":  [{ stat: "2.1s",  meta: "Avg. page load time" },           { stat: "150+", meta: "Sites delivered" },           { stat: "10",    meta: "Specialisations" }],
  "app-development":  [{ stat: "4.6★",  meta: "Avg. app store rating" },         { stat: "25+",  meta: "Apps launched" },             { stat: "10",    meta: "Specialisations" }],
  "graphic-design":   [{ stat: "48hr",  meta: "Avg. turnaround time" },          { stat: "500+", meta: "Brand assets created" },      { stat: "10",    meta: "Specialisations" }],
  "ai-automation":    [{ stat: "12hr",  meta: "Avg. saved per team/week" },      { stat: "30+",  meta: "Businesses automated" },      { stat: "10",    meta: "Specialisations" }],
  "lead-generation":  [{ stat: "3.2x",  meta: "Avg. lead volume increase" },     { stat: "B2B & D2C", meta: "Sectors covered" },      { stat: "10",    meta: "Specialisations" }],
};

interface Props {
  data: SubServicePageData;
}

export default function SubServicePageTemplate({ data }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.page}>
      <FAQSchemaMarkup faqs={data.faqs} />
      <BreadcrumbSchemaMarkup items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: data.parentName, url: `/services/${data.parentSlug}` },
        { name: data.name, url: `/services/${data.parentSlug}/${data.slug}` },
      ]} />
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.nav className={styles.breadcrumb} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <Link href="/">Home</Link><span>/</span>
            <Link href="/services">Services</Link><span>/</span>
            <Link href={`/services/${data.parentSlug}`}>{data.parentName}</Link><span>/</span>
            <span className={styles.crumbCurrent}>{data.name}</span>
          </motion.nav>

          <div className={styles.heroGrid}>
            <motion.div className={styles.heroLeft} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <span className={styles.badge}>★ Trusted by 200+ clients · {data.parentName}</span>
              <h1 className={styles.headline}>{data.heroHeadline}</h1>
              <p className={styles.subtext}>{data.heroSubtext}</p>

              {/* Trust bar — specific credibility signals */}
              {SERVICE_TRUST[data.parentSlug] && (
                <div className={styles.trustBar}>
                  {SERVICE_TRUST[data.parentSlug].map((t, i) => (
                    <div key={t.stat} style={{ display: "contents" }}>
                      {i > 0 && <div className={styles.trustDivider} />}
                      <div className={styles.trustItem}>
                        <span className={styles.trustStat}>{t.stat}</span>
                        <span className={styles.trustMeta}>{t.meta}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Link href={data.primaryCTALink} className="btn btn-primary">
                {data.primaryCTA} <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div 
              className={styles.heroRight}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {SUB_SERVICE_DASHBOARDS[data.slug] && (
                <ServiceHeroDashboard config={SUB_SERVICE_DASHBOARDS[data.slug]} />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className={styles.section} style={{ background: "var(--surface-container-low)" }}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.splitGrid}>
              <blockquote className={styles.pullQuote}>&ldquo;{data.pullQuote}&rdquo;</blockquote>
              <p className={styles.bodyText}>{data.problemText}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do */}
      <section className={styles.section}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">{data.name}</span>
            <h2>{data.whatWeDoTitle}</h2>
          </AnimatedSection>
          <div className={styles.itemGrid}>
            {data.whatWeDoItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className={styles.itemCard}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.section} style={{ background: "var(--surface-container-low)" }}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Our Process</span>
            <h2>How We Execute {data.name}</h2>
          </AnimatedSection>
          <div className={styles.processGrid}>
            {data.processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className={styles.stepCard}>
                  <span className={styles.stepNum}>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className={styles.toolsSection}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Tools We Use</span>
            <div className={styles.chipStrip}>
              {data.tools.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">FAQ</span>
            <h2>Common Questions</h2>
          </AnimatedSection>
          <div className={styles.faqList}>
            {data.faqs.map((faq, i) => (
              <div key={faq.question} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}>
                <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.question}</span>
                  {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div className={styles.faqA} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Sub-Services */}
      <section className={styles.section} style={{ background: "var(--surface-container-low)" }}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Related Services</span>
            <h2>Explore More {data.parentName} Services</h2>
          </AnimatedSection>
          <div className={styles.relGrid}>
            {data.relatedSubServices.map((r, i) => (
              <AnimatedSection key={r.href} delay={i * 0.1}>
                <Link href={r.href} className={styles.relCard}>
                  <h3>{r.name}</h3>
                  <p>{r.desc}</p>
                  <span className={styles.relArrow}>Learn more <ArrowRight size={14} /></span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <AnimatedSection>
            <div className={styles.ctaInner}>
              <h2>{data.ctaHeadline}</h2>
              <p>{data.ctaSubtext}</p>
              <Link href={data.primaryCTALink} className="btn btn-primary">
                {data.primaryCTA} <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
