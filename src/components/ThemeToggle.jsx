// src/components/ThemeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme, mode } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed bottom-6 right-6 z-50
        md:static
        p-3
        rounded-full
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-lg
        text-[var(--text-primary)]
        hover:bg-[var(--accent)]/10
        transition-all duration-300
      "
      aria-label="Toggle Theme"
    >
      {mode === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}