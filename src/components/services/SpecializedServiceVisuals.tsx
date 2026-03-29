"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Search, MousePointer2, Heart, Share2, MessageCircle, 
  Code, Palette, Cpu, Users, Target, Rocket,
  Globe, Zap, CheckCircle2, ShieldCheck, BarChart3, Calendar, Plus,
  ChevronRight, Eye, BellRing, Activity
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

// 3. Social Media: Viral Velocity Tracker
const SocialVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-6">
      <div className={styles.mobileFrame}>
        <div className={styles.mobileNotch} />
        {/* Mock Reel Video Area */}
        <div className="w-full h-full bg-[#111] relative border-8 border-black rounded-[28px] overflow-hidden pointer-events-none">
          {/* Main Visual content */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-10"
            animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 4 }}
          >
             <Globe size={100} />
          </motion.div>
          
          {/* Reaction Bubbles */}
          <motion.div className="absolute right-4 bottom-32 flex flex-col gap-4">
             <motion.div className="bg-white/10 p-2 rounded-full backdrop-blur" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
               <Heart size={20} className="fill-red-500 text-red-500" />
             </motion.div>
             <motion.div className="bg-white/10 p-2 rounded-full backdrop-blur" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>
               <MessageCircle size={20} className="fill-white" />
             </motion.div>
             <motion.div className="bg-white/10 p-2 rounded-full backdrop-blur" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>
               <Share2 size={20} className="text-white" />
             </motion.div>
          </motion.div>
          
          {/* Bottom Info & Stats Tracker */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                 <span className="text-[8px] font-bold text-black border border-black px-1 rounded">AIMS</span>
              </div>
              <span className="font-bold text-sm text-white">@growthpedia</span>
              <span className="bg-blue-500 text-white text-[8px] font-bold px-1 rounded">PRO</span>
            </div>
            
            {/* The Velocity Counter */}
            <motion.div className="bg-white/10 backdrop-blur border border-white/20 p-3 rounded-xl overflow-hidden relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] uppercase font-black opacity-70 flex items-center gap-1"><Eye size={10}/> Live Views</span>
                 <motion.span className="text-emerald-400 text-[10px] font-bold" animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }}>● Viral</motion.span>
               </div>
               
               <div className="text-3xl font-black font-mono tracking-tighter flex items-center text-white">
                  1,2<motion.div className="inline-flex flex-col h-[36px] overflow-hidden leading-[36px]">
                     <motion.div animate={{ y: ["0%", "-80%"] }} transition={{ duration: 10, ease: "linear", repeat: Infinity }}>
                       {Array.from({length: 10}).map((_, i) => <div key={i}>{(i*4)%10}{((i*4)+3)%10}K</div>)}
                     </motion.div>
                  </motion.div>
               </div>
            </motion.div>
          </div>
          
          {/* Emojis flying up */}
          {Array.from({ length: 5 }).map((_, i) => (
             <motion.div 
               key={i} className="absolute bottom-10 right-20 text-xl"
               initial={{ y: 0, opacity: 0, scale: 0.5, x: 0 }}
               animate={{ y: -200, opacity: [0, 1, 0], scale: 1.5, x: Math.random() * -40 }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
             >
               🔥
             </motion.div>
          ))}
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

// 6. Graphic Design: Live Brand Evolution
const DesignVisual = () => {
  return (
    <div className={styles.figmaCanvas}>
      {/* Player 1 Cursor */}
      <motion.div className={styles.cursor} initial={{ x: 50, y: 50 }} animate={{ x: [50, 200, 150, 300], y: [50, 100, 250, 150] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}>
        <MousePointer2 size={16} color="#0ea5e9" className="fill-[#0ea5e9]" />
        <span className={styles.cursorName} style={{ color: "#0ea5e9" }}>Alex (UI)</span>
      </motion.div>
      
      {/* Player 2 Cursor */}
      <motion.div className={styles.cursor} initial={{ x: 350, y: 200 }} animate={{ x: [350, 100, 250, 100], y: [200, 300, 80, 200] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}>
        <MousePointer2 size={16} color="#f43f5e" className="fill-[#f43f5e]" />
        <span className={styles.cursorName} style={{ color: "#f43f5e" }}>Sam (Brand)</span>
      </motion.div>

      <div className="relative w-64 h-64 flex items-center justify-center">
         {/* The Wireframe Base */}
         <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-[2rem] flex items-center justify-center">
            <Code size={40} className="text-white/20" />
         </div>
         
         {/* The Polished Asset overlay morphing in */}
         <motion.div 
           className="absolute inset-0 bg-surface-container-high border-2 border-primary rounded-[2rem] flex flex-col items-center justify-center overflow-hidden shadow-2xl shadow-primary/20"
           initial={{ clipPath: "circle(0% at 50% 50%)" }}
           animate={{ clipPath: ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)", "circle(150% at 50% 50%)"] }}
           transition={{ duration: 6, repeat: Infinity, repeatDelay: 2 }}
         >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-emerald mb-4 flex items-center justify-center text-black">
               <Palette size={32} />
            </div>
            <div className="w-32 h-4 bg-white/10 rounded-full mb-2" />
            <div className="w-24 h-4 bg-white/10 rounded-full" />
            
            {/* Component Guides */}
            <div className="absolute top-2 left-2 text-[8px] font-mono text-primary border border-primary/30 px-1">AUTO-LAYOUT</div>
            <div className="absolute right-0 top-1/2 w-8 border-t border-dashed border-primary/50" />
            <div className="absolute bottom-0 left-1/2 h-8 border-l border-dashed border-primary/50" />
         </motion.div>
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

// 8. Lead Generation: The Qualification Filter
const LeadGenVisual = () => {
  return (
    <div className={styles.leadFunnel}>
       {/* Traffic Source */}
       <div className="flex gap-8 mb-8 opacity-50 text-[10px] font-mono uppercase tracking-widest">
         <span>Organic</span><span>Ads</span><span>Outreach</span>
       </div>
       
       {/* The Filter / Funnel */}
       <div className="relative w-48 h-32 flex justify-center">
          {/* Funnel shape using borders */}
          <div className="absolute inset-0" style={{ borderTop: "4px solid var(--primary)", borderLeft: "40px solid transparent", borderRight: "40px solid transparent", borderBottom: "4px solid var(--primary)", opacity: 0.2 }} />
          
          {/* Particles (Good and Bad) */}
          {Array.from({ length: 15 }).map((_, i) => {
             const isGood = i % 3 === 0; // 1 in 3 is a good lead
             return (
               <motion.div 
                 key={i}
                 className={styles.leadParticle}
                 style={{ color: isGood ? "var(--primary)" : "#666", background: isGood ? "var(--primary)" : "#666" }}
                 initial={{ y: -40, x: (Math.random() - 0.5) * 100, opacity: 0 }}
                 animate={{ 
                   y: isGood ? [0, 80, 200] : [0, 60, 60], 
                   x: isGood ? ["auto", "0px", "0px"] : ["auto", `${(Math.random() - 0.5) * 200}px`, `${(Math.random() - 0.5) * 300}px`],
                   opacity: isGood ? [0, 1, 1, 0] : [0, 1, 0, 0]
                 }}
                 transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
               />
             )
          })}
          
          {/* Rejection Label */}
          <motion.div className="absolute top-1/2 -left-32 text-[10px] text-red-500 font-black uppercase opacity-60 flex items-center gap-1" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}><ChevronRight /> Disqualified</motion.div>
          <motion.div className="absolute top-1/2 -right-32 text-[10px] text-red-500 font-black uppercase opacity-60 flex items-center gap-1"><ChevronRight className="rotate-180" /> Bounced</motion.div>
       </div>
       
       {/* Database / CRM Box */}
       <div className={styles.dbContainer}>
          <div className="text-center z-10 w-full px-4">
             <div className="text-2xl font-black text-white mb-1"><span className="text-primary">+</span> SQLs</div>
             <motion.div className="mx-auto w-max px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase rounded flex items-center justify-center gap-1" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                <BellRing size={12} /> Meetings
             </motion.div>
          </div>
          <div className="absolute inset-0 bg-primary/5 rounded-md mix-blend-screen pointer-events-none" />
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
