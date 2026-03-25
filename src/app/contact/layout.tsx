import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get Your Free Growth Audit",
  description: "Book a free 30-minute growth consultation. No fluff. No pitch deck. Just honest answers about your business. Email: hello@growthpedia.in. Phone: +91 98765 43210.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contact Growthpedia", "free SEO audit", "digital marketing consultation",
    "growth audit", "marketing agency contact", "free PPC audit",
  ],
  openGraph: {
    title: "Contact Growthpedia Agency — Free Growth Audit",
    description: "Book a free consultation. Response within 4 hours. No fluff — just results.",
    url: "https://growthpedia.in/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
