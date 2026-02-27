import React from 'react';

const SkillCard = ({ title, skills, color, icon }) => (
  <div className="bg-[var(--surface)] p-8 rounded-[2rem] shadow-lg border border-[var(--border)] transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
    <div className={`w-12 h-12 ${color} rounded-2xl mb-6 flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span
          key={skill}
          className="px-3 py-1 bg-[var(--surface)] text-[var(--text-muted)] text-sm font-medium rounded-lg border border-[var(--border)]"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="py-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-2 text-[var(--text-primary)]">My Skills</h2>
        <p className="text-[var(--text-muted)] text-lg">My Tech Stack & Expertise</p>
        <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <SkillCard 
          title="Frontend" 
          color="bg-[var(--accent)]" 
          icon="F" 
          skills={['React.js', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'HTML5', 'CSS3']} 
        />
        <SkillCard 
          title="Backend" 
          color="bg-green-500" 
          icon="B" 
          skills={['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Laravel', 'PHP', 'MySQL', 'Firebase']} 
        />
        <SkillCard 
          title="Tools" 
          color="bg-purple-500" 
          icon="T" 
          skills={['GitHub', 'VS Code', 'Firebase', 'Git', 'npm', 'Vercel', 'Netlify']} 
        />
      </div>
    </div>
  );
};

export default Skills;