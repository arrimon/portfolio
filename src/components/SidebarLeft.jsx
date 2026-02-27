import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import profileImage from '../assets/arrimon.jpeg';

const SidebarLeft = () => {
  return (
    <aside className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 w-[280px] bg-white rounded-[2rem] p-8 shadow-2xl shadow-blue-100 border border-slate-100 flex-col items-center text-center z-40">
      <div className="relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-50 ring-4 ring-white shadow-md">
            <img 
                src={profileImage} 
                alt="Md Abu Rayhan Rimon" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          {/* <img src="/abu-rayhan-rimon.jpg" alt="Md Abu Rayhan Rimon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> */}
        </div>
        <div className="absolute bottom-2 right-2 bg-blue-500 p-2 rounded-full text-white shadow-lg border-2 border-white">
          <span className="text-xs">👋</span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-slate-800">Rayhan Rimon</h2>
        <p className="text-blue-600 font-semibold mt-1">Frontend Developer</p>
        <p className="text-slate-400 text-sm mt-3 bg-slate-50 py-1 px-3 rounded-full">dev.rrimon@gmail.com</p>
      </div>

      <div className="flex gap-4 mt-8">
        <a href="https://linkedin.com/in/rayhanrimon/" className="p-3 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20}/></a>
        <a href="https://github.com/arrimon" className="p-3 bg-slate-50 text-slate-700 rounded-2xl hover:bg-slate-900 hover:text-white transition-all"><Github size={20}/></a>
        <a href="mailto:dev.rrimon@gmail.com" className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"><Mail size={20}/></a>
      </div>
    </aside>
  );
};

export default SidebarLeft;