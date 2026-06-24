"use client";

import { useRef, useEffect, ReactNode } from "react";

interface TiltCardProps {
  children:  ReactNode;
  className?: string;
  style?:    React.CSSProperties;
}

export default function TiltCard({ children, className, style }: TiltCardProps) {
  const ref     = useRef<HTMLDivElement>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced.current) return;
    const el   = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x    = (e.clientX - rect.left)  / rect.width  - 0.5;
    const y    = (e.clientY - rect.top)   / rect.height - 0.5;
    el.style.transform  = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    el.style.transition = "transform 0.08s ease";
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform  = "perspective(900px) rotateY(0deg) rotateX(0deg)";
    el.style.transition = "transform 0.5s ease";
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transformStyle: "preserve-3d", height: "100%" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
