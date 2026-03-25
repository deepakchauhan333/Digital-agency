import type { ServicePageData } from "@/types/services";

export const seoPageData: ServicePageData = {
  slug: "seo",
  name: "SEO",
  tagline: "Search Engine Optimization",
  heroHeadline: "Own Page One.\nOwn Your Market.",
  heroSubtext:
    "From technical architecture to programmatic scale — we engineer search visibility that compounds every month and builds permanent traffic moats your competitors cannot buy their way past.",
  heroVisualDesc:
    "Animated line graph rising steeply upward showing organic traffic growth. Floating keyword ranking badges showing positions #1, #2, #3.",
  primaryCTA: "Get Free SEO Audit",
  secondaryCTA: "See SEO Results",
  primaryCTALink: "/contact",
  secondaryCTALink: "/case-studies",

  // Section 2
  pullQuote:
    "You are publishing content. You are paying for SEO. But Google still does not know you exist.",
  problemText:
    "Most businesses treat SEO as a checkbox. A few blog posts. Some meta tags. Maybe a freelancer who sends a monthly report nobody reads. The result is invisible rankings, flat traffic, and competitors owning every search term your customers use. The problem is not effort — it is architecture. SEO without a technical foundation, a content strategy, and an authority-building system is just noise.",

  // Section 3
  sectionLabel: "THE SEO DEPARTMENT",
  sectionTitle: "Search Domination is an Engineering Problem. We Solve It.",
  capabilities: [
    {
      title: "Technical Infrastructure",
      desc: "The foundation. Site speed, crawlability, indexation, Core Web Vitals, structured data. If search engines cannot read your site correctly, nothing else matters.",
    },
    {
      title: "On-Page Authority",
      desc: "Every page optimized with the right keywords, the right structure, and the right signals to tell Google exactly what you are the authority on.",
    },
    {
      title: "Content Architecture",
      desc: "Topic clusters, pillar pages, and semantic content systems that build topical authority in your niche over time.",
    },
    {
      title: "Off-Page Authority",
      desc: "Editorial backlinks, digital PR, and brand mention strategies that build the domain authority search engines reward with top rankings.",
    },
    {
      title: "Local & Specialised SEO",
      desc: "For businesses that need to win locally, in e-commerce, or at enterprise scale — dedicated systems for each environment.",
    },
  ],

  // Section 3B
  subServices: [
    { name: "Technical SEO", slug: "technical-seo", desc: "Site speed, crawlability, Core Web Vitals, structured data, XML sitemaps, JS rendering fixes" },
    { name: "On-Page SEO", slug: "on-page-seo", desc: "Keyword mapping, title tags, header hierarchy, internal linking, E-E-A-T signals, semantic content" },
    { name: "Off-Page SEO & Link Building", slug: "off-page-seo", desc: "Editorial outreach, HARO, guest posts, niche edits, skyscraper campaigns" },
    { name: "Local SEO", slug: "local-seo", desc: "Local citations, NAP consistency, geo-targeted content, local schema markup" },
    { name: "GMB Optimization", slug: "gmb-optimization", desc: "Google Maps ranking, GMB posts, reviews, Q&A, booking integration, profile optimization" },
    { name: "Programmatic SEO", slug: "programmatic-seo", desc: "Template page architecture, database-driven content systems, automated internal linking" },
    { name: "E-Commerce SEO", slug: "ecommerce-seo", desc: "Product page optimization, category architecture, faceted navigation, shopping feed SEO" },
    { name: "Enterprise SEO", slug: "enterprise-seo", desc: "Large-scale technical SEO, multi-team governance, cross-domain strategy, migration management" },
    { name: "Digital PR & Brand Mentions", slug: "digital-pr", desc: "Media outreach, press releases, journalist relationships, unlinked mention conversion" },
    { name: "Parasite SEO", slug: "parasite-seo", desc: "High-DA platform content placement, keyword-targeted articles on Medium, LinkedIn, Reddit" },
    { name: "Entity Authority SEO", slug: "entity-seo", desc: "Knowledge panel creation, Wikipedia strategy, E-E-A-T profile strengthening, entity disambiguation" },
    { name: "SEO Audit & Strategy", slug: "seo-audit", desc: "150-point audit, competitor gap analysis, 90-day roadmap, priority action plan" },
  ],

  // Section 4
  processSteps: [
    { number: "01", title: "Discovery & Audit", desc: "Complete 150-point SEO audit covering technical health, keyword landscape, competitor gaps, and backlink profile." },
    { number: "02", title: "Strategy & Roadmap", desc: "90-day SEO roadmap with clear priorities, traffic projections, and measurable milestones." },
    { number: "03", title: "Technical Foundation", desc: "Fix Core Web Vitals, site architecture, crawl errors, schema markup, and speed optimization." },
    { number: "04", title: "Content & Authority Building", desc: "Execute content plan, publish authority content, run backlink acquisition campaigns simultaneously." },
    { number: "05", title: "Monitor, Report & Compound", desc: "Weekly rank tracking, monthly performance reports, quarterly strategy reviews, continuous optimization." },
  ],

  // Section 5
  caseStudies: [
    {
      industry: "E-COMMERCE",
      client: "Skincare Brand, Delhi",
      result: "+847% organic traffic",
      metrics: ["#1 rankings for 34 keywords", "₹2.1CR revenue from SEO", "DA increased from 12 to 47"],
      timeframe: "11 months",
    },
    {
      industry: "LOCAL SERVICES",
      client: "HVAC Company, Mumbai",
      result: "+520% Google calls",
      metrics: ["#1 Map Pack position", "4x lead volume from organic", "Revenue doubled in 6 months"],
      timeframe: "6 months",
    },
  ],

  // Section 6
  clientProfiles: [
    {
      label: "Profile 1",
      desc: "You have a website with decent content but your traffic has been flat for over a year. You know SEO should be working but you cannot figure out why it is not.",
    },
    {
      label: "Profile 2",
      desc: "You are an e-commerce brand spending heavily on paid ads and you want to build an organic channel that does not stop the moment you pause the budget.",
    },
    {
      label: "Profile 3",
      desc: "You are a local business that needs to dominate Google Maps and local search results in your city before competitors take the remaining spots.",
    },
  ],

  // Section 7
  tools: [
    "Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog",
    "Surfer SEO", "Clearscope", "Google Analytics 4", "Moz",
    "Majestic", "BrightLocal", "Google PageSpeed Insights",
    "Schema.org", "Rank Math", "Search Atlas",
  ],

  // Section 8
  faqs: [
    { question: "How long does SEO take to show results?", answer: "Technical fixes and on-page optimization can show movement in 4-8 weeks. Significant ranking improvements typically happen between months 3-6. The real compounding growth begins from month 6 onward and continues indefinitely." },
    { question: "Do you guarantee first page rankings?", answer: "No legitimate SEO agency can guarantee specific rankings — search algorithms change constantly. What we guarantee is a rigorous process, transparent reporting, and consistent month-on-month traffic growth." },
    { question: "What is included in the free SEO audit?", answer: "A 150-point technical health review, keyword opportunity analysis, competitor gap analysis, and a prioritized action plan. Delivered within 48 hours of your request." },
    { question: "Do I need to create content myself?", answer: "No. Our team handles content strategy, writing, and publishing as part of the service. You approve before anything goes live." },
    { question: "Can you work with my existing website?", answer: "Yes. We work with WordPress, Shopify, Webflow, custom-built sites, and all major CMS platforms." },
    { question: "Will SEO results disappear if I stop?", answer: "Unlike paid ads, SEO results do not disappear when you stop paying. Rankings built on genuine authority are durable. However, competitors are always working — ongoing maintenance protects what has been built." },
  ],

  // Section 9
  relatedServices: [
    { name: "Paid Ads", href: "/services/paid-ads", desc: "Combine SEO with paid campaigns for full SERP domination." },
    { name: "Web Development", href: "/services/web-development", desc: "Technical SEO starts with how your site is built." },
    { name: "Lead Generation", href: "/services/lead-generation", desc: "Convert your organic traffic into qualified leads." },
  ],

  // Section 10
  ctaHeadline: "Your Competitors Are Ranking Right Now. Are You?",
  ctaSubtext:
    "Get a free 150-point SEO audit. We will show you exactly where you are losing traffic and how to fix it — whether you hire us or not.",
};
