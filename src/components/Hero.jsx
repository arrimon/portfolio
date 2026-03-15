// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="max-w-4xl pt-30 pb-16 lg:py-0">

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="
          inline-flex items-center gap-3
          px-4 py-2
          bg-[var(--surface)]
          border border-[var(--border)]
          text-[var(--accent)]
          rounded-full
          text-sm font-bold
          mb-8
          shadow-sm
          animate-float
        "
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>

        <span className="tracking-wide">
          Available for new opportunities
        </span>
      </motion.div>

      {/* Headline */}
      <h1 className="
        text-4xl md:text-6xl lg:text-8xl
        font-black
        leading-[1.05]
        tracking-tight
        mb-8
        text-[var(--text-primary)]
      ">
        I'm <span className="text-[var(--accent)]">Abu Rayhan</span> <br />
        Rimon
      </h1>

      {/* Description */}
      <p className="
        text-lg md:text-xl
        text-[var(--text-muted)]
        leading-relaxed
        mb-10
        max-w-2xl
      ">
        A Frontend Developer who bridges the gap between complex engineering
        and user-centric design. Currently engineering high-performance
        systems at

        <a
          href="https://www.race.net.bd/"
          target="_blank"
          rel="noreferrer"
          className="
            ml-1
            font-bold
            text-[var(--text-primary)]
            border-b-2
            border-[var(--accent)]
            hover:bg-[var(--accent)]/10
            transition-colors
          "
        >
          Race Online Ltd
        </a>.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5">

        <a
            href="https://drive.google.com/uc?export=download&id=17fEeopL-O4BjqQ5NMXJmigRbOlqgdBRZ"
            download
            className="
                group flex items-center justify-center gap-2
                px-8 py-4
                bg-[var(--accent)]
                text-white
                rounded-2xl
                font-bold
                hover:-translate-y-1
                transition-all
            "
            >
            <Download size={20} className="group-hover:animate-bounce" />
            Download Resume
        </a>

        {/* Secondary */}
        <button className="
          group flex items-center justify-center gap-2
          px-8 py-4
          bg-[var(--surface)]
          border border-[var(--border)]
          text-[var(--text-primary)]
          rounded-2xl
          font-bold
          hover:bg-[var(--accent)]/10
          transition-all
        ">
          View Projects
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

      </div>

      {/* Tech Stack */}
      <div className="
        mt-16
        flex items-center gap-6
        grayscale opacity-40
        hover:opacity-100
        transition-opacity duration-500
      ">
        <span className="
          text-xs font-bold uppercase tracking-widest
          text-[var(--text-muted)]
        ">
          Tech Stack |
        </span>

        <div className="
          flex gap-4
          text-sm font-bold
          text-[var(--text-muted)]
        ">
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