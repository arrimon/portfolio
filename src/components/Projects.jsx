// import React from 'react';
// import SectionHeader from './SectionHeader';
// import { ExternalLink, Github } from 'lucide-react';

// const ProjectCard = ({ project }) => (
//   <div className="bg-[var(--surface)] rounded-[2.5rem] p-5 shadow-xl shadow-[var(--border)]/50 border border-[var(--border)] group hover:shadow-2xl transition-all duration-500">
//     {/* Project Image/Placeholder */}
//     <div className={`${project.color} h-56 rounded-[2rem] flex items-center justify-center text-white text-7xl font-black shadow-inner relative overflow-hidden`}>
//       <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">{project.title[0]}</span>
//       {/* Decorative circles for professional UI look */}
//       <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
//       <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-black/5 rounded-full"></div>
//     </div>

//     <div className="p-6">
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.tags.map(tag => (
//           <span key={tag} className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full uppercase tracking-tighter">
//             {tag}
//           </span>
//         ))}
//       </div>
      
//       <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{project.title}</h3>
//       <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8 h-12 overflow-hidden">
//         {project.desc}
//       </p>

//       <div className="grid grid-cols-2 gap-4">
//         <a
//           href={project.codeLink}
//           className="flex items-center justify-center gap-2 py-3.5 bg-[var(--surface)] text-[var(--text-primary)] rounded-2xl font-bold hover:bg-[var(--text-primary)] hover:text-[var(--surface)] transition-all duration-300"
//         >
//           <Github size={18} /> View Code
//         </a>
//         <a
//           href={project.liveLink}
//           className="flex items-center justify-center gap-2 py-3.5 bg-[var(--accent)] text-white rounded-2xl font-bold shadow-lg shadow-[var(--accent)]/30 hover:bg-[var(--accent)]/90 transition-all duration-300"
//         >
//           <ExternalLink size={18} /> View Live
//         </a>
//       </div>
//     </div>
//   </div>
// );

// const Projects = () => {
//   const projectData = [
//     { 
//       title: "E-Commerce Platform", 
//       desc: "Full-stack e-commerce solution with user authentication, shopping cart, and Stripe integration.", 
//       tags: ["React", "Node.js", "MongoDB", "Stripe"], 
//       color: "bg-gradient-to-br from-[var(--accent)] to-indigo-600",
//       liveLink: "#",
//       codeLink: "#"
//     },
//     { 
//       title: "Task Management App", 
//       desc: "Real-time collaborative task management application with drag-and-drop functionality.", 
//       tags: ["React", "Vercel", "Daygi Ui", "Tailwind CSS"], 
//       color: "bg-gradient-to-br from-purple-500 to-pink-500",
//       liveLink: "#",
//       codeLink: "#"
//     }
//   ];

//   return (
//     <div className="py-10">
//       <SectionHeader 
//         title="Featured Projects" 
//         subtitle="A glimpse of the real-world projects I've built" 
//       />
//       <div className="grid md:grid-cols-2 gap-10">
//         {projectData.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React, { useRef } from 'react';
import SectionHeader from './SectionHeader';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projectData } from '../data/projectData';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Adjusted sensitivity for a more professional tilt
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card group relative bg-[var(--surface)] rounded-[2.5rem] shadow-xl shadow-[var(--border)]/50 border border-[var(--border)] overflow-hidden cursor-pointer"
      style={{ 
        animationDelay: `${index * 120}ms`, 
        transformStyle: 'preserve-3d', 
        willChange: 'transform',
        transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' 
      }}
    >
      {/* Spotlight overlay */}
      <div className="spotlight pointer-events-none absolute inset-0 z-10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top glint line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />

      {/* Image Section */}
      <div className={`${project.color} h-56 relative overflow-hidden`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-white text-7xl font-black z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-out">
              {project.title[0]}
            </span>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 group-hover:opacity-50 transition-all duration-700" />
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-black/5 rounded-full group-hover:scale-150 transition-all duration-700 delay-75" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--surface)] to-transparent" />
      </div>

      {/* Body Content */}
      <div className="p-6 pt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:bg-[var(--accent)]/20 transition-colors duration-300"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:translate-x-0.5 transition-transform duration-300">
            {project.title}
          </h3>
          <ArrowUpRight
            size={20}
            className="text-[var(--text-muted)] mt-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out flex-shrink-0"
          />
        </div>

        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8 h-12 overflow-hidden">
          {project.desc}
        </p>

        <div className="h-px bg-[var(--border)] mb-5 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

        {/* Action Buttons - FIXED SYNTAX */}
        <div className="grid grid-cols-2 gap-3 relative z-20">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] rounded-2xl font-bold text-sm hover:bg-[var(--text-primary)] hover:text-[var(--surface)] hover:border-transparent hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 ease-out"
          >
            <Github size={16} /> View Code
          </a>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 bg-[var(--accent)] text-white rounded-2xl font-bold text-sm shadow-lg shadow-[var(--accent)]/30 hover:bg-[var(--accent)]/90 hover:shadow-[var(--accent)]/50 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 ease-out"
          >
            <ExternalLink size={16} /> View Live
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="py-20 px-4">
      <style>{`
        .project-card {
          animation: cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }

        @keyframes cardFadeUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .spotlight {
          background: radial-gradient(
            350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255, 255, 255, 0.1),
            transparent 80%
          );
        }
      `}</style>

      <SectionHeader number={5} title="Featured Projects" />
      {/* <SectionHeader
        title="Featured Projects"
        subtitle="A glimpse of the real-world projects I've built"
      /> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;