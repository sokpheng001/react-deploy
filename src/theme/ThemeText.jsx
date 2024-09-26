import React, { createContext, useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
    <FontAwesomeIcon
      icon= {isDarkMode ? faSun : faMoon}
       className="h-5 lg:h-[12px] xl:h-5"
    />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
