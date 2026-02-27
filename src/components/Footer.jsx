import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white/50 py-8 mt-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright - Left on Desktop, Center on Mobile */}
          <p className="text-slate-500 text-sm font-medium order-2 md:order-1">
            © {currentYear} <span className="text-slate-900">Md Abu Rayhan Rimon</span>
          </p>

          {/* Back to top - Right on Desktop, Top on Mobile */}
          <div className="order-1 md:order-2">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 group"
            >
              Back to top 
              <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;