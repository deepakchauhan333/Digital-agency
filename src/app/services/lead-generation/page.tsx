import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { leadGenData } from "@/data/lead-generation";

export const metadata: Metadata = {
  title: "Lead Generation — B2B & Multi-Channel Lead Gen Agency",
  description: "B2B lead generation, cold email outreach, LinkedIn prospecting, appointment setting, landing page funnels — 47+ qualified meetings per month avg. Get free pipeline audit.",
  alternates: { canonical: "/services/lead-generation" },
  keywords: [
    "B2B lead generation India", "cold email agency", "LinkedIn lead generation",
    "appointment setting services", "lead nurturing", "landing page funnels",
    "outbound lead generation", "webinar lead generation", "database building",
    "referral program setup", "sales pipeline optimization", "lead qualification",
    "prospect list building", "email outreach", "account based marketing",
    "demand generation", "inbound lead generation", "sales acceleration",
  ],
  openGraph: {
    title: "Lead Generation — B2B & Multi-Channel | Growthpedia",
    description: "B2B lead gen, cold email, LinkedIn prospecting, appointment setting. 47+ qualified meetings/month avg.",
    url: "https://growthpedia.in/services/lead-generation",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Growthpedia Lead Generation Agency" }],
  },
};

export default function LeadGenerationPage() {
  return <ServicePageTemplate data={leadGenData} />;
}
