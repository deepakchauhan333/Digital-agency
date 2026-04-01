import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { webDevData } from "@/data/web-development";

export const metadata: Metadata = {
  title: "Web Development — Sites That Convert, Not Just Look Good",
  description: "Custom websites, e-commerce platforms, web apps, WordPress, Shopify — engineered for speed, SEO, and conversions. Next.js, React experts. Avg +180% conversion improvement.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/services/web-development" },
  keywords: [
    "web development company India", "custom website design", "e-commerce development",
    "WordPress development", "Shopify development", "React development",
    "Next.js agency", "web application development", "landing page design",
    "website redesign", "CRO optimization", "website speed optimization",
    "Core Web Vitals", "responsive web design", "API integration",
    "SaaS development", "full stack development", "website maintenance",
  ],
  openGraph: {
    title: "Web Development — High-Performance Websites | DigitalGrowPedia",
    description: "Custom websites, e-commerce, web apps. Next.js, React, WordPress, Shopify. Avg +180% conversion improvement.",
    url: "https://www.digitalgrowpedia.com/services/web-development",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DigitalGrowPedia Web Development Services" }],
  },
};

export default function WebDevelopmentPage() {
  return <ServicePageTemplate data={webDevData} />;
}
