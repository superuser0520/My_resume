// This is a Vercel Serverless Function that handles the contact form submission.

export default async function handler(request, response) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    response.setHeader('Allow', ['POST']);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
  }

  const { name, email, message } = request.body;

  // Basic validation
  if (!name || !email || !message) {
    return response.status(400).json({ error: 'All fields are required.' });
  }

  // Ensure the API key is available from environment variables
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not defined in environment variables.');
    return response.status(500).json({ error: 'Server configuration error.' });
  }

  // The email address to send the contact form submission to.
  // Changed to lowercase to match the email registered with Resend.
  const toEmail = 'soolihjing@icloud.com';
  
  // The 'from' address must be 'onboarding@resend.dev' for the free tier unless you have a custom domain verified with Resend.
  const fromEmail = 'Portfolio Form <onboarding@resend.dev>';

  const emailPayload = {
    from: fromEmail,
    to: [toEmail],
    subject: `New Portfolio Message from ${name}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>New Message via Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="border: none; border-top: 1px solid #eee;" />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    `,
    reply_to: email,
  };

  try {
    // Send the email using the Resend API
    const apiResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (apiResponse.ok) {
      return response.status(200).json({ message: 'Email sent successfully!' });
    } else {
      const errorData = await apiResponse.json();
      console.error('Resend API error:', errorData);
      return response.status(apiResponse.status).json({ error: 'Failed to send email.' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return response.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
