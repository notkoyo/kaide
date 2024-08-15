import { MutableRefObject } from "react";
import DevProfile from "./ui/dev-profile";
import ExperienceCard from "./ui/experience-card";
import { experience, experienceDE } from "@/lib/experience";

export default function ExperienceSection({
  experienceRef,
  language = "en",
}: {
  experienceRef: MutableRefObject<HTMLDivElement | null>;
  language?: "en" | "de";
}) {
  return (
    <section
      ref={experienceRef}
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={language === "en" ? "Work experience" : "Arbeitserfahrung"}
    >
      <div className="section-header">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-950 dark:text-slate-200 lg:sr-only">
          {language === "en" ? "Experience" : "Erfahrung"}
        </h2>
      </div>
      {language === "en" ? (
        <div>
          <ol className="group/list">
            {experience.map((exp) => (
              <ExperienceCard
                key={exp.position}
                start={exp.start}
                end={exp.end}
                position={exp.position}
                company={exp.company}
                companySite={exp.companySite}
                description={exp.description}
                technologies={exp.technologies}
              />
            ))}
          </ol>
          <DevProfile />
        </div>
      ) : (
        <div>
          <ol className="group/list">
            {experienceDE.map((exp) => (
              <ExperienceCard
                key={exp.position}
                start={exp.start}
                end={exp.end}
                position={exp.position}
                company={exp.company}
                companySite={exp.companySite}
                description={exp.description}
                technologies={exp.technologies}
              />
            ))}
          </ol>
          <DevProfile language="de" />
        </div>
      )}
    </section>
  );
}
