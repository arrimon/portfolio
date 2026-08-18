"use client";

import { SectionHeader } from "@/components/shared/section-header";

const SkillTile = ({ name, type, icon, index }: { name: string; type: string; icon: string; index: number }) => {
  const getCategoryColor = () => {
    switch (type.toLowerCase()) {
      case "frontend": return "var(--primary)";
      case "backend": return "#22c55e";
      case "tools":
      case "devops":
      case "core":
      case "fullstack": return "#a855f7";
      case "database": return "#3b82f6";
      default: return "var(--primary)";
    }
  };

  const categoryColor = getCategoryColor();

  return (
    <div
      className="p-6 rounded-[2rem] border border-border bg-card flex flex-col items-center justify-center text-center gap-3 relative group"
      style={{
        animationDelay: `${index * 50}ms`,
        transition: "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.7s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-12px)";
        e.currentTarget.style.borderColor = `${categoryColor}55`;
        e.currentTarget.style.boxShadow = `0 20px 40px -12px ${categoryColor}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-8 opacity-0 group-hover:opacity-100 blur-2xl z-0 pointer-events-none"
        style={{
          backgroundColor: `${categoryColor}66`,
          transition: "opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] pointer-events-none rounded-[2rem]"
        style={{
          background: `radial-gradient(circle at center, ${categoryColor}, transparent)`,
          transition: "opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />

      <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-2xl">
        {icon ? (
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-12 h-12 object-contain animate-float"
            style={{ animationDelay: `${index * 300}ms` }}
          />
        ) : (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl font-black text-muted-foreground group-hover:text-foreground animate-float"
            style={{ animationDelay: `${index * 300}ms` }}
          >
            {name[0]}
          </div>
        )}
      </div>

      <h3 className="text-sm md:text-base font-bold tracking-tight z-10 text-foreground">
        {name}
      </h3>

      <span
        className="px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest z-10 border"
        style={{
          color: categoryColor,
          borderColor: `${categoryColor}44`,
          backgroundColor: `${categoryColor}11`,
        }}
      >
        {type}
      </span>
    </div>
  );
};

const skillsData = [
  { name: "HTML", type: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", type: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", type: "Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React JS", type: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", type: "Fullstack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node JS", type: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", type: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Laravel", type: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "MySQL", type: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "GitHub", type: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

export function SkillsSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <SectionHeader number={2} title="Technical Skills & Stack" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skillsData.map((skill, index) => (
          <SkillTile key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </section>
  );
}
