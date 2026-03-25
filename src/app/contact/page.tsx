"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.left}>
              <AnimatedSection>
                <span className="section-label">Get In Touch</span>
                <h1 className={styles.title}>
                  Let&apos;s Build Something<br />
                  <span className="text-gradient-gold">That Actually Grows.</span>
                </h1>
                <p className={styles.subtitle}>
                  Book a free 30-minute growth consultation. No fluff. No pitch deck.
                  Just honest answers about your business and what we would do to grow it.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className={styles.contactInfo}>
                  <div className={styles.infoItem}>
                    <Mail size={20} className={styles.infoIcon} />
                    <div>
                      <span className={styles.infoLabel}>Email</span>
                      <a href="mailto:hello@growthpedia.in">hello@growthpedia.in</a>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <Phone size={20} className={styles.infoIcon} />
                    <div>
                      <span className={styles.infoLabel}>Phone</span>
                      <a href="tel:+919876543210">+91 98765 43210</a>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <MapPin size={20} className={styles.infoIcon} />
                    <div>
                      <span className={styles.infoLabel}>Location</span>
                      <span>New Delhi, India</span>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <Clock size={20} className={styles.infoIcon} />
                    <div>
                      <span className={styles.infoLabel}>Response Time</span>
                      <span>Within 4 hours</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.3} direction="left">
              <div className={styles.formCard}>
                {submitted ? (
                  <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <CheckCircle size={48} color="var(--secondary)" />
                    <h3>Thank You!</h3>
                    <p>We have received your message. Our team will reach out within 4 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <h3 className={styles.formTitle}>Get Your Free Growth Audit</h3>
                    <div className={styles.fieldRow}>
                      <div className={styles.field}>
                        <label>Full Name *</label>
                        <input type="text" required placeholder="Your name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
                      </div>
                      <div className={styles.field}>
                        <label>Email *</label>
                        <input type="email" required placeholder="you@company.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
                      </div>
                    </div>
                    <div className={styles.fieldRow}>
                      <div className={styles.field}>
                        <label>Phone</label>
                        <input type="tel" placeholder="+91 98765 43210" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
                      </div>
                      <div className={styles.field}>
                        <label>Service Interested In</label>
                        <select value={formState.service} onChange={(e) => setFormState({ ...formState, service: e.target.value })}>
                          <option value="">Select a service</option>
                          <option>SEO</option>
                          <option>Paid Ads</option>
                          <option>Social Media</option>
                          <option>Web Development</option>
                          <option>App Development</option>
                          <option>Graphic Design</option>
                          <option>AI Automation</option>
                          <option>Lead Generation</option>
                          <option>Full Growth Package</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label>Monthly Budget Range</label>
                      <select value={formState.budget} onChange={(e) => setFormState({ ...formState, budget: e.target.value })}>
                        <option value="">Select budget range</option>
                        <option>₹25K - ₹50K</option>
                        <option>₹50K - ₹1L</option>
                        <option>₹1L - ₹3L</option>
                        <option>₹3L - ₹10L</option>
                        <option>₹10L+</option>
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label>Tell Us About Your Goals</label>
                      <textarea rows={4} placeholder="What are you looking to achieve?" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Send Message <Send size={18} />
                    </button>
                    <p className={styles.formNote}>No spam. No sales calls unless you want them. Just value.</p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
