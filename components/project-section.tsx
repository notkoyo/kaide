import { projects, projectsDE } from "@/lib/projects";
import ProjectCard from "./ui/project-card";
import { MutableRefObject } from "react";

export default function ProjectSection({
  projectRef,
  language = "en",
}: {
  projectRef: MutableRefObject<HTMLDivElement | null>;
  language?: "en" | "de";
}) {
  return (
    <section
      ref={projectRef}
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={language === "en" ? "Projects" : "Projekte"}
    >
      <div className="section-header">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-950 dark:text-slate-200 lg:sr-only">
          {language === "en" ? "Projects" : "Projekte"}
        </h2>
      </div>
      <div>
        {language === "en" ? (
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
        ) : (
          <ul className="group/list">
            {projectsDE.map((project) => (
              <ProjectCard
                key={project.projectTitle}
                projectHref={project.projectHref}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                projectImage={project.projectImage}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
