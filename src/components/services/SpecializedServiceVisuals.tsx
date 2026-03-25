"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Search, MousePointer2, Heart, Share2, MessageCircle, 
  Code, Palette, Cpu, Users, Target, Rocket,
  Globe, Zap
} from "lucide-react";
import styles from "./SpecializedServiceVisuals.module.css";

// ======= Specialized Components =======

// 1. SEO: Ranking Elevator
const SEOVisual = () => (
  <div className={styles.seoElevator}>
    {[
      { kw: "Growth Agency", pos: "#42", target: "#1", color: "var(--secondary)" },
      { kw: "SEO Services India", pos: "#18", target: "#2", color: "var(--primary)" },
      { kw: "SaaS Marketing", pos: "#27", target: "#3", color: "var(--secondary)" }
    ].map((item, i) => (
      <motion.div 
        key={item.kw} 
        className={styles.rankRow}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + i * 0.2 }}
      >
        <Search size={16} className="text-muted" />
        <span className={styles.kw}>{item.kw}</span>
        <div className="flex items-center gap-2">
           <span className="text-xs text-muted" style={{ textDecoration: 'line-through' }}>{item.pos}</span>
           <motion.span 
             className={styles.pos}
             initial={{ scale: 0.8 }}
             animate={{ scale: [1, 1.2, 1] }}
             transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
           >{item.target}</motion.span>
        </div>
      </motion.div>
    ))}
    <motion.div 
      className={styles.floatingBadge}
      style={{ top: '10%', right: '10%' }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      <TrendingUp size={14} className="text-emerald" /> +1,240% Organic
    </motion.div>
  </div>
);

// 2. Paid Ads: ROI Rocket
const PaidAdsVisual = () => (
  <div className={styles.roiRocket}>
    <motion.div 
       className={styles.centerCore}
       animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px var(--primary)", "0 0 40px var(--primary)", "0 0 0px var(--primary)"] }}
       transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="text-center">
        <div className="text-2xl font-black">8.7x</div>
        <div className="text-xs font-bold" style={{ textTransform: 'uppercase' }}>ROAS</div>
      </div>
    </motion.div>
    
    {[
       { icon: <Target />, color: "var(--secondary)", delay: 0, pos: { top: '10%', left: '10%' } },
       { icon: <MousePointer2 />, color: "var(--primary)", delay: 0.5, pos: { top: '20%', right: '15%' } },
       { icon: <Zap />, color: "#ffffff", delay: 1, pos: { bottom: '25%', left: '20%' } },
    ].map((item, i) => (
      <motion.div
        key={i}
        className={styles.networkIcon}
        style={{ ...item.pos, color: item.color }}
        animate={{ 
          x: [0, (200 - parseInt(item.pos.left?.toString() || '10')) * 0.5, 0],
          y: [0, (100 - parseInt(item.pos.top?.toString() || '10')) * 0.5, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ repeat: Infinity, duration: 4, delay: item.delay }}
      >
        {item.icon}
      </motion.div>
    ))}
  </div>
);

// 3. Social Media: Engagement Cloud
const SocialVisual = () => {
  const icons = [
    { x: 50, y: 50, delay: 0 }, { x: 350, y: 80, delay: 0.5 }, { x: 100, y: 250, delay: 1 },
    { x: 300, y: 220, delay: 1.5 }, { x: 200, y: 40, delay: 2 }, { x: 150, y: 150, delay: 2.5 },
    { x: 380, y: 180, delay: 3 }, { x: 40, y: 120, delay: 3.5 }, { x: 280, y: 60, delay: 4 },
    { x: 120, y: 280, delay: 4.5 }, { x: 320, y: 260, delay: 5 }, { x: 60, y: 200, delay: 5.5 }
  ];

  return (
    <div className={styles.socialCloud}>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}
      >
        <div className="bg-white-10 p-6 rounded-full backdrop-blur border-white-20">
           <Users size={40} className="text-primary" />
        </div>
      </motion.div>
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className={styles.floatingIcon}
          initial={{ x: item.x, y: item.y, scale: 0 }}
          animate={{ 
            x: [item.x, 200, item.x], 
            y: [item.y, 150, item.y], 
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4, 
            delay: item.delay
          }}
        >
          {i % 3 === 0 ? <Heart color="#ff4b2b" /> : i % 3 === 1 ? <Share2 color="#00f2fe" /> : <MessageCircle color="var(--primary)" />}
        </motion.div>
      ))}
    </div>
  );
};

