import type { ServicePageData } from "@/types/services";

export const socialMediaData: ServicePageData = {
  slug: "social-media", name: "Social Media", tagline: "Social Media Marketing",
  heroHeadline: "Build Audiences\nThat Actually Buy.",
  heroSubtext: "Content strategy, community management, influencer marketing, viral campaigns — we turn social platforms into revenue channels, not vanity metrics.",
  heroVisualDesc: "Social analytics dashboard with engagement metrics, follower growth, and content performance.",
  primaryCTA: "Get Social Media Audit", secondaryCTA: "See Results", primaryCTALink: "/contact", secondaryCTALink: "/case-studies",
  pullQuote: "You are posting every day. But nobody is engaging, buying, or remembering you.",
  problemText: "Social media without strategy is just noise. Posting for the sake of posting creates content graveyards. Without audience research, content pillars, and conversion funnels built into your social strategy, you are entertaining — not selling.",
  sectionLabel: "THE SOCIAL MEDIA DEPARTMENT", sectionTitle: "Social Media That Drives Revenue, Not Just Likes.",
  capabilities: [
    { title: "Content Strategy & Creation", desc: "Data-driven content pillars, editorial calendars, and scroll-stopping creatives." },
    { title: "Community Management", desc: "Real-time engagement, DM handling, crisis management, and brand voice consistency." },
    { title: "Influencer Marketing", desc: "Micro to macro influencer partnerships with measurable ROI tracking." },
    { title: "Social Commerce", desc: "Instagram Shop, Facebook Marketplace — turn social feeds into storefronts." },
    { title: "Analytics & Reporting", desc: "Platform-specific KPIs, attribution modeling, and growth tracking." },
  ],
  subServices: [
    { name: "Instagram Marketing", slug: "instagram-marketing", desc: "Reels, Stories, Feed — full Instagram growth and monetization." },
    { name: "LinkedIn Marketing", slug: "linkedin-marketing", desc: "Thought leadership, employee advocacy, B2B lead generation." },
    { name: "YouTube Channel Management", slug: "youtube-management", desc: "Video SEO, thumbnails, scripting, and channel growth." },
    { name: "Twitter/X Marketing", slug: "twitter-marketing", desc: "Real-time engagement, trend-jacking, thread strategies." },
    { name: "Facebook Marketing", slug: "facebook-marketing", desc: "Groups, pages, Marketplace — full Facebook ecosystem." },
    { name: "Influencer Marketing", slug: "influencer-marketing", desc: "Campaign planning, influencer sourcing, ROI tracking." },
    { name: "Social Media Content Creation", slug: "content-creation", desc: "Graphics, video, copy — platform-native content." },
    { name: "Community Management", slug: "community-management", desc: "Engagement, moderation, crisis response, DM selling." },
    { name: "Social Commerce Setup", slug: "social-commerce", desc: "Instagram Shop, Facebook Catalog, TikTok Shop integration." },
    { name: "Social Media Audit", slug: "social-audit", desc: "Complete audit with competitor benchmarking and strategy." },
  ],
  processSteps: [
    { number: "01", title: "Audit & Research", desc: "Platform audit, audience analysis, competitor benchmarking, content gap analysis." },
    { number: "02", title: "Strategy & Content Pillars", desc: "Define content themes, posting cadence, tone of voice, and conversion goals." },
    { number: "03", title: "Create & Publish", desc: "Content creation, scheduling, A/B testing, hashtag strategy." },
    { number: "04", title: "Engage & Optimize", desc: "Community management, performance analysis, monthly strategy pivots." },
  ],
  caseStudies: [
    { industry: "D2C BRAND", client: "Organic Skincare", result: "+340% engagement", metrics: ["Follower growth 5K → 78K", "Social-driven revenue ₹18L/month", "Influencer campaign ROI 6.2x"], timeframe: "8 months" },
  ],
  clientProfiles: [
    { label: "Profile 1", desc: "You post regularly but your engagement rate is below 1% and you cannot convert followers into customers." },
    { label: "Profile 2", desc: "You know social media matters but you do not have the time or expertise to do it consistently well." },
    { label: "Profile 3", desc: "You want to build a personal brand or company brand that generates leads through LinkedIn or Instagram." },
  ],
  tools: ["Meta Business Suite", "Hootsuite", "Sprout Social", "Canva Pro", "CapCut", "Later", "Brandwatch", "Upfluence", "Creator.co", "TikTok Business"],
  faqs: [
    { question: "Which platforms should my business be on?", answer: "It depends on your audience. We audit where your customers spend time and focus on 2-3 platforms rather than spreading thin across all of them." },
    { question: "How often should we post?", answer: "Quality over quantity. For most businesses, 3-5 high-quality posts per week per platform outperforms daily low-quality content." },
    { question: "Do you create the content or do we?", answer: "We handle everything — strategy, copywriting, design, video editing, and publishing. You approve before it goes live." },
  ],
  relatedServices: [
    { name: "Graphic Design", href: "/services/graphic-design", desc: "Premium visuals for your social presence." },
    { name: "Paid Ads", href: "/services/paid-ads", desc: "Amplify organic reach with paid social campaigns." },
    { name: "Lead Generation", href: "/services/lead-generation", desc: "Convert social engagement into leads." },
  ],
  ctaHeadline: "Your Audience Is Scrolling Past You. Let's Fix That.",
  ctaSubtext: "Get a free social media audit — we will show you what is working, what is not, and what your competitors are doing better.",
};
