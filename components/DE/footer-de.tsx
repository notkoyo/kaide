export default function FooterDE() {
  return (
    <footer>
      <p className="text-sm max-w-lg mx-auto lg:mx-0">
        Von mir selbst in{" "}
        <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.code.visualstudio.com/"
        >
          Visual Studio Code
        </a>{" "}
        programmiert. Gebaut mit{" "}
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
        , eingesetzt mit{" "}
        <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.vercel.com/"
        >
          Vercel
        </a>
        . Der gesamte Text ist mit der Inter-Schriftart gesetzt.
      </p>
    </footer>
  );
}
