import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a LocalCar — empresa de rastreamento automotivo com tecnologia de ponta, comprometida com a segurança e a tranquilidade dos seus clientes.",
};

const valores = [
  { icone: "lock", titulo: "Segurança", desc: "Proteção do seu patrimônio com tecnologia confiável e monitoramento 24 horas." },
  { icone: "bolt", titulo: "Agilidade", desc: "Instalação rápida e atendimento ágil, do primeiro contato ao suporte contínuo." },
  { icone: "phone", titulo: "Tecnologia", desc: "Aplicativo moderno e recursos avançados para você ter controle total na palma da mão." },
  { icone: "check", titulo: "Confiança", desc: "Compromisso com a transparência e com a tranquilidade de cada cliente." },
];

export default function SobrePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="sec-tag">Sobre nós</span>
          <h1>Tecnologia a serviço da<br /><span className="grad">sua tranquilidade</span></h1>
          <p>A LocalCar nasceu para colocar você no controle total do seu veículo, com rastreamento inteligente e proteção de verdade.</p>
        </div>
      </section>

      <section className="about-body">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Quem somos</h2>
              <p>
                A <strong>LocalCar</strong> é especializada em rastreamento automotivo, oferecendo
                soluções completas de segurança veicular para donos de veículos e empresas com frota.
              </p>
              <p>
                Com tecnologia de ponta, unimos rastreamento em tempo real, bloqueio remoto, cerca
                virtual e estatísticas detalhadas em um aplicativo simples de usar — disponível para
                iOS, Android e também pela internet.
              </p>
              <p>
                Nosso compromisso é com a sua tranquilidade: proteção 24 horas, instalação ágil e
                suporte de quem entende do assunto. Você no controle do seu carro, onde estiver.
              </p>
            </div>
            <div className="about-card">
              <div className="ac-stat"><div className="num tech">24/7</div><div className="lbl">Monitoramento contínuo</div></div>
              <div className="ac-stat"><div className="num tech">100%</div><div className="lbl">Controle pelo aplicativo</div></div>
              <div className="ac-stat"><div className="num tech">2+</div><div className="lbl">Plataformas (iOS e Android)</div></div>
              <div className="ac-stat"><div className="num tech">MR Car</div><div className="lbl">Parceria · Clube de vantagens</div></div>
            </div>
          </div>

          <div className="valores">
            <div className="sec-head">
              <span className="sec-tag">Nossos valores</span>
              <h2 className="sec-title">O que nos <span className="grad">move</span></h2>
            </div>
            <div className="val-grid">
              {valores.map((v) => (
                <div className="val-card" key={v.titulo}>
                  <div className="val-icon"><Icon name={v.icone} /></div>
                  <h3>{v.titulo}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <style>{`
        .about-body { padding: 30px 0 90px; }
        .about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; align-items: center; margin-bottom: 100px; }
        .about-text h2 { font-size: 32px; font-weight: 800; margin-bottom: 20px; }
        .about-text p { color: var(--mute); font-size: 16px; margin-bottom: 16px; }
        .about-text strong { color: var(--white); }
        .about-card { background: linear-gradient(160deg, var(--panel), var(--black2)); border: 1px solid var(--line); border-radius: 22px; padding: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .ac-stat { background: var(--black2); border: 1px solid var(--line); border-radius: 16px; padding: 26px 20px; text-align: center; }
        .ac-stat .num { font-family: 'Chakra Petch', sans-serif; font-size: 34px; font-weight: 700; background: linear-gradient(120deg, var(--red), #CC8C00); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .ac-stat .lbl { color: var(--mute); font-size: 12px; margin-top: 8px; }
        .val-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .val-card { background: linear-gradient(160deg, var(--panel), var(--black2)); border: 1px solid var(--line); border-radius: 18px; padding: 32px 26px; transition: all 0.4s; }
        .val-card:hover { transform: translateY(-6px); border-color: rgba(255,184,0,0.4); box-shadow: 0 8px 24px rgba(0,0,0,0.07); }
        .val-icon { width: 54px; height: 54px; border-radius: 14px; background: rgba(255,184,0,0.12); border: 1px solid rgba(255,184,0,0.3); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .val-icon :global(svg) { width: 26px; height: 26px; stroke: var(--red); stroke-width: 2; }
        .val-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .val-card p { color: var(--mute); font-size: 14px; }
        @media (max-width: 980px) { .about-grid { grid-template-columns: 1fr; } .val-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 680px) { .val-grid { grid-template-columns: 1fr; } .about-card { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </>
  );
}
