import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ClientLogosSection from "@/components/home/ClientLogosSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "All India Marketing Solution — SEO, PPC, Social Media & Web Development Agency India",
  description:
    "All India Marketing Solution: trusted digital marketing agency in India. SEO, Paid Ads, Social Media, Web & App Development, Graphic Design, AI Automation, Lead Generation. 200+ clients. 80+ specialists.",
  alternates: { canonical: "https://www.allindiamarketingsolution.com/" },
  keywords: [
    "digital marketing agency India", "All India Marketing Solution", "SEO agency India",
    "PPC management India", "social media marketing agency", "web development company India",
    "app development India", "graphic design agency", "AI automation India",
    "lead generation agency", "performance marketing India", "digital growth agency",
  ],
  openGraph: {
    title: "All India Marketing Solution — Digital Growth, Engineered",
    description: "Trusted digital marketing agency India. 8 departments. 80+ specialists. 200+ clients. Real results.",
    url: "https://www.allindiamarketingsolution.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
