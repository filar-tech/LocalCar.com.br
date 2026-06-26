"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hovered = useRef(false);
  const raf     = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.style.cursor = "none";
    dot.style.opacity  = "1";
    ring.style.opacity = "1";

    function onMove(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY };
    }

    function onOver(e: MouseEvent) {
      if ((e.target as HTMLElement).closest("a, button, input, select, textarea, [data-hover]")) {
        hovered.current = true;
      }
    }

    function onOut(e: MouseEvent) {
      if ((e.target as HTMLElement).closest("a, button, input, select, textarea, [data-hover]")) {
        hovered.current = false;
      }
    }

    function tick() {
      if (dot) {
        dot.style.left = `${pos.current.x}px`;
        dot.style.top  = `${pos.current.y}px`;
      }

      // Ring com easing (lerp)
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;

      if (ring) {
        ring.style.left   = `${ringPos.current.x}px`;
        ring.style.top    = `${ringPos.current.y}px`;
        const size        = hovered.current ? "50px" : "32px";
        ring.style.width  = size;
        ring.style.height = size;
        ring.style.borderColor = hovered.current
          ? "var(--terra)"
          : "rgba(214, 154, 30, 0.45)";
        ring.style.backgroundColor = hovered.current
          ? "rgba(214, 154, 30, 0.06)"
          : "transparent";
      }

      raf.current = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.style.cursor = "";
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
    };
  }, []);

  const base: React.CSSProperties = {
    position:      "fixed",
    pointerEvents: "none",
    borderRadius:  "50%",
    transform:     "translate(-50%, -50%)",
    zIndex:        99999,
    opacity:       0,
  };

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...base,
          width:      "7px",
          height:     "7px",
          background: "var(--terra)",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...base,
          width:      "32px",
          height:     "32px",
          border:     "1.5px solid rgba(214, 154, 30, 0.45)",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, opacity 0.3s",
        }}
      />
    </>
  );
}
