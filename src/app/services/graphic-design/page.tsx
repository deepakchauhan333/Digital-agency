import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { graphicDesignData } from "@/data/graphic-design";

export const metadata: Metadata = {
  title: "Graphic Design — Brand Identity & Creative Design Agency",
  description: "Brand identity, logo design, UI/UX, motion graphics, packaging, social media creatives — visual systems that make your brand impossible to ignore. Award-winning designers.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/services/graphic-design" },
  keywords: [
    "graphic design agency India", "brand identity design", "logo design services",
    "UI UX design agency", "motion graphics", "packaging design",
    "social media graphic design", "presentation design", "infographic design",
    "ad creative design", "brand guidelines", "visual identity",
    "corporate branding", "creative agency", "brand strategy",
    "print design", "marketing collateral", "illustration services",
  ],
  openGraph: {
    title: "Graphic Design Agency — Brand Identity & Creatives | DigitalGrowPedia",
    description: "Brand identity, logo, UI/UX, motion graphics, packaging. Award-winning creative team.",
    url: "https://www.digitalgrowpedia.com/services/graphic-design",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DigitalGrowPedia Graphic Design Services" }],
  },
};

export default function GraphicDesignPage() {
  return <ServicePageTemplate data={graphicDesignData} />;
}
