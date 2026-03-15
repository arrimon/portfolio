import React from 'react';
import { motion } from 'framer-motion';

import SidebarLeft from './components/SidebarLeft';
import NavigationRight from './components/NavigationRight';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from "./components/ThemeToggle";

export default function App() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div
      className="
        scroll-smooth
        min-h-screen
        font-sans
        bg-[var(--bg)]
        text-[var(--text-primary)]
        selection:bg-[var(--accent)]
      "
    >

      <SidebarLeft />
      <NavigationRight />

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:pl-[300px] lg:pr-[80px]">

        <motion.section
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="min-h-screen flex items-center"
        >
          <Hero />
        </motion.section>

        <motion.section id="about" variants={sectionVariants} className="py-12">
          <About />
        </motion.section>

        <motion.section id="skills" variants={sectionVariants} className="py-12">
          <Skills />
        </motion.section>

        <motion.section id="skills" variants={sectionVariants} className="py-12">
          <Experience />
        </motion.section>

        <motion.section id="projects" variants={sectionVariants} className="py-12">
          <Projects />
        </motion.section>

        <motion.section id="contact" variants={sectionVariants} className="py-12">
          <Contact />
        </motion.section>

      </main>

      <Footer />

    </div>
  );
}