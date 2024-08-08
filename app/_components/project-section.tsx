import { projects } from "@/lib/projects";
import ProjectCard from "../../components/ui/project-card";
import { MutableRefObject } from "react";

export default function ProjectSection({
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
      <div className="section-header">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
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
