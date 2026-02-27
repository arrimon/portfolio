// src/components/ThemeToggle.jsx
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {

  const { toggleTheme, mode } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {mode === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}