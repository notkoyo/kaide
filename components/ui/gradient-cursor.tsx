"use client";

import { useEffect, useRef } from "react";

export default function GradientCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursorPosition = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (!cursorRef.current) return;

      cursorRef.current?.style.setProperty("--x", `${clientX}px`);
      cursorRef.current?.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    }
  }, []);
  
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-[1] hidden md:block">
      <div ref={cursorRef} className="cursor-gradient w-screen h-screen absolute top-0 left-0 -z-[1]" />
    </div>
  )
}
