export default function AboutSection() {
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
          In 2022, I decided to dive into programming and web development while
          studying German at{" "}
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
          subscription and YouTube videos, I quickly realized that Software
          Engineering was the thing I&apos;d been looking for in a career.
        </p>
        <p className="mb-4">
          My main goal right now is to provide as much value as possible to the
          company and for our customers at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300"
            href="https://www.pleo.io/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Pleo (opens in a new tab)"
          >
            Pleo
          </a>
          . I enjoy learning and am currently looking to expand my knowledge, so
          that everything I build looks as good as possible, but is also built
          well under the hood.
        </p>
        <p>
          When I&apos;m not at my desk, you can find me playing competitive FPS games, trying
          new food, hanging out with friends, or working on side projects with
          friends that are currently pursuing Computer Science degrees.{" "}
        </p>
      </div>
    </div>
  );
}
