"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Header from "@/components/header";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectSection from "@/components/project-section";
import Footer from "@/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const savedTheme: string = localStorage.getItem("theme") || "dark";

    if (!savedTheme) {
      localStorage.setItem("theme", "dark");
    }

    savedTheme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    let aboutRefValue = null;
    let experienceRefValue = null;
    let projectRefValue = null;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) {
            setActiveSection("about");
          } else if (entry.target === experienceRef.current) {
            setActiveSection("experience");
          } else if (entry.target === projectRef.current) {
            setActiveSection("projects");
          }
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
      aboutRefValue = aboutRef.current;
    }
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
      experienceRefValue = experienceRef.current;
    }
    if (projectRef.current) {
      observer.observe(projectRef.current);
      projectRefValue = projectRef.current;
    }

    return () => {
      if (aboutRefValue) observer.unobserve(aboutRefValue);
      if (experienceRefValue) observer.unobserve(experienceRefValue);
      if (projectRefValue) observer.unobserve(projectRefValue);
    };
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-hidden">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header
          activeSection={activeSection}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          projectRef={projectRef}
          language="de"
        />
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pt-24 lg:w-1/2 lg:py-24 ml-auto"
        >
          <AboutSection aboutRef={aboutRef} language="de" />
          <ExperienceSection experienceRef={experienceRef} language="de" />
          <ProjectSection projectRef={projectRef} language="de" />
          <Footer language="de" />
        </motion.main>
      </div>
    </div>
  );
}
