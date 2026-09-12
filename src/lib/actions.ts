// src/lib/actions.ts
"use server";

import nodemailer from 'nodemailer';

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return { error: "ইমেইল প্রয়োজন!" };
  }

  // ১. ট্রান্সপোর্টার তৈরি (SMTP কনফিগারেশন)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // ২. ইমেইলের বডি সেট করা
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_RECEIVER,
      subject: 'New Newsletter Subscription - Pixel & Code',
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #2563eb;">নতুন সাবস্ক্রিপশন!</h2>
          <p>আপনার ওয়েবসাইটে একজন নতুন ইউজার নিউজলেটার সাবস্ক্রাইব করেছে।</p>
          <p><strong>ইউজার ইমেইল:</strong> ${email}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">এটি একটি অটোমেটেড সিস্টেম জেনারেটেড মেইল।</p>
        </div>
      `,
    };

    // ৩. ইমেইল পাঠানো
    await transporter.sendMail(mailOptions);

    return { success: "ধন্যবাদ! আমরা আপনার অনুরোধটি পেয়েছি।" };
  } catch (error) {
    console.error("Email Error:", error);
    return { error: "মেইল পাঠাতে সমস্যা হয়েছে, পরে আবার চেষ্টা করুন।" };
  }
}