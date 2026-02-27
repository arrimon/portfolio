import React from 'react';
import { motion } from 'framer-motion'; // For smoother entry animations
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="max-w-4xl py-20 lg:py-0">
      {/* 1. Status Badge with better styling */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-blue-100 text-blue-600 rounded-full text-sm font-bold mb-8 shadow-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="tracking-wide">Available for new opportunities</span>
      </motion.div>

      {/* 2. Headline with improved kerning and size */}
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
        I'm <span className="text-blue-600">Abu Rayhan</span> <br />
        Rimon
      </h1>

      {/* 3. Refined Paragraph with better hierarchy */}
      <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl">
        a Frontend Developer who bridges the gap between complex engineering and user-centric design. Currently engineering high-performance systems at 
        <a href="https://www.race.net.bd/" target='_blank' rel="noreferrer" className="ml-1 text-slate-800 font-bold border-b-2 border-blue-500/30 hover:bg-blue-50 transition-colors"> 
          Race Online Ltd
        </a>.
      </p>

      {/* 4. Action Buttons with Icons */}
      <div className="flex flex-col sm:flex-row gap-5">
        <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
          <Download size={20} className="group-hover:animate-bounce" />
          Download Resume
        </button>
        
        <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:border-slate-300">
          View Projects
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 5. Minimalist Tech Stack Row */}
      <div className="mt-16 flex items-center gap-6 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tech Stack |</span>
        <div className="flex gap-4 text-sm font-bold text-slate-600">
          <span>React</span>
          <span>Next.js</span>
          <span>Laravel</span>
          <span>MySQL</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;