"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { TypingText } from "@/components/shared/typing-text";

export function HeroSection() {
  return (
    <div className="max-w-4xl pt-30 pb-16 lg:py-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="
          inline-flex items-center gap-3
          px-4 py-2
          bg-card
          border border-border
          text-primary
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

      <h1 className="
        text-4xl md:text-5xl lg:text-6xl xl:text-7xl
        font-black
        leading-[1.05]
        tracking-tight
        mb-8
        text-foreground
      ">
        I&apos;m <span className="text-primary">Abu Rayhan</span> <br />
        Rimon
      </h1>

      <p className="
        text-lg md:text-xl
        text-muted-foreground
        leading-relaxed
        mb-10
        max-w-2xl
      ">
        AI-Enabled <TypingText words={["Full Stack", "React", "Laravel", "Next.js"]} /> Developer specializing in Laravel and React.js, focused on engineering high-performance systems and seamless user experiences at{" "}
        <a
          href="https://www.race.net.bd/"
          target="_blank"
          rel="noreferrer"
          className="
            ml-1
            font-bold
            text-foreground
            border-b-2
            border-primary
            hover:bg-primary/10
            transition-colors
          "
        >
          Race Online Ltd
        </a>.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        <a
          href="https://drive.google.com/file/d/1ih8Tlcdbgg7mNV9Q1E3L-bHIcb3uOH1D/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex items-center justify-center gap-2
            px-8 py-4
            bg-primary
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

        <a
          href="#projects"
          className="
            group flex items-center justify-center gap-2
            px-8 py-4
            bg-card
            border border-border
            text-foreground
            rounded-2xl
            font-bold
            hover:bg-primary/10
            transition-all
          "
        >
          View Projects
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>

      <div className="
        mt-16
        flex items-center gap-6
        grayscale opacity-40
        hover:opacity-100
        transition-opacity duration-500
      ">
        <span className="
          text-xs font-bold uppercase tracking-widest
          text-muted-foreground
        ">
          Tech Stack |
        </span>
        <div className="
          flex gap-4
          text-sm font-bold
          text-muted-foreground
        ">
          <span>React</span>
          <span>Next.js</span>
          <span>Laravel</span>
          <span>MySQL</span>
        </div>
      </div>
    </div>
  );
}
