"use client";

import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { SectionHeader } from "@/components/shared/section-header";

function ContactInfo({
  icon: Icon,
  title,
  value,
  color,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  color: string;
  href?: string;
}) {
  return (
    <a href={href || "#"} className="ci-card">
      <div className={`ci-icon ${color}`}>
        <Icon size={20} />
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase" as const, color: "var(--muted-foreground)" }}>
          {title}
        </p>
        <p style={{ margin: "2px 0 0", fontSize: 14, fontWeight: 600, color: "var(--foreground)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {value}
        </p>
      </div>
      <ArrowUpRight size={16} className="ci-arrow" />
    </a>
  );
}

export function ContactSection() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().min(5, "Too short").required("Message is required"),
  });

  const serviceID = "service_sbhrbd7";
  const templateID = "template_vkwuco2";
  const publicKey = "DaRvGnM2r0u46mUcs";

  const handleSubmit = (
    values: { name: string; email: string; message: string },
    { resetForm, setSubmitting }: { resetForm: () => void; setSubmitting: (v: boolean) => void }
  ) => {
    emailjs.send(serviceID, templateID, values, publicKey)
      .then(() => {
        toast.success("Message sent successfully!", {
          style: { borderRadius: "10px", background: "var(--card)", color: "var(--foreground)", border: "1px solid var(--border)" },
          iconTheme: { primary: "#22c55e", secondary: "#fff" },
        });
        resetForm();
      })
      .catch((err: Error) => {
        toast.error("Failed to send. Please try again.", {
          style: { borderRadius: "10px", background: "var(--card)", color: "var(--foreground)", border: "1px solid var(--border)" },
        });
        console.error("EmailJS Error:", err);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="contact-root" style={{ position: "relative" }}>
      <Toaster position="top-right" />

      <div style={{ marginBottom: 48 }}>
        <SectionHeader
          number={5}
          title="Contact"
          description="Feel free to reach out for collaborations or just to say hi!"
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="cf-card">
              <div>
                <p style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700, color: "var(--foreground)" }}>Send a Message</p>
                <p style={{ margin: 0, fontSize: 13, color: "var(--muted-foreground)", lineHeight: 1.5 }}>I&apos;ll get back to you within 24 hours.</p>
              </div>

              <div className="cf-divider" />

              <div className="cf-field">
                <label className="cf-label">Your Name</label>
                <Field name="name" type="text" placeholder="John Doe" className="cf-input" />
                <ErrorMessage name="name" component="div" className="cf-error" />
              </div>

              <div className="cf-field">
                <label className="cf-label">Email Address</label>
                <Field name="email" type="email" placeholder="john@example.com" className="cf-input" />
                <ErrorMessage name="email" component="div" className="cf-error" />
              </div>

              <div className="cf-field">
                <label className="cf-label">Message</label>
                <Field name="message" as="textarea" rows={4} placeholder="What's on your mind?" className="cf-input" />
                <ErrorMessage name="message" component="div" className="cf-error" />
              </div>

              <button type="submit" disabled={isSubmitting} className="cf-submit">
                <Send size={15} strokeWidth={2.5} />
                {isSubmitting ? "Sending\u2026" : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div className="avail-badge" style={{ marginBottom: 16 }}>
              <span className="avail-dot" />
              Available for work
            </div>
            <p style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "var(--foreground)", lineHeight: 1.3, fontFamily: "var(--font-dm-serif), serif" }}>
              Let&apos;s build something <em>great</em> together.
            </p>
            <p style={{ margin: "10px 0 0", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.7 }}>
              Whether it&apos;s a new project, freelance opportunity, or just a friendly chat &mdash; my inbox is always open.
            </p>
          </div>

          <div className="cf-divider" />

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ContactInfo icon={Mail} title="Email" value="dev.rrimon@gmail.com" color="bg-blue-500" href="mailto:dev.rrimon@gmail.com" />
            <ContactInfo icon={MapPin} title="Location" value="Dhaka, Bangladesh" color="bg-cyan-500" href="#" />
            <ContactInfo icon={Phone} title="Phone" value="+880 1871091229" color="bg-indigo-500" href="tel:+8801871091229" />
          </div>
        </div>
      </div>
    </div>
  );
}
