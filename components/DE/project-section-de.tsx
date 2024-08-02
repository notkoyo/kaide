import projects from "@/lib/projects-de";
import ProjectCard from "../ui/project-card";
import { MutableRefObject } from "react";

export default function ProjectSectionDE({
  projectRef,
}: {
  projectRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={projectRef}
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#191815]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projekte
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project) => (
            <ProjectCard
              key={project.projectTitle}
              projectHref={project.projectHref}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              projectImage={project.projectImage}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
