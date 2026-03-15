// components/SidebarLeft.jsx
import React from 'react';
import { Linkedin, Github, Mail, Code, Terminal } from 'lucide-react';
import profileImage from '../assets/arrimon.jpeg';

const SidebarLeft = () => {
  return (
    <aside className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 w-[280px] bg-[var(--surface)] rounded-[2rem] p-8 shadow-2xl shadow-[var(--border)] border border-[var(--border)] flex-col items-center text-center z-40">
      {/* <div className="relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--border)] ring-4 ring-[var(--surface)] shadow-md">
          <img 
            src={profileImage} 
            alt="Md Abu Rayhan Rimon" 
            className="w-full h-full object-cover transition-transform duration-1000 animate-float" 
          />
        </div>
        <div className="absolute bottom-2 right-2 bg-[var(--accent)] p-2 rounded-full text-white shadow-lg border-2 border-[var(--surface)]">
          <span className="text-xs">👋</span>
        </div>
      </div> */}

      <div className="relative group">
        {/* Profile Image Container */}
        <div 
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--border)] ring-4 ring-[var(--surface)] shadow-md transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-[var(--accent)] group-hover:ring-[var(--accent)]/20 relative z-10"
        >
          <img 
            src={profileImage} 
            alt="Md Abu Rayhan Rimon" 
            className="w-full h-full object-cover " 
          />
        </div>

        {/* Wave badge (Main) */}
        <div 
          className="absolute bottom-1 right-1 h-7 w-7 bg-[var(--surface)] rounded-full border border-[var(--border)] flex items-center justify-center shadow-sm animate-float z-20"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="w-5 h-5" alt="laravel" />
        </div>
        
        {/* React Icon */}
        <div className="absolute -top-1 -right-1 w-7 h-7 bg-[var(--surface)] rounded-full border border-[var(--border)] flex items-center justify-center shadow-sm animate-float z-20" style={{ animationDelay: '1s' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-5 h-5" alt="React" />
        </div>

        {/* JavaScript Icon */}
        <div className="absolute top-1/2 -left-3 w-7 h-7 bg-[var(--surface)] rounded-full border border-[var(--border)] flex items-center justify-center shadow-sm animate-float z-20" style={{ animationDelay: '2s' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-5 h-5 rounded-full" alt="JS" />
        </div>

        {/* Next Icon */}
        <div className="absolute -top-2 left-6 w-7 h-7 bg-[var(--surface)] rounded-full border border-[var(--border)] flex items-center justify-center shadow-sm animate-float z-20" style={{ animationDelay: '3s' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-5 h-5" alt="Next Js" />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Rayhan Rimon</h2>
        <p className="text-[var(--accent)] font-semibold mt-1">Full Stack Developer <span>(Frontend Focused)</span></p>
        <p className="text-[var(--text-muted)] text-sm mt-3 bg-[var(--surface)] py-1 px-3 rounded-full">dev.rrimon@gmail.com</p>
      </div>

      <div className="flex gap-4 mt-8">

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/rayhanrimon/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl flex items-center justify-center"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--accent) 20%, transparent)',
            color: 'var(--accent)',
            transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.7s cubic-bezier(0.23, 1, 0.32, 1), color 0.7s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.backgroundColor = 'var(--accent)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.boxShadow = '0 12px 24px -6px color-mix(in srgb, var(--accent) 50%, transparent)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0px)';
            e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--accent) 20%, transparent)';
            e.currentTarget.style.color = 'var(--accent)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Linkedin size={20} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/arrimon"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl flex items-center justify-center"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--text-primary) 20%, transparent)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.7s cubic-bezier(0.23, 1, 0.32, 1), color 0.7s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.backgroundColor = 'var(--text-primary)';
            e.currentTarget.style.color = 'var(--surface)';
            e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(0,0,0,0.25)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0px)';
            e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--text-primary) 20%, transparent)';
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Github size={20} />
        </a>

        {/* Mail */}
        <a
          href="mailto:dev.rrimon@gmail.com"
          className="p-3 rounded-2xl flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            color: '#ef4444',
            transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.7s cubic-bezier(0.23, 1, 0.32, 1), color 0.7s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.backgroundColor = '#ef4444';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(239, 68, 68, 0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0px)';
            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
            e.currentTarget.style.color = '#ef4444';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Mail size={20} />
        </a>

      </div>
    </aside>
  );
};

export default SidebarLeft;