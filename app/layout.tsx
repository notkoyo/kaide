import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/globals.css";
import GradientCursor from "@/components/ui/gradient-cursor";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Kaiden Riley",
  description: "Kaiden Riley is a software engineer who builds pixel perfect, performant and accessible digital experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#191815] leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>
        <GradientCursor />
        <div className="fixed inset-0 -z-[1] h-screen w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
        {children}
      </body>
    </html>
  );
}
