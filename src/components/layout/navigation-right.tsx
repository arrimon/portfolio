"use client";

import { Home, User, Code2, Briefcase, FolderKanban, Send } from "lucide-react";

export function NavigationRight() {
  const menu = [
    { icon: <Home size={22} />, link: "#home" },
    { icon: <User size={22} />, link: "#about" },
    { icon: <Code2 size={22} />, link: "#skills" },
    { icon: <Briefcase size={22} />, link: "#experience" },
    { icon: <FolderKanban size={22} />, link: "#projects" },
    { icon: <Send size={22} />, link: "#contact" },
  ];

  return (
    <nav className="fixed z-50
      top-4 left-1/2 -translate-x-1/2
      md:top-1/2 md:left-auto md:right-8 md:-translate-y-1/2 md:translate-x-0
    ">
      <div className="
        flex gap-3
        flex-row px-4 py-3 rounded-2xl
        md:flex-col md:p-3 md:rounded-full
        bg-card/70 backdrop-blur-xl
        shadow-xl border border-border/20
      ">
        {menu.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="
              p-3 rounded-full
              text-muted-foreground
              hover:text-primary
              hover:bg-primary/10
              transition-all duration-300
            "
          >
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
