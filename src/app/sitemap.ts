import { MetadataRoute } from "next";
import { getAllSubServiceParams } from "@/data/sub-service-registry";

const BASE_URL = "https://www.digitalgrowpedia.com";

const services = [
  "seo",
  "paid-ads",
  "social-media",
  "web-development",
  "app-development",
  "graphic-design",
  "ai-automation",
  "lead-generation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // === Core Pages (Highest Priority) ===
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
  ];

  // === Service Pages (High Priority — Money Pages) ===
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // === Sub-Service Pages (Medium-High Priority) ===
  const subServicePages: MetadataRoute.Sitemap = getAllSubServiceParams().map(
    (p) => ({
      url: `${BASE_URL}/services/${p.service}/${p.subService}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // === Legal Pages (Lower Priority) ===
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/refund-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // === HTML Sitemap Page ===
  const utilityPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/sitemap-html`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  return [
    ...corePages,
    ...servicePages,
    ...subServicePages,
    ...legalPages,
    ...utilityPages,
  ];
}
