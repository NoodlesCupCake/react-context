// import { createContext, useContext, useState, useMemo } from "react";

// const ThemeContext = createContext(undefined);



// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState("light");
//     return (
//         <ThemeContext.Provider
//         value={{
//             theme,
//             toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
//         }}
//         >
//         {children}
//         </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

import { createContext, useContext, useState, useMemo } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
