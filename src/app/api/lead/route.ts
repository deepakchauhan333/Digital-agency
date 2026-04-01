import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// IMPORTANT: Do not expose the API key directly in client code.
const resendApiKey = process.env.RESEND_API_KEY || 're_9XsQTfwH_N17YWwwvbVjByzydzVVAmLBH';
const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      full_name,
      phone,
      email,
      service,
      mini_service,
      budget,
      page_url,
      timestamp
    } = data;

    if (!full_name || !phone || !email || !service || !mini_service || !budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Clean HTML template according to strict instructions
    const htmlEmail = `
      <div style="background-color: #f4f6f8; padding: 40px 20px; font-family: system-ui, Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          
          <!-- HEADER -->
          <div style="background-color: #2563eb; color: #ffffff; padding: 16px 24px;">
            <h1 style="margin: 0; font-size: 20px; font-weight: bold;">New Lead Captured</h1>
            <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.9;">Website Popup Submission</p>
          </div>
          
          <!-- BODY -->
          <div style="padding: 24px;">
            <table cellpadding="0" cellspacing="0" width="100%" style="font-size: 14px; line-height: 1.5; color: #374151;">
              
              <!-- row -->
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb;" width="35%">Full Name</td>
                <td style="padding: 10px 0; text-align: right; border-bottom: 1px solid #e5e7eb;" width="65%">${full_name}</td>
              </tr>
              
              <!-- row -->
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Phone</td>
                <td style="padding: 10px 0; text-align: right; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              
              <!-- row -->
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Email</td>
                <td style="padding: 10px 0; text-align: right; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              
              <!-- row -->
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Service</td>
                <td style="padding: 10px 0; text-align: right; border-bottom: 1px solid #e5e7eb;">${service}</td>
              </tr>
              
              <!-- row -->
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Mini Service</td>
                <td style="padding: 10px 0; text-align: right; border-bottom: 1px solid #e5e7eb;">${mini_service}</td>
              </tr>
              
              <!-- row -->
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Budget</td>
                <td style="padding: 10px 0; text-align: right; border-bottom: 1px solid #e5e7eb;">${budget}</td>
              </tr>

              <!-- row -->
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Page URL</td>
                <td style="padding: 10px 0; text-align: right; border-bottom: 1px solid #e5e7eb;">
                  <a href="${page_url}" style="color: #2563eb; text-decoration: none;" target="_blank">View Origin Page</a>
                </td>
              </tr>

              <!-- row -->
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Timestamp</td>
                <td style="padding: 10px 0; text-align: right;">${timestamp}</td>
              </tr>

            </table>
          </div>

          <!-- FOOTER -->
          <div style="background-color: #ffffff; padding: 0 24px 24px 24px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 16px;">
              This is an automated lead notification from DigitalGrowPedia
            </p>
          </div>

        </div>
      </div>
    `;

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev', // Default sender for Resend testing domain
      to: 'allindiamarketingsolution1@gmail.com',
      subject: 'New Lead Captured - DigitalGrowPedia',
      html: htmlEmail,
    });

    if (result.error) {
      console.error('Resend Error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send lead email via Resend' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Lead API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
