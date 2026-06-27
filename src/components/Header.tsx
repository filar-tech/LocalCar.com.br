"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { linkWhatsApp } from "@/config";

const navItems = [
  { href: "/#recursos", label: "Recursos"       },
  { href: "/#como",     label: "Como funciona"  },
  { href: "/#publico",  label: "Para quem"      },
  { href: "/contato",   label: "Contato"        },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const pathname  = usePathname();
  const menuRef   = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        open &&
        menuRef.current   && !menuRef.current.contains(e.target as Node) &&
        toggleRef.current && !toggleRef.current.contains(e.target as Node)
      ) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const isActive = (href: string) =>
    !href.includes("#") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <Link href="/" className="nav-logo" aria-label="LocalCar — página inicial">
          <Image
            src="/logo-localcar.png"
            alt="LocalCar - Rastreamento Automotivo"
            width={72}
            height={72}
            priority
          />
        </Link>

        <ul ref={menuRef} className={`nav-links ${open ? "open" : ""}`} role="list">
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
              aria-label="Falar no WhatsApp para proteger meu veículo"
            >
              Proteger meu veículo
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      <style jsx>{`
        /* ===== HEADER — transparente inicialmente, blur ao rolar ===== */
        .site-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.35s, box-shadow 0.35s, border-color 0.35s, backdrop-filter 0.35s;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .site-header.scrolled {
          background: rgba(251, 248, 242, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 6px 30px var(--shadow);
          border-bottom: 1px solid var(--line-soft);
        }

        .nav {
          height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          padding: 4px 8px 4px 0;
        }
        .nav-logo :global(img) {
          height: 68px;
          width: 68px;
          object-fit: contain;
          transition: transform 0.3s;
        }
        .nav-logo:hover :global(img) { transform: scale(1.05); }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links li a {
          display: block;
          color: var(--mute);
          font-family: var(--font-outfit), sans-serif;
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.2px;
          padding: 6px 10px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          position: relative;
        }
        .nav-links li a:hover {
          color: var(--text);
          background: rgba(214, 154, 30, 0.07);
        }
        .nav-links li a.active {
          color: var(--terra);
          font-weight: 700;
          background: rgba(214, 154, 30, 0.09);
        }
        .nav-links li a.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          background: var(--terra);
          border-radius: 2px;
        }

        /* CTA — gradiente + pill */
        .nav-cta {
          background: linear-gradient(135deg, var(--terra), var(--mustard)) !important;
          color: #fff !important;
          padding: 10px 22px !important;
          border-radius: 50px !important;
          font-weight: 600 !important;
          white-space: nowrap;
          box-shadow: 0 8px 22px rgba(214, 154, 30, 0.3);
          transition: transform 0.25s, box-shadow 0.25s !important;
          letter-spacing: 0.1px;
        }
        .nav-cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 30px rgba(214, 154, 30, 0.42) !important;
          background: linear-gradient(135deg, var(--terra), var(--mustard)) !important;
        }

        /* Hamburger */
        .menu-toggle {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          background: none;
          border: 1.5px solid rgba(42, 32, 24, 0.18);
          border-radius: 8px;
          cursor: pointer;
          padding: 0;
        }
        .menu-toggle span {
          display: block;
          width: 20px;
          height: 1.5px;
          background: var(--text);
          border-radius: 2px;
          transform-origin: center;
          transition: transform 0.3s, opacity 0.3s;
        }
        .menu-toggle.open span:nth-child(1) { transform: translateY(6.5px)  rotate(45deg);  }
        .menu-toggle.open span:nth-child(2) { opacity: 0; transform: scaleX(0);              }
        .menu-toggle.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        @media (max-width: 820px) {
          .menu-toggle { display: flex; }
          .nav-links {
            display: none;
            position: absolute;
            top: 92px;
            left: 16px; right: 16px;
            flex-direction: column;
            gap: 4px;
            background: var(--panel);
            padding: 12px;
            border-radius: 14px;
            border: 1px solid var(--line);
            box-shadow: 0 8px 30px rgba(42, 32, 24, 0.10);
          }
          .nav-links.open { display: flex; }
          .nav-links li { width: 100%; }
          .nav-links li a { width: 100%; padding: 12px 16px; font-size: 15px; }
          .nav-cta { text-align: center; margin-top: 4px; border-radius: 50px !important; }
        }
      `}</style>
    </header>
  );
}
