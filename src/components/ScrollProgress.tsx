"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position:   "fixed",
        top:        0,
        left:       0,
        height:     "3px",
        width:      `${pct}%`,
        background: "linear-gradient(90deg, var(--terra), var(--amber))",
        zIndex:     99998,
        transition: "width 0.1s linear",
        pointerEvents: "none",
      }}
    />
  );
}
