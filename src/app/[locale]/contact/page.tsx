'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {
  ContactFormState,
  sendContactEmail,
} from '@/app/[locale]/contact/actions';
import { useEffect, useRef } from 'react';
import styles from './contact-form.module.css';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type='submit' disabled={pending} className={styles.submitButton}>
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

const initialState: ContactFormState = {
  success: false,
  message: '',
  errors: null,
};

function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      alert(state.message);
      formRef.current?.reset();
    }
    if (!state.success && state.message && !state.errors) {
      alert(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor='familyName' className={styles.label}>
            Family Name
          </label>
          <input
            type='text'
            id='familyName'
            name='familyName'
            required
            className={styles.input}
            aria-describedby='familyName-error'
          />
          {state.errors?.familyName && (
            <div id='familyName-error' className={styles.error}>
              {state.errors.familyName}
            </div>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='givenName' className={styles.label}>
            Given Name
          </label>
          <input
            type='text'
            id='givenName'
            name='givenName'
            required
            className={styles.input}
            aria-describedby='givenName-error'
          />
          {state.errors?.givenName && (
            <div id='givenName-error' className={styles.error}>
              {state.errors.givenName}
            </div>
          )}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='email' className={styles.label}>
          Your Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          className={styles.input}
          aria-describedby='email-error'
        />
        {state.errors?.email && (
          <div id='email-error' className={styles.error}>
            {state.errors.email}
          </div>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='subject' className={styles.label}>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          className={styles.input}
          aria-describedby='subject-error'
        />
        {state.errors?.subject && (
          <div id='subject-error' className={styles.error}>
            {state.errors.subject}
          </div>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='message' className={styles.label}>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          required
          className={styles.textarea}
          aria-describedby='message-error'
        />
        {state.errors?.message && (
          <div id='message-error' className={styles.error}>
            {state.errors.message}
          </div>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className='mt-8'>
      <ContactForm />
    </div>
  );
}
