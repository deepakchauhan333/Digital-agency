import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { GlobalSchemaMarkup, LocalBusinessSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://growthpedia.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Growthpedia Agency — Digital Growth, Engineered",
    template: "%s | Growthpedia Agency",
  },
  description:
    "India's #1 digital growth agency. SEO, PPC, Social Media Marketing, Web & App Development, Graphic Design, AI Automation, Lead Generation. 200+ clients. 80+ specialists. Measurable ROI.",
  keywords: [
    "digital marketing agency India",
    "SEO services",
    "PPC management agency",
    "social media marketing company",
    "web development company",
    "mobile app development",
    "graphic design agency",
    "AI automation services",
    "B2B lead generation",
    "Growthpedia",
    "digital growth agency",
    "performance marketing",
    "content marketing",
    "brand identity design",
    "CRM automation",
  ],
  authors: [{ name: "Growthpedia Agency", url: BASE_URL }],
  creator: "Growthpedia Agency",
  publisher: "Growthpedia Agency",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Growthpedia Agency",
    title: "Growthpedia Agency — Digital Growth, Engineered",
    description:
      "India's most trusted digital growth agency. 8 departments. 80+ specializations. 200+ clients. Real results, not promises.",
    url: BASE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Growthpedia Agency — India's #1 Digital Growth Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growthpedia Agency — Digital Growth, Engineered",
    description: "India's #1 digital growth agency. SEO, Paid Ads, Social Media, Web Dev, AI Automation & more.",
    creator: "@growthpedia",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-1W2X3Y4Z5A6B7C8D", // Replace with your actual Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <GlobalSchemaMarkup />
        <LocalBusinessSchema />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
