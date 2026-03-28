"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { BreadcrumbSchemaMarkup } from "@/components/seo/SchemaMarkup";

const routeNames: Record<string, string> = {
  "": "Home",
  services: "Services",
  seo: "SEO",
  "paid-ads": "Paid Ads",
  "social-media": "Social Media Marketing",
  "web-development": "Web Development",
  "app-development": "App Development",
  "graphic-design": "Graphic Design",
  "ai-automation": "AI Automation",
  "lead-generation": "Lead Generation",
  about: "About Us",
  contact: "Contact",
  blog: "Blog",
  "case-studies": "Case Studies",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  "sitemap-html": "Sitemap",
};

function formatSegment(segment: string): string {
  return (
    routeNames[segment] ||
    segment
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    ...segments.map((segment, index) => ({
      name: formatSegment(segment),
      url: "/" + segments.slice(0, index + 1).join("/"),
    })),
  ];

  return (
    <>
      <BreadcrumbSchemaMarkup items={breadcrumbItems} />
      <nav
        aria-label="Breadcrumb"
        style={{
          padding: "1rem 0 0",
          fontSize: "0.8125rem",
          color: "var(--on-surface-muted)",
        }}
      >
        <div className="container">
          <ol
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.375rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {breadcrumbItems.map((item, i) => {
              const isLast = i === breadcrumbItems.length - 1;
              return (
                <li
                  key={item.url}
                  style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
                >
                  {i > 0 && (
                    <ChevronRight
                      size={12}
                      style={{ opacity: 0.5, flexShrink: 0 }}
                    />
                  )}
                  {isLast ? (
                    <span
                      style={{ color: "var(--on-surface-variant)" }}
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url}
                      style={{
                        color: "var(--on-surface-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
