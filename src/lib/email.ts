import sgMail from '@sendgrid/mail';
import { env } from '$env/dynamic/private';

export async function sendEmail(to:string, subject:string, header: string, body: string){
    sgMail.setApiKey(env.EMAIL_API);
    
    try {
    await sgMail.send({
      to: `${to}`, 
      from: 'noreply@slang-in-wild.com', 
      subject: `${subject}`,
      text: `${body}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email send failed:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}