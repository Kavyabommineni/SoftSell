import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
      initial={{ opacity: 0 }}  // Start with opacity 0
      animate={{ opacity: 1, scale: 1.1 }}  // Animate to opacity 1 and scale up
      exit={{ opacity: 0, scale: 0.9 }}  // Exit with reduced opacity and scale
      transition={{ duration: 0.3 }}  // Smooth transition
    >
      {isDarkMode ? 'Light' : 'Dark'} Mode
    </motion.button>
  );
};

export default DarkModeToggle;
