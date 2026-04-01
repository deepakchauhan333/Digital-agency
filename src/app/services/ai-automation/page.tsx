import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { aiAutomationData } from "@/data/ai-automation";

export const metadata: Metadata = {
  title: "AI Automation — CRM, Chatbots & Workflow Automation",
  description: "AI chatbots, CRM automation, workflow optimization, email automation, business intelligence — intelligent systems that scale operations. Avg 30 hrs/week saved per client.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/services/ai-automation" },
  keywords: [
    "AI automation services", "CRM automation India", "AI chatbot development",
    "workflow automation agency", "HubSpot implementation", "Salesforce automation",
    "email marketing automation", "business intelligence dashboards", "WhatsApp automation",
    "ChatGPT integration", "lead scoring automation", "Zapier automation",
    "Make automation", "n8n workflows", "marketing automation",
    "appointment scheduling automation", "custom AI solutions", "process optimization",
  ],
  openGraph: {
    title: "AI Automation — CRM, Chatbots, Workflows | DigitalGrowPedia",
    description: "AI chatbots, CRM automation, workflow optimization. Avg 30 hrs/week saved. Custom AI solutions.",
    url: "https://www.digitalgrowpedia.com/services/ai-automation",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DigitalGrowPedia AI Automation Services" }],
  },
};

export default function AIAutomationPage() {
  return <ServicePageTemplate data={aiAutomationData} />;
}
