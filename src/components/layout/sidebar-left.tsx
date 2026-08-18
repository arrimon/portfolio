"use client";

import Image from "next/image";
import { Mail } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function SidebarLeft() {
  return (
    <aside className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 w-[280px] bg-card rounded-[2rem] p-8 shadow-2xl shadow-border border border-border flex-col items-center text-center z-40">
      <div className="relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-border ring-4 ring-card shadow-md transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-primary group-hover:ring-primary/20 relative z-10">
          <Image
            src="/arrimon.jpeg"
            alt="Md Abu Rayhan Rimon"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="absolute bottom-1 right-1 h-7 w-7 bg-card rounded-full border border-border flex items-center justify-center shadow-sm animate-float z-20">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="w-5 h-5" alt="laravel" />
        </div>

        <div className="absolute -top-1 -right-1 w-7 h-7 bg-card rounded-full border border-border flex items-center justify-center shadow-sm animate-float z-20" style={{ animationDelay: "1s" }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-5 h-5" alt="React" />
        </div>

        <div className="absolute top-1/2 -left-3 w-7 h-7 bg-card rounded-full border border-border flex items-center justify-center shadow-sm animate-float z-20" style={{ animationDelay: "2s" }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-5 h-5 rounded-full" alt="JS" />
        </div>

        <div className="absolute -top-2 left-6 w-7 h-7 bg-card rounded-full border border-border flex items-center justify-center shadow-sm animate-float z-20" style={{ animationDelay: "3s" }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-5 h-5" alt="Next Js" />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-foreground">Abu Rayhan Rimon</h2>
        <p className="text-primary font-semibold mt-1">Full Stack Developer</p>
        <p className="text-muted-foreground text-sm mt-3 bg-card py-1 px-3 rounded-full">dev.rrimon@gmail.com</p>
      </div>

      <div className="flex gap-4 mt-8">
        <a
          href="https://linkedin.com/in/rayhanrimon/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl flex items-center justify-center bg-primary/20 text-primary transition-all duration-[700ms] cubic-bezier(0.23,1,0.32,1) hover:-translate-y-1.5 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/50"
        >
          <LinkedinIcon size={20} />
        </a>

        <a
          href="https://github.com/arrimon"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl flex items-center justify-center bg-foreground/20 text-foreground border border-border transition-all duration-[700ms] cubic-bezier(0.23,1,0.32,1) hover:-translate-y-1.5 hover:bg-foreground hover:text-card hover:shadow-lg hover:shadow-black/25"
        >
          <GithubIcon size={20} />
        </a>

        <a
          href="mailto:dev.rrimon@gmail.com"
          className="p-3 rounded-2xl flex items-center justify-center bg-red-500/15 text-red-500 transition-all duration-[700ms] cubic-bezier(0.23,1,0.32,1) hover:-translate-y-1.5 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/45"
        >
          <Mail size={20} />
        </a>
      </div>
    </aside>
  );
}
