import React from 'react';
import styles from './page.module.css';
import { paidAdsServices, paidAdsCombos } from '@/data/paid-ads-pricing';
import Link from 'next/link';

export const metadata = {
  title: 'Paid Ads Packages 2026 | DigitalGrowPedia',
  description: 'Professional Paid Ads & Lead Generation Strategy. Stop wasting money on wrong clicks and start growing your business with expert Google and Facebook Ads management.',
};

export default function PaidAdsPricingPage() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className="section-label">Performance Marketing</div>
          <h1 className="mb-4">Professional Paid Ads &<br/>Lead Generation Strategy</h1>
          <p className="mx-auto" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', textAlign: 'center' }}>
            Get high-quality leads and sales with expert Google and Facebook Ads management. 
            Stop wasting money on wrong clicks and start growing your business.
          </p>
        </div>
      </section>

      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Sidebar Table of Contents */}
          <aside className={styles.sidebar}>
            <div className="mb-4 font-bold text-muted" style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>
              Advertising Services
            </div>
            {paidAdsServices.map((service, idx) => (
              <a href={`#service-${service.num}`} key={idx} className={styles.sidebarItem}>
                <span className={styles.sidebarNum}>{service.num}</span>
                <span>{service.title}</span>
              </a>
            ))}
            <a href="#combos" className={styles.sidebarItem} style={{ marginTop: '20px', borderTop: '1px solid var(--outline-ghost)', paddingTop: '20px' }}>
              <span className={styles.sidebarNum}>11</span>
              <span style={{ color: 'var(--secondary)'}}>All-In-One Packages</span>
            </a>
          </aside>

          {/* Main Content Areas */}
          <main>
            {/* 10 Services */}
            {paidAdsServices.map((service, idx) => (
              <section id={`service-${service.num}`} key={idx} className={styles.serviceSection}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceNumLarge}>{service.num}</div>
                  <div>
                    <h2>{service.title}</h2>
                    <p style={{ marginTop: '8px', color: 'var(--on-surface-variant)' }}>{service.subtitle}</p>
                  </div>
                </div>

                <div className={styles.pricingGrid}>
                  {service.tiers.map((tier: any, tIdx: number) => (
                    <div 
                      key={tIdx} 
                      className={`${styles.pricingCard} ${tier.isPopular ? styles.pricingCardPopular : ''}`}
                    >
                      {tier.isPopular && tier.popularBadge && (
                        <div className={styles.popularBadge}>{tier.popularBadge}</div>
                      )}
                      <div className={styles.cardHeader}>
                        <div className={styles.cardTier}>{tier.tierName}</div>
                        <div className={styles.priceWrapper}>
                          <span className={styles.priceValue}>{tier.price}</span>
                          <span className={styles.priceDuration}>{tier.duration}</span>
                        </div>
                        <div className={styles.cardTarget}>{tier.target}</div>
                      </div>

                      <div className={styles.cardBody}>
                        <div className={styles.deliverablesTitle}>What We Do Exactly</div>
                        <ul className={styles.deliverableList}>
                          {tier.deliverables.map((item: string, iIdx: number) => (
                            <li key={iIdx}>
                              <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Combos */}
            <section id="combos" className={styles.serviceSection}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceNumLarge}>11</div>
                <div>
                  <h2 style={{ background: 'linear-gradient(135deg, var(--secondary), var(--secondary-dim))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Complete Monthly Packages
                  </h2>
                  <p style={{ marginTop: '8px', color: 'var(--on-surface-variant)' }}>
                    Combined services for maximum results. We handle everything from setup to design to daily management.
                  </p>
                </div>
              </div>

              <div className={styles.comboGrid}>
                {paidAdsCombos.map((combo, idx) => (
                  <div key={idx} className={`${styles.comboCard} ${combo.isPopular ? styles.comboCardPopular : ''}`}>
                    {combo.isPopular && combo.popularBadge && (
                      <div className={styles.comboPopularBadge}>{combo.popularBadge}</div>
                    )}
                    <div className={styles.comboHeader}>
                      <div className={styles.comboName}>{combo.name}</div>
                      <div className={styles.priceWrapper} style={{ marginBottom: 0 }}>
                        <span className={styles.priceValue}>{combo.price}</span>
                        <span className={styles.priceDuration}>{combo.duration}</span>
                      </div>
                    </div>
                    
                    <ul className={`${styles.deliverableList} ${styles.comboFeatures}`}>
                      {combo.features.map((item: string, iIdx: number) => (
                        <li key={iIdx}>
                          <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '40px', textAlign: 'center', paddingTop: '30px', borderTop: '1px solid var(--outline-ghost)' }}>
                <p style={{ fontSize: '14px', color: 'var(--on-surface-muted)', fontWeight: 500 }}>
                  Note: Ad Spend budget is paid directly to Google/Facebook. The prices above are our Agency Management & Creative Fees.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>

      <section className={styles.footerSection}>
        <div className="container">
          <h2 className="mb-4">Ready to Get More Sales?</h2>
          <p className="mx-auto mb-8" style={{ maxWidth: '650px' }}>
            Don't let your competitors take all the customers. Contact us today for a free consultation and let's plan your winning ad strategy.
          </p>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactBox}>
              <div className={styles.contactLabel}>Call or WhatsApp</div>
              <div className="font-bold text-xl">+91 93521 07526</div>
            </div>
            <div className={styles.contactBox}>
              <div className={styles.contactLabel}>Email</div>
              <div className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">allindiamarketingsolution1@gmail.com</div>
            </div>
            <div className={styles.contactBox}>
              <div className={styles.contactLabel}>Our Office</div>
              <div className="text-sm">Ashish Nagar, Murlipura Scheme, Jaipur, Rajasthan, 302039</div>
            </div>
          </div>
          
          <a href="mailto:allindiamarketingsolution1@gmail.com" className="btn btn-primary" style={{ padding: '20px 40px', fontSize: '18px' }}>
            Contact Us for a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
