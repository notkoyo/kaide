export default function Footer({
  language = "en",
}: {
  language?: "en" | "de";
}) {
  return (
    <footer className="text-slate-950 dark:text-slate-400">
      {language === "en" ? (
        <p className="text-sm max-w-lg mx-auto lg:mx-0">
          Coded in{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://www.code.visualstudio.com/"
          >
            Visual Studio Code
          </a>{" "}
          by myself. Built with{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://www.nextjs.org/"
          >
            Next.js,
          </a>{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://www.tailwindcss.com/"
          >
            Tailwind CSS{" "}
          </a>
          and{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://gsap.com/"
          >
            GSAP
          </a>
          , deployed with{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://www.vercel.com/"
          >
            Vercel
          </a>
          . All text is set with the Roboto typeface.
        </p>
      ) : (
        <p className="text-sm max-w-lg mx-auto lg:mx-0">
          Von mir eigenständig in{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://www.code.visualstudio.com/"
          >
            Visual Studio Code
          </a>{" "}
          entwickelt, unter Verwendung von{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://www.nextjs.org/"
          >
            Next.js,
          </a>{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://www.tailwindcss.com/"
          >
            Tailwind CSS{" "}
          </a>
          und{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://gsap.com/"
          >
            GSAP
          </a>
          , und mit{" "}
          <a
            className="text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-teal-300 transition-all duration-300"
            href="https://www.vercel.com/"
          >
            Vercel
          </a>{" "}
          bereitgestellt. Alle Texte sind mit der Schriftart Roboto gesetzt.
        </p>
      )}
    </footer>
  );
}
