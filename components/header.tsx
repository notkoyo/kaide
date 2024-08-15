"use client";

import type { MutableRefObject } from "react";
import { motion } from "framer-motion";
import LanguageButton from "./ui/language-button";
import ThemeToggle from "./ui/theme-toggle";

export default function Header({
  activeSection,
  aboutRef,
  experienceRef,
  projectRef,
  language = "en",
}: {
  activeSection: string;
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  experienceRef: MutableRefObject<HTMLDivElement | null>;
  projectRef: MutableRefObject<HTMLDivElement | null>;
  language?: "en" | "de";
}) {
  return (
    <header className="lg:fixed lg:top-0 lg:flex lg:min-h-screen lg:w-fit lg:flex-col lg:justify-between lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-200 sm:text-5xl pointer-events-none">
          Kaiden Riley
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-700 dark:text-slate-200 sm:text-xl pointer-events-none">
          {language === "en" ? "Frontend Engineer" : "Frontend Entwickler"}
        </h2>
        <p className="mt-4 max-w-xs leading-normal pointer-events-none text-slate-950/70 dark:text-slate-400">
          {language === "en"
            ? "I build pixel perfect, scalable frontend products with a great user experience."
            : "Ich entwickle pixelgenaue, skalierbare Frontend-Produkte mit einem großartigen Benutzererlebnis."}
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a
                className="group flex items-center py-3 active cursor-pointer"
                onClick={() => {
                  aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span
                  className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-950 dark:group-hover:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === "about"
                      ? "w-16 bg-slate-950 dark:bg-slate-200"
                      : "w-8 bg-slate-600/50"
                  }`}
                ></span>
                <span
                  className={`${
                    activeSection === "about"
                      ? "text-slate-950 dark:text-slate-200"
                      : "text-slate-500/50"
                  } nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-950 dark:group-hover:text-slate-200`}
                >
                  {language === "en" ? "About" : "Über mich"}
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center py-3 cursor-pointer"
                onClick={() => {
                  experienceRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span
                  className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-950 dark:group-hover:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === "experience"
                      ? "w-16 bg-slate-950 dark:bg-slate-200"
                      : "w-8 bg-slate-600/50"
                  }`}
                ></span>
                <span
                  className={`${
                    activeSection === "experience"
                      ? "text-slate-950 dark:text-slate-200"
                      : "text-slate-500/50"
                  } nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-950 dark:group-hover:text-slate-200`}
                >
                  {language === "en" ? "Experience" : "Erfahrung"}
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center py-3 cursor-pointer"
                onClick={() => {
                  projectRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span
                  className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-950 dark:group-hover:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === "projects"
                      ? "w-16 bg-slate-950 dark:bg-slate-200"
                      : "w-8 bg-slate-600/50"
                  }`}
                ></span>
                <span
                  className={`${
                    activeSection === "projects"
                      ? "text-slate-950 dark:text-slate-200"
                      : "text-slate-500/50"
                  } nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-950 dark:group-hover:text-slate-200`}
                >
                  {language === "en" ? "Projects" : "Projekte"}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
      <ul className="ml-1 mt-8 flex flex-row items-center" aria-label="Social media">
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mr-5 text-xs shrink-0"
        >
          <a
            className="block text-slate-950 hover:text-slate-500/80 dark:text-slate-400 dark:hover:text-teal-300 transition-all duration-300"
            href="https://github.com/notkoyo"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mr-5 text-xs shrink-0"
        >
          <a
            className="block text-slate-950 hover:text-slate-500/80 dark:text-slate-400 dark:hover:text-teal-300 transition-all duration-300"
            href="https://www.linkedin.com/in/kaiden-riley/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1m3-1a1 1 0 0 1 .984.821a6 6 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159c.473.15.948.43 1.3.907c.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.55.55 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09c-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1M8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
              />
            </svg>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mr-5 text-xs shrink-0"
        >
          <a
            className="block text-slate-950 hover:text-slate-500/80 dark:text-slate-400 dark:hover:text-teal-300 transition-all duration-300"
            href="https://instagram.com/kaidn424"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in a new tab)"
            title="Instagram"
          >
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mr-5 text-xs shrink-0"
        >
          <a
            className="block text-slate-950 hover:text-slate-500/80 dark:text-slate-400 dark:hover:text-teal-300 transition-all duration-300"
            href="mailto:kaiden@outlook.kr"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Mail Contact (opens in a new tab)"
            title="Contact Me"
          >
            <span className="sr-only">Email</span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="h-7 w-7"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </a>
        </motion.li>
        <LanguageButton language={language} />
        <ThemeToggle language={language} />
      </ul>
    </header>
  );
}
