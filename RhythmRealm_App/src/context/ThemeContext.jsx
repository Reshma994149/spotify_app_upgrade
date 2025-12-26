import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.background =
      theme === "dark"
        ? "linear-gradient(135deg, #000000, #1b2735)"
        : "linear-gradient(135deg, #ffffff, #e3e3e3)";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
