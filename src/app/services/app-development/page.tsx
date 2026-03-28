import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { appDevData } from "@/data/app-development";

export const metadata: Metadata = {
  title: "App Development — iOS, Android & Cross-Platform Apps",
  description: "Native iOS, Android, React Native, Flutter — mobile apps engineered for retention and revenue. MVP to enterprise scale. 50K+ total downloads. 4.5+ avg ratings.",
  alternates: { canonical: "https://www.allindiamarketingsolution.com/services/app-development" },
  keywords: [
    "mobile app development India", "iOS app development", "Android app development",
    "React Native development", "Flutter development", "cross-platform apps",
    "MVP development", "app UI/UX design", "app store optimization",
    "app backend development", "mobile app maintenance", "startup app development",
    "enterprise mobile apps", "app analytics", "push notifications",
    "mobile app testing", "native app development", "app prototyping",
  ],
  openGraph: {
    title: "App Development — iOS, Android, Cross-Platform | All India Marketing Solution",
    description: "iOS, Android, React Native, Flutter. MVP to enterprise. 50K+ downloads. 4.5+ ratings.",
    url: "https://www.allindiamarketingsolution.com/services/app-development",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "All India Marketing Solution App Development Services" }],
  },
};

export default function AppDevelopmentPage() {
  return <ServicePageTemplate data={appDevData} />;
}
