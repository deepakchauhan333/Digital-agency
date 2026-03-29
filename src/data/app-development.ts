import type { ServicePageData } from "@/types/services";

export const appDevData: ServicePageData = {
  slug: "app-development", name: "App Development", tagline: "iOS, Android & Cross-Platform",
  heroHeadline: "Apps That Users Love.\nApps That Businesses Need.",
  heroSubtext: "Native iOS, Android, React Native, Flutter — we build mobile applications that solve real problems, retain users, and generate revenue.",
  heroVisualDesc: "Mobile app screens showing onboarding flow, dashboard, and analytics.",
  primaryCTA: "Build My App Idea", secondaryCTA: "See App Portfolio", primaryCTALink: "/contact", secondaryCTALink: "/case-studies",
  pullQuote: "An app is not a feature list. It is a user experience that either hooks people or loses them in 30 seconds.",
  problemText: "80% of apps are abandoned after first use. The problem is not technology — it is product thinking. Without user research, UX strategy, and retention mechanics built in from day one, you are building expensive software nobody uses.",
  sectionLabel: "THE APP DEVELOPMENT DEPARTMENT", sectionTitle: "Mobile Apps Engineered for Retention & Revenue.",
  capabilities: [
    { title: "Native iOS Development", desc: "Swift, SwiftUI — polished iOS apps that leverage Apple ecosystem features." },
    { title: "Native Android Development", desc: "Kotlin, Jetpack Compose — high-performance Android apps for all devices." },
    { title: "Cross-Platform Development", desc: "React Native, Flutter — one codebase, both platforms, native performance." },
    { title: "UI/UX Design", desc: "User research, wireframing, prototyping, design systems — intuitive interfaces." },
    { title: "Backend & APIs", desc: "Node.js, Python, Firebase, AWS — scalable backend infrastructure." },
  ],
  subServices: [
    { name: "iOS App Development", slug: "ios-app", desc: "Native iOS apps with Swift and SwiftUI." },
    { name: "Android App Development", slug: "android-app", desc: "Native Android apps with Kotlin." },
    { name: "React Native Development", slug: "react-native", desc: "Cross-platform apps with React Native." },
    { name: "Flutter Development", slug: "flutter", desc: "Beautiful cross-platform apps with Flutter." },
    { name: "App UI/UX Design", slug: "app-design", desc: "User-centered design for mobile experiences." },
    { name: "App Backend Development", slug: "app-backend", desc: "Scalable APIs and cloud infrastructure." },
    { name: "App Maintenance & Support", slug: "app-maintenance", desc: "Updates, bug fixes, performance monitoring." },
    { name: "MVP Development", slug: "mvp-development", desc: "Validate your idea fast with a minimum viable product." },
    { name: "App Store Optimization", slug: "aso", desc: "App Store SEO — rankings, screenshots, descriptions." },
    { name: "App Analytics & Growth", slug: "app-analytics", desc: "User behavior tracking, retention analysis, growth experiments." },
  ],
  processSteps: [
    { number: "01", title: "Discovery & Product Strategy", desc: "User research, competitor analysis, feature prioritization, technical architecture." },
    { number: "02", title: "UI/UX Design", desc: "Wireframes, interactive prototypes, user testing, design system." },
    { number: "03", title: "Agile Development", desc: "2-week sprints, continuous delivery, regular demo sessions." },
    { number: "04", title: "Launch & Growth", desc: "App Store submission, ASO, analytics setup, iterative improvements." },
  ],
  caseStudies: [
    { industry: "HEALTHTECH", client: "Telemedicine Platform", result: "50K+ Downloads", metrics: ["4.8★ App Store rating", "Daily active users 12K", "Retention rate 42%"], timeframe: "14 weeks" },
  ],
  clientProfiles: [
    { label: "Profile 1", desc: "You have a validated idea and need a technical team to bring it to life — fast and affordably." },
    { label: "Profile 2", desc: "Your existing app is outdated, slow, or losing users. You need a rebuild or major upgrade." },
    { label: "Profile 3", desc: "You want to extend your web platform to mobile to reach users where they spend most time." },
  ],
  tools: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "AWS Amplify", "Figma", "TestFlight", "Fastlane", "Mixpanel"],
  faqs: [
    { question: "Should I build native or cross-platform?", answer: "Cross-platform (React Native/Flutter) is ideal for most business apps — 70% less cost, 90% code sharing. Native is better for hardware-intensive or platform-specific features." },
    { question: "How much does an app cost?", answer: "MVP: ₹5-15L. Full-featured app: ₹15-50L. Enterprise: ₹50L+. We scope exactly before starting." },
    { question: "How long to build an app?", answer: "MVP: 6-10 weeks. Full app: 12-20 weeks. We work in sprints with demos every 2 weeks." },
  ],
  relatedServices: [
    { name: "Web Development", href: "/services/web-development", desc: "Web companion for your mobile app." },
    { name: "AI Automation", href: "/services/ai-automation", desc: "Add AI features to your app." },
    { name: "Graphic Design", href: "/services/graphic-design", desc: "App store creatives and branding." },
  ],
  ctaHeadline: "Your App Idea Deserves a World-Class Team. We're Ready.",
  ctaSubtext: "Book a free consultation — we will assess your idea, recommend the right tech stack, and give you a realistic timeline and budget.",
};
