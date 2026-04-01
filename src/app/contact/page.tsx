import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Digital Marketing Audit | DigitalGrowPedia",
  description: "Book a free 30-minute digital marketing consultation with DigitalGrowPedia. Talk to an SEO, PPC, or social media specialist. Ashish Nagar, Murlipura Scheme, Jaipur, Rajasthan, 302039. Response within 4 hours.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/contact" },
  keywords: ["contact digital marketing agency India", "free SEO audit", "digital marketing consultation", "hire marketing agency", "DigitalGrowPedia contact"],
  openGraph: {
    title: "Contact DigitalGrowPedia — Free Growth Audit",
    description: "Book a free 30-min consultation. Get an honest growth audit for your business.",
    url: "https://www.digitalgrowpedia.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
