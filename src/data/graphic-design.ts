import type { ServicePageData } from "@/types/services";

export const graphicDesignData: ServicePageData = {
  slug: "graphic-design", name: "Graphic Design", tagline: "Brand Identity & Creatives",
  heroHeadline: "Visual Identity That\nDemands Attention.",
  heroSubtext: "Brand identity, UI/UX design, social media creatives, packaging, motion graphics — we craft visual systems that make your brand impossible to ignore.",
  heroVisualDesc: "Brand identity components — logo variations, color palette, typography showcase.",
  primaryCTA: "Build My Brand Identity", secondaryCTA: "See Portfolio", primaryCTALink: "/contact", secondaryCTALink: "/case-studies",
  pullQuote: "Your brand looks like everyone else. That is why nobody remembers you.",
  problemText: "Design is not decoration — it is strategy made visible. A logo from Fiverr, inconsistent social posts, and a templated website tell your customers you are not serious. Premium brands are built through intentional, systematic visual identity.",
  sectionLabel: "THE DESIGN DEPARTMENT", sectionTitle: "Design That Builds Brands, Not Just Graphics.",
  capabilities: [
    { title: "Brand Identity Systems", desc: "Logo design, color systems, typography, brand guidelines — the complete visual DNA." },
    { title: "UI/UX Design", desc: "Web and app interfaces designed for usability, accessibility, and conversion." },
    { title: "Marketing Creatives", desc: "Social media graphics, ad creatives, email templates, presentation decks." },
    { title: "Motion & Video", desc: "Motion graphics, animated explainers, social video content, brand films." },
    { title: "Print & Packaging", desc: "Business cards, brochures, packaging design, event materials." },
  ],
  subServices: [
    { name: "Brand Identity Design", slug: "brand-identity", desc: "Complete brand visual system from logo to guidelines." },
    { name: "Logo Design", slug: "logo-design", desc: "Iconic logos with variations for every platform." },
    { name: "UI/UX Design", slug: "ui-ux-design", desc: "Interface design for web and mobile applications." },
    { name: "Social Media Graphics", slug: "social-graphics", desc: "Scroll-stopping visuals for all social platforms." },
    { name: "Motion Graphics", slug: "motion-graphics", desc: "Animated content, explainers, social media videos." },
    { name: "Presentation Design", slug: "presentation-design", desc: "Pitch decks, investor presentations, keynote slides." },
    { name: "Packaging Design", slug: "packaging-design", desc: "Product packaging that stands out on shelves and screens." },
    { name: "Print Design", slug: "print-design", desc: "Business cards, brochures, banners, event materials." },
    { name: "Ad Creative Design", slug: "ad-creative", desc: "High-converting display, social, and video ad creatives." },
    { name: "Infographic Design", slug: "infographic-design", desc: "Data visualization and information design." },
  ],
  processSteps: [
    { number: "01", title: "Brief & Research", desc: "Brand audit, competitor analysis, moodboards, creative brief." },
    { number: "02", title: "Concept Development", desc: "3 design directions, exploration, stakeholder feedback." },
    { number: "03", title: "Refinement", desc: "Selected direction refined, all variations created, guidelines written." },
    { number: "04", title: "Delivery & Rollout", desc: "Final files, brand guidelines, templates, asset library handoff." },
  ],
  caseStudies: [
    { industry: "FINTECH", client: "Payment App", result: "Complete Rebrand", metrics: ["Brand recognition +280%", "User trust score improved 4.2 → 4.8", "App downloads 2.5x after rebrand"], timeframe: "6 weeks" },
  ],
  clientProfiles: [
    { label: "Profile 1", desc: "Your brand looks dated and inconsistent. You need a professional visual identity that matches your ambition." },
    { label: "Profile 2", desc: "You are launching a new product and need brand identity, packaging, and marketing materials — fast." },
    { label: "Profile 3", desc: "You need ongoing design support for social media, ads, and marketing without hiring a full-time designer." },
  ],
  tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Blender", "Cinema 4D", "InDesign", "Canva Enterprise", "Lottie", "Spline"],
  faqs: [
    { question: "How many design revisions are included?", answer: "All projects include 3 rounds of revisions. We find this is enough when the brief is clear — and we make sure it is." },
    { question: "Do we own the design files?", answer: "Yes. All source files and assets are handed over to you upon project completion. Full ownership." },
    { question: "Can you match our existing brand guidelines?", answer: "Absolutely. We work within existing brand systems or create new ones from scratch." },
  ],
  relatedServices: [
    { name: "Web Development", href: "/services/web-development", desc: "Bring your designs to life on the web." },
    { name: "Social Media", href: "/services/social-media", desc: "Content that matches your visual identity." },
    { name: "App Development", href: "/services/app-development", desc: "UI/UX design for mobile applications." },
  ],
  ctaHeadline: "Your Brand Deserves Better Than Templates. Let's Build Something Iconic.",
  ctaSubtext: "Book a free creative consultation — we will show you how strategic design can transform your brand perception.",
};
