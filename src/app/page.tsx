"use client";

import { motion } from "framer-motion";
import { SidebarLeft } from "@/components/layout/sidebar-left";
import { NavigationRight } from "@/components/layout/navigation-right";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  return (
    <div className="scroll-smooth min-h-screen font-sans bg-background text-foreground selection:bg-primary">
      <SidebarLeft />
      <NavigationRight />

      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:pl-[340px] lg:pr-[100px]">
        <motion.section
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="min-h-screen flex items-center"
        >
          <HeroSection />
        </motion.section>

        <motion.section id="about" variants={sectionVariants} className="py-12">
          <AboutSection />
        </motion.section>

        <motion.section id="skills" variants={sectionVariants} className="py-12">
          <SkillsSection />
        </motion.section>

        <motion.section id="experience" variants={sectionVariants} className="py-12">
          <ExperienceSection />
        </motion.section>

        <motion.section id="projects" variants={sectionVariants} className="py-12">
          <ProjectsSection />
        </motion.section>

        <motion.section id="contact" variants={sectionVariants} className="py-12">
          <ContactSection />
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
}
