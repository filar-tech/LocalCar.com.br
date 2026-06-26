"use client";

import { useRef, useEffect, ReactNode } from "react";

interface RevealProps {
  children:   ReactNode;
  delay?:     number;
  className?: string;
  style?:     React.CSSProperties;
}

export default function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity   = "1";
      el.style.transform = "none";
      return;
    }

    el.style.opacity    = "0";
    el.style.transform  = "translateY(40px)";
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.opacity   = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
