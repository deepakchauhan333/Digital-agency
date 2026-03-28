import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Digital Marketing Audit | All India Marketing Solution",
  description: "Book a free 30-minute digital marketing consultation with All India Marketing Solution. Talk to an SEO, PPC, or social media specialist. New Delhi, India. Response within 4 hours.",
  alternates: { canonical: "https://www.allindiamarketingsolution.com/contact" },
  keywords: ["contact digital marketing agency India", "free SEO audit", "digital marketing consultation", "hire marketing agency", "All India Marketing Solution contact"],
  openGraph: {
    title: "Contact All India Marketing Solution — Free Growth Audit",
    description: "Book a free 30-min consultation. Get an honest growth audit for your business.",
    url: "https://www.allindiamarketingsolution.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
