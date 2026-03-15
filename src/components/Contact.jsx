import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import SectionHeader from './SectionHeader';

/* Contact Card */
const ContactInfo = ({ icon: Icon, title, value, color }) => (
  <div
    className="
      flex items-center gap-5
      p-6
      bg-[var(--surface)]
      rounded-2xl
      border border-[var(--border)]
      shadow-sm
      hover:shadow-md
      transition-shadow
    "
  >
    <div
      className={`w-12 h-12 ${color}
      rounded-xl flex items-center justify-center text-white`}
    >
      <Icon size={24} />
    </div>

    <div>
      <p className="text-sm text-[var(--text-muted)] font-medium">
        {title}
      </p>

      <p className="text-[var(--text-primary)] font-semibold">
        {value}
      </p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="space-y-12">

      {/* Heading */}
      <div className="text-left">
        <SectionHeader
          number={6}
          title="Contact"
          description="Feel free to reach out for collaborations or just to say hi!"
        />
      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <form
          className="
            bg-[var(--surface)]
            p-8
            rounded-[2.5rem]
            shadow-xl
            border border-[var(--border)]
            space-y-6
          "
        >

          {/* Name */}
          <div className="space-y-2">
            <label className="
              text-sm font-bold
              text-[var(--text-primary)]
              ml-1
            ">
              Your Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="
                w-full px-5 py-4
                bg-[var(--bg)]
                rounded-2xl
                outline-none
                border border-[var(--border)]
                focus:ring-2
                focus:ring-[var(--accent)]
                transition-all
              "
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="
              text-sm font-bold
              text-[var(--text-primary)]
              ml-1
            ">
              Your Email
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="
                w-full px-5 py-4
                bg-[var(--bg)]
                rounded-2xl
                outline-none
                border border-[var(--border)]
                focus:ring-2
                focus:ring-[var(--accent)]
                transition-all
              "
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="
              text-sm font-bold
              text-[var(--text-primary)]
              ml-1
            ">
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Your message here..."
              className="
                w-full px-5 py-4
                bg-[var(--bg)]
                rounded-2xl
                outline-none
                border border-[var(--border)]
                focus:ring-2
                focus:ring-[var(--accent)]
                transition-all
                resize-none
              "
            />
          </div>

          {/* Submit */}
          <button
            className="
              w-full py-5
              bg-[var(--accent)]
              text-white
              font-bold
              rounded-2xl
              hover:-translate-y-1
              transition-all
            "
          >
            Send Message
          </button>

        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="
            text-2xl font-bold
            text-[var(--text-primary)]
            mb-4
          ">
            Direct Contact
          </h3>

          <ContactInfo
            icon={Mail}
            title="Email"
            value="dev.rrimon@gmail.com"
            color="bg-blue-500"
          />

          <ContactInfo
            icon={MapPin}
            title="Location"
            value="Dhaka, Bangladesh"
            color="bg-cyan-500"
          />

          <ContactInfo
            icon={Phone}
            title="Phone"
            value="+880 1871091229"
            color="bg-indigo-500"
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;