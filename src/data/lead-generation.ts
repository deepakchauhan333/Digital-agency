import type { ServicePageData } from "@/types/services";

export const leadGenData: ServicePageData = {
  slug: "lead-generation", name: "Lead Generation", tagline: "B2B & Multi-Channel Leads",
  heroHeadline: "Fill Your Pipeline.\nClose More Deals.",
  heroSubtext: "B2B lead generation, cold outreach, LinkedIn prospecting, email campaigns, landing page funnels — we build systems that deliver qualified leads consistently.",
  heroVisualDesc: "Lead pipeline dashboard showing qualified leads, conversion rates, and deal progress.",
  primaryCTA: "Get Lead Gen Strategy", secondaryCTA: "See Results", primaryCTALink: "/contact", secondaryCTALink: "/case-studies",
  pullQuote: "Your sales team is starving. Not because they cannot sell — because they do not have enough at-bats.",
  problemText: "Lead generation is not about volume. It is about putting your sales team in front of the right people at the right time with the right message. Random cold emails and bought lists do not work. Systems do.",
  sectionLabel: "THE LEAD GENERATION DEPARTMENT", sectionTitle: "Lead Generation That Feeds Your Sales Team Daily.",
  capabilities: [
    { title: "B2B Lead Generation", desc: "Account-based targeting, decision-maker outreach, multi-touch campaigns." },
    { title: "Cold Email Outreach", desc: "Personalized cold email systems with warming, sequencing, and deliverability optimization." },
    { title: "LinkedIn Prospecting", desc: "Profile optimization, connection campaigns, InMail sequences, Sales Navigator." },
    { title: "Landing Page Funnels", desc: "Lead magnets, squeeze pages, nurture sequences — full funnel architecture." },
    { title: "Appointment Setting", desc: "Qualified meetings booked directly on your calendar. Quality over quantity." },
  ],
  subServices: [
    { name: "B2B Lead Generation", slug: "b2b-leads", desc: "Account-based lead gen targeting decision-makers." },
    { name: "Cold Email Campaigns", slug: "cold-email", desc: "High-deliverability cold email outreach systems." },
    { name: "LinkedIn Lead Generation", slug: "linkedin-leads", desc: "LinkedIn prospecting and Sales Navigator campaigns." },
    { name: "Landing Page Funnels", slug: "landing-funnels", desc: "Lead capture funnels with nurture sequences." },
    { name: "Appointment Setting", slug: "appointment-setting", desc: "Qualified meetings booked on your calendar." },
    { name: "Lead Nurturing", slug: "lead-nurturing", desc: "Automated drip campaigns that warm leads over time." },
    { name: "Webinar & Event Leads", slug: "webinar-leads", desc: "Registrations, attendance optimization, post-event follow-up." },
    { name: "Database Building & Enrichment", slug: "database-building", desc: "Verified contact lists built to your ICP specifications." },
    { name: "Referral Program Setup", slug: "referral-program", desc: "Automated referral systems that turn clients into lead sources." },
    { name: "Lead Gen Audit & Strategy", slug: "lead-gen-audit", desc: "Full pipeline audit with opportunities and optimization plan." },
  ],
  processSteps: [
    { number: "01", title: "ICP & Targeting", desc: "Define ideal customer profiles, build prospect lists, research decision-makers." },
    { number: "02", title: "Channel Strategy", desc: "Select outreach channels, write sequences, design funnels." },
    { number: "03", title: "Launch & Iterate", desc: "Deploy campaigns, A/B test messaging, optimize deliverability." },
    { number: "04", title: "Qualify & Deliver", desc: "Score leads, book appointments, deliver qualified opportunities to your sales team." },
  ],
  caseStudies: [
    { industry: "IT SERVICES", client: "Cloud Consulting Firm", result: "47 qualified meetings/month", metrics: ["Cold email reply rate 12%", "LinkedIn acceptance rate 34%", "Pipeline value ₹2.8Cr per quarter"], timeframe: "3 months" },
  ],
  clientProfiles: [
    { label: "Profile 1", desc: "You have a great product or service but your pipeline is inconsistent and you rely too heavily on referrals." },
    { label: "Profile 2", desc: "You want to enter a new market or vertical and need to build pipeline from zero." },
    { label: "Profile 3", desc: "Your sales team is good at closing but they don't have enough meetings to hit their targets." },
  ],
  tools: ["Apollo.io", "Lemlist", "Instantly", "LinkedIn Sales Navigator", "Smartlead", "Clay", "HubSpot", "Calendly", "ZoomInfo", "Clearbit"],
  faqs: [
    { question: "How do you ensure lead quality?", answer: "We build campaigns around your Ideal Customer Profile. Every lead matches your criteria for industry, company size, title, and intent signals." },
    { question: "How many leads can you generate per month?", answer: "Depends on your ICP and channels. Typically 30-100+ qualified leads per month for B2B businesses." },
    { question: "Do you just generate leads or also book meetings?", answer: "Both. Our appointment setting service delivers qualified meetings directly on your sales team's calendar." },
  ],
  relatedServices: [
    { name: "Paid Ads", href: "/services/paid-ads", desc: "Inbound leads through paid campaigns." },
    { name: "AI Automation", href: "/services/ai-automation", desc: "Automate lead scoring and routing." },
    { name: "Social Media", href: "/services/social-media", desc: "Build inbound lead channels through content." },
  ],
  ctaHeadline: "Your Pipeline Should Never Run Dry. Let's Build a System.",
  ctaSubtext: "Get a free pipeline audit — we will show you exactly where leads are leaking and how to fix it.",
};
