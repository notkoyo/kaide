export default function Footer() {
  return (
    <footer>
      <p className="text-sm max-w-lg mx-auto lg:mx-0">
        Coded in{" "}
        <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.code.visualstudio.com/"
        >
          Visual Studio Code
        </a>{" "}
        by myself. Built with{" "}
        <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.nextjs.org/"
        >
          Next.js
        </a>{" "}
        and <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.tailwindcss.com/"
        >
          Tailwind CSS
        </a>, deployed with <a
          className="text-slate-300 hover:text-teal-300 transition-all duration-300"
          href="https://www.vercel.com/"
        >
          Vercel
        </a>. All text is set with the Inter
        typeface.
      </p>
    </footer>
  );
}
