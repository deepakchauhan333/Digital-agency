import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get Your Free Growth Audit",
  description: "Book a free 30-minute growth consultation. No fluff. No pitch deck. Just honest answers about your business. Email: allindiamarketingsolution1@gmail.com. Phone: +91 93521 07526.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contact DigitalGrowPedia", "free SEO audit", "digital marketing consultation",
    "growth audit", "marketing agency contact", "free PPC audit",
  ],
  openGraph: {
    title: "Contact DigitalGrowPedia — Free Growth Audit",
    description: "Book a free consultation. Response within 4 hours. No fluff — just results.",
    url: "https://www.digitalgrowpedia.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
