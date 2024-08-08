import type { MutableRefObject } from "react";

export default function AboutSection({
  aboutRef,
  language = "en",
}: {
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  language?: "en" | "de";
}) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={language === "en" ? "About me" : "Über mich"}
    >
      <div className="section-header">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {language === "en" ? "About" : "Über mich"}
        </h2>
      </div>
      {language === "en" ? (
        <div>
          <p className="mb-4">
            In 2022, I decided to dive into programming and web development
            while studying German at{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.victoria-hochschule.de/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Victoria International University (opens in a new tab)"
            >
              VICTORIA University
            </a>
            . After working my way through countless{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="freeCodeCamp (opens in a new tab)"
            >
              freeCodeCamp
            </a>{" "}
            courses, a{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.codecademy.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Codecademy (opens in a new tab)"
            >
              Codecademy
            </a>{" "}
            subscription and the{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.northcoders.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Codecademy (opens in a new tab)"
            >
              Northcoders
            </a>{" "}
            bootcamp, I quickly realized that Software Engineering was the thing
            I&apos;d been looking for in a career.
          </p>
          <p className="mb-4">
            My main goal right now is to provide as much value as possible to
            the company and for our customers at{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.pleo.io/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Pleo (opens in a new tab)"
            >
              Pleo
            </a>
            . I enjoy learning and am currently looking to expand my knowledge,
            so that everything I build looks as good as possible, but is also
            built well under the hood.
          </p>
          <p>
            When I&apos;m not at my desk, you can find me playing competitive
            FPS games, trying new food, hanging out with friends, or working on
            side projects with friends that are looking to work in the same
            field.{" "}
          </p>
        </div>
      ) : (
        <div>
          <p className="mb-4">
            Im Jahr 2022 entschied ich mich, mich intensiv mit Programmierung
            und Webentwicklung zu beschäftigen, während ich an der{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.victoria-hochschule.de/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Victoria International University (opens in a new tab)"
            >
              VICTORIA Universität
            </a>{" "}
            Deutsch studierte. Nachdem ich zahlreiche Kurse bei{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="freeCodeCamp (opens in a new tab)"
            >
              FreeCodeCamp
            </a>
            , ein Abonnement bei{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.codecademy.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Codecademy (opens in a new tab)"
            >
              Codecademy
            </a>{" "}
            und eine Ausbildung bei{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.northcoders.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Codecademy (opens in a new tab)"
            >
              Northcoders
            </a>{" "}
            absolviert hatte, wurde mir schnell klar, dass Software Engineering
            die Berufung war, nach der ich gesucht hatte.{" "}
          </p>
          <p className="mb-4">
            Mein derzeitiges Hauptziel ist es, dem Unternehmen und unseren
            Kunden bei{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300"
              href="https://www.pleo.io/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Pleo (opens in a new tab)"
            >
              Pleo
            </a>{" "}
            einen möglichst großen Mehrwert zu bieten. Ich habe eine starke
            Lernbereitschaft und bin stets bestrebt, mein Wissen zu erweitern,
            um sicherzustellen, dass alles, was ich entwickle, nicht nur
            ansprechend aussieht, sondern auch technisch einwandfrei ist.
          </p>
          <p>
            In meiner Freizeit beschäftige ich mich gerne mit kompetitiven
            FPS-Spielen, probiere neue kulinarische Erlebnisse aus, verbringe
            Zeit mit Freunden oder arbeite an Nebenprojekten mit Freunden, die
            im gleichen Bereich angesiedelt sind.{" "}
          </p>
        </div>
      )}
    </section>
  );
}
