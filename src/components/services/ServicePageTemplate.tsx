"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { ServiceSchemaMarkup, FAQSchemaMarkup, BreadcrumbSchemaMarkup } from "@/components/seo/SchemaMarkup";
import type { ServicePageData } from "@/types/services";
import styles from "./ServicePageTemplate.module.css";
import ServiceHeroDashboard, { SERVICE_DASHBOARDS } from "./ServiceHeroDashboard";
import SpecializedServiceVisual from "./SpecializedServiceVisuals";

const MAIN_SERVICE_SLUGS = [
  "seo", "paid-ads", "social-media", "web-development", 
  "app-development", "graphic-design", "ai-automation", "lead-generation"
];

interface Props {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: Props) {
  return (
    <div className={styles.page}>
      <ServiceSchemaMarkup
        name={data.name}
        description={data.heroSubtext}
        slug={data.slug}
        subServices={data.subServices}
      />
      <FAQSchemaMarkup faqs={data.faqs} />
      <BreadcrumbSchemaMarkup items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: data.name, url: `/services/${data.slug}` },
      ]} />
      {/* SECTION 01 — Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <motion.nav
            className={styles.breadcrumb}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{data.name}</span>
          </motion.nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <motion.h1
                className={styles.heroHeadline}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {data.heroHeadline}
              </motion.h1>
              <motion.p
                className={styles.heroSubtext}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {data.heroSubtext}
              </motion.p>
              <motion.div
                className={styles.heroActions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link href={data.primaryCTALink} className="btn btn-primary">
                  {data.primaryCTA} <ArrowRight size={18} />
                </Link>
                <Link href={data.secondaryCTALink} className="btn btn-ghost">
                  {data.secondaryCTA} <span className="arrow">→</span>
                </Link>
              </motion.div>
            </div>
            <motion.div
              className={styles.heroRight}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className={styles.heroVisual}>
                <div className={styles.visualGlow} />
                {MAIN_SERVICE_SLUGS.includes(data.slug) ? (
                  <SpecializedServiceVisual slug={data.slug} />
                ) : SERVICE_DASHBOARDS[data.slug] ? (
                  <ServiceHeroDashboard config={SERVICE_DASHBOARDS[data.slug]} />
                ) : (
                  <div className={styles.visualCard}>
                    <span className={styles.visualLabel}>{data.name}</span>
                    <p className={styles.visualDesc}>{data.heroVisualDesc}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — The Problem */}
      <section className={styles.problem}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.problemGrid}>
              <blockquote className={styles.pullQuote}>
                &ldquo;{data.pullQuote}&rdquo;
              </blockquote>
              <div className={styles.problemRight}>
                <p className={styles.problemText}>{data.problemText}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 03 — What We Do */}
      <section className={styles.whatWeDo}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">{data.sectionLabel}</span>
            <h2 className={styles.sectionTitle}>{data.sectionTitle}</h2>
          </AnimatedSection>
          <div className={styles.capabilitiesGrid}>
            {data.capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.08}>
                <div className={styles.capCard}>
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                  <p className={styles.capDesc}>{cap.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03B — Sub-Services Grid */}
      <section className={styles.subServices}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Pick Your Focus</span>
            <h2 className={styles.sectionTitle}>
              Not all {data.name} is the same.{" "}
              <span className="text-gradient-gold">Find the service that fits your exact problem.</span>
            </h2>
            <p className={styles.subServicesIntro}>
              Each specialisation below targets a specific gap. Click through to see what it covers,
              how we execute it, and whether it matches your current stage.
            </p>
          </AnimatedSection>
          <div className={styles.subGrid}>
            {data.subServices.map((sub, i) => (
              <AnimatedSection key={sub.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${data.slug}/${sub.slug}`}
                  className={styles.subCard}
                >
                  <div className={styles.subCardInner}>
                    <h3 className={styles.subName}>{sub.name}</h3>
                    <p className={styles.subDesc}>{sub.desc}</p>
                  </div>
                  <div className={styles.subCardFoot}>
                    <span className={styles.subExplore}>See how it works</span>
                    <ArrowUpRight size={14} className={styles.subArrow} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — Our Process */}
      <section className={styles.process}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Our Process</span>
            <h2 className={styles.sectionTitle}>
              How We <span className="text-gradient-emerald">Execute</span>
            </h2>
          </AnimatedSection>
          <div className={styles.processGrid}>
            {data.processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className={styles.processCard}>
                  <span className={styles.processNumber}>{step.number}</span>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — Results / Case Studies */}
      <section className={styles.results}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Results</span>
            <h2 className={styles.sectionTitle}>
              Real Numbers. <span className="text-gradient-gold">Real Clients.</span>
            </h2>
          </AnimatedSection>
          <div className={styles.caseGrid}>
            {data.caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.client} delay={i * 0.15}>
                <div className={styles.caseCard}>
                  <span className={styles.caseIndustry}>{cs.industry}</span>
                  <h3 className={styles.caseClient}>{cs.client}</h3>
                  <div className={styles.caseResult}>{cs.result}</div>
                  <ul className={styles.caseMetrics}>
                    {cs.metrics.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                  <span className={styles.caseTime}>{cs.timeframe}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — Who This Is For */}
      <section className={styles.whoFor}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Who This Is For</span>
            <h2 className={styles.sectionTitle}>
              Is This <span className="text-gradient-emerald">You?</span>
            </h2>
          </AnimatedSection>
          <div className={styles.profileGrid}>
            {data.clientProfiles.map((p, i) => (
              <AnimatedSection key={p.label} delay={i * 0.1}>
                <div className={styles.profileCard}>
                  <span className={styles.profileLabel}>{p.label}</span>
                  <p className={styles.profileDesc}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — Tools & Platforms */}
      <section className={styles.tools}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Our Stack</span>
            <h2 className={styles.sectionTitle}>Tools & Platforms We Use</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className={styles.toolStrip}>
              {data.tools.map((tool) => (
                <span key={tool} className="chip">{tool}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 08 — FAQ */}
      <FAQSection faqs={data.faqs} />

      {/* SECTION 09 — Related Services */}
      <section className={styles.related}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Related Services</span>
            <h2 className={styles.sectionTitle}>
              Grow Even <span className="text-gradient-gold">Faster</span>
            </h2>
          </AnimatedSection>
          <div className={styles.relatedGrid}>
            {data.relatedServices.map((rs, i) => (
              <AnimatedSection key={rs.href} delay={i * 0.1}>
                <Link href={rs.href} className={styles.relatedCard}>
                  <h3 className={styles.relatedName}>{rs.name}</h3>
                  <p className={styles.relatedDesc}>{rs.desc}</p>
                  <span className={styles.relatedLink}>
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — CTA Block */}
      <section className={styles.ctaBlock}>
        <div className={styles.ctaGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <AnimatedSection>
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaHeadline}>{data.ctaHeadline}</h2>
              <p className={styles.ctaSubtext}>{data.ctaSubtext}</p>
              <div className={styles.ctaActions}>
                <Link href={data.primaryCTALink} className="btn btn-primary">
                  {data.primaryCTA} <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies" className="btn btn-ghost">
                  See more results <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

/* FAQ Accordion Sub-component */
function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faq}>
      <div className="container">
        <AnimatedSection>
          <span className="section-label">FAQ</span>
          <h2 className={styles.sectionTitle}>
            Questions? <span className="text-gradient-emerald">Answers.</span>
          </h2>
        </AnimatedSection>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <AnimatedSection key={faq.question} delay={i * 0.05}>
              <div className={`${styles.faqItem} ${openIndex === i ? styles.faqOpen : ""}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span>{faq.question}</span>
                  {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className={styles.faqAnswer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
