import React from 'react';
import SectionHeader from './SectionHeader';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experienceData = [
  {
    role: 'Frontend Developer',
    company: 'Race Online Ltd',
    companyUrl: 'https://www.race.net.bd/',
    location: 'Dhaka, Bangladesh',
    duration: 'Jan 2024 — Present',
    type: 'Full-time',
    description: [
      'Building and maintaining scalable frontend interfaces using React.js and modern CSS frameworks.',
      'Collaborating with backend engineers to integrate REST APIs and deliver seamless user experiences.',
      'Improved page load performance by 40% through code splitting and lazy loading strategies.',
    ],
    tags: ['React.js', 'Tailwind CSS', 'REST API', 'Git'],
    current: true,
  },
  {
    role: 'Junior Web Developer',
    company: 'Freelance & Open Source',
    companyUrl: 'https://github.com/arrimon',
    location: 'Remote',
    duration: 'Jun 2022 — Dec 2023',
    type: 'Freelance',
    description: [
      'Delivered 10+ client projects including e-commerce platforms, portfolios, and admin dashboards.',
      'Worked across the full stack using Node.js, Express, and MongoDB alongside React frontends.',
      'Established clean component architecture patterns adopted across multiple long-term projects.',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    current: false,
  },
];

const ExperienceCard = ({ data, index }) => {
  return (
    <div
      className="relative flex gap-6 md:gap-10"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-4 h-4 rounded-full border-2 border-[var(--accent)] mt-1 flex-shrink-0 z-10"
          style={{
            backgroundColor: data.current
              ? 'var(--accent)'
              : 'var(--surface)',
          }}
        />
        <div className="w-px flex-grow bg-[var(--border)] mt-2" />
      </div>

      {/* Card */}
      <div
        className="flex-1 bg-[var(--surface)] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-[var(--border)] mb-8 group"
        style={{
          transition:
            'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow =
            '0 20px 40px -12px color-mix(in srgb, var(--accent) 15%, transparent)';
          e.currentTarget.style.borderColor =
            'color-mix(in srgb, var(--accent) 40%, transparent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = '';
          e.currentTarget.style.borderColor = '';
        }}
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5 pb-5 border-b border-[var(--border)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
              <Briefcase size={20} className="text-[var(--accent)]" />
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                {data.role}
              </h3>

              <a
                href={data.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--accent)] font-semibold text-sm hover:underline mt-0.5"
              >
                {data.company}
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Current Badge */}
          {data.current && (
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse inline-block" />
              Current
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-5 text-xs text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {data.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            {data.location}
          </span>

          <span className="px-2 py-0.5 rounded-full bg-[var(--border)]/60 font-semibold">
            {data.type}
          </span>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-6">
          {data.description.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-[var(--text-muted)] leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full uppercase tracking-tighter border border-[var(--accent)]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience" className="space-y-8 md:space-y-12 py-20">
      <SectionHeader
        number={4}
        title="Work Experience"
        description="Companies and roles where I've grown as an engineer."
      />

      <div>
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} data={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;