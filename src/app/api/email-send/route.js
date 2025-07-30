import { MailerSend, EmailParams, Recipient, Sender } from 'mailersend';

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API,
});

export async function POST(request) {
  try {
    if (!request.body) return new Response('Bad Request', { status: 400 });

    const sentFrom = new Sender("noreply@test-86org8en31ngew13.mlsender.net", "LEGO4DOLLAZ Team");

    const body = await request.json();
    const { email, fname, lname, tel, title, quantity, price } = body;

    const recipients = [new Recipient(email, `${fname} ${lname}`)];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Order details')
      .setText(`Hi ${fname} ${lname}, thanks for your order. We will contact you as soon as possible.`)
      .setHtml(`<p>Hi <strong>${fname} ${lname}</strong>,</p>
        <p>Thanks for your message. We'll get back to you soon.</p>
        <p>First name: ${fname}</p>
        <p>Last name: ${lname}</p>
        <p>Phone number: ${tel}</p>
        <p><strong>ORDER DETAILS: </strong></p>
        <p>Title: ${title} </p>
        <p>Quantity: ${quantity} </p>
        <p>Total: ${price} </p>
        `);

    await mailersend.email.send(emailParams);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('MailerSend error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}