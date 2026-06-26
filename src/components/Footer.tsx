import Link from "next/link";
import Image from "next/image";
import { site } from "@/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="foot-logo-wrap">
              <Image
                src="/logo-localcar.png"
                alt="LocalCar"
                width={120}
                height={50}
                className="foot-logo"
              />
            </div>
            <p>
              Rastreamento automotivo com tecnologia de ponta. Proteção 24 horas
              e controle total do seu veículo, onde você estiver.
            </p>
          </div>

          <div className="foot-col">
            <h4>Navegação</h4>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/servicos">Serviços</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Contato</h4>
            <ul>
              <li>{site.endereco.rua}</li>
              <li>{site.endereco.bairro}</li>
              <li>{site.telefoneExibicao}</li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram da LocalCar: @${site.instagram}`}
                >
                  @{site.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} LocalCar — Rastreamento Automotivo. Todos os direitos reservados.</span>
          <span>Clube de Vantagens · Parceiro MR Car</span>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #2A2018;
          padding: 60px 0 28px;
          color: #fff;
          position: relative;
          z-index: 2;
        }

        .foot-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }

        .foot-logo-wrap {
          background: #fff;
          padding: 10px 16px;
          border-radius: 14px;
          display: inline-block;
          margin-bottom: 18px;
        }

        .foot-logo {
          height: 64px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .foot-brand p {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          max-width: 300px;
          line-height: 1.72;
        }

        .foot-col h4 {
          font-family: var(--font-fraunces), serif;
          font-size: 17px;
          font-weight: 600;
          margin-bottom: 16px;
          color: var(--amber-soft);
        }

        .foot-col li {
          margin-bottom: 11px;
          color: rgba(255,255,255,0.65);
          font-size: 14px;
        }

        .foot-col a {
          color: rgba(255,255,255,0.65);
          transition: color 0.2s;
        }
        .foot-col a:hover { color: var(--amber-soft); }

        .foot-bottom {
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          color: rgba(255,255,255,0.35);
          font-size: 12.5px;
        }

        @media (max-width: 820px) {
          .foot-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </footer>
  );
}
