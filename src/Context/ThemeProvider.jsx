import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({children}) {
      const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
  });

    return(
        <ThemeContext.Provider value={{theme, setTheme}} >{children}</ThemeContext.Provider>
    )
}