import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "All India Marketing Solution Privacy Policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.allindiamarketingsolution.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <span className="section-label">Legal</span>
        <h1 style={{ marginBottom: "2rem" }}>Privacy Policy</h1>
        <p style={{ marginBottom: "1.5rem" }}>
          <strong>Last updated:</strong> March 24, 2026
        </p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>1. Information We Collect</h2>
        <p>We collect information you provide directly — such as your name, email, phone number, and company details when you fill out our contact form, request an audit, or subscribe to our newsletter. We also collect usage data through
          cookies and analytics tools to understand how you interact with our website.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>2. How We Use Your Information</h2>
        <p>We use your information to: respond to your inquiries and service requests; send you relevant marketing communications (only with your consent); improve our website and services; analyze website usage patterns; and comply with legal obligations.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>3. Data Protection</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored on secure servers and transmitted using SSL encryption.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>4. Third-Party Services</h2>
        <p>We use third-party services including Google Analytics, HubSpot, and payment processors. These services have their own privacy policies governing how they handle your data.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>5. Your Rights</h2>
        <p>You have the right to: access the personal data we hold about you; request correction or deletion of your data; opt out of marketing communications; and withdraw consent at any time.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>6. Contact Us</h2>
        <p>For any privacy-related questions, contact us at <a href="mailto:privacy@allindiamarketingsolution.com">privacy@allindiamarketingsolution.com</a> or call +91 98765 43210.</p>
      </div>
    </div>
  );
}
