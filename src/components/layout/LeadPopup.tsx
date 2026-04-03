"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./LeadPopup.module.css";
import { X, Check } from "lucide-react";

// The strict logic maps as required by user prompt
const SERVICE_MAP: Record<string, string[]> = {
  SEO: [
    "Technical SEO", "On Page SEO", "Off Page SEO", "Local SEO", 
    "Ecommerce SEO", "SEO Audit", "Keyword Research", "Link Building", 
    "Content SEO", "Programmatic SEO"
  ],
  "Paid Ads": [
    "Google Ads", "Meta Ads", "YouTube Ads", "Display Ads", 
    "Retargeting", "Conversion Tracking", "Landing Page Optimization", 
    "Ad Copywriting", "Performance Scaling", "Funnel Ads"
  ],
  "Social Media": [
    "Instagram Growth", "Content Creation", "Reels Strategy", 
    "Social Ads", "Branding", "Influencer Marketing", "Account Management", 
    "Engagement Boosting", "Viral Strategy", "Hashtag Optimization"
  ],
  "Web Development": [
    "Business Website", "Landing Pages", "Ecommerce Website", 
    "Custom Web App", "Website Redesign", "Speed Optimization", 
    "UI/UX Design", "CMS Development", "Conversion Optimization", "Funnel Pages"
  ],
  "App Development": [
    "Android App", "iOS App", "Hybrid App", "UI/UX App Design", 
    "App Backend", "API Integration", "App Maintenance", 
    "MVP Development", "SaaS App", "Custom App"
  ],
  "Graphic Design": [
    "Logo Design", "Brand Identity", "Social Media Creatives", 
    "Ad Creatives", "Website UI Design", "Packaging Design", 
    "Video Creatives", "Motion Graphics", "Thumbnails", "Banner Design"
  ],
  "AI Automation": [
    "CRM Automation", "Chatbots", "WhatsApp Automation", "Email Automation", 
    "Lead Routing", "AI Agents", "Workflow Automation", "Sales Automation", 
    "Data Automation", "API Automation"
  ],
  "Lead Generation": [
    "B2B Leads", "LinkedIn Outreach", "Cold Email", "Funnel Leads", 
    "Paid Lead Gen", "WhatsApp Leads", "Landing Page Leads", 
    "Appointment Setting", "Database Building", "Multi-channel Outreach"
  ]
};

const BUDGET_OPTIONS = [
  "₹0 – ₹1,000",
  "₹1,000 – ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,00,000",
  "Above ₹2,00,000"
];

export default function LeadPopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    service: "",
    mini_service: "",
    budget: "",
  });

  const pathname = usePathname();

  // Reset & Handle Display (Slight delay)
  useEffect(() => {
    if (!mounted) return;

    // FORCE SHOW FOR TESTING - Ignoring all session storage
    console.log("--- LeadPopup DEBUG: Initializing v4-Force ---");
    
    // Reset state on every mount to ensure it pops
    setIsOpen(false); 
    const timer = setTimeout(() => {
      setIsOpen(true);
      console.log("--- LeadPopup DEBUG: Opening Modal Now ---");
    }, 1000); 

    return () => clearTimeout(timer);
  }, [pathname, mounted]);

  // Lock behind-screen scrolling
  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, mounted]);

  const closePopup = () => {
    setIsOpen(false);
    // Notice: We do NOT write to sessionStorage here. 
    // This allows it to open again when navigating to the next page!
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // If service changes, we must reset mini_service to blank
    if (name === "service") {
      setFormData(prev => ({ ...prev, service: value, mini_service: "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Regex Validation
    if (formData.full_name.trim().length < 3) {
      return setErrorMsg("Name must be at least 3 characters.");
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      return setErrorMsg("Please enter a valid 10-digit phone number.");
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return setErrorMsg("Please enter a valid email address.");
    }
    if (!formData.service || !formData.mini_service || !formData.budget) {
      return setErrorMsg("Please select all dropdown fields.");
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        page_url: window.location.href,
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      };

      const fetchPromise = fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      });

      // Optimistic UI update: Wait just a tiny bit to feel "real" then show success
      setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
        sessionStorage.setItem("dgp_popup_v3_final", "true"); // Permanently block after submit

        // Auto close after 2.5 seconds on success
        setTimeout(() => {
          closePopup();
        }, 2500);
      }, 800);

      const res = await fetchPromise;
      if (!res.ok) {
        const data = await res.json();
        console.error("Background lead submission error:", data);
      }
    } catch (err: any) {
      console.error("Failed to submit lead in background:", err);
    }
  };

  if (!mounted || !isOpen) return null;

  return (
    <div className={styles.overlay} onClick={closePopup}>
      <div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <button 
          className={styles.closeBtn} 
          onClick={closePopup}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>
              <Check size={32} />
            </div>
            <h2 className={styles.successTitle}>Thank You!</h2>
            <p className={styles.successDesc}>
              We have received your details. Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2 id="popup-title" className={styles.title}>Grow Your Business Faster</h2>
              <p className={styles.subtitle}>Let us audit your brand & create a custom growth map.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              
              {/* Row 1: 3 Columns like image */}
              <div className={styles.grid3}>
                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.label}>
                    WHAT YOU NEED? <span className={styles.requiredStar}>*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    <option value="" disabled>Select Service</option>
                    {Object.keys(SERVICE_MAP).map(key => (
                      <option key={key} value={key}>{key}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mini_service" className={styles.label}>
                    AREA FOCUS <span className={styles.requiredStar}>*</span>
                  </label>
                  <select
                    id="mini_service"
                    name="mini_service"
                    value={formData.mini_service}
                    onChange={handleChange}
                    className={styles.select}
                    disabled={!formData.service}
                    required
                  >
                    <option value="" disabled>
                      {formData.service ? "Select Focus" : "Select Service First"}
                    </option>
                    {formData.service && SERVICE_MAP[formData.service].map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="budget" className={styles.label}>
                    BUDGET <span className={styles.requiredStar}>*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    <option value="" disabled>Select Budget</option>
                    {BUDGET_OPTIONS.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Full Name */}
              <div className={styles.formGroup}>
                <label htmlFor="full_name" className={styles.label}>
                  FULL NAME <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>

              {/* Row 3: Phone and Email */}
              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    PHONE NUMBER <span className={styles.requiredStar}>*</span>
                  </label>
                  <div className={styles.phoneInputWrapper}>
                    <div className={styles.phonePrefix}>+91</div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.phoneInput}
                      placeholder="Mobile Number"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    EMAIL ADDRESS <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              {errorMsg && <div className={styles.errorMessage}>{errorMsg}</div>}

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? <div className={styles.spinner}></div> : "Submit your request"}
              </button>

              {/* Trust Badge / Footer Info */}
              <div className={styles.trustBadge}>
                <Check size={16} color="#1877f2" />
                <span>Trusted by 200+ clients across India</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
