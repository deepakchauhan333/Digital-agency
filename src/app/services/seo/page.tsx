import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { seoPageData } from "@/data/seo";

export const metadata: Metadata = {
  title: "SEO Services — Search Engine Optimization Agency India",
  description: "Expert SEO services: Technical SEO, On-Page Optimization, Off-Page Link Building, Local SEO, Programmatic SEO, E-Commerce SEO. 200+ clients. Avg +340% organic traffic growth. Get free SEO audit.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/services/seo" },
  keywords: [
    "SEO services India", "search engine optimization agency", "technical SEO audit",
    "on-page SEO optimization", "link building services", "local SEO company",
    "e-commerce SEO", "programmatic SEO", "enterprise SEO",
    "Google ranking improvement", "organic traffic growth", "keyword research",
    "content optimization", "Core Web Vitals", "site speed optimization",
    "SEO consultant", "white hat SEO", "SEO strategy",
  ],
  openGraph: {
    title: "SEO Services — Grow Organic Traffic 3-8x | DigitalGrowPedia",
    description: "Expert SEO agency with 200+ clients. Technical SEO, content optimization, link building, local SEO. Avg +340% organic traffic growth.",
    url: "https://www.digitalgrowpedia.com/services/seo",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DigitalGrowPedia SEO Services — Search Engine Optimization Agency India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services India — Grow Organic Traffic 3-8x",
    description: "Technical SEO, On-Page, Off-Page, Local SEO. 200+ clients served. Get free audit.",
  },
};

export default function SeoPage() {
  return <ServicePageTemplate data={seoPageData} />;
}
