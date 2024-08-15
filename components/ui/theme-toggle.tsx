"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ThemeToggle({
  language = "en",
}: {
  language?: "en" | "de";
}) {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "dark");

  const themeText =
    language === "en"
      ? theme === "dark"
        ? "light"
        : "dark"
      : theme === "dark"
      ? "hell"
      : "dunkel";

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex flex-row gap-2"
      title="Theme"
    >
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
          localStorage.setItem("theme", theme === "light" ? "dark" : "light");
          theme === "dark"
            ? document.documentElement.classList.remove("dark")
            : document.documentElement.classList.add("dark");
        }}
        className="font-semibold uppercase text-slate-950 hover:text-slate-400 dark:text-slate-400 dark:hover:text-teal-400 transition-colors duration-300"
      >
        {themeText}
      </button>
    </motion.li>
  );
}
