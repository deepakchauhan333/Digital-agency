"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, BarChart3, Target, Zap } from "lucide-react";
import styles from "./ServiceHeroDashboard.module.css";

export interface DashboardMetric {
  value: string;
  label: string;
  trend?: "up" | "down";
  color?: string;
}

export interface DashboardConfig {
  title: string;
  /** SVG path "d" attribute — the line graph shape */
  graphPath: string;
  /** Gradient color for the area fill */
  graphColor: string;
  /** Primary metric shown large */
  primaryMetric: DashboardMetric;
  /** Secondary metric shown smaller */
  secondaryMetric: DashboardMetric;
  /** Optional third mini metric */
  tertiaryMetric?: DashboardMetric;
}

// ===== Pre-built graph paths for different growth patterns =====
export const GRAPH_PATHS = {
  // Steep growth (SEO, organic traffic)
  steepGrowth: "M0,180 C40,175 70,168 110,150 C150,130 180,100 220,65 C260,35 300,20 350,10 L400,5",
  // Gradual growth (content, social)
  gradualGrowth: "M0,180 C60,170 100,155 160,135 C220,115 280,90 340,60 L400,35",
  // Exponential (programmatic SEO, viral)
  exponential: "M0,185 C80,182 140,178 200,170 C250,155 290,120 340,60 L400,10",
  // Hockey stick (app downloads, lead gen)
  hockeyStick: "M0,180 C60,178 120,175 180,172 C230,165 270,140 320,80 L400,10",
  // Steady decline (cost reduction)
  decline: "M0,30 C50,35 100,50 160,80 C220,110 280,140 340,165 L400,178",
  // Wave growth (seasonal)
  waveGrowth: "M0,170 C40,150 70,120 110,130 C150,140 180,100 220,80 C260,60 300,40 350,25 L400,15",
  // Quick spike (paid ads, launches)
  spike: "M0,180 C30,175 60,160 100,100 C130,60 160,40 200,30 C250,25 310,20 370,15 L400,12",
  // Plateau then growth (rebrand)
  plateauGrowth: "M0,140 C40,138 80,140 130,138 C170,135 200,120 240,80 C280,45 330,25 380,15 L400,12",
};

// ===== Pre-built configs for each main service =====
export const SERVICE_DASHBOARDS: Record<string, DashboardConfig> = {
  seo: {
    title: "SEO Performance",
    graphPath: GRAPH_PATHS.steepGrowth,
    graphColor: "#4edea3",
    primaryMetric: { value: "+847%", label: "Organic Traffic", trend: "up" },
    secondaryMetric: { value: "#1", label: "34 Keywords", color: "#f7be1d" },
    tertiaryMetric: { value: "DA 47", label: "From DA 12", trend: "up" },
  },
  "paid-ads": {
    title: "Ad Performance",
    graphPath: GRAPH_PATHS.spike,
    graphColor: "#f7be1d",
    primaryMetric: { value: "8.7x", label: "ROAS Achieved", trend: "up" },
    secondaryMetric: { value: "-62%", label: "Cost Per Lead", trend: "down", color: "#4edea3" },
    tertiaryMetric: { value: "₹50Cr+", label: "Ad Spend Managed" },
  },
  "social-media": {
    title: "Social Growth",
    graphPath: GRAPH_PATHS.gradualGrowth,
    graphColor: "#4edea3",
    primaryMetric: { value: "+340%", label: "Engagement Rate", trend: "up" },
    secondaryMetric: { value: "78K", label: "Followers Gained", color: "#f7be1d" },
    tertiaryMetric: { value: "6.2x", label: "Influencer ROI", trend: "up" },
  },
  "web-development": {
    title: "Site Performance",
    graphPath: GRAPH_PATHS.plateauGrowth,
    graphColor: "#4edea3",
    primaryMetric: { value: "+180%", label: "Conversion Rate", trend: "up" },
    secondaryMetric: { value: "0.9s", label: "Load Time", trend: "down", color: "#f7be1d" },
    tertiaryMetric: { value: "-67%", label: "Bounce Rate", trend: "down" },
  },
  "app-development": {
    title: "App Metrics",
    graphPath: GRAPH_PATHS.hockeyStick,
    graphColor: "#f7be1d",
    primaryMetric: { value: "50K+", label: "Downloads", trend: "up" },
    secondaryMetric: { value: "4.8★", label: "App Store Rating", color: "#4edea3" },
    tertiaryMetric: { value: "42%", label: "Retention Rate" },
  },
  "graphic-design": {
    title: "Brand Impact",
    graphPath: GRAPH_PATHS.plateauGrowth,
    graphColor: "#f7be1d",
    primaryMetric: { value: "+280%", label: "Brand Recognition", trend: "up" },
    secondaryMetric: { value: "4.8", label: "Trust Score", color: "#4edea3" },
    tertiaryMetric: { value: "2.5x", label: "Post-Rebrand Downloads", trend: "up" },
  },
  "ai-automation": {
    title: "Automation ROI",
    graphPath: GRAPH_PATHS.decline,
    graphColor: "#4edea3",
    primaryMetric: { value: "40hrs", label: "Saved Per Week", trend: "up" },
    secondaryMetric: { value: "30s", label: "Response Time", trend: "down", color: "#f7be1d" },
    tertiaryMetric: { value: "+35%", label: "Conversion Boost", trend: "up" },
  },
  "lead-generation": {
    title: "Pipeline Growth",
    graphPath: GRAPH_PATHS.hockeyStick,
    graphColor: "#f7be1d",
    primaryMetric: { value: "47", label: "Meetings/Month", trend: "up" },
    secondaryMetric: { value: "12%", label: "Email Reply Rate", color: "#4edea3" },
    tertiaryMetric: { value: "₹2.8Cr", label: "Pipeline/Quarter", trend: "up" },
  },
};

