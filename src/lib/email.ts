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

export async function sendEmailHtml(to:string, subject:string,htmlBody: string){
    sgMail.setApiKey(env.EMAIL_API);
    
    try {
    await sgMail.send({
      to: `${to}`, 
      from: 'noreply@slang-in-wild.com', 
      subject: `${subject}`,
      html: htmlBody
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email send failed:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}

export function newSubmittionHtml(authorName:string, projectName:string) :string { 
  const html = `
  <div style="font-family: Arial, sans-serif; background: #f4f4f5; padding: 32px;">
    <div style="max-width: 480px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #0001; padding: 32px;">
      <h2 style="color: #0f766e; margin-top: 0;">Slang Project Submission Received!</h2>
      <p style="font-size: 1.1em; color: #222;">
        Hey <b>${authorName}</b>,
      </p>
      <p style="font-size: 1.1em; color: #222;">
        Thanks for submitting your project <b>"${projectName}"</b>.
      </p>
      <p style="font-size: 1.1em; color: #222;">
        We'll review it soon!
      </p>
      <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;">
      <p style="font-size: 0.95em; color: #aaa; margin-top: 32px;">
        — Slang In Wild
      </p>
    </div>
  </div>
  `;
  return html;
}
