// src/components/Contact.jsx
import React, { useRef } from 'react';
import { Mail, MapPin, Phone, Send, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

/* ── Styles injected once ── */
// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

//   .contact-root * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }

//   /* ── Field wrapper ── */
//   .cf-field {
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
//   }

//   .cf-label {
//     font-size: 11px;
//     font-weight: 600;
//     letter-spacing: 0.08em;
//     text-transform: uppercase;
//     color: var(--text-muted);
//     transition: color 0.4s ease;
//   }

//   /* ── Input / Textarea ── */
//   .cf-input {
//     width: 100%;
//     padding: 14px 18px;
//     background: transparent;
//     border: 1.5px solid var(--border);
//     border-radius: 12px;
//     color: var(--text-primary);
//     font-size: 15px;
//     font-weight: 400;
//     outline: none;
//     transition:
//       border-color 0.4s ease,
//       box-shadow   0.4s ease,
//       background   0.4s ease;
//     resize: none;
//   }

//   .cf-input::placeholder { color: var(--text-muted); opacity: 0.55; }

//   .cf-input:hover {
//     border-color: var(--accent);
//     background: color-mix(in srgb, var(--accent) 4%, transparent);
//   }

//   .cf-input:focus {
//     border-color: var(--accent);
//     box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 12%, transparent);
//     background: color-mix(in srgb, var(--accent) 5%, transparent);
//   }

//   .cf-field:focus-within .cf-label { color: var(--accent); }

//   /* ── Error ── */
//   .cf-error {
//     font-size: 12px;
//     color: #f87171;
//     font-weight: 500;
//     display: flex;
//     align-items: center;
//     gap: 4px;
//   }
//   .cf-error::before { content: '⚠'; font-size: 11px; }

//   /* ── Submit button ── */
//   .cf-submit {
//     position: relative;
//     width: 100%;
//     padding: 15px 24px;
//     background: var(--accent);
//     color: #fff;
//     font-size: 14px;
//     font-weight: 600;
//     letter-spacing: 0.04em;
//     border: none;
//     border-radius: 12px;
//     cursor: pointer;
//     overflow: hidden;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 8px;
//     transition:
//       transform    0.5s cubic-bezier(0.34,1.56,0.64,1),
//       box-shadow   0.5s ease,
//       background   0.4s ease;
//   }

//   .cf-submit::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
//     transform: translateX(-100%);
//     transition: transform 0.7s ease;
//   }

//   .cf-submit:hover:not(:disabled) {
//     transform: translateY(-3px);
//     box-shadow: 0 12px 32px color-mix(in srgb, var(--accent) 35%, transparent);
//   }

//   .cf-submit:hover:not(:disabled)::before { transform: translateX(100%); }

//   .cf-submit:active:not(:disabled) {
//     transform: translateY(-1px);
//     box-shadow: 0 6px 16px color-mix(in srgb, var(--accent) 25%, transparent);
//   }

//   .cf-submit:disabled { opacity: 0.65; cursor: not-allowed; }

//   /* ── Contact info card ── */
//   .ci-card {
//     display: flex;
//     align-items: center;
//     gap: 16px;
//     padding: 18px 22px;
//     background: var(--surface);
//     border: 1.5px solid var(--border);
//     border-radius: 14px;
//     text-decoration: none;
//     transition:
//       transform     0.5s cubic-bezier(0.34,1.56,0.64,1),
//       border-color  0.4s ease,
//       box-shadow    0.4s ease,
//       background    0.4s ease;
//   }

//   .ci-card:hover {
//     transform: translateY(-4px) translateX(3px);
//     border-color: var(--accent);
//     box-shadow: 0 16px 40px color-mix(in srgb, var(--accent) 12%, transparent);
//     background: color-mix(in srgb, var(--accent) 4%, var(--surface));
//   }

//   .ci-icon {
//     width: 44px;
//     height: 44px;
//     border-radius: 11px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #fff;
//     flex-shrink: 0;
//     transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
//   }

//   .ci-card:hover .ci-icon { transform: rotate(-6deg) scale(1.1); }

//   .ci-arrow {
//     margin-left: auto;
//     color: var(--text-muted);
//     opacity: 0;
//     transform: translateX(-6px);
//     transition: opacity 0.35s ease, transform 0.4s ease;
//     flex-shrink: 0;
//   }

//   .ci-card:hover .ci-arrow { opacity: 1; transform: translateX(0); }

//   /* ── Form card ── */
//   .cf-card {
//     background: var(--surface);
//     border: 1.5px solid var(--border);
//     border-radius: 24px;
//     padding: 36px 32px;
//     display: flex;
//     flex-direction: column;
//     gap: 22px;
//     transition: box-shadow 0.5s ease;
//   }

//   .cf-card:hover {
//     box-shadow: 0 20px 60px color-mix(in srgb, var(--accent) 8%, transparent);
//   }

//   /* ── Availability badge ── */
//   .avail-badge {
//     display: inline-flex;
//     align-items: center;
//     gap: 7px;
//     padding: 6px 14px;
//     border-radius: 100px;
//     background: color-mix(in srgb, #22c55e 12%, transparent);
//     border: 1px solid color-mix(in srgb, #22c55e 30%, transparent);
//     font-size: 12px;
//     font-weight: 600;
//     color: #22c55e;
//   }

//   .avail-dot {
//     width: 7px; height: 7px;
//     border-radius: 50%;
//     background: #22c55e;
//     animation: pulse-dot 2s ease-in-out infinite;
//   }

//   @keyframes pulse-dot {
//     0%, 100% { opacity: 1; transform: scale(1); }
//     50%       { opacity: 0.5; transform: scale(0.75); }
//   }

//   /* ── Divider ── */
//   .cf-divider {
//     height: 1px;
//     background: var(--border);
//     margin: 4px 0;
//   }
// `;

/* ── Contact Info Card ── */
const ContactInfo = ({ icon: Icon, title, value, color, href }) => (
  <a href={href || '#'} className="ci-card">
    <div className={`ci-icon ${color}`}>
      <Icon size={20} />
    </div>
    <div style={{ minWidth: 0 }}>
      <p style={{ margin: 0, fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{title}</p>
      <p style={{ margin: '2px 0 0', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
    </div>
    <ArrowUpRight size={16} className="ci-arrow" />
  </a>
);

/* ── Main Component ── */
const Contact = () => {
  const validationSchema = Yup.object({
    name:    Yup.string().required('Name is required'),
    email:   Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().min(5, 'Too short').required('Message is required'),
  });

  const serviceID  = 'service_sbhrbd7';
  const templateID = 'template_vkwuco2';
  const publicKey  = 'DaRvGnM2r0u46mUcs';

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    emailjs.send(serviceID, templateID, values, publicKey)
      .then(() => {
        toast.success('Message sent successfully!', {
          style: { borderRadius: '10px', background: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)' },
          iconTheme: { primary: '#22c55e', secondary: '#fff' },
        });
        resetForm();
      })
      .catch((err) => {
        toast.error('Failed to send. Please try again.', {
          style: { borderRadius: '10px', background: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)' },
        });
        console.error('EmailJS Error:', err.status, err.text);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="contact-root" style={{ position: 'relative' }}>
      {/* <style>{styles}</style> */}
      <Toaster position="top-right" />

      {/* Heading */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader
          number={5}
          title="Contact"
          description="Feel free to reach out for collaborations or just to say hi!"
        />
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>

        {/* ── Form ── */}
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="cf-card">

              {/* Form heading */}
              <div>
                <p style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>Send a Message</p>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>I'll get back to you within 24 hours.</p>
              </div>

              <div className="cf-divider" />

              {/* Name */}
              <div className="cf-field">
                <label className="cf-label">Your Name</label>
                <Field name="name" type="text" placeholder="John Doe" className="cf-input" />
                <ErrorMessage name="name" component="div" className="cf-error" />
              </div>

              {/* Email */}
              <div className="cf-field">
                <label className="cf-label">Email Address</label>
                <Field name="email" type="email" placeholder="john@example.com" className="cf-input" />
                <ErrorMessage name="email" component="div" className="cf-error" />
              </div>

              {/* Message */}
              <div className="cf-field">
                <label className="cf-label">Message</label>
                <Field name="message" as="textarea" rows={4} placeholder="What's on your mind?" className="cf-input" />
                <ErrorMessage name="message" component="div" className="cf-error" />
              </div>

              {/* Submit */}
              <button type="submit" disabled={isSubmitting} className="cf-submit">
                <Send size={15} strokeWidth={2.5} />
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

            </Form>
          )}
        </Formik>

        {/* ── Right side ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* Availability */}
          <div>
            <div className="avail-badge" style={{ marginBottom: 16 }}>
              <span className="avail-dot" />
              Available for work
            </div>
            <p style={{ margin: 0, fontSize: 26, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3, fontFamily: "'DM Serif Display', serif" }}>
              Let's build something <em>great</em> together.
            </p>
            <p style={{ margin: '10px 0 0', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Whether it's a new project, freelance opportunity, or just a friendly chat — my inbox is always open.
            </p>
          </div>

          <div className="cf-divider" />

          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ContactInfo icon={Mail}   title="Email"    value="dev.rrimon@gmail.com"  color="bg-blue-500"   href="mailto:dev.rrimon@gmail.com" />
            <ContactInfo icon={MapPin} title="Location" value="Dhaka, Bangladesh"      color="bg-cyan-500"   href="#" />
            <ContactInfo icon={Phone}  title="Phone"    value="+880 1871091229"        color="bg-indigo-500" href="tel:+8801871091229" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;