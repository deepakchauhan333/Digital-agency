import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { socialMediaData } from "@/data/social-media";

export const metadata: Metadata = {
  title: "Social Media Marketing — Build Audiences That Buy",
  description: "Instagram marketing, LinkedIn thought leadership, YouTube management, influencer partnerships, content creation — we turn social platforms into revenue channels. Get free social audit.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/services/social-media" },
  keywords: [
    "social media marketing agency", "Instagram marketing India", "LinkedIn marketing B2B",
    "YouTube channel management", "influencer marketing agency", "content creation services",
    "community management", "social commerce", "social media strategy",
    "Facebook marketing", "Twitter marketing", "social media audit",
    "engagement optimization", "follower growth", "social media ROI",
    "brand awareness campaigns", "social media advertising", "UGC content",
  ],
  openGraph: {
    title: "Social Media Marketing — Build Audiences That Buy | DigitalGrowPedia",
    description: "Instagram, LinkedIn, YouTube, influencer marketing. +340% avg engagement growth. 80+ specialists.",
    url: "https://www.digitalgrowpedia.com/services/social-media",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DigitalGrowPedia Social Media Marketing Agency" }],
  },
};

export default function SocialMediaPage() {
  return <ServicePageTemplate data={socialMediaData} />;
}
