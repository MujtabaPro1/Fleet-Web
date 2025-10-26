import nodemailer, { Transporter } from 'nodemailer';

interface EmailOptions {
    from?: string;
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    cc?: string | string[];
    bcc?: string | string[];
    replyTo?: string;
    attachments?: {
        filename: string;
        path: string;
        contentType?: string;
    }[];
}

class EmailHelper {
    private transporter: Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '4044932f1d0edd',
                pass: '364809c751fc4e',
            },
        });
    }

    async sendEmail(options: EmailOptions): Promise<void> {
        const {
            from = '"FleetPlan Contact" <no-reply@fleetplan.com>', // Default sender
            to,
            subject,
            text,
            html,
            cc,
            bcc,
            replyTo,
            attachments,
        } = options;

        const mailOptions = {
            from,
            to,
            subject,
            text,
            html,
            cc,
            bcc,
            replyTo,
            attachments,
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Email sent:', info.messageId);
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}

export default new EmailHelper();
