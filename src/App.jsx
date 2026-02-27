import React from 'react';
import { motion } from 'framer-motion'; 

import SidebarLeft from './components/SidebarLeft';
import NavigationRight from './components/NavigationRight';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="scroll-smooth bg-[#f8faff] min-h-screen font-sans selection:bg-blue-100">
      
      <SidebarLeft />
      <NavigationRight />

      {/* 1. max-w-7xl: Increases total allowed width for content.
          2. lg:pl-[300px]: Reduced offset to bring content closer to the left sidebar.
          3. lg:pr-[80px]: Reduced right offset to give more breathing room on the right.
      */}
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
        
        {/* Reduced py-20 to py-12 to save vertical space as well */}
        <motion.section 
          id="about" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-12"
        >
          <About />
        </motion.section>

        <motion.section 
          id="skills" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-12"
        >
          <Skills />
        </motion.section>

        <motion.section 
          id="projects" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-12"
        >
          <Projects />
        </motion.section>

        <motion.section 
          id="contact" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-12"
        >
          <Contact />
        </motion.section>

      </main>
      
      {/* Footer placed outside main for full-width border-t */}
      <Footer />
    </div>
  );
}