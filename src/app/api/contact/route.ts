import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY || "re_9XsQTfwH_N17YWwwvbVjByzydzVVAmLBH";
  const resend = new Resend(resendApiKey);

  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "DigitalGrowPedia <onboarding@resend.dev>",
      to: "allindiamarketingsolution1@gmail.com",
      subject: `New Lead from ${name} - DigitalGrowPedia`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "N/A"}</p>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend API returned error:", emailResponse.error);
      return NextResponse.json({ error: emailResponse.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: emailResponse.data });
  } catch (error) {
    console.error("Server error when sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
