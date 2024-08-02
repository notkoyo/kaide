export default function FooterDE() {
  return (
    <footer>
      <p className="text-sm max-w-lg mx-auto lg:mx-0">
        Alle Projekte wurden von mir eigenständig in{" "}
        <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.code.visualstudio.com/"
        >
          Visual Studio Code
        </a>{" "}
        entwickelt, unter Verwendung von{" "}
        <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.nextjs.org/"
        >
          Next.js
        </a>{" "}
        und{" "}
        <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.tailwindcss.com/"
        >
          Tailwind CSS
        </a>
        , und mit{" "}
        <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.vercel.com/"
        >
          Vercel 
        </a>
        {" "}bereitgestellt. Alle Texte sind mit der Schriftart Inter gesetzt.
      </p>
    </footer>
  );
}
