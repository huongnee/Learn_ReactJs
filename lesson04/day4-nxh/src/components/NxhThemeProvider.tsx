import React, { createContext, useContext, useState, ReactNode } from "react";

export const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | null>(null);

// Provider bọc ngoài app/component muốn dùng context theme
export default function NxhThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Example component sử dụng theme
export function NxhTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("NxhTheme must be used within a NxhThemeProvider");
  const { theme, toggleTheme } = context;
  return (
    <div style={{
      padding: "20px",
      backgroundColor: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      <h2>Chế độ hiện tại: {theme}</h2>
      <button onClick={toggleTheme}>Chuyển đổi theme</button>
    </div>
  );
}
