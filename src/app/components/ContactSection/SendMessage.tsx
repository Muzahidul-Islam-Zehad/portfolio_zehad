'use server';

import { Resend } from 'resend';

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendContactEmail(formData: FormData) {
    const name = formData.name;
    const email = formData.email;
    const subject = formData.subject;
    const message = formData.message;

    try {
        await resend.emails.send({
            from: 'Portfolio-Zehad <onboarding@resend.dev>',
            to: ['zehadkazi88@gmail.com'],
            replyTo: email,
            subject: subject || `New message from ${name}`,
            html: `<div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #111827;">
            
            <!-- Header -->
            <div style="background-color: #0f172a; padding: 25px 30px; text-align: center;">
                <h2 style="color: #e0f2fe; margin: 0; font-size: 22px;">New Contact Message</h2>
            </div>

            <!-- Body -->
            <div style="padding: 35px 30px; background-color: #f8fafc;">
                
                <p style="font-size: 16px; color: #334155; margin-bottom: 25px;">
                    You have received a new message from your portfolio website.
                </p>

                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; color: #64748b; width: 100px;"><strong>Name</strong></td>
                            <td style="padding: 10px 0; color: #1e2937;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #64748b;"><strong>Email</strong></td>
                            <td style="padding: 10px 0;">
                                <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                        ${subject ? `
                        <tr>
                            <td style="padding: 10px 0; color: #64748b;"><strong>Subject</strong></td>
                            <td style="padding: 10px 0; color: #1e2937;">${subject}</td>
                        </tr>` : ''}
                    </table>
                </div>

                <!-- Message -->
                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px;">
                    <p style="color: #64748b; margin-bottom: 12px; font-weight: 600;">Message:</p>
                    <p style="color: #1e2937; line-height: 1.75; font-size: 16px; margin: 0;">
                        ${message.replace(/\n/g, '<br>')}
                    </p>
                </div>

            </div>

            <!-- Footer -->
            <div style="background-color: #f1f5f9; padding: 20px 30px; text-align: center; font-size: 13px; color: #64748b;">
                Received on ${new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
            </div>

        </div>`,
        });

        return { success: true, message: "Email sent successfully!" };

    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to send email. Please try again." };
    }
}