import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Grow Your Business Now | DigitalGrowPedia",
  description: "Book a consultation with DigitalGrowPedia. Talk to an SEO, PPC, or social media specialist. Ashish Nagar, Murlipura Scheme, Jaipur, Rajasthan, 302039. Response within 4 hours.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/contact" },
  keywords: ["contact digital marketing agency India", "digital marketing consultation", "hire marketing agency", "DigitalGrowPedia contact"],
  openGraph: {
    title: "Contact DigitalGrowPedia — Grow Your Business Now",
    description: "Book a consultation. Let's grow your business now.",
    url: "https://www.digitalgrowpedia.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
