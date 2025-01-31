import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Articles from "./components/Ariticles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Header Component */}
      <HeroSection theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="pt-20">
        <section id="about"><AboutMe /></section>
        <section id="skills"><MySkills /></section>
        <section id="projects"><Projects /></section>
        <section id="articles"><Articles /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
