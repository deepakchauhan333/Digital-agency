import { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | DigitalGrowPedia",
  description: "DigitalGrowPedia's Privacy Policy — how we collect, use, store, and protect your personal data under India's IT Act 2000 and applicable data protection rules.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className={styles.pageWrap}>
      <div className="container">
        <div className={styles.content}>

          <div className={styles.hero}>
            <span className={styles.heroLabel}>Legal Document</span>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroMeta}>
              <strong>Last updated:</strong> April 5, 2026 &nbsp;|&nbsp; Compliant with India's IT Act 2000 &amp; SPDI Rules 2011
            </p>
          </div>

          <div className={styles.warningBox}>
            <strong>Your Privacy Matters to Us</strong>
            This Privacy Policy explains how DigitalGrowPedia ("we", "us", "our") collects, uses, stores, protects, and shares your personal information when you visit our website or engage us for services. Please read this carefully. By using our website or our services, you consent to the practices described here.
          </div>

          <div className={styles.toc}>
            <p className={styles.tocTitle}>Contents</p>
            <ul className={styles.tocList}>
              <li><a href="#collect">1. Information We Collect</a></li>
              <li><a href="#use">2. How We Use It</a></li>
              <li><a href="#storage">3. Data Storage & Security</a></li>
              <li><a href="#sharing">4. Who We Share It With</a></li>
              <li><a href="#cookies">5. Cookies & Tracking</a></li>
              <li><a href="#client-data">6. Client Business Data</a></li>
              <li><a href="#rights">7. Your Rights</a></li>
              <li><a href="#retention">8. Data Retention</a></li>
              <li><a href="#children">9. Children's Privacy</a></li>
              <li><a href="#contact-privacy">10. Contact for Privacy</a></li>
            </ul>
          </div>

          <section className={styles.section} id="collect">
            <p className={styles.sectionNum}>Section 01</p>
            <h2 className={styles.sectionTitle}>Information We Collect</h2>
            <div className={styles.sectionBody}>
              <p><strong>Information You Give Us Directly:</strong></p>
              <ul>
                <li>Contact details: name, email address, phone number, company name, city/state</li>
                <li>Project information: business type, service requirements, budget range (provided via contact forms or calls)</li>
                <li>Payment information: invoice-related details (we do not store full card numbers; payments are processed via third-party gateways)</li>
                <li>Communications: emails, WhatsApp messages, call recordings (if both parties consent)</li>
              </ul>
              <p><strong>Information We Collect Automatically:</strong></p>
              <ul>
                <li>IP address and approximate geographic location (city/region level)</li>
                <li>Browser type and version, device type, operating system</li>
                <li>Pages visited, time spent on each page, referral source (how you found us)</li>
                <li>Form submissions, button clicks, and navigation behaviour (via Google Analytics)</li>
              </ul>
              <p><strong>Information From Third Parties:</strong></p>
              <ul>
                <li>If you contact us via LinkedIn, Instagram DM, or other platforms, we may receive basic profile information provided by those platforms</li>
                <li>Referrals from existing clients or partners may include your name and contact details with your consent</li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="use">
            <p className={styles.sectionNum}>Section 02</p>
            <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
            <div className={styles.sectionBody}>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> To deliver the services you have engaged us for, communicate project updates, and provide reports</li>
                <li><strong>Sales &amp; Business Development:</strong> To respond to your enquiries, prepare proposals, and follow up on consultations</li>
                <li><strong>Billing &amp; Accounting:</strong> To raise invoices, process payments, and maintain financial records as required under Indian GST law</li>
                <li><strong>Marketing (with consent):</strong> To send you relevant updates, case studies, or new service offerings — only if you have opted in or are an existing client. You can opt out at any time.</li>
                <li><strong>Website Improvement:</strong> To understand how visitors use our website and improve the user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable Indian laws, court orders, or regulatory requirements</li>
              </ul>
              <p>We do not sell your personal data to any third party for commercial purposes.</p>
            </div>
          </section>

          <section className={styles.section} id="storage">
            <p className={styles.sectionNum}>Section 03</p>
            <h2 className={styles.sectionTitle}>Data Storage &amp; Security</h2>
            <div className={styles.sectionBody}>
              <p>Your data is stored on secure servers operated by our hosting providers (primarily Vercel and platform services based in the US/EU) and within our internal tools (Google Workspace, CRM platforms). Data transmitted through our contact form is encrypted via HTTPS/SSL.</p>
              <p>We implement reasonable administrative, technical, and physical security measures to protect your personal information against unauthorised access, loss, theft, or misuse. These include: role-based access controls, two-factor authentication on team accounts, and regular security reviews.</p>
              <p>However, no method of data storage or electronic transmission is 100% secure. While we take your data security seriously, we cannot guarantee absolute security of any information transmitted to or stored by us.</p>
              <p>In the event of a data breach affecting your personal information, we will notify affected individuals within a reasonable time frame as required by applicable Indian law.</p>
            </div>
          </section>

          <section className={styles.section} id="sharing">
            <p className={styles.sectionNum}>Section 04</p>
            <h2 className={styles.sectionTitle}>Who We Share Your Information With</h2>
            <div className={styles.sectionBody}>
              <p>We may share your information with the following categories of parties:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party tools and platforms that help us deliver services — including Google Analytics (web analytics), Mailchimp or similar (email), Resend (transactional email), CRM platforms, project management tools, and payment processors. These parties are contractually obligated to keep your data confidential.</li>
                <li><strong>Freelancers &amp; Sub-contractors:</strong> Where the Agency engages specialist freelancers or contractor teams to fulfill parts of a project, they may have access to project-specific Client information on a need-to-know basis and are bound by confidentiality obligations.</li>
                <li><strong>Legal Authorities:</strong> We may disclose your information if required by law, court order, or regulatory authority, or if we believe disclosure is necessary to protect rights, safety, or property.</li>
                <li><strong>Business Transfer:</strong> If the Agency is acquired by or merged with another company, Client data may be transferred to the acquiring entity as part of the business assets, subject to the same privacy commitments.</li>
              </ul>
              <p>We do not share your personal data with advertising networks for the purpose of showing you ads on other websites.</p>
            </div>
          </section>

          <section className={styles.section} id="cookies">
            <p className={styles.sectionNum}>Section 05</p>
            <h2 className={styles.sectionTitle}>Cookies &amp; Tracking Technologies</h2>
            <div className={styles.sectionBody}>
              <p>Our website uses cookies and similar tracking technologies to enhance your experience and to understand how visitors use our website.</p>
              <p><strong>Types of cookies we use:</strong></p>
              <ul>
                <li><strong>Strictly Necessary Cookies:</strong> Required for the website to function properly (e.g., session cookies). These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics cookies that collect anonymous usage data to help us improve the website. These cookies do not identify you personally.</li>
                <li><strong>Marketing Cookies:</strong> Meta Pixel and Google Tag Manager scripts that help us understand ad campaign effectiveness and enable remarketing. These can be disabled without affecting core website functionality.</li>
              </ul>
              <p>By continuing to use our website, you consent to our use of cookies. You can control and delete cookies in your browser settings at any time. Note that disabling certain cookies may affect website functionality.</p>
            </div>
          </section>

          <section className={styles.section} id="client-data">
            <p className={styles.sectionNum}>Section 06</p>
            <h2 className={styles.sectionTitle}>Client Business Data</h2>
            <div className={styles.sectionBody}>
              <p>When you engage us for services, you may grant us access to your business accounts — Google Ads, Meta Business Manager, Google Analytics, website CMS, CRM, social media accounts, and similar platforms. This access is granted solely for the purpose of delivering the agreed services.</p>
              <p>We will not use access to your business accounts for any purpose other than delivering the scope of work agreed in the proposal. We will not access, copy, or analyse your customer data beyond what is strictly necessary for campaign delivery and reporting.</p>
              <p>When a project concludes, the Agency will remove itself as a user from all Client platforms accessed during the engagement within 14 business days, unless the Client requests otherwise for ongoing support purposes.</p>
              <p>Client business data (ad accounts, analytics data, customer databases) remains the property of the Client at all times. The Agency does not claim any ownership over Client business data accessed during service delivery.</p>
            </div>
          </section>

          <section className={styles.section} id="rights">
            <p className={styles.sectionNum}>Section 07</p>
            <h2 className={styles.sectionTitle}>Your Data Rights</h2>
            <div className={styles.sectionBody}>
              <p>Under India's IT Act 2000 and SPDI Rules 2011, you have the following rights regarding your personal data held by DigitalGrowPedia:</p>
              <ul>
                <li><strong>Right to Access:</strong> Request details of what personal data we hold about you</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete personal data</li>
                <li><strong>Right to Withdrawal of Consent:</strong> Withdraw your consent to our using your personal data for non-essential purposes (like marketing communications) at any time</li>
                <li><strong>Right to Grievance Redressal:</strong> File a complaint about how your data has been handled — see Section 10 below for contact details</li>
              </ul>
              <p>To exercise any of these rights, please email us at <a href="mailto:allindiamarketingsolution1@gmail.com">allindiamarketingsolution1@gmail.com</a> with your request. We will respond within 30 days. We may ask you to verify your identity before processing the request.</p>
              <p>Please note that certain legal, financial, or contractual obligations may require us to retain some of your data even after you withdraw consent (e.g., invoices and GST records must be retained for 6 years under Indian tax law).</p>
            </div>
          </section>

          <section className={styles.section} id="retention">
            <p className={styles.sectionNum}>Section 08</p>
            <h2 className={styles.sectionTitle}>Data Retention</h2>
            <div className={styles.sectionBody}>
              <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected:</p>
              <ul>
                <li><strong>Prospect Data (never became a client):</strong> Retained for 12 months after last contact, then deleted or anonymised</li>
                <li><strong>Active Client Data:</strong> Retained throughout the project and for 3 years after project completion for potential re-engagement and support</li>
                <li><strong>Invoice &amp; Payment Records:</strong> Retained for a minimum of 6 financial years as required by the Companies Act and GST regulations</li>
                <li><strong>Email &amp; Communication Logs:</strong> Retained for 2 years after project completion</li>
                <li><strong>Website Analytics Data:</strong> Anonymised aggregate data retained indefinitely; individual session data retained for 26 months per Google Analytics defaults</li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="children">
            <p className={styles.sectionNum}>Section 09</p>
            <h2 className={styles.sectionTitle}>Children&apos;s Privacy</h2>
            <div className={styles.sectionBody}>
              <p>Our services are intended exclusively for businesses and adults aged 18 years and above. We do not knowingly collect personal information from anyone under the age of 18. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will delete that information promptly.</p>
            </div>
          </section>

          <section className={styles.section} id="contact-privacy">
            <p className={styles.sectionNum}>Section 10</p>
            <h2 className={styles.sectionTitle}>Privacy Queries &amp; Grievance Officer</h2>
            <div className={styles.sectionBody}>
              <p>In accordance with the Information Technology Act, 2000 and Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules, 2021, the name and contact details of our Grievance Officer are provided below:</p>
              <div className={styles.highlightBox}>
                <strong>Grievance Officer</strong><br />
                DigitalGrowPedia<br />
                Ashish Nagar, Murlipura Scheme, Jaipur, Rajasthan – 302039<br />
                📧 <a href="mailto:allindiamarketingsolution1@gmail.com">allindiamarketingsolution1@gmail.com</a><br />
                📞 <a href="tel:+919352107526">+91 93521 07526</a><br />
                <em>Grievances will be acknowledged within 48 hours and resolved within 30 days of receipt.</em>
              </div>
              <p>This Privacy Policy may be updated from time to time. The latest version will always be available at <strong>digitalgrowpedia.com/privacy</strong>. Continued use of our website or services after changes constitutes your acceptance of the updated policy.</p>
            </div>
          </section>

          <div className={styles.contactSection}>
            <h3>Questions About Your Data?</h3>
            <p>Our team will respond to all data inquiries within 48 business hours.</p>
            <p>
              📧 <a href="mailto:allindiamarketingsolution1@gmail.com">allindiamarketingsolution1@gmail.com</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              📞 <a href="tel:+919352107526">+91 93521 07526</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
