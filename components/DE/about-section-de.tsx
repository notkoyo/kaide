export default function AboutSectionDE() {
  return (
    <div
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#191815]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Im Jahr 2022 beschloss ich, während meines Deutschstudiums an der{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300"
            href="https://www.victoria-hochschule.de/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Victoria International University (opens in a new tab)"
          >
            VICTORIA Universität
          </a>{" "}
          in die Programmierung und Webentwicklung einzutauchen. Nachdem ich
          mich durch zahllose{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300"
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="freeCodeCamp (opens in a new tab)"
          >
            freeCodeCamp-Kurse
          </a>
          ,{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300"
            href="https://www.codecademy.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Codecademy (opens in a new tab)"
          >
            Codecademy-Kurse
          </a>{" "}
          und YouTube-Videos gearbeitet hatte, wurde mir schnell klar, dass
          Software-Engineering genau das ist, wonach ich in meinem Beruf gesucht
          hatte.{" "}
        </p>
        <p className="mb-4">
          Mein Hauptziel ist es derzeit, dem Unternehmen und unseren Kunden bei{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300"
            href="https://www.pleo.io/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Pleo (opens in a new tab)"
          >
            Pleo
          </a>{" "}
          so viel Nutzen wie möglich zu bieten. Ich lerne gerne und bin gerade
          dabei, mein Wissen zu erweitern, damit alles, was ich baue, so gut wie
          möglich aussieht, aber auch unter der Haube gut gebaut ist.
        </p>
        <p>
          Wenn ich nicht an meinem Schreibtisch sitze, kann man mich finden
          FPS-Spielen spielen, neue Gerichte ausprobieren, mit Freunden abhängen
          oder bei der Arbeit an Nebenprojekten mit Freunden, die Informatik
          studieren.{" "}
        </p>
      </div>
    </div>
  );
}
