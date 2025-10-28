'use server';

import { Resend } from 'resend';

// initialize resend client
const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_PERSONAL_EMAIL as string;
const fromEmail = process.env.RESEND_FROM_EMAIL as string;

// email validation regex
function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// state type for form action
export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    familyName?: string;
    givenName?: string;
    email?: string;
    subject?: string;
    message?: string;
  } | null;
};

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // 1. get form data
  const familyName = formData.get('familyName') as string;
  const givenName = formData.get('givenName') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // 2. validate form data
  const errors: ContactFormState['errors'] = {};

  if (!familyName || familyName.trim().length === 0) {
    errors.familyName = 'Family name is required';
  }
  if (!givenName || givenName.trim().length === 0) {
    errors.givenName = 'Given name is required';
  }
  if (!email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Invalid email address';
  }
  if (!subject || subject.trim().length === 0) {
    errors.subject = 'Subject is required';
  }
  if (!message || message.trim().length === 0) {
    errors.message = 'Message is required';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Validation errors occurred. Please check the form fields.',
      errors: errors,
    };
  }

  // 4. if validation passes, send email
  try {
    if (!myEmail) {
      throw new Error('MY_PERSONAL_EMAIL environment variable is not set');
    }

    await resend.emails.send({
      from: fromEmail,
      to: myEmail,
      replyTo: email,
      subject: `New Porfolio Contact Form Submission: ${subject}`,
      html: `
      <p>You received a new message from your portfolio contact form.</p>
        <p><strong>Family Name:</strong> ${familyName}</p>
        <p><strong>Given Name:</strong> ${givenName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return {
      success: true,
      message: 'Your message has been sent successfully!',
      errors: null,
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Internal server error. Please try again later.',
      errors: null,
    };
  }
}
