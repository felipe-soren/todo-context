import React from "react";

const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  function toggle() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within a ThemeProvider");

  const { toggle, theme } = context;

  return { toggle, theme };
}
