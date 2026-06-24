import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a LocalCar — empresa de rastreamento automotivo com tecnologia de ponta, comprometida com a segurança e a tranquilidade dos seus clientes.",
};

const valores = [
  { icone: "lock",  titulo: "Segurança",   desc: "Proteção do seu patrimônio com tecnologia confiável e monitoramento 24 horas." },
  { icone: "bolt",  titulo: "Agilidade",   desc: "Instalação rápida e atendimento ágil, do primeiro contato ao suporte contínuo." },
  { icone: "phone", titulo: "Tecnologia",  desc: "Aplicativo moderno e recursos avançados para você ter controle total na palma da mão." },
  { icone: "check", titulo: "Confiança",   desc: "Compromisso com a transparência e com a tranquilidade de cada cliente." },
];

export default function SobrePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <>
              <span className="sec-tag">Sobre nós</span>
              <h1>
                Tecnologia a serviço da<br />
                <span className="grad">sua tranquilidade</span>
              </h1>
              <p>
                A LocalCar nasceu para colocar você no controle total do seu
                veículo, com rastreamento inteligente e proteção de verdade.
              </p>
            </>
          </Reveal>
        </div>
      </section>

      <section className="about-body">
        <div className="container">
          <Reveal>
            <div className="about-grid">
              <div className="about-text">
                <h2>Quem somos</h2>
                <p>
                  A <strong>LocalCar</strong> é especializada em rastreamento automotivo,
                  oferecendo soluções completas de segurança veicular para donos de
                  veículos e empresas com frota.
                </p>
                <p>
                  Com tecnologia de ponta, unimos rastreamento em tempo real, bloqueio
                  remoto, cerca virtual e estatísticas detalhadas em um aplicativo simples
                  de usar — disponível para iOS, Android e também pela internet.
                </p>
                <p>
                  Nosso compromisso é com a sua tranquilidade: proteção 24 horas,
                  instalação ágil e suporte de quem entende do assunto. Você no controle
                  do seu carro, onde estiver.
                </p>
              </div>

              <div className="about-card">
                <div className="ac-stat">
                  <div className="num">24/7</div>
                  <div className="lbl">Monitoramento contínuo</div>
                </div>
                <div className="ac-stat">
                  <div className="num">100%</div>
                  <div className="lbl">Controle pelo aplicativo</div>
                </div>
                <div className="ac-stat">
                  <div className="num">2+</div>
                  <div className="lbl">Plataformas (iOS e Android)</div>
                </div>
                <div className="ac-stat">
                  <div className="num">MR Car</div>
                  <div className="lbl">Parceria · Clube de vantagens</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="valores">
            <Reveal>
              <div className="sec-head">
                <span className="sec-tag">Nossos valores</span>
                <h2 className="sec-title">O que nos <span className="grad">move</span></h2>
              </div>
            </Reveal>

            <div className="val-grid">
              {valores.map((v, i) => (
                <Reveal key={v.titulo} delay={i * 70}>
                  <div className="val-card">
                    <div className="val-icon" aria-hidden="true">
                      <Icon name={v.icone} />
                    </div>
                    <h3>{v.titulo}</h3>
                    <p>{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <style>{`
        .about-body { padding: 30px 0 90px; }

        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 54px;
          align-items: center;
          margin-bottom: 100px;
        }

        .about-text h2 {
          font-family: var(--font-fraunces), serif;
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--text);
        }
        .about-text p {
          color: var(--mute);
          font-size: 16px;
          margin-bottom: 16px;
          line-height: 1.75;
        }
        .about-text strong { color: var(--terra); font-weight: 700; }

        .about-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 14px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          box-shadow: 0 8px 28px rgba(42,32,24,0.07);
        }
        .ac-stat {
          background: var(--bg2);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 24px 18px;
          text-align: center;
        }
        .ac-stat .num {
          font-family: var(--font-fraunces), serif;
          font-size: 30px;
          font-weight: 700;
          color: var(--terra);
          line-height: 1;
        }
        .ac-stat .lbl {
          color: var(--mute);
          font-size: 12px;
          margin-top: 8px;
          line-height: 1.5;
        }

        .valores { margin-top: 20px; }

        .val-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .val-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 30px 24px;
          transition: border-color 0.35s, box-shadow 0.35s;
          height: 100%;
        }
        .val-card:hover {
          border-color: rgba(196,90,40,0.26);
          box-shadow: 0 8px 24px rgba(42,32,24,0.07);
        }
        .val-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(196,90,40,0.08);
          border: 1px solid rgba(196,90,40,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .val-icon :global(svg) {
          width: 24px; height: 24px;
          stroke: var(--terra);
          stroke-width: 2;
        }
        .val-card h3 {
          font-family: var(--font-fraunces), serif;
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text);
        }
        .val-card p  { color: var(--mute); font-size: 13.5px; line-height: 1.7; }

        @media (max-width: 980px) {
          .about-grid { grid-template-columns: 1fr; }
          .val-grid   { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 680px) {
          .val-grid   { grid-template-columns: 1fr; }
          .about-card { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  );
}
