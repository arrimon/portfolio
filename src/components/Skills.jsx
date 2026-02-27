import React from 'react';

const SkillCard = ({ title, skills, color, icon }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-50 transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
    <div className={`w-12 h-12 ${color} rounded-2xl mb-6 flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-800">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-100">
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
        <h2 className="text-4xl font-extrabold mb-2">My Skills</h2>
        <p className="text-slate-500 text-lg">My Tech Stack & Expertise</p>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <SkillCard 
          title="Frontend" 
          color="bg-blue-500" 
          icon="F" 
          skills={['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']} 
        />
        <SkillCard 
          title="Backend" 
          color="bg-green-500" 
          icon="B" 
          skills={['Node.js', 'Express.js', 'MongoDB', 'REST APIs']} 
        />
        <SkillCard 
          title="Tools" 
          color="bg-purple-500" 
          icon="T" 
          skills={['GitHub', 'VS Code', 'Firebase', 'Git', 'npm']} 
        />
      </div>
    </div>
  );
};

export default Skills;