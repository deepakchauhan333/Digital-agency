"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const BASE_URL = "https://growthpedia.in";

// Organization Schema - appears on every page
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Growthpedia Agency",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: "India's most trusted digital growth agency. 8 departments, 80+ specialists, 200+ clients served.",
  foundingDate: "2020",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 80 },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "sales",
      email: "hello@growthpedia.in",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/growthpedia",
    "https://www.instagram.com/growthpedia",
    "https://twitter.com/growthpedia",
    "https://www.facebook.com/growthpedia",
    "https://www.youtube.com/@growthpedia",
  ],
  knowsAbout: [
    "Search Engine Optimization",
    "Pay Per Click Advertising",
    "Social Media Marketing",
    "Web Development",
    "Mobile App Development",
    "Graphic Design",
    "AI Automation",
    "Lead Generation",
    "Digital Marketing",
    "Content Marketing",
  ],
};

// WebSite Schema with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Growthpedia Agency",
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export function GlobalSchemaMarkup() {
  return (
    <Script
      id="global-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, websiteSchema]),
      }}
    />
  );
}

// Service Schema generator
export function ServiceSchemaMarkup({
  name, description, slug, subServices,
}: { name: string; description: string; slug: string; subServices: { name: string; slug: string }[] }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${slug}/#service`,
    name: `${name} Services`,
    description,
    provider: { "@id": `${BASE_URL}/#organization` },
    serviceType: name,
    areaServed: { "@type": "Country", name: "India" },
    url: `${BASE_URL}/services/${slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Sub-Services`,
      itemListElement: subServices.map((s, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${BASE_URL}/services/${slug}/${s.slug}`,
        },
        position: i + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

// FAQ Schema generator
export function FAQSchemaMarkup({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

// BreadcrumbList Schema generator
export function BreadcrumbSchemaMarkup({ items }: { items: { name: string; url: string }[] }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

// LocalBusiness Schema
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "Growthpedia Agency",
    image: `${BASE_URL}/logo.png`,
    url: BASE_URL,
    telephone: "+91-98765-43210",
    email: "hello@growthpedia.in",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Connaught Place",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 28.6315, longitude: 77.2167 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127", bestRating: "5" },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
