// Ícones SVG reutilizáveis em todo o site
import React from "react";

type IconProps = { name: string; className?: string; style?: React.CSSProperties };

const paths: Record<string, React.ReactNode> = {
  pin: (
    <>
      <path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
    </>
  ),
  bolt: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </>
  ),
  car: (
    <>
      <path d="M5 17h14l-1.5-6.5a2 2 0 0 0-2-1.5h-7a2 2 0 0 0-2 1.5L5 17z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </>
  ),
  truck: (
    <>
      <rect x="1" y="6" width="14" height="11" rx="1" />
      <path d="M15 9h4l3 3v5h-7" />
      <circle cx="5.5" cy="18" r="1.5" />
      <circle cx="18.5" cy="18" r="1.5" />
    </>
  ),
  moto: (
    <>
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 18h4l2-6h4l1-2h3" />
      <path d="M10 12l2-5h3" />
      <path d="M15 7h3" />
    </>
  ),
  bike: (
    <>
      <circle cx="5.5" cy="18" r="3" />
      <circle cx="18.5" cy="18" r="3" />
      <path d="M5.5 18L12 8l6.5 10" />
      <path d="M12 8l-3 10" />
      <path d="M9 6h6" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  whatsapp: (
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23s8.23 3.69 8.23 8.23-3.69 8.42-8.23 8.42zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  phone2: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
};

export default function Icon({ name, className, style }: IconProps) {
  const isFilled = name === "whatsapp";
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
