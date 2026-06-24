import Link from "next/link";
import Image from "next/image";
import { site } from "@/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Image
              src="/logo-localcar.png"
              alt="LocalCar"
              width={140}
              height={150}
              className="foot-logo"
            />
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
          background: var(--bg2);
          padding: 60px 0 28px;
          border-top: 1px solid var(--line);
        }

        .foot-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--line);
        }

        .foot-logo {
          height: 64px;
          width: auto;
          object-fit: contain;
          margin-bottom: 18px;
        }

        .foot-brand p {
          color: var(--mute);
          font-size: 14px;
          max-width: 300px;
          line-height: 1.72;
        }

        .foot-col h4 {
          font-family: var(--font-outfit), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 18px;
          color: var(--terra);
        }

        .foot-col li {
          margin-bottom: 12px;
          color: var(--mute);
          font-size: 14px;
        }

        .foot-col a {
          color: var(--mute);
          transition: color 0.2s;
        }
        .foot-col a:hover { color: var(--terra); }

        .foot-bottom {
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          color: var(--mute2);
          font-size: 12.5px;
        }

        @media (max-width: 820px) {
          .foot-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </footer>
  );
}
