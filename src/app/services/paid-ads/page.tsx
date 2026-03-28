import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { paidAdsData } from "@/data/paid-ads";

export const metadata: Metadata = {
  title: "Paid Ads Services — PPC & Performance Marketing Agency",
  description: "Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, Retargeting — performance marketing that scales profitably. Avg 4.2x ROAS. ₹100Cr+ managed. Get free PPC audit.",
  alternates: { canonical: "https://www.allindiamarketingsolution.com/services/paid-ads" },
  keywords: [
    "PPC management agency", "Google Ads management India", "Meta Ads agency",
    "Facebook advertising company", "LinkedIn Ads B2B", "YouTube advertising",
    "retargeting campaigns", "performance marketing", "ROAS optimization",
    "landing page optimization", "conversion rate optimization", "pay per click",
    "display advertising", "shopping ads", "programmatic advertising",
    "ad creative design", "campaign optimization", "cost per acquisition",
  ],
  openGraph: {
    title: "Paid Ads Agency — Google, Meta, LinkedIn Ads | All India Marketing Solution",
    description: "PPC management with avg 4.2x ROAS. Google Ads, Meta Ads, LinkedIn, YouTube. ₹100Cr+ managed.",
    url: "https://www.allindiamarketingsolution.com/services/paid-ads",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "All India Marketing Solution Paid Ads — PPC & Performance Marketing Agency" }],
  },
};

export default function PaidAdsPage() {
  return <ServicePageTemplate data={paidAdsData} />;
}
