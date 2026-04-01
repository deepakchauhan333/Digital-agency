import { MetadataRoute } from "next";

const BASE_URL = "https://www.digitalgrowpedia.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/staging/",
          "/draft/",
          "/login",
          "/register",
          "/dashboard",
          "/*.json$",
        ],
      },
      // Google — full access
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      // Bing — full access
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // Google Images
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI Crawlers — allow (GEO: Generative Engine Optimization)
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Block bad bots
      {
        userAgent: "AhrefsBot",
        disallow: ["/"],
      },
      {
        userAgent: "SemrushBot",
        disallow: ["/"],
      },
      {
        userAgent: "MJ12bot",
        disallow: ["/"],
      },
      {
        userAgent: "DotBot",
        disallow: ["/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
