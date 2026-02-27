import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import profileImage from '../assets/arrimon.jpeg';

const SidebarLeft = () => {
  return (
    <aside className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 w-[280px] bg-[var(--surface)] rounded-[2rem] p-8 shadow-2xl shadow-[var(--border)] border border-[var(--border)] flex-col items-center text-center z-40">
      <div className="relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--border)] ring-4 ring-[var(--surface)] shadow-md">
          <img 
            src={profileImage} 
            alt="Md Abu Rayhan Rimon" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        <div className="absolute bottom-2 right-2 bg-[var(--accent)] p-2 rounded-full text-white shadow-lg border-2 border-[var(--surface)]">
          <span className="text-xs">👋</span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Rayhan Rimon</h2>
        <p className="text-[var(--accent)] font-semibold mt-1">Frontend Developer</p>
        <p className="text-[var(--text-muted)] text-sm mt-3 bg-[var(--surface)] py-1 px-3 rounded-full">dev.rrimon@gmail.com</p>
      </div>

      <div className="flex gap-4 mt-8">
        <a href="https://linkedin.com/in/rayhanrimon/" className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl hover:bg-[var(--accent)] hover:text-white transition-all">
          <Linkedin size={20}/>
        </a>
        <a href="https://github.com/arrimon" className="p-3 bg-[var(--surface)] text-[var(--text-primary)] rounded-2xl hover:bg-[var(--text-primary)] hover:text-[var(--surface)] transition-all">
          <Github size={20}/>
        </a>
        <a href="mailto:dev.rrimon@gmail.com" className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all">
          <Mail size={20}/>
        </a>
      </div>
    </aside>
  );
};

export default SidebarLeft;