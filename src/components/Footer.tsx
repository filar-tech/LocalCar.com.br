import Link from "next/link";
import Image from "next/image";
import { site } from "@/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Image src="/logo-localcar.png" alt="LocalCar" width={140} height={150} className="foot-logo" />
            <p>
              Rastreamento automotivo com tecnologia de ponta. Proteção 24 horas e controle
              total do seu veículo, onde você estiver.
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
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
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
          background: var(--black);
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
        .foot-logo { height: 70px; width: auto; object-fit: contain; margin-bottom: 20px; }
        .foot-brand p { color: var(--mute); font-size: 14px; max-width: 320px; }
        .foot-col h4 {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 18px;
          color: var(--yellow);
        }
        .foot-col li { margin-bottom: 12px; color: var(--mute); font-size: 14px; }
        .foot-col a { transition: color 0.2s; }
        .foot-col a:hover { color: #fff; }
        .foot-bottom {
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          color: var(--mute2);
          font-size: 13px;
        }
        @media (max-width: 820px) {
          .foot-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </footer>
  );
}