// ===== Pre-built configs for sub-services =====
export const SUB_SERVICE_DASHBOARDS: Record<string, DashboardConfig> = {
  // SEO Sub-services
  "technical-seo": { title: "Technical Health", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "0.9s", label: "Load Time Achieved", trend: "down" }, secondaryMetric: { value: "100", label: "Core Web Vitals Score", color: "#4edea3" }, tertiaryMetric: { value: "0", label: "Crawl Errors", trend: "down" } },
  "on-page-seo": { title: "On-Page Score", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "+340%", label: "Organic Leads", trend: "up" }, secondaryMetric: { value: "2.3x", label: "CTR Improvement", color: "#f7be1d" }, tertiaryMetric: { value: "+12", label: "Avg Position Gain", trend: "up" } },
  "off-page-seo": { title: "Authority Growth", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "DA 52", label: "Domain Authority", trend: "up" }, secondaryMetric: { value: "127", label: "Editorial Backlinks", color: "#f7be1d" }, tertiaryMetric: { value: "67", label: "Top 3 Keywords", trend: "up" } },
  "local-seo": { title: "Local Rankings", graphPath: GRAPH_PATHS.spike, graphColor: "#4edea3", primaryMetric: { value: "#1", label: "Map Pack Position", trend: "up" }, secondaryMetric: { value: "+520%", label: "Google Calls", color: "#f7be1d" }, tertiaryMetric: { value: "3x", label: "Walk-ins Increase", trend: "up" } },
  "gmb-optimization": { title: "GBP Performance", graphPath: GRAPH_PATHS.spike, graphColor: "#4edea3", primaryMetric: { value: "#1", label: "Maps Ranking", trend: "up" }, secondaryMetric: { value: "2x", label: "Reviews Doubled", color: "#f7be1d" }, tertiaryMetric: { value: "+520%", label: "Phone Calls", trend: "up" } },
  "programmatic-seo": { title: "Scale Metrics", graphPath: GRAPH_PATHS.exponential, graphColor: "#4edea3", primaryMetric: { value: "12K+", label: "Pages Indexed", trend: "up" }, secondaryMetric: { value: "8x", label: "Long-tail Traffic", color: "#f7be1d" }, tertiaryMetric: { value: "4x", label: "Organic Revenue", trend: "up" } },
  "ecommerce-seo": { title: "Store Organic", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "+340%", label: "Organic Revenue", trend: "up" }, secondaryMetric: { value: "5x", label: "Product Rankings", color: "#f7be1d" }, tertiaryMetric: { value: "8x", label: "Free Shopping Traffic", trend: "up" } },
  "enterprise-seo": { title: "Migration Safety", graphPath: GRAPH_PATHS.plateauGrowth, graphColor: "#4edea3", primaryMetric: { value: "0%", label: "Traffic Loss", trend: "down" }, secondaryMetric: { value: "50K", label: "Pages Migrated", color: "#f7be1d" }, tertiaryMetric: { value: "100%", label: "Revenue Maintained" } },
  "digital-pr": { title: "Media Impact", graphPath: GRAPH_PATHS.waveGrowth, graphColor: "#f7be1d", primaryMetric: { value: "47", label: "Media Placements", trend: "up" }, secondaryMetric: { value: "DA 60+", label: "Link Sources", color: "#4edea3" }, tertiaryMetric: { value: "3x", label: "Brand Search Volume", trend: "up" } },
  "parasite-seo": { title: "Platform Rankings", graphPath: GRAPH_PATHS.spike, graphColor: "#4edea3", primaryMetric: { value: "Page 1", label: "In 3 Weeks", trend: "up" }, secondaryMetric: { value: "#3", label: "LinkedIn Article", color: "#f7be1d" } },
  "entity-seo": { title: "Entity Authority", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#f7be1d", primaryMetric: { value: "Live", label: "Knowledge Panel", trend: "up" }, secondaryMetric: { value: "E-E-A-T", label: "Scores Boosted", color: "#4edea3" } },
  "seo-audit": { title: "Audit Impact", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "+240%", label: "Avg Traffic Gain", trend: "up" }, secondaryMetric: { value: "150", label: "Point Audit", color: "#f7be1d" }, tertiaryMetric: { value: "48hrs", label: "Delivery Time" } },
  // Paid Ads Sub-services
  "google-ads": { title: "Google Ads", graphPath: GRAPH_PATHS.spike, graphColor: "#f7be1d", primaryMetric: { value: "5.4x", label: "ROAS Achieved", trend: "up" }, secondaryMetric: { value: "-62%", label: "CPA Reduced", color: "#4edea3" }, tertiaryMetric: { value: "3.2x", label: "Lead Volume", trend: "up" } },
  "meta-ads": { title: "Meta Ads", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#f7be1d", primaryMetric: { value: "8.7x", label: "ROAS Peak", trend: "up" }, secondaryMetric: { value: "₹340", label: "CPA (from ₹890)", trend: "down", color: "#4edea3" } },
  "linkedin-ads": { title: "LinkedIn Ads", graphPath: GRAPH_PATHS.hockeyStick, graphColor: "#f7be1d", primaryMetric: { value: "34%", label: "Acceptance Rate", trend: "up" }, secondaryMetric: { value: "₹2.8Cr", label: "Pipeline/Quarter", color: "#4edea3" } },
  "youtube-ads": { title: "YouTube Ads", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#f7be1d", primaryMetric: { value: "65%", label: "View Rate", trend: "up" }, secondaryMetric: { value: "4.2x", label: "Brand Lift", color: "#4edea3" } },
  "display-remarketing": { title: "Remarketing", graphPath: GRAPH_PATHS.waveGrowth, graphColor: "#f7be1d", primaryMetric: { value: "+180%", label: "Return Visits", trend: "up" }, secondaryMetric: { value: "3.8x", label: "ROAS", color: "#4edea3" } },
  "shopping-ads": { title: "Shopping Ads", graphPath: GRAPH_PATHS.spike, graphColor: "#f7be1d", primaryMetric: { value: "12x", label: "ROAS Peak", trend: "up" }, secondaryMetric: { value: "+520%", label: "Impression Share", color: "#4edea3" } },
  "ppc-audit": { title: "PPC Audit", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#f7be1d", primaryMetric: { value: "30%", label: "Waste Identified", trend: "down" }, secondaryMetric: { value: "2x", label: "Efficiency Gain", color: "#4edea3" } },
  "performance-max": { title: "PMax Campaign", graphPath: GRAPH_PATHS.exponential, graphColor: "#f7be1d", primaryMetric: { value: "5.4x", label: "ROAS", trend: "up" }, secondaryMetric: { value: "+180%", label: "Conversions", color: "#4edea3" } },
  "amazon-ads": { title: "Amazon Ads", graphPath: GRAPH_PATHS.hockeyStick, graphColor: "#f7be1d", primaryMetric: { value: "8.2x", label: "ACoS Optimized", trend: "up" }, secondaryMetric: { value: "+340%", label: "Sales Growth", color: "#4edea3" } },
  "app-install-ads": { title: "App Install", graphPath: GRAPH_PATHS.exponential, graphColor: "#f7be1d", primaryMetric: { value: "50K+", label: "Installs", trend: "up" }, secondaryMetric: { value: "₹12", label: "Cost Per Install", trend: "down", color: "#4edea3" } },
  // Social Media Sub-services
  "instagram-marketing": { title: "Instagram Growth", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "78K", label: "Followers Gained", trend: "up" }, secondaryMetric: { value: "6.2%", label: "Engagement Rate", color: "#f7be1d" } },
  "linkedin-marketing": { title: "LinkedIn Growth", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "5x", label: "Profile Views", trend: "up" }, secondaryMetric: { value: "34%", label: "Connection Rate", color: "#f7be1d" } },
  "youtube-marketing": { title: "YouTube Growth", graphPath: GRAPH_PATHS.hockeyStick, graphColor: "#4edea3", primaryMetric: { value: "1M+", label: "Views Generated", trend: "up" }, secondaryMetric: { value: "45%", label: "Watch Time", color: "#f7be1d" } },
  "twitter-marketing": { title: "X Growth", graphPath: GRAPH_PATHS.waveGrowth, graphColor: "#4edea3", primaryMetric: { value: "8x", label: "Impressions", trend: "up" }, secondaryMetric: { value: "4.2%", label: "Engagement", color: "#f7be1d" } },
  "facebook-marketing": { title: "Facebook Growth", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "₹18L", label: "Monthly Revenue", trend: "up" }, secondaryMetric: { value: "3.5x", label: "Reach Increase", color: "#f7be1d" } },
  "influencer-marketing": { title: "Influencer ROI", graphPath: GRAPH_PATHS.spike, graphColor: "#f7be1d", primaryMetric: { value: "6.2x", label: "Campaign ROI", trend: "up" }, secondaryMetric: { value: "2M+", label: "Impressions", color: "#4edea3" } },
  "social-media-audit": { title: "Social Audit", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "47", label: "Improvements Found", trend: "up" }, secondaryMetric: { value: "3x", label: "Potential Growth", color: "#f7be1d" } },
  "content-calendar": { title: "Content Plan", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "90", label: "Days Planned", trend: "up" }, secondaryMetric: { value: "+180%", label: "Consistency Gain", color: "#f7be1d" } },
  "community-management": { title: "Community", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "95%", label: "Response Rate", trend: "up" }, secondaryMetric: { value: "<1hr", label: "Avg Response Time", color: "#f7be1d" } },
  "social-commerce": { title: "Social Commerce", graphPath: GRAPH_PATHS.hockeyStick, graphColor: "#f7be1d", primaryMetric: { value: "₹18L", label: "Monthly Revenue", trend: "up" }, secondaryMetric: { value: "4.2x", label: "Conversion Rate", color: "#4edea3" } },
  // Web Dev Sub-services
  "custom-website": { title: "Custom Web", graphPath: GRAPH_PATHS.plateauGrowth, graphColor: "#4edea3", primaryMetric: { value: "+180%", label: "Conversion Rate", trend: "up" }, secondaryMetric: { value: "0.9s", label: "Load Speed", color: "#f7be1d" } },
  "ecommerce-development": { title: "E-Commerce", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#f7be1d", primaryMetric: { value: "3x", label: "Online Revenue", trend: "up" }, secondaryMetric: { value: "99.9%", label: "Uptime", color: "#4edea3" } },
  "wordpress-development": { title: "WordPress", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "A+", label: "GTmetrix Score", trend: "up" }, secondaryMetric: { value: "0.8s", label: "TTFB", color: "#f7be1d" } },
  "landing-pages": { title: "Landing Pages", graphPath: GRAPH_PATHS.spike, graphColor: "#f7be1d", primaryMetric: { value: "12%", label: "Conversion Rate", trend: "up" }, secondaryMetric: { value: "-67%", label: "Bounce Rate", trend: "down", color: "#4edea3" } },
  "web-app-development": { title: "Web App", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "10M+", label: "Users Served", trend: "up" }, secondaryMetric: { value: "99.9%", label: "Uptime SLA", color: "#f7be1d" } },
  "headless-cms": { title: "Headless CMS", graphPath: GRAPH_PATHS.plateauGrowth, graphColor: "#4edea3", primaryMetric: { value: "3x", label: "Content Velocity", trend: "up" }, secondaryMetric: { value: "0.5s", label: "API Response", color: "#f7be1d" } },
  "website-redesign": { title: "Redesign Impact", graphPath: GRAPH_PATHS.plateauGrowth, graphColor: "#4edea3", primaryMetric: { value: "+180%", label: "Conversion Lift", trend: "up" }, secondaryMetric: { value: "3.2x", label: "Time on Site", color: "#f7be1d" } },
  "speed-optimization": { title: "Speed Gains", graphPath: GRAPH_PATHS.decline, graphColor: "#4edea3", primaryMetric: { value: "0.9s", label: "Load Time", trend: "down" }, secondaryMetric: { value: "100", label: "Lighthouse Score", color: "#f7be1d" } },
  "ui-ux-design": { title: "UX Metrics", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#f7be1d", primaryMetric: { value: "+45%", label: "Task Completion", trend: "up" }, secondaryMetric: { value: "-60%", label: "Support Tickets", trend: "down", color: "#4edea3" } },
  "api-development": { title: "API Performance", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "<50ms", label: "Avg Response", trend: "down" }, secondaryMetric: { value: "99.99%", label: "Uptime", color: "#f7be1d" } },
  // App Dev Sub-services
  "ios-development": { title: "iOS App", graphPath: GRAPH_PATHS.hockeyStick, graphColor: "#f7be1d", primaryMetric: { value: "4.8★", label: "App Store Rating", trend: "up" }, secondaryMetric: { value: "50K+", label: "Downloads", color: "#4edea3" } },
  "android-development": { title: "Android App", graphPath: GRAPH_PATHS.hockeyStick, graphColor: "#4edea3", primaryMetric: { value: "4.7★", label: "Play Store Rating", trend: "up" }, secondaryMetric: { value: "100K+", label: "Downloads", color: "#f7be1d" } },
  "cross-platform": { title: "Cross Platform", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "40%", label: "Dev Cost Saved", trend: "down" }, secondaryMetric: { value: "2x", label: "Faster Launch", color: "#f7be1d" } },
  "flutter-development": { title: "Flutter App", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "60fps", label: "Smooth UI", trend: "up" }, secondaryMetric: { value: "95%", label: "Code Sharing", color: "#f7be1d" } },
  "react-native": { title: "React Native", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#f7be1d", primaryMetric: { value: "90%", label: "Code Reuse", trend: "up" }, secondaryMetric: { value: "2x", label: "Faster Dev", color: "#4edea3" } },
  "mvp-development": { title: "MVP Launch", graphPath: GRAPH_PATHS.exponential, graphColor: "#f7be1d", primaryMetric: { value: "8wks", label: "To Market", trend: "down" }, secondaryMetric: { value: "PMF", label: "Product-Market Fit", color: "#4edea3" } },
  "app-ui-ux": { title: "App UX", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "42%", label: "Retention Rate", trend: "up" }, secondaryMetric: { value: "4.8★", label: "User Rating", color: "#f7be1d" } },
  "app-maintenance": { title: "App Health", graphPath: GRAPH_PATHS.plateauGrowth, graphColor: "#4edea3", primaryMetric: { value: "99.9%", label: "Uptime", trend: "up" }, secondaryMetric: { value: "0", label: "Critical Bugs", trend: "down", color: "#f7be1d" } },
  "pwa-development": { title: "PWA Metrics", graphPath: GRAPH_PATHS.spike, graphColor: "#4edea3", primaryMetric: { value: "3x", label: "Engagement", trend: "up" }, secondaryMetric: { value: "68%", label: "Offline Usage", color: "#f7be1d" } },
  "app-store-optimization": { title: "ASO Results", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#f7be1d", primaryMetric: { value: "+320%", label: "Organic Installs", trend: "up" }, secondaryMetric: { value: "#3", label: "Category Rank", color: "#4edea3" } },
  // Graphic Design Sub-services
  "brand-identity": { title: "Brand Impact", graphPath: GRAPH_PATHS.plateauGrowth, graphColor: "#f7be1d", primaryMetric: { value: "+280%", label: "Brand Recognition", trend: "up" }, secondaryMetric: { value: "4.8", label: "Trust Score", color: "#4edea3" } },
  "logo-design": { title: "Brand Identity", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#f7be1d", primaryMetric: { value: "100%", label: "Brand Consistency", trend: "up" }, secondaryMetric: { value: "+45%", label: "Recognition Lift", color: "#4edea3" } },
  "social-media-creatives": { title: "Creative Impact", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#f7be1d", primaryMetric: { value: "3.2x", label: "Engagement Boost", trend: "up" }, secondaryMetric: { value: "+180%", label: "Share Rate", color: "#4edea3" } },
  "presentation-design": { title: "Presentation", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#f7be1d", primaryMetric: { value: "85%", label: "Close Rate", trend: "up" }, secondaryMetric: { value: "3x", label: "Investor Interest", color: "#4edea3" } },
  "packaging-design": { title: "Packaging ROI", graphPath: GRAPH_PATHS.plateauGrowth, graphColor: "#f7be1d", primaryMetric: { value: "2.5x", label: "Shelf Appeal", trend: "up" }, secondaryMetric: { value: "+60%", label: "Purchase Intent", color: "#4edea3" } },
  "motion-graphics": { title: "Motion Impact", graphPath: GRAPH_PATHS.spike, graphColor: "#f7be1d", primaryMetric: { value: "+240%", label: "View Duration", trend: "up" }, secondaryMetric: { value: "4x", label: "Ad Recall", color: "#4edea3" } },
  "infographic-design": { title: "Infographic", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "30x", label: "More Shared", trend: "up" }, secondaryMetric: { value: "+400%", label: "Backlinks Earned", color: "#f7be1d" } },
  "print-design": { title: "Print Impact", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#f7be1d", primaryMetric: { value: "+85%", label: "Brand Recall", trend: "up" }, secondaryMetric: { value: "3x", label: "Event Engagement", color: "#4edea3" } },
  "ad-creatives": { title: "Ad Creative", graphPath: GRAPH_PATHS.spike, graphColor: "#f7be1d", primaryMetric: { value: "+120%", label: "CTR Improvement", trend: "up" }, secondaryMetric: { value: "-40%", label: "CPA Reduction", trend: "down", color: "#4edea3" } },
  "ui-design-systems": { title: "Design System", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "60%", label: "Faster Dev", trend: "up" }, secondaryMetric: { value: "100%", label: "Brand Consistency", color: "#f7be1d" } },
  // AI Automation Sub-services
  "crm-automation": { title: "CRM Automation", graphPath: GRAPH_PATHS.decline, graphColor: "#4edea3", primaryMetric: { value: "100%", label: "CRM Adoption", trend: "up" }, secondaryMetric: { value: "30s", label: "Response Time", trend: "down", color: "#f7be1d" } },
  "chatbot-development": { title: "Chatbot ROI", graphPath: GRAPH_PATHS.exponential, graphColor: "#4edea3", primaryMetric: { value: "80%", label: "Queries Resolved", trend: "up" }, secondaryMetric: { value: "24/7", label: "Availability", color: "#f7be1d" } },
  "workflow-automation": { title: "Workflow", graphPath: GRAPH_PATHS.decline, graphColor: "#4edea3", primaryMetric: { value: "40hrs", label: "Saved/Week", trend: "up" }, secondaryMetric: { value: "0", label: "Manual Errors", trend: "down", color: "#f7be1d" } },
  "email-automation": { title: "Email Sequences", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#f7be1d", primaryMetric: { value: "45%", label: "Open Rate", trend: "up" }, secondaryMetric: { value: "12%", label: "Reply Rate", color: "#4edea3" } },
  "ai-content": { title: "AI Content", graphPath: GRAPH_PATHS.exponential, graphColor: "#4edea3", primaryMetric: { value: "10x", label: "Content Output", trend: "up" }, secondaryMetric: { value: "95%", label: "Quality Score", color: "#f7be1d" } },
  "data-analytics": { title: "Analytics", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#4edea3", primaryMetric: { value: "360°", label: "Customer View", trend: "up" }, secondaryMetric: { value: "Real-time", label: "Dashboards", color: "#f7be1d" } },
  "ai-lead-scoring": { title: "Lead Scoring", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#f7be1d", primaryMetric: { value: "+67%", label: "Lead Quality", trend: "up" }, secondaryMetric: { value: "3x", label: "Sales Efficiency", color: "#4edea3" } },
  "process-mining": { title: "Process Mining", graphPath: GRAPH_PATHS.decline, graphColor: "#4edea3", primaryMetric: { value: "-45%", label: "Process Time", trend: "down" }, secondaryMetric: { value: "12", label: "Bottlenecks Found", color: "#f7be1d" } },
  "predictive-analytics": { title: "Predictions", graphPath: GRAPH_PATHS.exponential, graphColor: "#4edea3", primaryMetric: { value: "89%", label: "Accuracy Rate", trend: "up" }, secondaryMetric: { value: "+40%", label: "Revenue Forecast", color: "#f7be1d" } },
  "marketing-automation": { title: "Marketing Auto", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#f7be1d", primaryMetric: { value: "5x", label: "Campaign Output", trend: "up" }, secondaryMetric: { value: "+180%", label: "Lead Volume", color: "#4edea3" } },
  // Lead Gen Sub-services
  "b2b-lead-generation": { title: "B2B Pipeline", graphPath: GRAPH_PATHS.hockeyStick, graphColor: "#f7be1d", primaryMetric: { value: "47", label: "Meetings/Month", trend: "up" }, secondaryMetric: { value: "₹2.8Cr", label: "Pipeline/Quarter", color: "#4edea3" } },
  "email-outreach": { title: "Email Outreach", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#f7be1d", primaryMetric: { value: "12%", label: "Reply Rate", trend: "up" }, secondaryMetric: { value: "45%", label: "Open Rate", color: "#4edea3" } },
  "linkedin-outreach": { title: "LinkedIn Outreach", graphPath: GRAPH_PATHS.hockeyStick, graphColor: "#f7be1d", primaryMetric: { value: "34%", label: "Acceptance Rate", trend: "up" }, secondaryMetric: { value: "47", label: "Meetings/Month", color: "#4edea3" } },
  "appointment-setting": { title: "Appointments", graphPath: GRAPH_PATHS.spike, graphColor: "#f7be1d", primaryMetric: { value: "85%", label: "Show-up Rate", trend: "up" }, secondaryMetric: { value: "12+", label: "Calls/Day", color: "#4edea3" } },
  "lead-database": { title: "Lead Database", graphPath: GRAPH_PATHS.exponential, graphColor: "#4edea3", primaryMetric: { value: "50K+", label: "Verified Leads", trend: "up" }, secondaryMetric: { value: "98%", label: "Data Accuracy", color: "#f7be1d" } },
  "cold-calling": { title: "Cold Calling", graphPath: GRAPH_PATHS.spike, graphColor: "#f7be1d", primaryMetric: { value: "15%", label: "Conversion Rate", trend: "up" }, secondaryMetric: { value: "200+", label: "Calls/Day", color: "#4edea3" } },
  "webinar-funnel": { title: "Webinar Funnel", graphPath: GRAPH_PATHS.hockeyStick, graphColor: "#f7be1d", primaryMetric: { value: "42%", label: "Registration Rate", trend: "up" }, secondaryMetric: { value: "18%", label: "Close Rate", color: "#4edea3" } },
  "lead-nurturing": { title: "Lead Nurture", graphPath: GRAPH_PATHS.gradualGrowth, graphColor: "#4edea3", primaryMetric: { value: "3x", label: "Pipeline Value", trend: "up" }, secondaryMetric: { value: "+67%", label: "MQL to SQL", color: "#f7be1d" } },
  "intent-data": { title: "Intent Signals", graphPath: GRAPH_PATHS.exponential, graphColor: "#4edea3", primaryMetric: { value: "5x", label: "Qualified Leads", trend: "up" }, secondaryMetric: { value: "89%", label: "Intent Accuracy", color: "#f7be1d" } },
  "account-based-marketing": { title: "ABM Results", graphPath: GRAPH_PATHS.steepGrowth, graphColor: "#f7be1d", primaryMetric: { value: "285%", label: "Deal Size Increase", trend: "up" }, secondaryMetric: { value: "4.2x", label: "Win Rate", color: "#4edea3" } },
};

// ======= THE COMPONENT =======
export default function ServiceHeroDashboard({ config }: { config: DashboardConfig }) {
  const fillPath = config.graphPath + " L400,200 L0,200Z";

  return (
    <div className={styles.dashboard}>
      {/* Header Bar */}
      <div className={styles.header}>
        <div className={styles.dots}>
          <span style={{ background: "#ff5f57" }} />
          <span style={{ background: "#febc2e" }} />
          <span style={{ background: "#28c840" }} />
        </div>
        <span className={styles.title}>{config.title}</span>
      </div>

      {/* Graph Area */}
      <div className={styles.body}>
        <svg viewBox="0 0 400 200" className={styles.svg} role="img" aria-label={`${config.title} growth chart`}>
          <defs>
            <linearGradient id={`grad-${config.title.replace(/\s/g, "")}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={config.graphColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor={config.graphColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid Lines */}
          {[40, 80, 120, 160].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(218,226,253,0.06)" strokeWidth="1" />
          ))}
          {/* Animated Line */}
          <motion.path
            d={config.graphPath}
            fill="none"
            stroke={config.graphColor}
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          />
          {/* Area Fill */}
          <motion.path
            d={fillPath}
            fill={`url(#grad-${config.title.replace(/\s/g, "")})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          />
        </svg>

        {/* Primary Metric Card */}
        <motion.div
          className={styles.metricCard}
          style={{ top: "12%", right: "4%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.8 }}
        >
          {config.primaryMetric.trend === "up" ? (
            <TrendingUp size={16} color={config.graphColor} />
          ) : config.primaryMetric.trend === "down" ? (
            <TrendingDown size={16} color={config.graphColor} />
          ) : (
            <Zap size={16} color={config.graphColor} />
          )}
          <span className={styles.metricValue}>{config.primaryMetric.value}</span>
          <span className={styles.metricLabel}>{config.primaryMetric.label}</span>
        </motion.div>

        {/* Secondary Metric Card */}
        <motion.div
          className={styles.metricCard}
          style={{ top: "50%", left: "4%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 2.1 }}
        >
          <BarChart3 size={16} color={config.secondaryMetric.color || "#f7be1d"} />
          <span className={styles.metricValue}>{config.secondaryMetric.value}</span>
          <span className={styles.metricLabel}>{config.secondaryMetric.label}</span>
        </motion.div>

        {/* Tertiary Metric */}
        {config.tertiaryMetric && (
          <motion.div
            className={styles.miniMetric}
            style={{ bottom: "8%", right: "4%" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 2.5 }}
          >
            <Target size={12} color={config.graphColor} />
            <span>{config.tertiaryMetric.value}</span>
            <span className={styles.miniLabel}>{config.tertiaryMetric.label}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
