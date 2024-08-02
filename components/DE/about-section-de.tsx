import { MutableRefObject } from "react";

export default function AboutSectionDE({
  aboutRef,
}: {
  aboutRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#191815]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Über mich
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Im Jahr 2022 entschied ich mich, mich intensiv mit Programmierung und
          Webentwicklung zu beschäftigen, während ich an der{" "}
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
          Mein derzeitiges Hauptziel ist es, dem Unternehmen und unseren Kunden
          bei{" "}
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
          Lernbereitschaft und bin stets bestrebt, mein Wissen zu erweitern, um
          sicherzustellen, dass alles, was ich entwickle, nicht nur ansprechend
          aussieht, sondern auch technisch einwandfrei ist.
        </p>
        <p>
          In meiner Freizeit beschäftige ich mich gerne mit kompetitiven
          FPS-Spielen, probiere neue kulinarische Erlebnisse aus, verbringe Zeit
          mit Freunden oder arbeite an Nebenprojekten, die im gleichen Bereich
          angesiedelt sind.{" "}
        </p>
      </div>
    </section>
  );
}
