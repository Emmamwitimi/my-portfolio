import React, { useState, useEffect } from "react";

const HeroSection = ({ theme, toggleTheme }) => {
  const [unreadNotifications, setUnreadNotifications] = useState(3); // Example count

  return (
    <header className="fixed w-full top-0 bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Emma's Portfolio
      </h1>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-300">About</a>
        <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-300">Skills</a>
        <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
        <a href="#articles" className="hover:text-blue-500 dark:hover:text-blue-300">Articles</a>
        <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
        <a href="https://www.linkedin.com/in/mwitimi-emmaculate-748a91295/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 dark:hover:text-teal-300">LinkedIn</a>
        <a href="https://github.com/Emmamwitimi" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 dark:hover:text-teal-300">GitHub</a>
      </nav>

      {/* Notification & Theme Toggle */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <i className="fas fa-bell text-gray-700 dark:text-gray-300 text-xl"></i>
          {unreadNotifications > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {unreadNotifications}
            </span>
          )}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
        >
          {theme === "light" ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
