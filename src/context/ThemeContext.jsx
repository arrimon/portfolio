import { createContext, useContext, useEffect, useState } from "react";

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

  /* Apply theme globally */
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      mode
    );
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);