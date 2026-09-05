import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

interface CareerRequestBody {
  name?: string;
  fullName?: string;
  email: string;
  phone: string;
  position?: string;
  department?: string;
  experience?: string;
  coverNote?: string;
  resumeUrl?: string;
  resumeFileName?: string;
  resumeBase64?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  try {
    const body: CareerRequestBody = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: 'Invalid request: JSON body is required.' },
        { status: 400 }
      );
    }

    const candidateName = (body.name || body.fullName || '').trim();
    const candidateEmail = (body.email || '').trim().toLowerCase();
    const candidatePhone = (body.phone || '').trim();
    const position = (body.position || body.department || '').trim();
    const experience = (body.experience || 'Not specified').trim();
    const coverNote = (body.coverNote || '').trim();
    const resumeUrl = (body.resumeUrl || '').trim();
    const resumeFileName = (body.resumeFileName || 'Resume.pdf').trim();

    // Validation
    if (!candidateName || candidateName.length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid full name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!candidateEmail || !emailRegex.test(candidateEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address (e.g. name@example.com).' },
        { status: 400 }
      );
    }

    // Phone validation: no alphabets allowed, 10 digits only
    const phoneDigits = candidatePhone.replace(/\D/g, '');
    if (!candidatePhone || /[a-zA-Z]/.test(candidatePhone) || phoneDigits.length < 10 || phoneDigits.length > 10) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number with 10 digits.' },
        { status: 400 }
      );
    }

    if (!position) {
      return NextResponse.json(
        { error: 'Position/Department is required.' },
        { status: 400 }
      );
    }

    if (!resumeUrl && !body.resumeBase64) {
      return NextResponse.json(
        { error: 'A valid resume file or document is required.' },
        { status: 400 }
      );
    }

    // Check Resend Configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is not configured.');
      return NextResponse.json(
        {
          error:
            'Email notification service is not configured. Please set RESEND_API_KEY in environment variables.',
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      'Hotel Prabhupada Careers <onboarding@resend.dev>';
    const gmEmail =
      process.env.GM_NOTIFICATION_EMAIL || 'gm@hotelprabhupada.com';

    // 1. Send Email Notification to Hotel GM / HR Desk
    const gmSubject = `New Application: ${position} - ${candidateName}`;

    const gmHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(gmSubject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #070F1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #070F1A; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0C1827; border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 6px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #070F1A; border-bottom: 2px solid #C5A059; padding: 28px 32px; text-align: center;">
              <p style="margin: 0; color: #E8A317; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;">
                Hotel Prabhupada · Puri
              </p>
              <h1 style="margin: 8px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 500; letter-spacing: 0.05em;">
                New Candidate Application
              </h1>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 20px 0; color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">
                A new career application has been submitted via the Hotel Prabhupada Careers portal.
              </p>

              <!-- Applicant Details Card -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(255,255,255,0.03); border: 1px solid rgba(197, 160, 89, 0.2); border-radius: 4px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="6">
                      <tr>
                        <td width="35%" style="color: #C5A059; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Position / Dept:</td>
                        <td width="65%" style="color: #ffffff; font-size: 15px; font-weight: 600;">${escapeHtml(position)}</td>
                      </tr>
                      <tr>
                        <td style="color: #C5A059; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Full Name:</td>
                        <td style="color: #ffffff; font-size: 14px;">${escapeHtml(candidateName)}</td>
                      </tr>
                      <tr>
                        <td style="color: #C5A059; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Email Address:</td>
                        <td style="color: #ffffff; font-size: 14px;">
                          <a href="mailto:${escapeHtml(candidateEmail)}" style="color: #E8A317; text-decoration: none;">${escapeHtml(candidateEmail)}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #C5A059; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Phone:</td>
                        <td style="color: #ffffff; font-size: 14px;">
                          <a href="tel:${escapeHtml(candidatePhone)}" style="color: #E8A317; text-decoration: none;">${escapeHtml(candidatePhone)}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #C5A059; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Experience:</td>
                        <td style="color: #ffffff; font-size: 14px;">${escapeHtml(experience)}</td>
                      </tr>
                      <tr>
                        <td style="color: #C5A059; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Attached File:</td>
                        <td style="color: rgba(255,255,255,0.8); font-size: 13px;">${escapeHtml(resumeFileName)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${coverNote
        ? `
              <!-- Cover Note -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 8px 0; color: #C5A059; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
                  Cover Note / Message:
                </p>
                <div style="background-color: rgba(255,255,255,0.02); border-left: 3px solid #E8A317; padding: 14px 16px; border-radius: 2px; color: rgba(255,255,255,0.85); font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                  ${escapeHtml(coverNote)}
                </div>
              </div>
              `
        : ''
      }

              <!-- Action Button / Attachment Note -->
              <div style="text-align: center; margin-top: 30px; margin-bottom: 20px;">
                ${resumeUrl ? `
                <a href="${escapeHtml(resumeUrl)}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: #8B1E1E; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.14em; padding: 14px 30px; border-radius: 4px; border: 1px solid #C5A059; box-shadow: 0 4px 14px rgba(139, 30, 30, 0.4);">
                  📄 View / Download Candidate Resume
                </a>
                <p style="margin: 12px 0 0 0; font-size: 12px; color: rgba(255,255,255,0.45);">
                  Direct resume link: <a href="${escapeHtml(resumeUrl)}" style="color: #C5A059; text-decoration: underline;">${escapeHtml(resumeUrl)}</a>
                </p>
                ` : `
                <div style="display: inline-block; background-color: rgba(197, 160, 89, 0.15); border: 1px solid #C5A059; padding: 14px 24px; border-radius: 4px; color: #ffffff; font-size: 14px;">
                  📎 <strong>Resume Attached:</strong> ${escapeHtml(resumeFileName)} (see attached document)
                </div>
                `}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #070F1A; border-top: 1px solid rgba(197,160,89,0.2); padding: 20px 32px; text-align: center;">
              <p style="margin: 0; color: rgba(255,255,255,0.45); font-size: 12px; line-height: 1.5;">
                Hotel Prabhupada · New Marine Drive Rd, Near light house, Puri, Odisha 752001<br>
                Reply to this email directly to communicate with ${escapeHtml(candidateName)} (${escapeHtml(candidateEmail)}).
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Prepare email attachments if base64 file provided
    const attachments = [];
    if (body.resumeBase64) {
      const base64Data = body.resumeBase64.replace(/^data:[^;]+;base64,/, '');
      attachments.push({
        filename: resumeFileName || 'Resume.pdf',
        content: Buffer.from(base64Data, 'base64'),
      });
    }

    // Dispatch GM email
    const gmEmailResult = await resend.emails.send({
      from: fromEmail,
      to: gmEmail,
      replyTo: candidateEmail,
      subject: gmSubject,
      html: gmHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (gmEmailResult.error) {
      console.error('Resend error sending GM notification:', gmEmailResult.error);
      return NextResponse.json(
        {
          error: `Failed to send email notification: ${gmEmailResult.error.message}`,
        },
        { status: 502 }
      );
    }

    // 2. Optional but nice: Send automated confirmation receipt to the applicant
    try {
      const applicantSubject = `Application Received: ${position} - Hotel Prabhupada, Puri`;
      const applicantHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(applicantSubject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #070F1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #070F1A; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0C1827; border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 6px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <tr>
            <td style="background-color: #070F1A; border-bottom: 2px solid #C5A059; padding: 28px 32px; text-align: center;">
              <p style="margin: 0; color: #E8A317; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;">
                Hotel Prabhupada · Puri
              </p>
              <h1 style="margin: 8px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 500;">
                Application Received
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 16px; font-weight: 500;">
                Dear ${escapeHtml(candidateName)},
              </p>
              <p style="margin: 0 0 16px 0; color: rgba(255,255,255,0.85); font-size: 14px; line-height: 1.7;">
                Thank you for your interest in career opportunities with <strong>Hotel Prabhupada, Puri</strong>. We have received your application for the <strong>${escapeHtml(position)}</strong> role.
              </p>
              <p style="margin: 0 0 20px 0; color: rgba(255,255,255,0.85); font-size: 14px; line-height: 1.7;">
                Our management team reviews all submissions in accordance with current vacancies and operational requirements. If your profile matches our criteria, our recruitment desk will reach out to you directly.
              </p>
              
              <div style="background-color: rgba(255,255,255,0.03); border: 1px solid rgba(197, 160, 89, 0.2); border-radius: 4px; padding: 18px; margin: 24px 0;">
                <p style="margin: 0 0 6px 0; color: #C5A059; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Application Summary</p>
                <p style="margin: 0; font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.5;">
                  <strong>Position:</strong> ${escapeHtml(position)}<br>
                  <strong>Experience Level:</strong> ${escapeHtml(experience)}<br>
                  <strong>Resume File:</strong> ${escapeHtml(resumeFileName)}
                </p>
              </div>

              <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 13px; line-height: 1.6;">
                Warm regards,<br>
                <strong style="color: #ffffff;">Hotel Prabhupada Management</strong><br>
                New Marine Drive Rd, Near light house, Puri, Odisha 752001<br>
                <a href="https://hotelprabhupada.com" style="color: #E8A317; text-decoration: none;">www.hotelprabhupada.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `;

      await resend.emails.send({
        from: fromEmail,
        to: candidateEmail,
        subject: applicantSubject,
        html: applicantHtml,
      });
    } catch (confirmationErr) {
      // Don't fail the primary request if only the applicant receipt fails
      console.warn('Could not dispatch applicant confirmation email:', confirmationErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Application and resume notification submitted successfully.',
      id: gmEmailResult.data?.id,
    });
  } catch (err: unknown) {
    console.error('Unexpected error in /api/careers route:', err);
    const message =
      err instanceof Error ? err.message : 'An unexpected error occurred.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
