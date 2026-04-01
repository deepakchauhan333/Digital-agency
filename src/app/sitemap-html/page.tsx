import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap — DigitalGrowPedia",
  description: "Browse all pages on DigitalGrowPedia. Find our services, case studies, blog posts, and company information.",
  alternates: { canonical: "/sitemap-html" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "All Services", href: "/services" },
      { name: "SEO Services", href: "/services/seo" },
      { name: "Paid Ads (PPC)", href: "/services/paid-ads" },
      { name: "Social Media Marketing", href: "/services/social-media" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "Graphic Design", href: "/services/graphic-design" },
      { name: "AI Automation", href: "/services/ai-automation" },
      { name: "Lead Generation", href: "/services/lead-generation" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function HTMLSitemapPage() {
  return (
    <section style={{ padding: "8rem 0 4rem", minHeight: "80vh" }}>
      <div className="container">
        <h1 style={{ marginBottom: "0.5rem" }}>Sitemap</h1>
        <p style={{ marginBottom: "3rem", maxWidth: "60ch" }}>
          A complete directory of all pages on DigitalGrowPedia.
          Use this page to quickly find any section of our website.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--primary)" }}>
                {section.title}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ fontSize: "0.9375rem" }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
