import React from 'react';
import SectionHeader from './SectionHeader';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <div className="bg-[var(--surface)] rounded-[2.5rem] p-5 shadow-xl shadow-[var(--border)]/50 border border-[var(--border)] group hover:shadow-2xl transition-all duration-500">
    {/* Project Image/Placeholder */}
    <div className={`${project.color} h-56 rounded-[2rem] flex items-center justify-center text-white text-7xl font-black shadow-inner relative overflow-hidden`}>
      <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">{project.title[0]}</span>
      {/* Decorative circles for professional UI look */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-black/5 rounded-full"></div>
    </div>

    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full uppercase tracking-tighter">
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{project.title}</h3>
      <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8 h-12 overflow-hidden">
        {project.desc}
      </p>

      <div className="grid grid-cols-2 gap-4">
        <a
          href={project.codeLink}
          className="flex items-center justify-center gap-2 py-3.5 bg-[var(--surface)] text-[var(--text-primary)] rounded-2xl font-bold hover:bg-[var(--text-primary)] hover:text-[var(--surface)] transition-all duration-300"
        >
          <Github size={18} /> View Code
        </a>
        <a
          href={project.liveLink}
          className="flex items-center justify-center gap-2 py-3.5 bg-[var(--accent)] text-white rounded-2xl font-bold shadow-lg shadow-[var(--accent)]/30 hover:bg-[var(--accent)]/90 transition-all duration-300"
        >
          <ExternalLink size={18} /> View Live
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectData = [
    { 
      title: "E-Commerce Platform", 
      desc: "Full-stack e-commerce solution with user authentication, shopping cart, and Stripe integration.", 
      tags: ["React", "Node.js", "MongoDB", "Stripe"], 
      color: "bg-gradient-to-br from-[var(--accent)] to-indigo-600",
      liveLink: "#",
      codeLink: "#"
    },
    { 
      title: "Task Management App", 
      desc: "Real-time collaborative task management application with drag-and-drop functionality.", 
      tags: ["React", "Firebase", "Tailwind CSS"], 
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <div className="py-10">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="A glimpse of the real-world projects I've built" 
      />
      <div className="grid md:grid-cols-2 gap-10">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;