import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing Insights, SEO Tips & Growth Strategies",
  description: "Actionable digital marketing insights from Growthpedia's team of 80+ specialists. SEO guides, paid ads strategies, social media tips, web development best practices.",
  alternates: { canonical: "/blog" },
  keywords: ["digital marketing blog", "SEO tips", "PPC strategies", "social media marketing tips", "web development blog", "growth hacking", "marketing automation"],
};

const posts = [
  { title: "The Complete Guide to SEO in 2026: What Actually Works", excerpt: "Forget outdated tactics. Here's what's actually moving the needle in search — from entity SEO to programmatic content at scale.", category: "SEO", readTime: "12 min", date: "Mar 20, 2026", slug: "#" },
  { title: "How We Generated 847% Organic Growth for a D2C Brand", excerpt: "A deep-dive case study into the exact SEO strategy, content architecture, and link building approach behind our most successful campaign.", category: "Case Study", readTime: "15 min", date: "Mar 18, 2026", slug: "#" },
  { title: "Google Ads in 2026: Performance Max vs Manual Campaigns", excerpt: "When to use PMax, when to go manual, and how to structure your Google Ads account for maximum ROAS.", category: "Paid Ads", readTime: "10 min", date: "Mar 15, 2026", slug: "#" },
  { title: "Why Your Social Media Isn't Working (And How to Fix It)", excerpt: "Content calendars, engagement strategies, and algorithm hacks that actually drive business results from social.", category: "Social Media", readTime: "8 min", date: "Mar 12, 2026", slug: "#" },
  { title: "Next.js vs WordPress in 2026: Which Is Right for You?", excerpt: "A technical comparison for business owners — speed, SEO, scalability, cost, and maintenance considerations.", category: "Web Dev", readTime: "11 min", date: "Mar 10, 2026", slug: "#" },
  { title: "AI Automation for Agencies: Save 40 Hours Per Week", excerpt: "Practical AI automation workflows using ChatGPT, Zapier, and Make that we use internally to scale operations.", category: "AI", readTime: "9 min", date: "Mar 8, 2026", slug: "#" },
  { title: "Cold Email in 2026: Deliverability, Personalization, Scale", excerpt: "The exact cold email infrastructure and sequences generating 12% reply rates for our B2B clients.", category: "Lead Gen", readTime: "13 min", date: "Mar 5, 2026", slug: "#" },
  { title: "Brand Identity Design Process: From Brief to Brand Book", excerpt: "Our step-by-step process for creating brand identities that stand the test of time — with real examples.", category: "Design", readTime: "7 min", date: "Mar 3, 2026", slug: "#" },
  { title: "Technical SEO Checklist: 50 Points Every Website Needs", excerpt: "The exact 50-point technical SEO checklist we use for every client audit. Download the template.", category: "SEO", readTime: "14 min", date: "Mar 1, 2026", slug: "#" },
];

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Blog</span>
            <h1>Growth Insights from the <span className="text-gradient-gold">Trenches.</span></h1>
            <p className={styles.heroSub}>Actionable strategies from 80+ specialists. No fluff. Just what works.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.grid}>
        <div className="container">
          <div className={styles.postGrid}>
            {posts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.05}>
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.cardBottom}>
                    <span className={styles.readTime}><Clock size={14} /> {post.readTime} read</span>
                    <Link href={post.slug} className={styles.readMore}>Read Article <ArrowRight size={14} /></Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
