import { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | DigitalGrowPedia",
  description: "DigitalGrowPedia's official Refund and Cancellation Policy. Understand our payment, refund, and cancellation terms before engaging our digital marketing services.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <div className={styles.pageWrap}>
      <div className="container">
        <div className={styles.content}>

          <div className={styles.hero}>
            <span className={styles.heroLabel}>Legal Document</span>
            <h1 className={styles.heroTitle}>Refund &amp; Cancellation Policy</h1>
            <p className={styles.heroMeta}>
              <strong>Last updated:</strong> April 5, 2026 &nbsp;|&nbsp; Governed under Indian Contract Act, 1872
            </p>
          </div>

          <div className={styles.warningBox}>
            <strong>⚠ Read Before Making Any Payment</strong>
            Digital marketing and creative services are time-intensive professional services. Once a team begins working on your project — doing research, strategy, creative work, or technical implementation — those hours cannot be recovered. For this reason, our refund policy is strict. Please read every section carefully before proceeding with any payment.
          </div>

          <div className={styles.toc}>
            <p className={styles.tocTitle}>Sections in This Policy</p>
            <ul className={styles.tocList}>
              <li><a href="#general">1. General Refund Position</a></li>
              <li><a href="#seo-refund">2. SEO Services</a></li>
              <li><a href="#ads-refund">3. Paid Advertising</a></li>
              <li><a href="#social-refund">4. Social Media Marketing</a></li>
              <li><a href="#dev-refund">5. Web & App Development</a></li>
              <li><a href="#design-refund">6. Graphic Design</a></li>
              <li><a href="#ai-refund">7. AI Automation Services</a></li>
              <li><a href="#leadgen-refund">8. Lead Generation</a></li>
              <li><a href="#cancellation">9. Cancellation by Client</a></li>
              <li><a href="#exceptions">10. Exceptional Circumstances</a></li>
            </ul>
          </div>

          <section className={styles.section} id="general">
            <p className={styles.sectionNum}>Section 01</p>
            <h2 className={styles.sectionTitle}>General Refund Position</h2>
            <div className={styles.sectionBody}>
              <div className={styles.dangerBox}>
                <strong>All Payments Are Non-Refundable Once Work Has Started.</strong> The moment a project officially begins — which we define as the Agency starting any research, strategy, creative work, technical implementation, or account configuration — no refund will be issued for any reason, including unsatisfactory results, change of mind, business closure, funds shortage, or disagreement with strategy.
              </div>
              <p>This policy exists because every hour our team invests in your project has a direct cost — salaries, tools, research, and time. Unlike a physical product, professional services cannot be "returned." The time and expertise invested are consumed the moment work begins.</p>
              <p>By making your first payment (advance or full), you acknowledge and accept this refund policy in full. If you have doubts about proceeding, we strongly encourage you to ask all questions, request a consultation call, or review our <a href="/terms">Terms &amp; Conditions</a> before paying.</p>
              <p><strong>GST is Non-Refundable:</strong> Goods and Services Tax collected at 18% is remitted to the Government of India and cannot be refunded under any circumstances.</p>
            </div>
          </section>

          <section className={styles.section} id="seo-refund">
            <p className={styles.sectionNum}>Section 02</p>
            <h2 className={styles.sectionTitle}>SEO Services — Refund Terms</h2>
            <div className={styles.sectionBody}>
              <p><strong>No Refund for Rankings:</strong> We do not offer refunds based on ranking positions — whether they went up, stayed the same, or dropped. Search engine rankings are determined by Google's algorithm, which we do not control. No refund will be issued if rankings drop due to a Google algorithm update, competitor activity, or any other reason beyond our control.</p>
              <p><strong>No Refund for Traffic Loss:</strong> Organic traffic fluctuates for many reasons. If your website's traffic drops during or after an SEO engagement, we will analyse and advise — but this is not grounds for a refund.</p>
              <p><strong>Refund If We Do Zero Work:</strong> If the Agency has collected payment but demonstrably has not started any work within 10 business days of the agreed start date (with no valid reason), the Client may request a refund for that period. The Agency will investigate and, if confirmed, refund the unused portion of that month's retainer minus any setup costs already incurred.</p>
              <p><strong>Minimum 3-Month Commitment:</strong> All SEO retainers have a minimum 3-month non-cancellable period. No refunds are issued for early cancellation within this window. Month-by-month cancellation is only available after the minimum period with 30 days written notice.</p>
              <div className={styles.highlightBox}>
                <strong>What You Are Paying For:</strong> Monthly on-page optimisation tasks, technical audit fixes, content creation and publishing, backlink outreach, and monthly reporting — not for a specific ranking or traffic number. The price is for the professional service, not the outcome.
              </div>
            </div>
          </section>

          <section className={styles.section} id="ads-refund">
            <p className={styles.sectionNum}>Section 03</p>
            <h2 className={styles.sectionTitle}>Paid Advertising — Refund Terms</h2>
            <div className={styles.sectionBody}>
              <p><strong>Management Fee Is Non-Refundable:</strong> The Agency's management fee covers the time spent setting up, monitoring, optimising, and reporting on your ad campaigns. This fee is non-refundable regardless of the ad campaign performance.</p>
              <p><strong>Ad Spend Is Not Refundable by Us:</strong> Money spent on actual ads (running on Google, Meta, LinkedIn, etc.) goes directly to the ad platform — not to the Agency. We cannot refund money that has already been consumed by an ad platform. Any refund of unused ad budget (from a paused or cancelled ad account) must be requested directly from the respective ad platform.</p>
              <p><strong>No Refund for Poor ROAS:</strong> If the campaign's return on ad spend does not meet your expectations or projections, this is not grounds for a refund of the management fee. Market conditions, audience quality, ad creative performance, and landing page conversion rates all contribute to ROAS and are beyond the Agency's complete control.</p>
              <p><strong>Pre-Paid Campaigns:</strong> If the Client has pre-paid for 3 or 6 months of ad management in advance and chooses to terminate early, the remaining unused months will be refunded at 70% of the pro-rated monthly rate (a 30% kill fee applies to cover administrative and account management costs already invested).</p>
            </div>
          </section>

          <section className={styles.section} id="social-refund">
            <p className={styles.sectionNum}>Section 04</p>
            <h2 className={styles.sectionTitle}>Social Media Marketing — Refund Terms</h2>
            <div className={styles.sectionBody}>
              <p><strong>Monthly Retainer — Non-Refundable:</strong> Social media retainer fees are non-refundable once the month has commenced. Content planning, calendar creation, graphics production, and scheduling are typically done in advance at the start of each month.</p>
              <p><strong>No Refund for Follower Count:</strong> Refunds will not be issued because of a specific follower count not being reached. Follower growth depends on the audience's genuine interest in the content and is not a metric the Agency can mechanically guarantee.</p>
              <p><strong>Content Approved by Client:</strong> Once the Client has approved a content batch for publishing, refunds cannot be claimed for dissatisfaction with posted content. Approval constitutes acceptance. Before approving, the Client should request changes during the revision period.</p>
              <p><strong>Account Platform Suspension:</strong> If a social media account is suspended or restricted by the platform, no refund is issued for work done prior to the suspension. The Agency will assist in resolving the suspension but is not financially responsible for platform-side actions.</p>
            </div>
          </section>

          <section className={styles.section} id="dev-refund">
            <p className={styles.sectionNum}>Section 05</p>
            <h2 className={styles.sectionTitle}>Web &amp; App Development — Refund Terms</h2>
            <div className={styles.sectionBody}>
              <p><strong>Advance Payment Is Non-Refundable:</strong> The initial advance payment (minimum 50%) is non-refundable. This advance is used immediately to onboard your project, allocate developer resources, and initiate work. Requesting a cancellation after paying the advance does not entitle the Client to a refund of the advance.</p>
              <p><strong>Milestone-Based Projects:</strong> For large projects split into milestones, each milestone payment becomes non-refundable once the Agency begins work on that milestone. If the Client terminates mid-milestone, they are charged for the full milestone amount.</p>
              <p><strong>Change of Technology or Direction:</strong> If the Client changes the technology stack, platform, or design direction after development has started, the additional development time is billed separately. No refund is issued for work done on the original direction.</p>
              <p><strong>App Store Rejection:</strong> If an app is rejected by the Apple App Store or Google Play Store during submission, this is not grounds for a refund of any development fees. The Agency will work with the Client to address the rejection reason, which may require additional development work billed at standard hourly rates.</p>
              <p><strong>Client-Caused Delays:</strong> If a project is delayed due to the Client not providing content, feedback, or approvals, no refund is issued for the delay period. The project timeline will be extended accordingly.</p>
              <div className={styles.highlightBox}>
                <strong>Partial Completion Scenario:</strong> If the Agency has completed a portion of the work and the Client wishes to stop, the Client will be charged for the work completed (pro-rated based on hours invested or milestones reached, whichever is higher). Any amount already paid above the work-completed value will be refunded within 30 business days.
              </div>
            </div>
          </section>

          <section className={styles.section} id="design-refund">
            <p className={styles.sectionNum}>Section 06</p>
            <h2 className={styles.sectionTitle}>Graphic Design — Refund Terms</h2>
            <div className={styles.sectionBody}>
              <p><strong>No Refund After Concept Delivery:</strong> Once the Agency has delivered the first set of design concepts for review, the payment is non-refundable. The creative research, ideation, and execution of those concepts has already occurred and cannot be undone.</p>
              <p><strong>"I Don't Like It" Is Not a Refund Reason:</strong> Design is subjective. If the Client does not like the creative direction of the initial concepts, the correct process is to provide specific, structured feedback within the agreed revision rounds. A refund will not be issued because the Client has a general dislike for the concepts without providing actionable feedback.</p>
              <p><strong>Approved and Published Work:</strong> If any design work has already been published, printed, or used publicly by the Client, no refund is possible regardless of any subsequent dissatisfaction.</p>
              <p><strong>Rush Fees:</strong> Rush delivery fees (paid for expedited timelines) are completely non-refundable, as the Agency rearranges its production schedule to accommodate rush requests.</p>
            </div>
          </section>

          <section className={styles.section} id="ai-refund">
            <p className={styles.sectionNum}>Section 07</p>
            <h2 className={styles.sectionTitle}>AI Automation — Refund Terms</h2>
            <div className={styles.sectionBody}>
              <p><strong>Setup Fee Is Non-Refundable:</strong> AI and automation setup fees are non-refundable once implementation has started. Building chatbots, CRM workflows, and automation pipelines requires significant technical time that cannot be recovered.</p>
              <p><strong>Third-Party Platform Rejection:</strong> If a WhatsApp Business API application is rejected by Meta, or a chatbot deployment is rejected by a platform, no refund is issued on the setup fee. These are third-party decisions outside the Agency's control. The Agency will advise on reapplication strategy.</p>
              <p><strong>Chatbot Performance:</strong> If the chatbot or automation does not perform as per the Client's expectations (e.g., does not generate leads, gives wrong answers), refunds will not be issued unless the Agency fails to deliver the agreed features as documented in the proposal.</p>
              <p><strong>API Cost Overruns:</strong> If the Client's usage of the AI system results in higher-than-expected API costs (e.g., OpenAI token charges), the Agency is not responsible for those costs. API usage fees are billed directly to the Client by the respective AI provider.</p>
            </div>
          </section>

          <section className={styles.section} id="leadgen-refund">
            <p className={styles.sectionNum}>Section 08</p>
            <h2 className={styles.sectionTitle}>Lead Generation — Refund Terms</h2>
            <div className={styles.sectionBody}>
              <p><strong>No Refund for Leads Not Converting:</strong> The Agency's responsibility ends at delivering qualified leads or booked appointments as defined in the proposal. If a lead does not convert into a paying customer, no refund is issued. Conversion depends on the Client's offer, sales ability, and follow-up process.</p>
              <p><strong>Data Accuracy:</strong> Lead lists are built using data from third-party databases which are updated regularly but may contain dated information. An acceptable error/bounce rate of up to 5% is built into list pricing. For errors beyond 5%, the Agency will replace invalid records, not issue a monetary refund.</p>
              <p><strong>Cold Email Domain Setup:</strong> Infrastructure setup fees (domain registration, email warming, DMARC configuration) are non-refundable once setup is initiated, as these involve real domain and tooling purchases made on the Client's behalf.</p>
            </div>
          </section>

          <section className={styles.section} id="cancellation">
            <p className={styles.sectionNum}>Section 09</p>
            <h2 className={styles.sectionTitle}>Cancellation Policy</h2>
            <div className={styles.sectionBody}>
              <p><strong>How to Cancel:</strong> To cancel any ongoing service, the Client must send a written cancellation notice via email to <a href="mailto:allindiamarketingsolution1@gmail.com">allindiamarketingsolution1@gmail.com</a> with the subject line "Service Cancellation — [Company Name]." Cancellations are not accepted over phone calls, WhatsApp, or verbal communication alone.</p>
              <p><strong>Monthly Retainers:</strong> Notice period is <strong>30 calendar days.</strong> If notice is given on the 5th of a month, your service continues (and you are billed) until the 5th of the following month. No proration is offered for partial months worked.</p>
              <p><strong>Annual Contracts:</strong> If the Client has signed an annual contract or received a discount in exchange for committing to a longer period, cancellation before the contract end date will result in the Client paying the balance of the contract at the undiscounted rate minus any payments already made.</p>
              <p><strong>No Cooling-Off Period for B2B:</strong> India's Consumer Protection Act cooling-off provisions apply to individual consumers. Business-to-Business (B2B) contracts — where the Client is a business entity — do not have a mandated cooling-off period. Once signed and paid, the agreement is binding with the terms described in this policy.</p>
            </div>
          </section>

          <section className={styles.section} id="exceptions">
            <p className={styles.sectionNum}>Section 10</p>
            <h2 className={styles.sectionTitle}>Exceptional Circumstances</h2>
            <div className={styles.sectionBody}>
              <p><strong>Agency Accountability:</strong> If the Agency clearly fails to deliver the agreed, documented deliverables (as listed in the signed proposal) and fails to remedy the situation within 30 days of being notified in writing, the Client may be entitled to a partial or full refund at the Agency's discretion, limited to the fees paid for the undelivered portion of the work.</p>
              <p><strong>Force Majeure:</strong> Neither party shall be held liable for delays or failures in performance resulting from acts outside their reasonable control, including natural disasters, power cuts, pandemic-related disruptions, government orders, or internet or platform outages. In such events, the Project timeline will be extended; no refund will be due for the delay period itself.</p>
              <p><strong>Refund Processing Time:</strong> In any case where a refund is approved by the Agency, the refund will be processed within <strong>30 business days</strong> of the formal approval, via the same payment method used by the Client (NEFT, UPI, or card). Banking delays are outside the Agency's control and do not constitute a breach of this policy.</p>
            </div>
          </section>

          <div className={styles.contactSection}>
            <h3>Have a Question About a Payment?</h3>
            <p>Reach our accounts team before raising any dispute — most concerns can be resolved quickly by talking to us directly.</p>
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
