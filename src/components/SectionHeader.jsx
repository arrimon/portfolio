import React from 'react';

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-4">{title}</h2>
    {subtitle && <p className="text-[var(--text-muted)] text-lg">{subtitle}</p>}
    <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/70 mx-auto mt-6 rounded-full"></div>
  </div>
);

export default SectionHeader;