// 4. Web Development: Speed Assembly
const WebDevVisual = () => (
  <div className={styles.webAssembly}>
     <div className="flex gap-4 mb-8">
        <motion.div 
          className={styles.speedDial}
          initial={{ rotate: -90 }}
          animate={{ rotate: 270 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="text-center">
             <div className="text-3xl font-black text-emerald">100</div>
             <div className="text-xs font-bold text-muted" style={{ textTransform: 'uppercase' }}>Performance</div>
          </div>
        </motion.div>
        <div className="flex-1 pt-4 flex flex-col gap-3">
           {[70, 40, 90, 60].map((w, i) => (
             <motion.div 
               key={i} 
               className={styles.skeleton} 
               style={{ height: '8px', width: '0%' }}
               animate={{ width: `${w}%` }}
               transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
             />
           ))}
        </div>
     </div>
     <div className="grid grid-cols-3 gap-2">
        <div className="bg-white-5 p-4 rounded-lg border-white-10 flex flex-col items-center">
           <Code size={20} className="mb-2 text-primary" />
           <span className="text-xs font-bold" style={{ textTransform: 'uppercase' }}>NEXT.JS 15</span>
        </div>
        <div className="bg-white-5 p-4 rounded-lg border-white-10 flex flex-col items-center">
           <Zap size={20} className="mb-2 text-emerald" />
           <span className="text-xs font-bold" style={{ textTransform: 'uppercase' }}>LCP 0.8s</span>
        </div>
        <div className="bg-white-5 p-4 rounded-lg border-white-10 flex flex-col items-center">
           <Globe size={20} className="mb-2 text-gold" />
           <span className="text-xs font-bold" style={{ textTransform: 'uppercase' }}>GLOBAL EDGE</span>
        </div>
     </div>
  </div>
);

// 5. App Development: Phone Interaction
const AppDevVisual = () => (
  <div className="flex items-center justify-center h-full">
    <div className={styles.phoneFrame}>
       <div className={styles.phoneScreen}>
          <div className="flex items-center justify-between mb-4">
             <div className="w-10 h-10 rounded-full bg-white-5" style={{ backgroundColor: 'rgba(247, 190, 29, 0.2)' }} />
             <div className="w-20 h-2 rounded bg-white-10" />
          </div>
          <div className="flex flex-col gap-4">
             <motion.div 
               className="p-4 rounded-xl bg-white-5 border-white-10"
               animate={{ y: [0, -5, 0] }}
               transition={{ repeat: Infinity, duration: 4 }}
             >
                <div className="font-bold mb-1">Total Orders</div>
                <div className="text-xl font-black">₹12.4L</div>
             </motion.div>
             <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-white-5 border-white-10">
                   <Users size={14} className="mb-1" />
                   <div className="font-bold">5.2K</div>
                </div>
                <div className="p-3 rounded-xl bg-white-5 border-white-10">
                   <Target size={14} className="mb-1" />
                   <div className="font-bold">4.8★</div>
                </div>
             </div>
          </div>
       </div>
       <motion.div 
         className="absolute z-20"
         style={{ bottom: '2.5rem', right: '1rem' }}
         animate={{ scale: [1, 0.8, 1], opacity: [0.5, 1, 0.5] }}
         transition={{ repeat: Infinity, duration: 2 }}
       >
          <MousePointer2 size={30} fill="white" />
       </motion.div>
    </div>
  </div>
);

// 6. Graphic Design: Brand Forge
const DesignVisual = () => (
  <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
     <motion.div
       animate={{ 
         rotate: [0, 90, 180, 270, 360],
         borderRadius: ["20%", "50%", "0%", "40%", "20%"]
       }}
       transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
       className="w-32 h-32 flex items-center justify-center p-4"
       style={{ border: '4px solid var(--primary)' }}
     >
        <Palette size={48} className="text-gold" />
     </motion.div>
     <div className="flex gap-2">
        {["#000", "var(--primary)", "var(--secondary)", "#fff"].map(color => (
          <div key={color} className="w-8 h-8 rounded-full border-white-20" style={{ background: color }} />
        ))}
     </div>
     <div className="font-bold text-xs" style={{ letterSpacing: '0.2em', opacity: 0.5, textTransform: 'uppercase' }}>BRAND IDENTITY</div>
  </div>
);

// 7. AI & Automation: Node Brain
const AIVisual = () => (
  <div className={styles.aiBrain}>
    <motion.div 
      className="absolute z-10"
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
       <Cpu size={60} className="text-emerald opacity-80" />
    </motion.div>
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i}>
        <motion.div
          className={styles.node}
          initial={{ 
             top: `${50 + 40 * Math.sin(i * 45 * Math.PI / 180)}%`, 
             left: `${50 + 40 * Math.cos(i * 45 * Math.PI / 180)}%` 
          }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
        />
        <motion.div
          className={styles.connection}
          style={{ 
             top: '50%', 
             left: '50%',
             width: '40%',
             rotate: `${i * 45}deg`
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
        />
      </div>
    ))}
    <div className="absolute left-4 right-4 bg-white-5 backdrop-blur p-3 rounded-lg border-white-10 flex justify-between items-center text-xs font-bold" style={{ bottom: '1rem' }}>
       <span>WORKFLOW ACTIVE</span>
       <span className="text-emerald">40 HRS SAVED / WK</span>
    </div>
  </div>
);

// 8. Lead Generation: Pipeline Waterfall
const LeadGenVisual = () => (
  <div className="w-full h-full relative p-8">
     <div className="absolute" style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}>
        <Users size={30} className="text-muted" />
     </div>
     <div className="absolute" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
        <Rocket size={40} className="text-gold" />
     </div>
     {Array.from({ length: 10 }).map((_, i) => (
       <motion.div
         key={i}
         initial={{ top: '10%', left: '50%', opacity: 0 }}
         animate={{ 
           top: ['10%', '50%', '90%'],
           opacity: [0, 1, 0],
           scale: [0.5, 1.2, 0.8]
         }}
         transition={{ 
           repeat: Infinity, 
           duration: 3, 
           delay: i * 0.6,
           ease: "easeInOut"
         }}
         className="absolute"
       >
          {i % 2 === 0 ? <MessageCircle size={20} color="var(--primary)" /> : <Target size={20} color="var(--secondary)" />}
       </motion.div>
     ))}
     <div className="absolute bg-white-5 p-4 rounded-xl border-white-10 text-center" style={{ right: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
        <div className="text-2xl font-black">47</div>
        <div className="text-xs font-bold" style={{ textTransform: 'uppercase' }}>Meetings/Mo</div>
     </div>
  </div>
);

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
       <div className="absolute inset-0 z-0" style={{ opacity: 0.1, pointerEvents: 'none' }}>
          <div className="absolute w-full h-full" style={{ background: 'radial-gradient(circle at center, var(--primary) 0%, transparent 70%)' }} />
       </div>
       <AnimatePresence mode="wait">
         <motion.div
           key={slug}
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 1.05 }}
           transition={{ duration: 0.5 }}
           className="w-full h-full relative z-10"
         >
           {renderVisual()}
         </motion.div>
       </AnimatePresence>
    </div>
  );
}
