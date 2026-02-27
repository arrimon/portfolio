import React from 'react';
import profileImage from '../assets/arrimon.jpeg';

const DetailItem = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-slate-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">{label}</p>
    <p className="text-slate-700 font-medium text-sm sm:text-base break-all sm:break-normal">{value}</p>
  </div>
);

const About = () => {
  return (
    <div className="space-y-8 md:space-y-12 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">About Me</h2>
        <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        
        {/* Personal Details Card */}
        <div className="lg:col-span-2 bg-blue-50/50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-blue-100/50 space-y-6 md:space-y-8">
          <div className="flex items-center gap-4 border-b border-blue-100 pb-6">
             <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl overflow-hidden shadow-inner bg-white flex-shrink-0">
                <img src={profileImage} alt="Rimon" className="w-full h-full object-cover opacity-90" />
             </div>
             <div>
                <h4 className="font-bold text-slate-800 text-lg md:text-xl">Abu Rayhan Rimon</h4>
                <p className="text-sm text-blue-600 font-medium">Full Stack Developer (Frontend Focused)</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
            <DetailItem label="Full Name" value="Md Abu Rayhan Rimon" />
            <DetailItem label="Email" value="dev.rrimon@gmail.com" />
            <DetailItem label="Nationality" value="Bangladeshi" />
            <DetailItem label="Languages" value="English, Bangla" />
          </div>
        </div>

        {/* Narrative Text - Updated with your selected professional bio */}
        <div className="lg:col-span-3 space-y-5 md:space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
          <p>
            I’m a <span className="text-blue-600 font-bold">Frontend-focused Full Stack Developer</span> dedicated to crafting visually engaging, high-performance web experiences. While my core expertise lies in building dynamic interfaces with <span className="text-slate-900 font-semibold">React.js</span>, I bring a full-stack mindset to every project.
          </p>
          
          <p>
            Currently Engineering at <span className="text-slate-900 font-semibold border-b-2 border-blue-100"><a href="https://www.race.net.bd/" target='_blank' rel="noreferrer">Race Online Ltd</a></span>, I bridge the gap between complex backend logic and user-centric design. I view coding as a creative medium for designing meaningful, <span className="text-slate-900 font-semibold">end-to-end solutions</span>.
          </p>
          
          <p className="hidden sm:block">
            This blend of technical patience and a fresh perspective allows me to solve complex architectural challenges with a focus on the final user experience. Outside of programming, I maintain balance through creative pursuits that help me approach every bug with a fresh eye.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;