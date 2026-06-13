"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { site, linkWhatsApp } from "@/config";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <Link href="/" className="nav-logo">
          <Image src="/logo-localcar.png" alt="LocalCar - Rastreamento Automotivo" width={120} height={128} priority />
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="nav-cta">
              Proteger meu veículo
            </a>
          </li>
        </ul>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(5, 6, 8, 0.7);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--line);
          transition: 0.3s;
        }
        .site-header.scrolled { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5); }
        .nav {
          padding: 14px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo :global(img) {
          height: 54px;
          width: auto;
          object-fit: contain;
        }
        .nav-links {
          display: flex;
          gap: 34px;
          align-items: center;
        }
        .nav-links a {
          color: var(--mute);
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.3px;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--white); }
        .nav-cta {
          background: linear-gradient(135deg, var(--red), #c71810);
          color: var(--white) !important;
          padding: 11px 24px;
          border-radius: 8px;
          font-weight: 600 !important;
          box-shadow: 0 0 24px var(--red-glow);
          transition: all 0.25s !important;
        }
        .nav-cta:hover { box-shadow: 0 0 36px var(--red-glow); transform: translateY(-2px); }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
        }
        .menu-toggle span {
          display: block;
          width: 26px;
          height: 2px;
          background: #fff;
          margin: 5px 0;
          transition: 0.3s;
        }
        @media (max-width: 820px) {
          .menu-toggle { display: flex; }
          .nav-links {
            display: none;
            position: absolute;
            top: 78px;
            right: 20px;
            flex-direction: column;
            gap: 18px;
            background: var(--panel);
            padding: 24px 28px;
            border-radius: 14px;
            border: 1px solid var(--line);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          }
          .nav-links.open { display: flex; }
        }
      `}</style>
    </header>
  );
}
