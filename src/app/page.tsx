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
  title: "Growthpedia Agency — India's #1 Digital Growth Agency",
  description:
    "8 specialized departments. 80+ services. 200+ clients. SEO, Paid Ads, Social Media Marketing, Web & App Development, Graphic Design, AI Automation, Lead Generation. Measurable ROI.",
  alternates: { canonical: "/" },
  keywords: [
    "digital marketing agency India", "growth agency", "SEO agency",
    "PPC management", "social media marketing", "web development company",
    "app development", "graphic design agency", "AI automation",
    "lead generation", "Growthpedia", "performance marketing",
  ],
  openGraph: {
    title: "Growthpedia Agency — Digital Growth, Engineered",
    description: "India's most trusted growth agency. 8 departments. 80+ services. Real results.",
    url: "https://growthpedia.in",
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
