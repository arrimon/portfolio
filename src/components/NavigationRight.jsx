import React from 'react';
import { Home, User, Code2, Briefcase, Send } from 'lucide-react';

const NavigationRight = () => {
  const menu = [
    { icon: <Home size={22} />, link: "#home" },
    { icon: <User size={22} />, link: "#about" },
    { icon: <Code2 size={22} />, link: "#skills" },
    { icon: <Briefcase size={22} />, link: "#projects" },
    { icon: <Send size={22} />, link: "#contact" },
  ];

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4 bg-[var(--surface)]/70 backdrop-blur-xl p-3 rounded-full shadow-xl border border-[var(--border)]/20">
        {menu.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="p-3 text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 rounded-full transition-all duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavigationRight;