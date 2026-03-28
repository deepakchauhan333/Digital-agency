import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "All India Marketing Solution Terms of Service. Rules and guidelines governing the use of our website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <span className="section-label">Legal</span>
        <h1 style={{ marginBottom: "2rem" }}>Terms of Service</h1>
        <p style={{ marginBottom: "1.5rem" }}>
          <strong>Last updated:</strong> March 24, 2026
        </p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>1. Agreement to Terms</h2>
        <p>By accessing or using the All India Marketing Solution website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>2. Services</h2>
        <p>All India Marketing Solution provides digital marketing, web development, app development, graphic design, AI automation, and lead generation services. Specific deliverables, timelines, and pricing are outlined in individual service agreements.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>3. Client Responsibilities</h2>
        <p>Clients are responsible for providing accurate business information, timely feedback, and access to necessary accounts and platforms. Delays in client deliverables may affect project timelines.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>4. Payment Terms</h2>
        <p>Payment terms are specified in individual service agreements. Late payments may result in service suspension. All fees are non-refundable unless otherwise stated in the agreement.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>5. Intellectual Property</h2>
        <p>All deliverables created by All India Marketing Solution become the property of the client upon full payment. All India Marketing Solution retains the right to showcase work in portfolios unless a non-disclosure agreement is in place.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>6. Limitation of Liability</h2>
        <p>All India Marketing Solution is not liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the fees paid by the client in the preceding 12 months.</p>

        <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>7. Contact</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:legal@allindiamarketingsolution.com">legal@allindiamarketingsolution.com</a>.</p>
      </div>
    </div>
  );
}
