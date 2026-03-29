import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import {
  GlobalSchemaMarkup,
  LocalBusinessSchema,
} from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.allindiamarketingsolution.com";

/* ============================================
   VIEWPORT — Separated from metadata (Next.js 14+ best practice)
   ============================================ */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1326" },
    { media: "(prefers-color-scheme: light)", color: "#f7be1d" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ============================================
   METADATA — Exhaustive SEO Configuration
   ============================================ */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // Title template — all child pages inherit
  title: {
    default:
      "All India Marketing Solution — Digital Marketing Agency India",
    template: "%s | All India Marketing Solution",
  },

  // Meta description — under 155 chars, keyword-rich
  description:
    "All India Marketing Solution — expert digital marketing agency in India. SEO, PPC, Social Media, Web & App Development, AI Automation, Lead Generation. 200+ clients. 80+ specialists. Measurable ROI.",

  // Keywords — comprehensive, LSI-enriched
  keywords: [
    "digital marketing agency India",
    "best marketing agency India",
    "All India Marketing Solution",
    "SEO services India",
    "PPC management agency",
    "social media marketing company",
    "web development company India",
    "mobile app development India",
    "graphic design agency",
    "AI automation services",
    "B2B lead generation India",
    "performance marketing agency",
    "content marketing India",
    "brand identity design",
    "CRM automation",
    "digital growth agency",
    "online marketing company",
    "Google Ads management India",
    "Facebook Ads agency",
    "ecommerce marketing",
  ],

  // Publisher & authorship — E-E-A-T signals
  authors: [{ name: "All India Marketing Solution", url: BASE_URL }],
  creator: "All India Marketing Solution",
  publisher: "All India Marketing Solution",

  // Favicon / icons — webp takes priority, ico as fallback
  icons: {
    icon: [
      { url: "/allindiamarketingsolution fevicon (1).webp", type: "image/webp" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/allindiamarketingsolution fevicon (1).webp",
    shortcut: "/allindiamarketingsolution fevicon (1).webp",
  },

  // Canonical (self-referencing)
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-US": "/",
    },
  },

  // Category — helps AI understanding
  category: "Digital Marketing",

  // Open Graph — comprehensive social sharing
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    siteName: "All India Marketing Solution",
    title: "All India Marketing Solution — India's Best Digital Marketing Agency",
    description:
      "8 specialized departments. 80+ services. 200+ clients. SEO, PPC, Social Media, Web Dev, AI Automation & more. Real results, not promises.",
    url: BASE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "All India Marketing Solution — Digital Marketing Agency India",
        type: "image/png",
      },
    ],
  },

  // Twitter / X cards
  twitter: {
    card: "summary_large_image",
    site: "@allindiamarketingsolution",
    creator: "@allindiamarketingsolution",
    title: "All India Marketing Solution — Digital Marketing Agency India",
    description:
      "India's best digital marketing agency. SEO, Paid Ads, Social Media, Web Dev, AI Automation & more.",
    images: ["/og-image.png"],
  },

  // Robots — global defaults
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Google Search Console verification
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    // Bing verification is also supported
  },

  // App links
  appLinks: {
    web: { url: BASE_URL, should_fallback: true },
  },

  // Other meta tags
  other: {
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "google": "notranslate",
    "rating": "general",
    "revisit-after": "3 days",
  },
};

/* ============================================
   ROOT LAYOUT
   ============================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to critical origins — improves LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
        />

        {/* DNS Prefetch for non-critical origins */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Favicon suite */}
        <link rel="icon" href="/allindiamarketingsolution fevicon (1).webp" type="image/webp" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="apple-touch-icon" href="/allindiamarketingsolution fevicon (1).webp" />
        <link rel="manifest" href="/manifest.json" />

        {/* IndexNow key file reference */}
        <meta name="indexnow-key" content="allindiamarketingsolution" />
      </head>
      <body>
        {/* Structured Data (JSON-LD) — injected before content */}
        <GlobalSchemaMarkup />
        <LocalBusinessSchema />

        <SmoothScroll>
          <Navbar />
          <Breadcrumbs />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
