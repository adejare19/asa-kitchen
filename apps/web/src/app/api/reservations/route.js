/**
 * POST /api/reservations
 *
 * Handles table reservation submissions.
 *
 * Email delivery via Resend (https://resend.com).
 * To activate: set RESEND_API_KEY and RESTAURANT_EMAIL in your .env file.
 * Without those vars the reservation still logs to console and returns 200 —
 * so the form works in dev without any setup, but won't send emails.
 *
 * TODO before go-live:
 *   1. Sign up at resend.com, verify your domain, get an API key
 *   2. Add RESEND_API_KEY=re_xxxx to .env
 *   3. Add RESTAURANT_EMAIL=reservations@asakitchen.co.uk to .env
 *   4. Optionally add a DB write (Supabase / PlanetScale) to persist bookings
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESTAURANT_EMAIL = process.env.RESTAURANT_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL || "reservations@asakitchen.co.uk";

async function sendEmail({ to, subject, html }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error ${res.status}: ${err}`);
  }
  return res.json();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, date, time, guests, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !date) {
      return Response.json(
        { error: "Missing required fields: firstName, lastName, email, date" },
        { status: 400 }
      );
    }

    const guestName = `${firstName} ${lastName}`;
    const submittedAt = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

    // Always log — useful in dev and as a server-side audit trail
    console.log("📅 New Reservation:", {
      name: guestName, email, phone, date, time, guests, message, submittedAt,
    });

    // Send emails only when Resend is configured
    if (RESEND_API_KEY && RESTAURANT_EMAIL) {
      await Promise.all([
        // 1. Notify the restaurant
        sendEmail({
          to: RESTAURANT_EMAIL,
          subject: `New Reservation: ${guestName} — ${date} at ${time || "TBC"}`,
          html: `
            <h2 style="font-family:serif;color:#C45C26;">New Table Reservation</h2>
            <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
              <tr><td style="padding:8px;font-weight:bold;color:#555;">Name</td><td style="padding:8px;">${guestName}</td></tr>
              <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#555;">Phone</td><td style="padding:8px;">${phone || "Not provided"}</td></tr>
              <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555;">Date</td><td style="padding:8px;">${date}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#555;">Time</td><td style="padding:8px;">${time || "Not specified"}</td></tr>
              <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555;">Guests</td><td style="padding:8px;">${guests}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#555;">Special Requests</td><td style="padding:8px;">${message || "None"}</td></tr>
              <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555;">Submitted</td><td style="padding:8px;">${submittedAt}</td></tr>
            </table>
          `,
        }),

        // 2. Confirm to the guest
        sendEmail({
          to: email,
          subject: `Reservation Confirmed — Àṣà Kitchen, ${date}`,
          html: `
            <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
              <h1 style="font-family:Georgia,serif;color:#C45C26;margin-bottom:4px;">Àṣà Kitchen</h1>
              <p style="color:#888;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-top:0;">Authentic African Cuisine · London</p>
              <hr style="border:1px solid #eee;margin:20px 0"/>
              <h2 style="color:#1A1A1A;">We've received your reservation 🎉</h2>
              <p style="color:#4A4A4A;line-height:1.6;">
                Hi ${firstName}, thank you for booking with us. We'll confirm your table
                within <strong>2 hours</strong> — keep an eye on your inbox.
              </p>
              <div style="background:#F5EFE0;border-radius:12px;padding:20px;margin:24px 0;">
                <p style="margin:0 0 8px;font-size:14px;"><strong>📅 Date:</strong> ${date}</p>
                <p style="margin:0 0 8px;font-size:14px;"><strong>🕐 Time:</strong> ${time || "To be confirmed"}</p>
                <p style="margin:0 0 8px;font-size:14px;"><strong>👥 Guests:</strong> ${guests}</p>
                <p style="margin:0;font-size:14px;"><strong>📍 Address:</strong> 42 Market Street, Peckham, London SE15 4QH</p>
              </div>
              <p style="color:#4A4A4A;font-size:14px;">
                Questions? Call us on <a href="tel:+447000000000" style="color:#C45C26;">+44 7000 000 000</a>
                or reply to this email.
              </p>
              <hr style="border:1px solid #eee;margin:20px 0"/>
              <p style="color:#aaa;font-size:12px;">© Àṣà Kitchen Ltd · 42 Market Street, Peckham, London SE15 4QH</p>
            </div>
          `,
        }),
      ]);
    } else {
      // Warn in server logs so it's obvious during deployment checks
      console.warn(
        "⚠️  RESEND_API_KEY or RESTAURANT_EMAIL not set — reservation logged but no email sent."
      );
    }

    return Response.json(
      {
        success: true,
        message: "Reservation received successfully",
        emailSent: !!(RESEND_API_KEY && RESTAURANT_EMAIL),
        reservation: { name: guestName, email, date, time, guests },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reservation error:", error);
    return Response.json(
      { error: "Failed to process reservation. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
