import { SubServicePageData } from "@/types/services";
import { seoSubServices } from "./all-seo-subservices";
import { paidAdsSubServices } from "./all-paid-ads-subservices";
import { socialMediaSubServices } from "./all-social-media-subservices";
import { webDevSubServices } from "./all-web-dev-subservices";
import { appDevSubServices } from "./all-app-dev-subservices";
import { graphicDesignSubServices } from "./all-graphic-design-subservices";
import { aiAutomationSubServices } from "./all-ai-automation-subservices";
import { leadGenSubServices } from "./all-lead-gen-subservices";

const registry: Record<string, Record<string, SubServicePageData>> = {
  seo: seoSubServices,
  "paid-ads": paidAdsSubServices,
  "social-media": socialMediaSubServices,
  "web-development": webDevSubServices,
  "app-development": appDevSubServices,
  "graphic-design": graphicDesignSubServices,
  "ai-automation": aiAutomationSubServices,
  "lead-generation": leadGenSubServices,
};

export function getSubServiceData(serviceSlug: string, subSlug: string): SubServicePageData | null {
  return registry[serviceSlug]?.[subSlug] ?? null;
}

export function getAllSubServiceParams(): { service: string; subService: string }[] {
  const params: { service: string; subService: string }[] = [];
  for (const [service, subs] of Object.entries(registry)) {
    for (const subSlug of Object.keys(subs)) {
      params.push({ service, subService: subSlug });
    }
  }
  return params;
}

export default registry;
