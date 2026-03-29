import Script from "next/script";

const BASE_URL = "https://www.allindiamarketingsolution.com";

// Organization Schema - appears on every page
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "All India Marketing Solution",
  url: BASE_URL,
  logo: `${BASE_URL}/all%20india%20marketing%20solution%20(1).webp`,
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
      telephone: "+91-93521-07526",
      contactType: "sales",
      email: "hello@allindiamarketingsolution.com",
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
    "https://www.linkedin.com/company/allindiamarketingsolution",
    "https://www.instagram.com/allindiamarketingsolution",
    "https://twitter.com/allindiamarketingsolution",
    "https://www.facebook.com/allindiamarketingsolution",
    "https://www.youtube.com/@allindiamarketingsolution",
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
  name: "All India Marketing Solution",
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
    name: "All India Marketing Solution",
    image: `${BASE_URL}/all%20india%20marketing%20solution%20(1).webp`,
    url: BASE_URL,
    telephone: "+91-93521-07526",
    email: "hello@allindiamarketingsolution.com",
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
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127", bestRating: "5" },
    hasMap: "https://maps.google.com/?cid=YOUR_GOOGLE_PLACE_ID",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

// Author Schema — E-E-A-T trust signals
export function AuthorSchemaMarkup({
  name,
  jobTitle,
  description,
  url,
  image,
}: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
    image: image || `${BASE_URL}/team/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`,
    worksFor: { "@id": `${BASE_URL}/#organization` },
    sameAs: [],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

// Article Schema — for blog posts
export function ArticleSchemaMarkup({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: BASE_URL,
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    image: image || `${BASE_URL}/og-image.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${BASE_URL}${url}`,
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

// Video Schema
export function VideoSchemaMarkup({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(duration && { duration }),
    publisher: { "@id": `${BASE_URL}/#organization` },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

