"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { linkWhatsApp } from "@/config";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <Link href="/" className="nav-logo">
          <Image
            src="/logo-localcar.png"
            alt="LocalCar - Rastreamento Automotivo"
            width={120}
            height={128}
            priority
          />
        </Link>

        <ul ref={menuRef} className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Proteger meu veículo
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(247, 247, 243, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--line);
          transition: background 0.3s, box-shadow 0.3s;
        }
        .site-header.scrolled {
          background: rgba(247, 247, 243, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
        }
        .nav {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo :global(img) {
          height: 48px;
          width: auto;
          object-fit: contain;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-links li a {
          display: block;
          color: #555;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.3px;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          position: relative;
        }
        .nav-links li a:hover {
          color: #1A1A1A;
          background: rgba(255, 184, 0, 0.08);
        }
        .nav-links li a.active {
          color: #B35F00;
          font-weight: 700;
          background: rgba(255, 184, 0, 0.1);
        }
        .nav-links li a.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 2px;
          background: #FFB800;
          border-radius: 2px;
        }
        .nav-cta {
          background: linear-gradient(135deg, #FFB800, #E07800) !important;
          color: #111111 !important;
          padding: 10px 22px !important;
          border-radius: 8px;
          font-weight: 700 !important;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(255,184,0,0.35);
          transition: box-shadow 0.25s, transform 0.25s !important;
          letter-spacing: 0.2px;
        }
        .nav-cta:hover {
          box-shadow: 0 6px 28px rgba(255,184,0,0.5) !important;
          transform: translateY(-2px);
        }
        /* hamburger */
        .menu-toggle {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          background: none;
          border: 1px solid var(--line);
          border-radius: 8px;
          cursor: pointer;
          padding: 0;
        }
        .menu-toggle span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--white);
          border-radius: 2px;
          transform-origin: center;
          transition: transform 0.3s, opacity 0.3s;
        }
        .menu-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .menu-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        @media (max-width: 820px) {
          .menu-toggle {
            display: flex;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 80px;
            left: 16px;
            right: 16px;
            flex-direction: column;
            gap: 4px;
            background: var(--panel);
            padding: 12px;
            border-radius: 14px;
            border: 1px solid var(--line);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          }
          .nav-links.open {
            display: flex;
          }
          .nav-links li {
            width: 100%;
          }
          .nav-links li a {
            width: 100%;
            padding: 12px 16px;
            font-size: 15px;
          }
          .nav-cta {
            text-align: center;
            margin-top: 4px;
          }
        }
      `}</style>
    </header>
  );
}
