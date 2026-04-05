import { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Disclaimer | DigitalGrowPedia",
  description: "Important disclaimer about result expectations, service limitations, and third-party dependencies for all services offered by DigitalGrowPedia.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className={styles.pageWrap}>
      <div className="container">
        <div className={styles.content}>

          <div className={styles.hero}>
            <span className={styles.heroLabel}>Legal Document</span>
            <h1 className={styles.heroTitle}>Disclaimer</h1>
            <p className={styles.heroMeta}>
              <strong>Last updated:</strong> April 5, 2026 &nbsp;|&nbsp; Applies to all services and website content
            </p>
          </div>

          <div className={styles.warningBox}>
            <strong>⚠ Important Notice</strong>
            This disclaimer covers limitations, result expectations, and third-party dependencies across all services offered by DigitalGrowPedia. Reading this page will help you set realistic expectations before starting any project with us.
          </div>

          <section className={styles.section} id="results">
            <p className={styles.sectionNum}>Section 01</p>
            <h2 className={styles.sectionTitle}>No Guarantee of Business Results</h2>
            <div className={styles.sectionBody}>
              <p>DigitalGrowPedia provides professional digital marketing, design, and technology services. While we use proven strategies and work hard to deliver meaningful outcomes for our clients, we do not and cannot guarantee any specific business result, including but not limited to: increased revenue, increased profit, business growth, more customers, higher sales conversion rates, or any specific return on investment (ROI).</p>
              <p>Results from digital marketing services depend on a wide range of variables outside our control, including market conditions, economic environment, competition in your industry, your product or service quality, your pricing strategy, your internal sales team's capabilities, and the responsiveness and decision-making of your business.</p>
              <p>Any case studies, examples, numbers, or testimonials shown on our website represent specific results achieved for specific clients under specific market conditions. These results are not typical and are not a guarantee or even a prediction of future results for any other business.</p>
            </div>
          </section>

          <section className={styles.section} id="website-content">
            <p className={styles.sectionNum}>Section 02</p>
            <h2 className={styles.sectionTitle}>Website Content Accuracy</h2>
            <div className={styles.sectionBody}>
              <p>The content on this website (digitalgrowpedia.com) is provided for general information purposes only. While we make every effort to keep all information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of any information, services, products, or related graphics contained on the website.</p>
              <p>Prices, packages, and service descriptions on this website are subject to change at any time without prior notice. The final agreed pricing is always documented in the signed Project Proposal sent directly to the Client.</p>
              <p>This website may contain links to external websites operated by third parties. These links are provided for your convenience only. We have no control over the content, privacy policies, or practices of third-party websites and accept no responsibility for them.</p>
            </div>
          </section>

          <section className={styles.section} id="seo-disclaimer">
            <p className={styles.sectionNum}>Section 03</p>
            <h2 className={styles.sectionTitle}>SEO — Result Disclaimer</h2>
            <div className={styles.sectionBody}>
              <div className={styles.dangerBox}>
                <strong>We do not guarantee any specific search engine ranking for any keyword.</strong> This is not a claim made to protect ourselves — it is simply the truth about how SEO works.
              </div>
              <p>Google's search algorithm contains hundreds of ranking factors. No individual or agency has access to Google's internal ranking code. While we follow Google's Webmaster Guidelines and apply industry best practices consistently, the outcome of those efforts in terms of ranking position is determined by Google's algorithms, not by us.</p>
              <p>If you have previously been approached by any agency promising "Number 1 on Google in 30 days" or "Guaranteed Page 1 results," please be aware that such claims are false promises used to win contracts and are not how SEO actually works.</p>
              <p>We are happy to show you the quality of our work through transparent monthly reports — but we will never promise you a specific keyword position. Our promise is consistent, high-quality work every month.</p>
            </div>
          </section>

          <section className={styles.section} id="ads-disclaimer">
            <p className={styles.sectionNum}>Section 04</p>
            <h2 className={styles.sectionTitle}>Paid Advertising — Result Disclaimer</h2>
            <div className={styles.sectionBody}>
              <p>Paid advertising involves real financial risk. Money spent on ads (Google, Facebook, Instagram, LinkedIn, YouTube, etc.) is non-recoverable once those ads have run. If an ad campaign does not generate the desired leads or sales, the ad budget spent cannot be returned — either by us or by the ad platform.</p>
              <p>Advertising results are influenced by many factors we do not control: your audience's willingness to buy at that moment in time, competitor bidding activity, ad platform algorithm changes, the quality of your website landing pages, your product pricing, and global or local economic conditions.</p>
              <p>Past campaign results shown in case studies or sample reports on this website are provided as examples of our capability and approach. They are not a representation that similar results will be achieved for your business or in your specific market.</p>
            </div>
          </section>

          <section className={styles.section} id="thirdparty-disclaimer">
            <p className={styles.sectionNum}>Section 05</p>
            <h2 className={styles.sectionTitle}>Third-Party Platform Disclaimer</h2>
            <div className={styles.sectionBody}>
              <p>Many of our services involve working with third-party platforms including Google, Meta (Facebook &amp; Instagram), LinkedIn, YouTube, WhatsApp, Shopify, WordPress, HubSpot, Zoho, Salesforce, OpenAI, and many others. We are an independent service provider and are not affiliated with, endorsed by, or an official partner of any of these platforms unless explicitly stated in our official partnership badges.</p>
              <p>All of these platforms are operated independently by their respective organisations. They can change their algorithms, policies, terms of service, pricing, or APIs at any time without notice. Such changes may directly affect the services we provide to you and may require additional work or budget adjustments. We cannot be held responsible for any impact caused by changes made by these third-party platforms.</p>
              <p>Account suspensions, bans, or restrictions imposed by any third-party platform on the Client's accounts are not the Agency's responsibility, unless directly and provably caused by an error on the Agency's part in its execution of agreed services.</p>
            </div>
          </section>

          <section className={styles.section} id="ai-disclaimer">
            <p className={styles.sectionNum}>Section 06</p>
            <h2 className={styles.sectionTitle}>AI-Generated Content Disclaimer</h2>
            <div className={styles.sectionBody}>
              <p>Where the Agency uses AI tools as part of its service delivery (for content drafts, data analysis, chatbot responses, or automation logic), such tools have inherent limitations. AI-generated content may occasionally contain factual inaccuracies, outdated information, or logically inconsistent statements — a known limitation referred to as "hallucinations" in AI research.</p>
              <p>All AI-generated content used in client-facing deliverables (emails, blog posts, chatbot scripts, social media captions) is reviewed by a human team member before submission for Client review. The Client is responsible for reviewing all content for factual accuracy specific to their business before approving it for publication.</p>
              <p>The Agency is not liable for any business, legal, or reputational harm arising from AI-generated content that has been reviewed and approved by the Client prior to publication.</p>
            </div>
          </section>

          <section className={styles.section} id="professional-advice">
            <p className={styles.sectionNum}>Section 07</p>
            <h2 className={styles.sectionTitle}>Not Legal, Financial, or Medical Advice</h2>
            <div className={styles.sectionBody}>
              <p>Nothing contained in this website, in our proposals, in our reports, or communicated by any member of the Agency team constitutes legal advice, financial investment advice, medical advice, or any other regulated professional advice.</p>
              <p>For decisions relating to legal compliance of your advertising content, campaign claims, regulatory requirements for your industry, financial planning, or any matter requiring regulated professional expertise, please consult a qualified professional (lawyer, chartered accountant, SEBI-registered advisor, or relevant specialist) independently of your engagement with the Agency.</p>
            </div>
          </section>

          <section className={styles.section} id="availability">
            <p className={styles.sectionNum}>Section 08</p>
            <h2 className={styles.sectionTitle}>Service Availability</h2>
            <div className={styles.sectionBody}>
              <p>The Agency operates from Jaipur, Rajasthan, India during standard Indian business hours (Monday to Saturday, 10:00 AM to 7:00 PM IST). While we strive to be responsive to clients across different time zones, response times outside Indian business hours may be delayed.</p>
              <p>The Agency reserves the right to refuse service to any potential client for any reason, including but not limited to: conflict of interest with an existing client in the same niche, services that the Agency is not equipped to deliver to a sufficient standard, or clients whose business model conflicts with the Agency's ethical standards.</p>
              <p>Services are subject to availability of the Agency's team. During peak periods or following unanticipated team changes, new project start dates may be pushed back. The Agency will communicate any such delays promptly.</p>
            </div>
          </section>

          <div className={styles.contactSection}>
            <h3>Any Questions?</h3>
            <p>If something in this disclaimer is unclear, contact us before engaging our services.</p>
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
