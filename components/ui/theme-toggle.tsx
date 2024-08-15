"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ThemeToggle({
  language = "en",
}: {
  language?: "en" | "de";
}) {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
        if (savedTheme === "dark") {
          document.documentElement.classList.add("dark");
        }
      }
    }
  }, []);

  const themeText =
    language === "en"
      ? theme === "dark"
        ? "light"
        : "dark"
      : theme === "dark"
      ? "hell"
      : "dunkel";

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex flex-row gap-2"
      title="Theme"
    >
      <button
        onClick={handleThemeToggle}
        className="font-semibold uppercase text-slate-950 hover:text-slate-400 dark:text-slate-400 dark:hover:text-teal-400 transition-colors duration-300"
      >
        {themeText}
      </button>
    </motion.li>
  );
}
