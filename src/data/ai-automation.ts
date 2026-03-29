import type { ServicePageData } from "@/types/services";

export const aiAutomationData: ServicePageData = {
  slug: "ai-automation", name: "AI Automation", tagline: "CRM, Chatbots & Workflows",
  heroHeadline: "Automate Growth.\nEliminate Manual Work.",
  heroSubtext: "AI chatbots, CRM automation, workflow optimization, AI content systems, predictive analytics — we build intelligent automation that scales your operations.",
  heroVisualDesc: "AI workflow diagram showing automated lead flows, chatbot conversations, and analytics.",
  primaryCTA: "Save 12 Hours a Week", secondaryCTA: "See AI Results", primaryCTALink: "/contact", secondaryCTALink: "/case-studies",
  pullQuote: "Your team is doing work that machines should be doing. Every hour wasted on manual tasks is an hour not spent growing.",
  problemText: "Businesses lose thousands of hours annually to repetitive tasks — data entry, lead follow-ups, report generation, customer responses. AI automation is not about replacing people. It is about freeing your best people to do their best work.",
  sectionLabel: "THE AI AUTOMATION DEPARTMENT", sectionTitle: "Intelligent Automation That Scales Your Operations.",
  capabilities: [
    { title: "CRM Automation", desc: "HubSpot, Salesforce, Zoho — automated lead scoring, nurturing, and pipeline management." },
    { title: "AI Chatbots", desc: "Custom ChatGPT-powered bots for customer support, lead qualification, and sales." },
    { title: "Workflow Automation", desc: "Zapier, Make, n8n — connect your tools and eliminate manual data transfers." },
    { title: "AI Content Systems", desc: "AI-assisted content creation, SEO writing, social media automation." },
    { title: "Predictive Analytics", desc: "ML models for churn prediction, lead scoring, demand forecasting." },
  ],
  subServices: [
    { name: "CRM Setup & Automation", slug: "crm-automation", desc: "HubSpot, Salesforce, Zoho — full CRM implementation." },
    { name: "AI Chatbot Development", slug: "ai-chatbots", desc: "Custom AI chatbots for websites and messaging platforms." },
    { name: "Workflow Automation", slug: "workflow-automation", desc: "Process automation with Zapier, Make, and custom integrations." },
    { name: "Email Marketing Automation", slug: "email-automation", desc: "Drip campaigns, behavioral triggers, automated sequences." },
    { name: "AI Content Generation", slug: "ai-content", desc: "AI-powered content creation workflows and quality systems." },
    { name: "Lead Scoring & Routing", slug: "lead-scoring", desc: "Automated lead qualification and CRM routing." },
    { name: "Business Intelligence Dashboards", slug: "bi-dashboards", desc: "Real-time dashboards connecting all your data sources." },
    { name: "WhatsApp Business Automation", slug: "whatsapp-automation", desc: "Automated WhatsApp flows for support and sales." },
    { name: "Appointment & Booking Automation", slug: "booking-automation", desc: "Calendly, custom booking systems, automated reminders." },
    { name: "Custom AI Solutions", slug: "custom-ai", desc: "Bespoke AI models trained on your business data." },
  ],
  processSteps: [
    { number: "01", title: "Process Audit", desc: "Map every manual process, identify automation opportunities, calculate time savings." },
    { number: "02", title: "Architecture Design", desc: "Design automation workflows, select tools, plan integrations." },
    { number: "03", title: "Build & Integrate", desc: "Develop automations, connect systems, train AI models, test thoroughly." },
    { number: "04", title: "Monitor & Optimize", desc: "Track performance, fix edge cases, expand automation coverage." },
  ],
  caseStudies: [
    { industry: "REAL ESTATE", client: "Property Developer", result: "40 hrs/week saved", metrics: ["Lead response time 4hrs → 30sec", "CRM adoption 100%", "Conversion rate +35%"], timeframe: "8 weeks" },
  ],
  clientProfiles: [
    { label: "Profile 1", desc: "Your team spends hours on data entry, follow-ups, and reports that could be automated instantly." },
    { label: "Profile 2", desc: "You want to use AI but do not know where to start or which tools actually deliver ROI." },
    { label: "Profile 3", desc: "You have multiple tools (CRM, email, analytics) that do not talk to each other." },
  ],
  tools: ["HubSpot", "Salesforce", "Zapier", "Make (Integromat)", "n8n", "OpenAI API", "Dialogflow", "WhatsApp Business API", "Power BI", "Airtable"],
  faqs: [
    { question: "Will AI replace my team?", answer: "No. AI automation handles repetitive tasks so your team can focus on strategy, relationships, and creative work." },
    { question: "How much can automation save?", answer: "Most businesses save 20-40 hours per week after full implementation. ROI is typically 5-10x within 6 months." },
    { question: "Do you maintain the automations after setup?", answer: "Yes. We offer ongoing maintenance plans to monitor, fix, and expand your automation systems." },
  ],
  relatedServices: [
    { name: "Lead Generation", href: "/services/lead-generation", desc: "Automate your entire lead pipeline." },
    { name: "Web Development", href: "/services/web-development", desc: "Build platforms that power your automation." },
    { name: "Paid Ads", href: "/services/paid-ads", desc: "Automate ad optimization and reporting." },
  ],
  ctaHeadline: "Your Business Runs on Manual Work. Let's Fix That Forever.",
  ctaSubtext: "Get a free automation audit — we will identify exactly which processes are costing you the most time and money.",
};
