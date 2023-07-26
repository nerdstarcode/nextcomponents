'use client'
import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => { },
});

interface ThemeProvider {
  children: any
}
export const ThemeProvider = ({ children }: ThemeProvider) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e:any) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
