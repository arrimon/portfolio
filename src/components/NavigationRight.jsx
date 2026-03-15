// // components/NavigationRight.jsx
// import React from 'react';
// import { Home, User, Code2, Briefcase, FolderKanban, Send } from 'lucide-react';

// const NavigationRight = () => {
//   const menu = [
//     { icon: <Home size={22} />, link: "#home" },
//     { icon: <User size={22} />, link: "#about" },
//     { icon: <Code2 size={22} />, link: "#skills" },
//     { icon: <Briefcase size={22} />, link: "#experience" },
//     { icon: <FolderKanban size={22} />, link: "#projects" },
//     { icon: <Send size={22} />, link: "#contact" },
//   ];

//   return (
//     <nav
//       className="
//       fixed z-50
      
//       /* MOBILE TOP BAR */
//       top-4 left-1/2 -translate-x-1/2
      
//       /* DESKTOP RIGHT SIDEBAR */
//       md:top-1/2 md:left-auto md:right-8 md:-translate-y-1/2 md:translate-x-0
//       "
//     >
//       <div
//         className="
//         flex gap-3
        
//         /* MOBILE HORIZONTAL */
//         flex-row px-4 py-3 rounded-2xl
        
//         /* DESKTOP VERTICAL */
//         md:flex-col md:p-3 md:rounded-full
        
//         bg-[var(--surface)]/70 backdrop-blur-xl
//         shadow-xl border border-[var(--border)]/20
//         "
//       >
//         {menu.map((item, i) => (
//           <a
//             key={i}
//             href={item.link}
//             className="
//             p-3 rounded-full
//             text-[var(--text-muted)]
//             hover:text-[var(--accent)]
//             hover:bg-[var(--accent)]/10
//             transition-all duration-300
//             "
//           >
//             {item.icon}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default NavigationRight;



// components/NavigationRight.jsx
import React from "react";
import { Home, User, Code2, Briefcase, FolderKanban, Send, Github } from "lucide-react";

const NavigationRight = () => {
  const menu = [
    { icon: <Home size={22} />, link: "#home" },
    { icon: <User size={22} />, link: "#about" },
    // Correct GitHub icon
    { icon: <Github size={22} />, link: "#github" },
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
        bg-[var(--surface)]/70 backdrop-blur-xl
        shadow-xl border border-[var(--border)]/20
      ">
        {menu.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="
              p-3 rounded-full
              text-[var(--text-muted)]
              hover:text-[var(--accent)]
              hover:bg-[var(--accent)]/10
              transition-all duration-300
            "
          >
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavigationRight;