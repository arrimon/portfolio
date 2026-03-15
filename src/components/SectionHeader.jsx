// import React from 'react';

// const SectionHeader = ({ title, subtitle }) => (
//   <div className="text-center mb-16">
//     <h2 className="text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-4">{title}</h2>
//     {subtitle && <p className="text-[var(--text-muted)] text-lg">{subtitle}</p>}
//     <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/70 mx-auto mt-6 rounded-full"></div>
//   </div>
// );

// export default SectionHeader;
// components/SectionHeader.jsx

// components/SectionHeader.jsx

const SectionHeader = ({ number, title, description, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      
      {/* Top row: number + title + line */}
      <div className="flex items-center gap-4">
        {number && (
          <div className="px-3 py-1 rounded-md border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] text-[11px] font-bold flex-shrink-0">
            {String(number).padStart(2, '0')}
          </div>
        )}
        <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[var(--text-primary)] whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-grow h-[1px] bg-[var(--border)]" />
      </div>

      {/* Optional description */}
      {description && (
        <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionHeader;