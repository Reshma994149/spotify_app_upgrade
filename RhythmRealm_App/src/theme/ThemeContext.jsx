import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    setTheme(t);
    localStorage.setItem("theme", t);
  };

  useEffect(() => {
    document.body.style.background =
      theme === "light"
        ? "linear-gradient(120deg,#89f7fe,#66a6ff)"
        : "linear-gradient(120deg,#141E30,#243B55)";
    document.body.style.color = theme === "light" ? "black" : "white";
    document.body.style.transition = "0.4s ease";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
