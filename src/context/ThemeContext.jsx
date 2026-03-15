// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {

//   const [mode, setMode] = useState(
//     localStorage.getItem("theme") || "light"
//   );

//   const toggleTheme = () => {
//     const newMode = mode === "dark" ? "light" : "dark";

//     setMode(newMode);
//     localStorage.setItem("theme", newMode);
//   };

//   /* Apply theme globally */
//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "data-theme",
//       mode
//     );
//   }, [mode]);

//   return (
//     <ThemeContext.Provider value={{ mode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);



import { createContext, useContext, useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}

      {/* Mobile floating theme toggle — only visible on small screens */}
      <button
        onClick={toggleTheme}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl border border-[var(--border)] bg-[var(--surface)]"
        style={{
          transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 16px 32px -8px color-mix(in srgb, var(--accent) 40%, transparent)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = '';
        }}
        aria-label="Toggle theme"
      >
        {mode === 'dark' ? (
          <Sun size={20} className="text-[var(--accent)]" />
        ) : (
          <Moon size={20} className="text-[var(--accent)]" />
        )}
      </button>

    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);