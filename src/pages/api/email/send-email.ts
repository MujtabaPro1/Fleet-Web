// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { form, vehicle } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '4044932f1d0edd',
            pass: '364809c751fc4e',
        },
    });

    try {
        await transporter.sendMail({
            from: '"FleetPlan Contact" <no-reply@fleetplan.com>',
            to: 'roguextone@gmail.com',
            subject: `Inquiry from ${form.name || 'Unknown'}`,
            html: `
            <div style="font-family: Arial, Helvetica, sans-serif;">
            <h2>Vehicle Inquiry</h2>
            <h3 style="font-size: 18px; font-weight: 600; color: #1f2937; margin-bottom: 10px;">Vehicle Info</h3>

                <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px;">
                <table width="100%" style="border-collapse: collapse;">
                    <tr>
                    <!-- Left Column: Text Info -->
                    <td style="vertical-align: top; padding-right: 16px;">
                        <!-- Vehicle Title -->
                        <div style="font-size: 18px; font-weight: 600; color: #1f2937; margin-bottom: 4px;">
                        ${vehicle.vehicle}
                        </div>
                        <!-- Selected Badge -->
                        <span style="display: inline-block; font-size: 12px; background-color: #d1fae5; color: #065f46; padding: 4px 8px; border-radius: 4px; margin-bottom: 8px;">
                        Selected
                        </span>

                        <!-- Price -->
                        <p style="font-size: 24px; font-weight: bold; margin: 8px 0;">
                        <span style="color: #dc2626;">$ ${vehicle?.weeklyPrice}</span>
                        <span style="font-size: 14px; font-weight: 500; color: #6b7280;">/ week</span>
                        </p>
                        <p style="font-size: 14px; color: #6b7280; margin-bottom: 6px;">Estimated drive away price</p>

                        <!-- Deal Badge -->
                        <span style="display: inline-block; background-color: #dc2626; color: white; font-size: 12px; font-weight: 500; padding: 4px 8px; border-radius: 4px;">
                        Limited-time deal
                        </span>
                        <span style="display: inline-block; background-color: #dc2626; color: white; font-size: 12px; font-weight: 500; padding: 4px 8px; border-radius: 4px;">
                        Brand : ${vehicle?.brand}
                        </span>
                    </td>

                    <!-- Right Column: Image -->
                    <td style="text-align: right;">
                        <img
                        src="${vehicle.featured_image}"
                        alt="Vehicle Image"
                        width="200"
                        height="200"
                        style="object-fit: contain; max-width: 100%; height: auto; border-radius: 8px;"
                        />
                    </td>
                    </tr>
                </table>
                </div>

            <h3>Customer Details:</h3>
            <ul>
              ${Object.entries(form).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('')}
            </ul>
            </div>
          `,
        });

        return res.status(200).json({ vehicle, message: 'Email sent successfully' });
    } catch (error: any) {
        console.error('Email sending failed:', error);
        return res.status(500).json({ message: 'Email failed to send', error: error.message });
    }
}
