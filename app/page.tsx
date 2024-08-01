"use client";

import { useState, useEffect, useRef } from "react";

import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import Header from "@/components/header";
import ProjectSection from "@/components/project-section";
import Footer from "@/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'

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
        <Header activeSection={activeSection} />
        <main className="pt-24 lg:w-1/2 lg:py-24 ml-auto">
          <section ref={aboutRef}>
            <AboutSection />
          </section>
          <section ref={experienceRef}>
            <ExperienceSection />
          </section>
          <section ref={projectRef}>
            <ProjectSection />
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}
