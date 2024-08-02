"use client";

import { useState, useEffect, useRef } from "react";

import HeaderDE from "@/components/DE/header-de";
import AboutSectionDE from "@/components/DE/about-section-de";
import ExperienceSectionDE from "@/components/DE/experience-section-de";
import ProjectSectionDE from "@/components/DE/project-section-de";
import FooterDE from "@/components/DE/footer-de";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

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
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-hidden">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <HeaderDE activeSection={activeSection} />
        <main className="pt-24 lg:w-1/2 lg:py-24 ml-auto">
          <AboutSectionDE aboutRef={aboutRef} />
          <ExperienceSectionDE experienceRef={experienceRef} />
          <ProjectSectionDE projectRef={projectRef} />
          <FooterDE />
        </main>
      </div>
    </div>
  );
}
