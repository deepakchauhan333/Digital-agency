"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Search, MousePointer2, Heart, Share2, MessageCircle, 
  Code, Palette, Cpu, Users, Target, Rocket,
  Globe, Zap, CheckCircle2, ShieldCheck, BarChart3, Calendar, Plus,
  ChevronRight, Eye, BellRing, Activity, TrendingDown
} from "lucide-react";
import styles from "./SpecializedServiceVisuals.module.css";

// ======= Specialized Components =======

// 1. SEO: Search Dominance Mockup
const SEOVisual = () => (
  <div className={styles.searchMock}>
    <div className={styles.browserBar}>
      <div className={styles.dot} style={{ background: "#ff5f57" }} />
      <div className={styles.dot} style={{ background: "#febc2e" }} />
      <div className={styles.dot} style={{ background: "#28c840" }} />
    </div>
    <motion.div 
      className={styles.searchInput}
      initial={{ width: "40%", opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Search size={16} className="text-muted" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        best growth agency india
      </motion.span>
    </motion.div>
    
    <div className="flex flex-col gap-3 mt-2">
      {[
        { title: "Growthpedia — #1 Marketing Agency in India", url: "https://growthpedia.org", type: 'ad' },
        { title: "Top 10 Growth Marketing Agencies for 2026", url: "https://growthpedia.org/blog", type: 'organic' },
        { title: "How to Scale Your Business Fast | Growthpedia", url: "https://growthpedia.org/services", type: 'organic' }
      ].map((res, i) => (
        <motion.div 
          key={i} 
          className={styles.searchResult}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 + i * 0.2 }}
        >
          <div className="flex items-center gap-2 mb-1">
            {res.type === 'ad' && <span className="text-[10px] font-bold border border-muted px-1 rounded uppercase opacity-60">Ad</span>}
            <span className={styles.resultUrl}>{res.url}</span>
          </div>
          <span className={styles.resultTitle}>{res.title}</span>
          <div className="h-2 w-full bg-white-5 rounded mt-2 opacity-50" />
          <div className="h-2 w-2/3 bg-white-5 rounded mt-1 opacity-50" />
        </motion.div>
      ))}
    </div>
  </div>
);

// 2. Paid Ads: The Winning Bid Engine
const PaidAdsVisual = () => (
  <div className="w-full h-full p-8 flex flex-col justify-center gap-6">
    <div className="flex justify-between items-end mb-4">
      <div>
        <div className="text-[10px] font-black uppercase opacity-50 mb-1">Target Keyword</div>
        <div className="text-xl font-bold font-mono">"b2b saas pricing"</div>
      </div>
      <Activity size={24} className="text-primary opacity-50" />
    </div>
    
    <div className={styles.auctionList}>
      {/* Competitor Red */}
      <motion.div className={`${styles.bidRow} ${styles.bidFail}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <span>Competitor A</span>
        <div className="flex items-center gap-3"><span>$12.50</span><span className="text-[8px] bg-red-500/20 px-1 rounded">OUTBID</span></div>
      </motion.div>
      {/* Competitor Dim */}
      <motion.div className={styles.bidRow} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
        <span className="opacity-50">Competitor B</span>
        <div className="flex items-center gap-3 opacity-50"><span>$14.00</span><span className="text-[8px] border border-white-20 px-1 rounded">LOST</span></div>
      </motion.div>
      {/* AIMS Win */}
      <motion.div className={`${styles.bidRow} ${styles.bidWin}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }}>
        <span className="flex items-center gap-2"><Zap size={12} /> AIMS Engine</span>
        <div className="flex items-center gap-3"><span className="font-bold text-lg">$14.05</span><span className="text-[8px] bg-emerald-500/20 text-emerald-500 px-1 rounded font-black">WINNING</span></div>
      </motion.div>
    </div>
    
    <motion.div className={styles.glassCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}>
       <div className="flex justify-between items-center">
         <div>
           <div className="text-[10px] font-black uppercase opacity-50 mb-1">Live CPA (Cost Per Acquisition)</div>
           <div className="text-3xl font-black text-emerald flex items-center gap-2">
             $45.20 <TrendingDown size={20} />
           </div>
         </div>
         <div className="text-right">
           <div className="text-[10px] font-black uppercase opacity-50 mb-1">ROAS</div>
           <div className="text-xl font-bold text-gold">8.7x</div>
         </div>
       </div>
    </motion.div>
  </div>
);

