export interface SubService {
  name: string;
  slug: string;
  desc: string;
  icon?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
}

export interface CaseStudy {
  industry: string;
  client: string;
  result: string;
  metrics: string[];
  timeframe: string;
}

export interface ClientProfile {
  label: string;
  desc: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedService {
  name: string;
  href: string;
  desc: string;
}

export interface ServicePageData {
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  heroVisualDesc: string;
  primaryCTA: string;
  secondaryCTA: string;
  primaryCTALink: string;
  secondaryCTALink: string;

  // Section 2 — Problem
  pullQuote: string;
  problemText: string;

  // Section 3 — What We Do
  sectionLabel: string;
  sectionTitle: string;
  capabilities: { title: string; desc: string }[];

  // Section 3B — Sub-services
  subServices: SubService[];

  // Section 4 — Process
  processSteps: ProcessStep[];

  // Section 5 — Case Studies
  caseStudies: CaseStudy[];

  // Section 6 — Who This Is For
  clientProfiles: ClientProfile[];

  // Section 7 — Tools
  tools: string[];

  // Section 8 — FAQ
  faqs: FAQ[];

  // Section 9 — Related Services
  relatedServices: RelatedService[];

  // Section 10 — CTA
  ctaHeadline: string;
  ctaSubtext: string;
}

export interface SubServicePageData {
  parentSlug: string;
  parentName: string;
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  primaryCTA: string;
  primaryCTALink: string;

  pullQuote: string;
  problemText: string;

  whatWeDoTitle: string;
  whatWeDoItems: { title: string; desc: string }[];

  processSteps: ProcessStep[];
  caseStudies: CaseStudy[];
  clientProfiles: ClientProfile[];
  tools: string[];
  faqs: FAQ[];
  relatedSubServices: { name: string; href: string; desc: string }[];

  ctaHeadline: string;
  ctaSubtext: string;
}
