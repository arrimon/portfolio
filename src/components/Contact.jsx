import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, value, color }) => (
  <div className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm text-slate-400 font-medium">{title}</p>
      <p className="text-slate-700 font-semibold">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-2">Get in Touch</h2>
        <p className="text-slate-500">Feel free to reach out for collaborations or just to say hi!</p>
        <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
            <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Your Email</label>
            <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
            <textarea rows="4" placeholder="Your message here..." className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none"></textarea>
          </div>
          <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
            Send Message
          </button>
        </form>

        {/* Info Sidebar */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Direct Contact</h3>
          <ContactInfo icon={Mail} title="Email" value="dev.rrimon@gmail.com" color="bg-blue-500" />
          <ContactInfo icon={MapPin} title="Location" value="Dhaka, Bangladesh" color="bg-cyan-500" />
          <ContactInfo icon={Phone} title="Phone" value="+880 1XXX-XXXXXX" color="bg-indigo-500" />
        </div>
      </div>
    </div>
  );
};

export default Contact;