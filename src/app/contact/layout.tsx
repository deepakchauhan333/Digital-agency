import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Grow Your Business Now",
  description: "Book a consultation. No fluff. No pitch deck. Just honest answers about your business. Email: allindiamarketingsolution1@gmail.com. Phone: +91 93521 07526.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contact DigitalGrowPedia", "digital marketing consultation",
    "grow business", "marketing agency contact",
  ],
  openGraph: {
    title: "Contact DigitalGrowPedia — Grow Your Business Now",
    description: "Book a consultation. Response within 4 hours. No fluff — just results.",
    url: "https://www.digitalgrowpedia.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
