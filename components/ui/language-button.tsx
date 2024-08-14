"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LanguageButton({
  language = "en",
}: {
  language?: "en" | "de";
}) {
  const router = useRouter();

  return (
    <li className="flex flex-row gap-2 mr-5" title="Language">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        onClick={() => {
          language === "en" ? router.push("/de") : router.push("/");
        }}
        className={`text-slate-400 hover:text-teal-400 font-semibold uppercase transition-colors duration-300`}
      >
        {language === "en" ? "de" : "en"}
      </motion.button>
    </li>
  );
}
