"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "@/components/header";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectSection from "@/components/project-section";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const sections = [
    { id: "about", start: "top 10%", end: "bottom 30%" },
    { id: "experience", start: "top 20%", end: "bottom 60%" },
    { id: "projects", start: "top 40%", end: "bottom 30%" },
  ];

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

    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: `${section.start}`,
        end: `${section.end}`,
        scrub: true,
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
