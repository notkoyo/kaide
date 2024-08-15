import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DevProfile({
  language = "en",
}: {
  language?: "en" | "de";
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="inline-flex items-baseline font-medium leading-tight text-slate-950 hover:text-slate-400 dark:text-slate-200 dark:hover:text-teal-300 focus-visible:text-teal-300  group/link"
          aria-label="{language === 'en' ? 'Developer Skills (opens in same tab)' : 'Entwickler-Fähigkeiten (opens in same tab)'}"
        >
          <span className="inline-block hover:underline">
            {language === "en" ? "Developer Skills" : "Entwickler-Fähigkeiten"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#e8e8e8] dark:bg-[#191815] border-[#e8e8e8]/80 dark:border-[#191815]/80">
        <DialogHeader>
          <DialogTitle className="text-slate-950 dark:text-slate-200">
            {language === "en"
              ? "Technologies and Skills"
              : "Technologien und Fähigkeiten"}
          </DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-slate-400">
            {language === "en"
              ? "These are some of the technologies/skills I'm currently using, or that I'm proficient in."
              : "Dies sind die Fähigkeiten und Technologien, die ich derzeit täglich benutze."}
          </DialogDescription>
        </DialogHeader>
        <div>
          <ul
            className="mt-2 flex flex-wrap justify-center sm:justify-start"
            aria-label="Technologies/Skills Used"
          >
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                JavaScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                TypeScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                HTML &amp; CSS
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                React Native
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                Next.js
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                Node.js
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                PostgreSQL
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                RESTful APIs
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                Express
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                Hono
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                Web Accessibility
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-slate-950/10 text-slate-950/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                GitHub Version Control
              </div>
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