// 3. Social Media: Viral Presence Hub
const SocialVisual = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const duration = 4000;
    const end = 20452;
    const start = 5;
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={styles.leadDashboard}>
       <div className={styles.leadStats}>
          <div className={styles.leadStat}>
             <div className="text-[8px] font-black opacity-40 uppercase mb-1">Follower Growth</div>
             <div className="flex items-end gap-1">
                <span className="text-xl font-bold text-primary">{count.toLocaleString()}</span>
                <span className="text-[10px] text-emerald font-bold mb-1">+2,400%</span>
             </div>
          </div>
          <div className={styles.leadStat}>
             <div className="text-[8px] font-black opacity-40 uppercase mb-1">Active Profiles</div>
             <div className="flex items-end gap-1">
                <span className="text-xl font-bold">14 Live</span>
                <Globe size={14} className="text-primary opacity-50 mb-1" />
             </div>
          </div>
       </div>

       <div className={styles.leadTable}>
          <div className={styles.leadHeader}>
             <span>Viral Campaign Handle</span>
             <span>Impact Score</span>
             <span>Status</span>
          </div>
          <div className="flex-1 overflow-hidden">
             {[
               { name: "@arjun_m (Arjun Mehta)", score: 98, status: "VIRAL" },
               { name: "@priya_design (Priya S.)", score: 94, status: "TRENDING" },
               { name: "@rahul_growth (Rahul V.)", score: 89, status: "STABLE" },
               { name: "@aims_official", score: 91, status: "SCALE" }
             ].map((item, i) => (
                <motion.div 
                  key={i} className={styles.leadRow}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                   <div className="flex flex-col gap-0.5">
                      <span className="font-bold">{item.name}</span>
                      <span className={styles.sourceTag}>Engineered_Presence</span>
                   </div>
                   <div className={styles.qualityScore}>
                      <Zap size={12} /> {item.score}%
                   </div>
                   <div className="bg-emerald/10 text-emerald text-[7px] font-bold px-1.5 py-0.5 rounded-full border border-emerald/20">
                      {item.status}
                   </div>
                </motion.div>
             ))}
          </div>
          <div className="p-2 bg-primary/10 border-t border-primary/20 text-center">
             <span className="text-[8px] font-black text-primary uppercase tracking-tighter">
                Live Engagement Monitoring: Viral Surge Active
             </span>
          </div>
       </div>
    </div>
  );
};

// 4. Web Development: Audit Dashboard
const WebDevVisual = () => (
  <div className={styles.auditReport}>
    <div className={styles.browserBar}>
      <div className={styles.dot} style={{ background: "#ff5f57" }} />
      <span className="text-[10px] opacity-40 ml-2">lighthouse.audit.report</span>
    </div>
    <div className={styles.scoreGrid}>
       {[
         { val: 100, label: "Perf", color: "var(--secondary)" },
         { val: 100, label: "SEO", color: "var(--primary)" },
         { val: 100, label: "UX", color: "var(--secondary)" }
       ].map((s, i) => (
         <div key={i} className={styles.scoreCircle}>
            <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
               <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
               <motion.circle 
                 cx="50" cy="50" r="45" fill="none" stroke={s.color} strokeWidth="6" 
                 strokeDasharray="283"
                 initial={{ strokeDashoffset: 283 }}
                 animate={{ strokeDashoffset: 0 }}
                 transition={{ duration: 1.5, delay: 0.8 + i * 0.2 }}
               />
            </svg>
            <div className="text-center">
               <div className="text-lg font-black">{s.val}</div>
               <div className="text-[8px] uppercase font-bold opacity-50">{s.label}</div>
            </div>
         </div>
       ))}
    </div>
    <div className="flex flex-col gap-2 mt-2">
       {[
         { label: "Largest Contentful Paint", val: "0.8s" },
         { label: "First Input Delay", val: "12ms" },
         { label: "Cumulative Layout Shift", val: "0.01" }
       ].map((c, i) => (
         <motion.div 
           key={i} 
           className={styles.checkRow}
           initial={{ x: -20, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 2 + i * 0.1 }}
         >
            <CheckCircle2 size={14} className="text-secondary" />
            <span className="flex-1 opacity-70">{c.label}</span>
            <span className="font-bold">{c.val}</span>
         </motion.div>
       ))}
    </div>
  </div>
);

