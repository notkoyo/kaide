export default function ThemeToggle({
  theme = "dark",
}: {
  theme?: "light" | "dark";
}) {
  return (
    <li className="flex flex-row gap-2 ml-5" title="Theme">
      <button className="font-semibold uppercase text-slate-400 hover:text-teal-400">{theme === "light" ? "dark" : "light"}</button>
    </li>
  );
}
