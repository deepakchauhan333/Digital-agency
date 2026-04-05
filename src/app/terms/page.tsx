import { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | DigitalGrowPedia",
  description: "Read the full Terms and Conditions governing all services offered by DigitalGrowPedia — SEO, Paid Ads, Social Media, Web Development, App Development, Graphic Design, AI Automation, and Lead Generation.",
  alternates: { canonical: "https://www.digitalgrowpedia.com/terms" },
};

export default function TermsPage() {
  return (
    <div className={styles.pageWrap}>
      <div className="container">
        <div className={styles.content}>

          <div className={styles.hero}>
            <span className={styles.heroLabel}>Legal Document</span>
            <h1 className={styles.heroTitle}>Terms &amp; Conditions</h1>
            <p className={styles.heroMeta}>
              <strong>Last updated:</strong> April 5, 2026 &nbsp;|&nbsp; Governed by laws of India (Rajasthan jurisdiction)
            </p>
          </div>

          <div className={styles.warningBox}>
            <strong>⚠ Please Read Before Engaging Us</strong>
            This is a legally binding document. By contacting us, making a payment, signing any proposal, or starting any project with DigitalGrowPedia ("the Agency", "we", "us", "our"), you confirm that you have read, understood, and accepted all terms listed below. Ignorance of these terms will not be accepted as a defence in any dispute. If you do not agree, do not proceed.
          </div>

          <div className={styles.toc}>
            <p className={styles.tocTitle}>Table of Contents</p>
            <ul className={styles.tocList}>
              <li><a href="#parties">1. Parties & Agreement</a></li>
              <li><a href="#scope">2. Scope of Services</a></li>
              <li><a href="#payment">3. Payment Terms & GST</a></li>
              <li><a href="#seo">4. SEO — No Ranking Guarantee</a></li>
              <li><a href="#ads">5. Paid Ads — No ROAS Guarantee</a></li>
              <li><a href="#social">6. Social Media — No Viral Guarantee</a></li>
              <li><a href="#webdev">7. Web & App Development</a></li>
              <li><a href="#design">8. Graphic Design & Revisions</a></li>
              <li><a href="#ai">9. AI Automation & Chatbots</a></li>
              <li><a href="#leadgen">10. Lead Generation</a></li>
              <li><a href="#ip">11. Intellectual Property</a></li>
              <li><a href="#confidential">12. Confidentiality & NDA</a></li>
              <li><a href="#termination">13. Termination & Exit</a></li>
              <li><a href="#liability">14. Limitation of Liability</a></li>
              <li><a href="#disputes">15. Disputes & Jurisdiction</a></li>
              <li><a href="#amendments">16. Amendments</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section className={styles.section} id="parties">
            <p className={styles.sectionNum}>Section 01</p>
            <h2 className={styles.sectionTitle}>Parties &amp; Agreement</h2>
            <div className={styles.sectionBody}>
              <p>These Terms and Conditions ("Terms") constitute a legally binding agreement between <strong>DigitalGrowPedia</strong>, a digital marketing agency operating from Ashish Nagar, Murlipura Scheme, Jaipur, Rajasthan – 302039, India, and any individual, sole proprietor, partnership, private limited company, LLP, public company, trust, or other legal entity ("Client", "you") that engages, contracts, or pays the Agency for any service.</p>
              <p>The agreement comes into force on the earliest of: (a) the Client signing a proposal or service order form, (b) the Client making any payment (full or partial) to the Agency, (c) the Client providing written or verbal approval to commence work, or (d) the Client providing access to any business account (Google Ads, Meta, website, CRM etc.) to the Agency.</p>
              <p>These Terms apply in addition to any separately signed Service Agreement, Statement of Work (SOW), or Project Proposal. In case of conflict, the signed Project Proposal takes precedence on project-specific matters; these Terms govern everything else.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className={styles.section} id="scope">
            <p className={styles.sectionNum}>Section 02</p>
            <h2 className={styles.sectionTitle}>Scope of Services</h2>
            <div className={styles.sectionBody}>
              <p>The Agency provides the following categories of digital services, each subject to the specific clauses in Sections 4–10 of this document:</p>
              <ul>
                <li>Search Engine Optimization (SEO) — including On-Page, Technical, Local, E-commerce, Link Building, and Content SEO</li>
                <li>Paid Advertising (PPC) — including Google Ads, Meta Ads, YouTube Ads, LinkedIn Ads, and Amazon Advertising</li>
                <li>Social Media Marketing — including platform management, content creation, community management, influencer campaigns, and social commerce</li>
                <li>Web Design &amp; Development — including corporate websites, e-commerce platforms, landing pages, and web portals</li>
                <li>App Development — including iOS, Android, React Native, Flutter, and backend API development</li>
                <li>Graphic Design — including logo design, brand identity, social media graphics, motion graphics, packaging, and print design</li>
                <li>AI Automation — including CRM automation, chatbot development, workflow automation, email marketing automation, and WhatsApp business automation</li>
                <li>Lead Generation — including B2B outreach, cold email campaigns, LinkedIn prospecting, landing page funnels, and database building</li>
              </ul>
              <p>Deliverables, timelines, and specific inclusions are defined in the individual Project Proposal or SOW provided to the Client. Anything not explicitly listed in the proposal is <strong>out of scope</strong> and will require a separate agreement and additional payment.</p>
              <p>The Agency reserves the right to engage freelancers, contractors, or partner agencies to fulfill parts of the agreed scope without prior Client consent, provided overall quality standards are maintained.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className={styles.section} id="payment">
            <p className={styles.sectionNum}>Section 03</p>
            <h2 className={styles.sectionTitle}>Payment Terms &amp; GST</h2>
            <div className={styles.sectionBody}>
              <p><strong>Advance Payment:</strong> All projects require a minimum of <strong>50% advance payment</strong> before any work commences. For monthly retainers, the full monthly fee is due on or before the 1st of each billing month. No work will begin until the advance is received and confirmed cleared in the Agency's bank account.</p>
              <p><strong>Balance Payment:</strong> The remaining 50% for project-based work is due upon completion of the project and before the final delivery or live handover. The Agency is not obligated to deliver final files or go live until the full balance is cleared.</p>
              <p><strong>GST:</strong> All prices are exclusive of Goods and Services Tax (GST). GST at <strong>18%</strong> will be applicable on all invoices as per Indian tax laws. The Client is responsible for paying GST in addition to the service fee. The Agency will provide a valid GST invoice for all payments received.</p>
              <p><strong>Late Payments:</strong> If the Client fails to make payment within <strong>7 calendar days</strong> of the due date, the Agency reserves the right to: (a) suspend all ongoing work immediately, (b) charge a late fee of <strong>2% per month</strong> on the outstanding amount, and (c) terminate the agreement after 30 days of non-payment without any further notice.</p>
              <p><strong>Ad Spend Budgets:</strong> For Paid Ads and Lead Generation services, the Client's advertising budget (amount spent on Google, Meta, LinkedIn etc.) is <strong>separate from and in addition to</strong> the Agency's management fees. The Agency's management fee is charged for the strategy, setup, and management work — not for the ad spend itself. The Client is solely responsible for topping up their ad accounts.</p>
              <div className={styles.dangerBox}>
                <strong>Non-Refundable:</strong> All payments made to the Agency are strictly non-refundable once work has commenced, regardless of results, timelines, or satisfaction. Please see our <a href="/refund-policy">Refund Policy</a> page for the complete refund terms.
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className={styles.section} id="seo">
            <p className={styles.sectionNum}>Section 04</p>
            <h2 className={styles.sectionTitle}>SEO Services — No Ranking Guarantee</h2>
            <div className={styles.sectionBody}>
              <div className={styles.dangerBox}>
                <strong>Critical Disclaimer:</strong> No ethical SEO agency can guarantee specific search engine rankings, keyword positions, organic traffic volumes, or lead numbers from organic search. Any agency that promises you "Page 1 in 30 days" or "guaranteed rankings" is misleading you. We do not make such claims.
              </div>
              <p>SEO results depend on a large number of factors entirely outside the Agency's control, including but not limited to: Google's search algorithm updates (which can happen at any time without notice), competitor activity and new entrants in your niche, the age and domain authority of your website, your industry's keyword competitiveness, the quality and age of your existing content and backlink profile, and technical issues on your website's server or hosting environment.</p>
              <p><strong>What the Agency Commits To:</strong> We commit to implementing industry-standard best practices across on-page SEO, technical SEO, content strategy, and link building as per the agreed monthly deliverables. We will provide monthly reports showing the work done, keyword movement trends, and traffic data.</p>
              <p><strong>Algorithm Updates:</strong> If Google, Bing, or any search engine releases a major algorithm update that causes a drop in rankings or organic traffic, the Agency is <strong>not responsible</strong> for any resulting loss of rankings, traffic, leads, or revenue. The Agency will advise on recovery strategies, but cannot guarantee or promise a particular recovery timeline or outcome.</p>
              <p><strong>Minimum Engagement:</strong> SEO is a long-term discipline. We require a minimum engagement of <strong>3 months</strong> on all SEO retainers. Results are generally visible between months 3 and 6. No refunds will be issued for early termination within the minimum period.</p>
              <p><strong>Client Responsibilities for SEO:</strong> The Client must not make unauthorized changes to the website, install new plugins or themes, or switch hosting providers without informing the Agency. If the Client or a third party makes changes that negatively affect SEO performance, the Agency is not liable for any decline in rankings or traffic.</p>
              <p><strong>Content Approval:</strong> Where the Agency creates content for the Client's website (blogs, landing pages, etc.), the Client is responsible for reviewing and approving content for factual accuracy. The Agency is not liable for inaccurate business information published with Client approval.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className={styles.section} id="ads">
            <p className={styles.sectionNum}>Section 05</p>
            <h2 className={styles.sectionTitle}>Paid Advertising — No ROAS or Lead Guarantee</h2>
            <div className={styles.sectionBody}>
              <div className={styles.dangerBox}>
                <strong>No Return on Ad Spend (ROAS) Guarantee:</strong> The Agency does not guarantee any specific number of leads, conversions, sales, revenue, cost-per-lead, or return on ad spend from any paid advertising campaign run on Google, Meta (Facebook/Instagram), LinkedIn, YouTube, or any other platform.
              </div>
              <p>Paid advertising results are directly influenced by factors including but not limited to: market demand for your product or service, the quality of the Client's website, landing pages, and product pricing, the Client's product/service competitiveness in the market, the ad platform's algorithm and auction dynamics, the available ad budget provided by the Client, audience saturation and seasonal demand fluctuations, and ad platform policy changes or account restrictions.</p>
              <p><strong>Ad Account Ownership:</strong> All paid advertising accounts (Google Ads, Meta Business Manager, LinkedIn Campaign Manager etc.) will be set up under the Client's own account or email where possible. The ad spend budget is deducted directly from the Client's account, not the Agency's. The Agency is an authorized manager, not the account owner unless otherwise agreed.</p>
              <p><strong>Account Suspension / Bans:</strong> If an ad account is suspended, restricted, or banned by the ad platform for any reason — including policy violations, payment failures, or algorithmic flags — the Agency is not responsible for the resulting loss of campaigns, data, or revenue. The Agency will assist in appealing the decision but cannot guarantee reinstatement.</p>
              <p><strong>Budget Cannot Be Recovered:</strong> Ad spend that has already been consumed by an ad platform (i.e., ads have run and been charged) cannot be refunded by the Agency. The Agency does not hold your ad budget; it is spent directly with the platform. If the platform fails to deliver results, you must pursue any refund directly with that platform.</p>
              <p><strong>Budget Usage:</strong> The Agency will manage campaigns to the best of its ability within the agreed ad budget. Minor overspend (up to 10% above daily budget as per platform algorithm) is a normal platform behavior and will not be compensated by the Agency.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className={styles.section} id="social">
            <p className={styles.sectionNum}>Section 06</p>
            <h2 className={styles.sectionTitle}>Social Media Marketing — No Viral or Follower Guarantee</h2>
            <div className={styles.sectionBody}>
              <p>The Agency does not guarantee any specific number of followers, likes, shares, reach, impressions, viral content, or engagement rates on any social media platform including but not limited to Instagram, Facebook, LinkedIn, YouTube, X (Twitter), and Pinterest.</p>
              <p>Social media performance is influenced by factors outside the Agency's control including: platform algorithm changes (which happen frequently and without public notice), the Client's brand reputation and existing audience, content quality (including Client-provided product images, videos, or information), audience behaviour and trends in the Client's market, and current events or news cycles that may affect engagement.</p>
              <p><strong>Platform Policy Compliance:</strong> The Agency will follow the advertising and content policies of each social media platform. If the Client requests content that violates platform policies (e.g., making false health claims, running prohibited ad categories), the Agency reserves the right to refuse creating or publishing such content. If the Client insists and the account is penalised, the Agency holds no responsibility.</p>
              <p><strong>Account Access &amp; Security:</strong> The Client is responsible for maintaining the security of their social media accounts. If an account is hacked, disabled, or loses followers due to a platform security incident, the Agency bears no liability for the loss.</p>
              <p><strong>Influencer Campaigns:</strong> The Agency's role in influencer campaigns is sourcing, coordination, and management. The actual performance of any influencer (views, reach, engagement) is entirely determined by the influencer's audience and platform, and is not guaranteed by the Agency. Influencer payments are handled independently; the Agency's fee is for the management service only.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className={styles.section} id="webdev">
            <p className={styles.sectionNum}>Section 07</p>
            <h2 className={styles.sectionTitle}>Web &amp; App Development</h2>
            <div className={styles.sectionBody}>
              <p><strong>Project Scope Changes ("Scope Creep"):</strong> The project scope, features, and pages are defined in the signed proposal. Any additional feature, page, section, or functionality requested by the Client after the project has started is a <strong>change request</strong> and will be quoted separately. The Agency is not obligated to add out-of-scope items within the original price or timeline.</p>
              <p><strong>Revision Policy:</strong> Each development project includes a defined number of revision rounds as stated in the proposal. Additional revisions beyond the agreed number will be billed at the Agency's standard hourly rate, currently ₹1,500 to ₹3,000 per hour depending on the complexity and the developer assigned.</p>
              <p><strong>Client Delays:</strong> If the Client fails to provide required content (text, images, videos, product data, branding), feedback, or approvals within the agreed timelines, the project timeline will be extended accordingly. The Agency will not be held responsible for project delays caused by the Client's non-responsiveness.</p>
              <p><strong>Hosting, Domain &amp; Third-Party Services:</strong> Unless explicitly included in the proposal, the Agency does not provide hosting, domain registration, SSL certificates, or third-party API subscription costs. These are the Client's responsibility. The Agency will provide technical guidance on selecting appropriate services.</p>
              <p><strong>Post-Launch Support:</strong> The Agency provides a <strong>14-day free bug-fix window</strong> after the website or app goes live. Bugs are defined as functionality not working as per the agreed scope. Design preference changes or new feature requests are not bugs. After 14 days, all support is billed separately.</p>
              <p><strong>Browser &amp; Device Compatibility:</strong> Websites are tested and optimised for modern browsers (Chrome, Firefox, Safari, Edge) and common screen sizes. Testing across all possible device-browser-OS combinations is not included unless specifically agreed. The Client is responsible for testing on their specific required devices.</p>
              <p><strong>App Store Submissions:</strong> App Store (Apple) and Google Play Store submission processes are subject to each platform's approval policies. The Agency cannot guarantee that an app submitted to the App Store or Play Store will be approved. If rejected, the Agency will advise on revisions, but additional development time required for compliance will be billed separately.</p>
              <p><strong>Performance Benchmarks:</strong> While the Agency strives to build fast, optimised websites (Core Web Vitals compliant), actual performance scores in tools like Google PageSpeed Insights are affected by third-party scripts, hosting quality, and content chosen by the Client. Specific performance score guarantees are not provided unless explicitly stated in the proposal.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section className={styles.section} id="design">
            <p className={styles.sectionNum}>Section 08</p>
            <h2 className={styles.sectionTitle}>Graphic Design &amp; Creative Services</h2>
            <div className={styles.sectionBody}>
              <p><strong>Revision Rounds:</strong> Each design package includes a fixed number of revision rounds as defined in the proposal (typically 2–3 rounds). A revision round is defined as a consolidated list of feedback provided in one go — not piecemeal feedback sent over multiple messages. Providing feedback in multiple separate messages does not entitle the Client to additional revision rounds. Once the revision limit is reached, additional revisions are billed at ₹500–₹2,000 per change depending on complexity.</p>
              <p><strong>Design Direction:</strong> The Client is responsible for providing a clear design brief including preferred colours, style references, and any mandatory elements at the start of the project. If the Client significantly changes the design direction mid-project (e.g., changing brand colours or requesting a completely different style after seeing initial concepts), this constitutes a new project scope and will be quoted accordingly.</p>
              <p><strong>Final File Delivery:</strong> Final project files (AI, PSD, PDF, PNG) are delivered only upon receipt of complete payment. Source files are transferred as per the proposal terms. If the proposal does not mention source files, they remain the Agency's property. Print-ready files are delivered as per industry standards; the Agency is not responsible for colour variations that occur during the physical printing process.</p>
              <p><strong>Stock Assets &amp; Fonts:</strong> If the design requires licensed stock images, fonts, or illustrations, the cost of these assets is billed to the Client separately. The Agency will inform the Client before purchasing paid assets on their behalf. Using licensed assets without proper licensing is the Client's responsibility once files are handed over.</p>
              <p><strong>Trademark &amp; Copyright:</strong> The Client warrants that any logos, text, images, or brand elements they provide to the Agency for use in design work are either owned by them or they have a legal right to use them. If a third party raises a copyright or trademark infringement claim arising from Client-provided materials, the Client is solely liable for all costs and damages. The Agency has no liability in such cases.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section className={styles.section} id="ai">
            <p className={styles.sectionNum}>Section 09</p>
            <h2 className={styles.sectionTitle}>AI Automation, CRM &amp; Chatbot Services</h2>
            <div className={styles.sectionBody}>
              <p><strong>Third-Party Platform Dependency:</strong> AI Automation services involve integrating third-party platforms including but not limited to OpenAI (ChatGPT), HubSpot, Zoho, Salesforce, Zapier, Make.com, n8n, WhatsApp Business API, Manychat, Interakt, ActiveCampaign, Klaviyo, and similar tools. The Agency is not affiliated with these platforms and cannot control their uptime, pricing changes, policy updates, or service discontinuations.</p>
              <p><strong>Platform Subscription Costs:</strong> The cost of any third-party tool, platform subscription, API key, or ad spend required to operate the automation system built by the Agency is the Client's responsibility. These recurring costs are not included in the Agency's one-time setup fee unless explicitly stated.</p>
              <p><strong>AI Accuracy &amp; Hallucinations:</strong> Chatbots and AI agents powered by Large Language Models (LLMs) such as ChatGPT can occasionally produce inaccurate, outdated, or inappropriate responses — a known limitation of these models called "hallucinations." The Agency is not responsible for decisions made by the Client or their customers based on AI-generated responses. It is the Client's responsibility to monitor and review AI-generated outputs on an ongoing basis after handover.</p>
              <p><strong>Data Privacy:</strong> For AI systems trained on the Client's internal data (documents, FAQs, product information), the Client is responsible for ensuring they have the right to share that data with the AI platform. The Agency will handle Client data with confidentiality, but the data security of the underlying AI platform (e.g., OpenAI's servers) is governed by that platform's own privacy policy, not the Agency's.</p>
              <p><strong>WhatsApp Business API:</strong> The WhatsApp Cloud API is subject to Meta's approval process and business verification. The Agency cannot guarantee approval or the Green Tick (verified badge). Rejection by Meta is outside the Agency's control and does not entitle a refund of the setup fee paid.</p>
              <p><strong>Automation Errors:</strong> Complex automation workflows involve multiple connected platforms. A change in one platform's API, authentication, or behaviour can break an automation flow. The Agency is not responsible for automation downtime caused by third-party API changes after the handover date. Post-handover maintenance support is available as a separate paid service.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section className={styles.section} id="leadgen">
            <p className={styles.sectionNum}>Section 10</p>
            <h2 className={styles.sectionTitle}>Lead Generation Services</h2>
            <div className={styles.sectionBody}>
              <div className={styles.dangerBox}>
                <strong>No Conversion Guarantee:</strong> The Agency provides the process of generating leads (contacts who have shown potential interest). We do not guarantee that any lead provided or meeting booked will result in a sale, contract, or revenue. Conversion of leads into paying customers depends entirely on the Client's product quality, pricing, sales process, and closing ability.
              </div>
              <p><strong>Lead Quality:</strong> The Agency will build and target lists based on the Ideal Customer Profile (ICP) provided by the Client. However, data scraped from LinkedIn, Apollo, ZoomInfo, and similar platforms can contain outdated or inaccurate information. The Agency cannot guarantee 100% accuracy of contact data. A bounce rate of up to 5% is considered acceptable and does not entitle a refund.</p>
              <p><strong>Email Deliverability:</strong> While the Agency follows best practices for cold email deliverability (domain warming, DMARC/DKIM/SPF setup, sending limits), inbox placement is not 100% guaranteed. Email service providers (Gmail, Outlook, Yahoo) may classify cold emails as spam based on recipient behaviour and evolving spam filters. The Agency is not responsible for emails landing in spam folders after all technical best practices have been followed.</p>
              <p><strong>Anti-Spam Compliance:</strong> The Agency conducts cold outreach using commercially available contact data and follows standard B2B cold email practices that are widely used across the industry. The Client agrees not to use Agency-provided data for any purpose that violates applicable Indian laws, including the Information Technology Act, 2000.</p>
              <p><strong>Appointment Setting:</strong> Where the Agency provides appointment setting services, a "qualified meeting" is defined and agreed upon with the Client before the campaign begins. If a prospect cancels, reschedules, or does not show up for the booked meeting, the Agency is not responsible and the meeting fee (if applicable) is still charged because the Agency fulfilled its obligation of booking the meeting with a qualifying prospect.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section className={styles.section} id="ip">
            <p className={styles.sectionNum}>Section 11</p>
            <h2 className={styles.sectionTitle}>Intellectual Property</h2>
            <div className={styles.sectionBody}>
              <p><strong>Ownership After Full Payment:</strong> All final deliverables (designs, code, written content, automation systems) created specifically for the Client become the Client's property upon receipt of <strong>full and final payment</strong>. Until full payment is received, all work product remains the intellectual property of the Agency.</p>
              <p><strong>Agency Portfolio Rights:</strong> The Agency reserves the right to display completed work in its portfolio, case studies, website, and marketing materials unless the Client explicitly requests a non-disclosure arrangement in writing before the project begins. A portfolio NDA request may attract an additional confidentiality fee.</p>
              <p><strong>Pre-existing IP:</strong> The Agency retains ownership of all pre-existing tools, frameworks, templates, code libraries, scripts, and methodologies used in the creation of deliverables. The Client receives a licence to use these as part of the final deliverable, but does not own the underlying tools or code frameworks.</p>
              <p><strong>Open-Source Software:</strong> Projects may incorporate open-source software governed by their respective licences (MIT, GPL etc.). The Agency will disclose major open-source components used. The Client accepts the terms of those respective licences when they receive the final deliverable.</p>
            </div>
          </section>

          {/* Section 12 */}
          <section className={styles.section} id="confidential">
            <p className={styles.sectionNum}>Section 12</p>
            <h2 className={styles.sectionTitle}>Confidentiality</h2>
            <div className={styles.sectionBody}>
              <p>Both parties agree to keep confidential any sensitive business information shared during the engagement. The Agency will not share the Client's proprietary business data, customer lists, trade secrets, or financial information with third parties without prior written consent, except as required by law.</p>
              <p>The Client similarly agrees not to disclose the Agency's internal processes, pricing structures, proposal contents, or team information to competitors or use them to build a competing service.</p>
              <p>This confidentiality obligation survives the termination of the contract for a period of <strong>2 years</strong> from the project end date.</p>
            </div>
          </section>

          {/* Section 13 */}
          <section className={styles.section} id="termination">
            <p className={styles.sectionNum}>Section 13</p>
            <h2 className={styles.sectionTitle}>Termination &amp; Exit Policy</h2>
            <div className={styles.sectionBody}>
              <p><strong>Monthly Retainers:</strong> Either party may terminate a monthly retainer agreement by providing <strong>30 days written notice</strong> before the next billing cycle. Notice sent after the billing date will take effect in the following month. Fees for the notice period are non-refundable.</p>
              <p><strong>Project-Based Work:</strong> For fixed-scope projects, early termination by the Client will result in: (a) no refund of the advance payment, and (b) a kill fee of 25% of the remaining unpaid contract value if termination occurs after more than 30% of the work has been completed.</p>
              <p><strong>Termination by the Agency:</strong> The Agency may terminate any engagement immediately without refund if: the Client engages in abusive, threatening, or disrespectful conduct towards Agency staff; the Client requests illegal, fraudulent, or unethical activities; the Client fails to pay within 30 days of a due date; or the Client materially breaches these Terms in a way that cannot be remedied.</p>
              <p><strong>Data After Termination:</strong> Upon termination, the Agency will return Client-specific login credentials and data in its possession within 14 business days. The Agency has no obligation to store project files, reports, or data beyond 60 days after the termination date.</p>
            </div>
          </section>

          {/* Section 14 */}
          <section className={styles.section} id="liability">
            <p className={styles.sectionNum}>Section 14</p>
            <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
            <div className={styles.sectionBody}>
              <div className={styles.dangerBox}>
                <strong>Maximum Liability Cap:</strong> In no event shall the Agency's total cumulative liability to the Client for any and all claims arising from any engagement exceed the total fees paid by the Client to the Agency in the 3 months immediately preceding the claim, or ₹50,000 (Indian Rupees Fifty Thousand), whichever is lower.
              </div>
              <p>The Agency is not liable under any circumstances for: loss of revenue, loss of profits, loss of business, loss of data, business interruption, loss of goodwill, indirect, incidental, special, or consequential damages of any nature, even if the Agency has been advised of the possibility of such damages.</p>
              <p>Services provided by the Agency are professional services offered "as is" and "as available." The Agency makes no guarantees regarding any specific business outcome, return on investment, sales growth, or revenue increase that will result from the use of our services.</p>
              <p>The Agency is not liable for the actions, policies, or technical failures of third-party platforms (Google, Meta, LinkedIn, WhatsApp, WordPress, Shopify, AWS, etc.) that the Agency uses or integrates with as part of its services.</p>
            </div>
          </section>

          {/* Section 15 */}
          <section className={styles.section} id="disputes">
            <p className={styles.sectionNum}>Section 15</p>
            <h2 className={styles.sectionTitle}>Disputes &amp; Jurisdiction</h2>
            <div className={styles.sectionBody}>
              <p><strong>Governing Law:</strong> These Terms and any dispute arising out of them shall be governed by and construed in accordance with the laws of India, specifically the Indian Contract Act, 1872, the Information Technology Act, 2000, and the Consumer Protection Act, 2019, as applicable.</p>
              <p><strong>Jurisdiction:</strong> Any legal proceedings arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in <strong>Jaipur, Rajasthan, India</strong>. The Client waives any objection to the personal jurisdiction or venue in these courts.</p>
              <p><strong>Mandatory Mediation:</strong> Before initiating legal proceedings, both parties agree to attempt to resolve the dispute through good-faith negotiation for a period of <strong>30 days</strong> from the date the dispute is first raised in writing. If negotiation fails, the parties agree to attempt mediation through a mutually agreed mediator before approaching any court.</p>
              <p><strong>False Claims:</strong> Filing a false chargeback, dispute, or complaint in bad faith against the Agency will be treated as a breach of contract and fraud, and the Agency reserves the right to pursue all available legal remedies, including filing a complaint under the Indian Penal Code and the IT Act.</p>
            </div>
          </section>

          {/* Section 16 */}
          <section className={styles.section} id="amendments">
            <p className={styles.sectionNum}>Section 16</p>
            <h2 className={styles.sectionTitle}>Amendments &amp; Entire Agreement</h2>
            <div className={styles.sectionBody}>
              <p>The Agency reserves the right to update these Terms at any time. The updated Terms will be posted on this page with a revised "Last Updated" date. Continued engagement with the Agency after a Terms update constitutes acceptance of the revised Terms.</p>
              <p>These Terms, together with any signed Project Proposal or SOW, constitute the entire agreement between the parties and supersede all prior discussions, representations, or oral agreements.</p>
              <p>If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions continue to be valid and enforceable.</p>
            </div>
          </section>

          <div className={styles.contactSection}>
            <h3>Questions About These Terms?</h3>
            <p>Contact our team before engaging — we are happy to explain any clause in plain language.</p>
            <p>
              📧 <a href="mailto:allindiamarketingsolution1@gmail.com">allindiamarketingsolution1@gmail.com</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              📞 <a href="tel:+919352107526">+91 93521 07526</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              📍 Ashish Nagar, Murlipura Scheme, Jaipur, Rajasthan – 302039
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
