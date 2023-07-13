import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import '../styles/NavTabs.css'

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="theme-switcher">
      <Switch 
        onChange={toggleTheme}
        checked={theme === 'dark'}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#4d4d4d"
        offColor="#ddd"
        handleDiameter={24}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
    </div>
  );
}

export default ThemeSwitcher;
