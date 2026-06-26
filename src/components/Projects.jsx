// src/components/Projects.jsx
import React, { useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import { ExternalLink, Github, ArrowUpRight, ChevronDown } from 'lucide-react';
import { projectData } from '../data/projectData';

const categories = ['ALL', 'Full Stack', 'Frontend', 'Wordpress', 'APP'];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card group relative bg-[var(--surface)] rounded-[1.5rem] shadow-md shadow-[var(--border)]/50 border border-[var(--border)] overflow-hidden cursor-pointer"
      style={{
        animationDelay: `${index * 120}ms`,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        transition: 'transform 5.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      {/* Spotlight */}
      <div className="spotlight pointer-events-none absolute inset-0 z-10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-out" />

      {/* Top line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />

      {/* Image Section */}
      <div className="p-2">
        <div className={`${project.color} h-[140px] relative overflow-hidden rounded-xl`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-white text-7xl font-black z-10 group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-[1500ms] ease-out">
                {project.title[0]}
              </span>

              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 group-hover:opacity-50 transition-all duration-[1500ms] ease-out" />
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-black/5 rounded-full group-hover:scale-150 transition-all duration-[1500ms] ease-out delay-200" />
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--surface)] to-transparent" />

          {/* Hover Icons - Bottom Right of Image */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[1000ms] ease-out z-20">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--surface)]/90 backdrop-blur-sm border border-[var(--border)] text-[var(--text-primary)] shadow-lg hover:bg-[var(--text-primary)] hover:text-[var(--surface)] hover:scale-110 transition-all duration-300"
              title="View Code"
            >
              <Github size={16} />
            </a>

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--accent)]/90 backdrop-blur-sm text-white shadow-lg hover:bg-[var(--accent)] hover:scale-110 transition-all duration-300"
              title="View Live"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 pt-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:bg-[var(--accent)]/20 transition-colors duration-[700ms]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:translate-x-1.5 transition-transform duration-[1200ms] ease-out">
            {project.title}
          </h3>
          <ArrowUpRight
            size={20}
            className="text-[var(--text-muted)] mt-1 opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-[1200ms] ease-out flex-shrink-0"
          />
        </div>

        {/* Description */}
        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 line-clamp-2">
          {project.desc}
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'ALL' 
    ? projectData
    : projectData.filter(project => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const hasMoreProjects = filteredProjects.length > 4;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <div className="py-20 px-4 relative">
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

        .show-more-btn {
          animation: bounceDown 2s infinite;
        }

        @keyframes bounceDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .expand-container {
          overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>

      <SectionHeader number={4} title="Featured Projects" />

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ease-out ${
              activeCategory === category
                ? 'bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/30 scale-105'
                : 'bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={`${activeCategory}-${index}`} project={project} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreProjects && !showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="show-more-btn flex items-center gap-2 px-8 py-4 bg-[var(--surface)] border-[var(--accent)] text-[var(--accent)] rounded-full font-bold text-base hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all duration-300 ease-out"
            >
              <span>Show More Projects</span>
              <ChevronDown size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;