"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectSection from "@/components/project-section";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const observer = new IntersectionObserver(
      (entries) => {
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
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectRef.current) observer.observe(projectRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, []);

  return (
    <div className="bg-[radial-gradient(circle_farthest_side_at_var(--x)_var(--y), #5eead4_0.5, #5eead4_1)] mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-hidden">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header
          activeSection={activeSection}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          projectRef={projectRef}
        />
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pt-24 lg:w-1/2 lg:py-24 ml-auto"
        >
          <AboutSection aboutRef={aboutRef} />
          <ExperienceSection experienceRef={experienceRef} />
          <ProjectSection projectRef={projectRef} />
          <Footer />
        </motion.main>
      </div>
    </div>
  );
}
