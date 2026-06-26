"use client";

import { useRef, useEffect, ReactNode } from "react";

interface TiltCardProps {
  children:  ReactNode;
  className?: string;
  style?:    React.CSSProperties;
  maxDeg?:   number;
}

export default function TiltCard({ children, className, style, maxDeg = 7 }: TiltCardProps) {
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
    el.style.transform  = `perspective(1000px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg) translateY(-4px)`;
    el.style.transition = "transform 0.2s ease-out";
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform  = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)";
    el.style.transition = "transform 0.45s ease";
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transformStyle: "preserve-3d", position: "relative", height: "100%" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