// 5. App Development: Living App Mockup
const AppDevVisual = () => (
  <div className="flex items-center justify-center h-full">
    <div className={styles.phoneFrame}>
       <div className={styles.phoneScreen}>
          <div className="flex items-center justify-between mb-6">
             <div className="w-8 h-8 rounded-full bg-white-5" />
             <ShieldCheck size={18} className="text-emerald opacity-50" />
          </div>
          <motion.div 
            className="p-4 rounded-2xl bg-white-5 border border-white-10 mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
             <div className="text-[10px] opacity-50 uppercase font-black mb-1">Weekly Growth</div>
             <div className="flex items-end gap-2">
                <div className="text-2xl font-black text-primary">₹12.4L</div>
                <div className="text-[10px] font-bold text-emerald mb-1">+24%</div>
             </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
             <div className="h-20 bg-white-5 rounded-xl flex flex-col items-center justify-center gap-1">
                <Users size={16} />
                <div className="text-xs font-bold">5.2K</div>
             </div>
             <div className="h-20 bg-white-5 rounded-xl flex flex-col items-center justify-center gap-1">
                <Target size={16} />
                <div className="text-xs font-bold">4.8★</div>
             </div>
          </div>
          
          <div className="mt-auto h-1 w-1/3 bg-white-10 rounded-full mx-auto" />
       </div>
    </div>
  </div>
);

// 6. Graphic Design: Brand Precision Studio
const DesignVisual = () => {
  return (
    <div className={styles.leadDashboard}>
       <div className={styles.leadStats}>
          <div className={styles.leadStat}>
             <div className="text-[8px] font-black opacity-40 uppercase mb-1">Precision Score</div>
             <div className="flex items-end gap-1">
                <span className="text-xl font-bold text-primary">99.8%</span>
                <span className="text-[10px] text-emerald font-bold mb-1">A+</span>
             </div>
          </div>
          <div className={styles.leadStat}>
             <div className="text-[8px] font-black opacity-40 uppercase mb-1">Assets Refined</div>
             <div className="flex items-end gap-1">
                <span className="text-xl font-bold">14 Items</span>
                <Palette size={14} className="text-primary opacity-50 mb-1" />
             </div>
          </div>
       </div>

       <div className={styles.leadTable}>
          <div className={styles.leadHeader}>
             <span>Refinement Asset</span>
             <span>Audit Rule</span>
             <span>Verification</span>
          </div>
          <div className="flex-1 overflow-hidden">
             {[
               { name: "Master Logo v.3.1", rule: "Golden Ratio 1.618", status: "LOCKED" },
               { name: "Brand Guidelines", rule: "#171f33 / #DAE2FD", status: "VERIFIED" },
               { name: "Typography Scale", rule: "Inter Black / -0.05em", status: "PASSED" },
               { name: "Iconography Core", rule: "Vector Precision", status: "STABLE" }
             ].map((asset, i) => (
                <motion.div 
                  key={i} className={styles.leadRow}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                   <div className="flex flex-col gap-0.5">
                      <span className="font-bold">{asset.name}</span>
                      <span className={styles.sourceTag}>Math_Verified_Design</span>
                   </div>
                   <div className={styles.qualityScore}>
                      <Code size={12} /> {asset.rule}
                   </div>
                   <div className="bg-emerald/10 text-emerald text-[7px] font-bold px-1.5 py-0.5 rounded-full border border-emerald/20">
                      {asset.status}
                   </div>
                </motion.div>
             ))}
          </div>
          <div className="p-2 bg-primary/10 border-t border-primary/20 text-center">
             <span className="text-[8px] font-black text-primary uppercase tracking-tighter">
                Brand Authority Engine: Zero-Pixel Error Audit Active
             </span>
          </div>
       </div>
    </div>
  );
};

