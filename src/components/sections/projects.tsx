"use client";

import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, ChevronDown } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
import { SectionHeader } from "@/components/shared/section-header";
import { projectData, type Project } from "@/data/project-data";

const categories = ["ALL", "Full Stack", "Frontend", "Wordpress", "APP"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card group relative bg-card rounded-[1.5rem] shadow-md shadow-border/50 border border-border overflow-hidden cursor-pointer"
      style={{
        animationDelay: `${index * 120}ms`,
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "transform 5.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <div className="spotlight pointer-events-none absolute inset-0 z-10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-out" />
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />

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

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />

          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[1000ms] ease-out z-20">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm border border-border text-foreground shadow-lg hover:bg-foreground hover:text-card hover:scale-110 transition-all duration-300"
              title="View Code"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/90 backdrop-blur-sm text-white shadow-lg hover:bg-primary hover:scale-110 transition-all duration-300"
              title="View Live"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-5 pt-3">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:bg-primary/20 transition-colors duration-[700ms]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground group-hover:translate-x-1.5 transition-transform duration-[1200ms] ease-out">
            {project.title}
          </h3>
          <ArrowUpRight
            size={20}
            className="text-muted-foreground mt-1 opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-[1200ms] ease-out flex-shrink-0"
          />
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.desc}
        </p>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === "ALL"
    ? projectData
    : projectData.filter((project) => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const hasMoreProjects = filteredProjects.length > 4;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <div className="py-20 px-4 relative">
      <SectionHeader number={4} title="Featured Projects" />

      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ease-out ${
              activeCategory === category
                ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                : "bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary hover:scale-105"
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

        {hasMoreProjects && !showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="show-more-btn flex items-center gap-2 px-8 py-4 bg-card border-primary text-primary rounded-full font-bold text-base hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-out"
            >
              <span>Show More Projects</span>
              <ChevronDown size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