// 7. AI & Automation: Neural Network
const AIVisual = () => (
  <div className={styles.neuralFlow}>
    <svg viewBox="0 0 400 300" className="w-full h-full">
       <defs>
          <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
             <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.2" />
             <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </radialGradient>
       </defs>
       
       <circle cx="200" cy="150" r="100" fill="url(#brainGlow)" />
       
       {/* Paths */}
       {[
         "M40,150 Q120,50 200,150",
         "M40,150 Q120,250 200,150",
         "M360,150 Q280,50 200,150",
         "M360,150 Q280,250 200,150"
       ].map((d, i) => (
         <g key={i}>
            <path d={d} className={styles.pulsePath} />
            <motion.circle r="3" className={styles.pulseDot}>
               <animateMotion dur={`${2 + i % 2}s`} repeatCount="indefinite" path={d} />
            </motion.circle>
         </g>
       ))}
       
       <motion.rect
         x="170" y="125" width="60" height="50" rx="8"
         fill="var(--surface-container-highest)"
         stroke="var(--secondary)"
         strokeWidth="2"
         animate={{ opacity: [0.5, 1, 0.5] }}
         transition={{ repeat: Infinity, duration: 2 }}
       />
       <Cpu size={32} x="184" y="134" className="text-emerald" />
    </svg>
    <div className="absolute left-6 right-6 bottom-6 bg-white-5 backdrop-blur p-4 rounded-xl border-white-10 flex justify-between items-center">
       <div className="flex flex-col">
          <span className="text-[10px] opacity-50 uppercase font-black">Efficiency</span>
          <span className="text-xl font-bold text-emerald">+300%</span>
       </div>
       <div className="text-right">
          <span className="text-[10px] opacity-50 uppercase font-black">Labor Saved</span>
          <span className="text-xl font-bold text-primary">120h/mo</span>
       </div>
    </div>
  </div>
);

// 8. Lead Generation: High-Intent Engine
const LeadGenVisual = () => {
  return (
    <div className={styles.leadDashboard}>
       <div className={styles.leadStats}>
          <div className={styles.leadStat}>
             <div className="text-[8px] font-black opacity-40 uppercase mb-1">Weekly Volume</div>
             <div className="flex items-end gap-1">
                <span className="text-xl font-bold">1,204</span>
                <span className="text-[10px] text-emerald font-bold mb-1">+42%</span>
             </div>
          </div>
          <div className={styles.leadStat}>
             <div className="text-[8px] font-black opacity-40 uppercase mb-1">Avg Lead Score</div>
             <div className="flex items-end gap-1">
                <span className="text-xl font-bold text-emerald">92%</span>
                <ShieldCheck size={14} className="text-emerald opacity-50 mb-1" />
             </div>
          </div>
       </div>

       <div className={styles.leadTable}>
          <div className={styles.leadHeader}>
             <span>Verified Target</span>
             <span>Quality Score</span>
             <span>Intent</span>
          </div>
          <div className="flex-1 overflow-hidden">
             {[
               { name: "Amit K. (Software Founder)", score: 98, source: "High" },
               { name: "Nisha G. (Marketing Head)", score: 94, source: "Medium" },
               { name: "Rajiv S. (MD)", score: 89, source: "Hot" },
               { name: "Sanjay B. (Director)", score: 91, source: "Ready" }
             ].map((lead, i) => (
                <motion.div 
                  key={i} className={styles.leadRow}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                   <div className="flex flex-col gap-0.5">
                      <span className="font-bold">{lead.name}</span>
                      <span className={styles.sourceTag}>Qualified_SQL</span>
                   </div>
                   <div className={styles.qualityScore}>
                      <Activity size={12} /> {lead.score}%
                   </div>
                   <div className="bg-emerald/10 text-emerald text-[7px] font-bold px-1.5 py-0.5 rounded-full border border-emerald/20">
                      BOOKED
                   </div>
                </motion.div>
             ))}
          </div>
          <div className="p-2 bg-emerald-500/10 border-t border-emerald-500/20 text-center">
             <span className="text-[8px] font-black text-emerald uppercase tracking-tighter">
                Indian Market Pipeline: Filtering Non-Buyers
             </span>
          </div>
       </div>
    </div>
  );
};

// ======= Main Export Wrapper =======

export default function SpecializedServiceVisual({ slug }: { slug: string }) {
  const renderVisual = () => {
    switch (slug) {
      case "seo": return <SEOVisual />;
      case "paid-ads": return <PaidAdsVisual />;
      case "social-media": return <SocialVisual />;
      case "web-development": return <WebDevVisual />;
      case "app-development": return <AppDevVisual />;
      case "graphic-design": return <DesignVisual />;
      case "ai-automation": return <AIVisual />;
      case "lead-generation": return <LeadGenVisual />;
      default: return null;
    }
  };

  return (
    <div className={styles.visualContainer}>
       <div className="absolute inset-0 z-0" style={{ opacity: 0.05, pointerEvents: 'none' }}>
          <div className="absolute w-full h-full" style={{ background: 'radial-gradient(circle at center, var(--primary) 0%, transparent 70%)' }} />
       </div>
       <AnimatePresence mode="wait">
         <motion.div
           key={slug}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5 }}
           className="w-full h-full relative z-10"
         >
           {renderVisual()}
         </motion.div>
       </AnimatePresence>
    </div>
  );
}
