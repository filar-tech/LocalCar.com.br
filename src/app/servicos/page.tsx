import type { Metadata } from "next";
import { servicos } from "@/config";
import Icon from "@/components/Icon";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da LocalCar: rastreamento veicular, bloqueio remoto, cerca virtual, gestão de frotas, instalação profissional e clube de vantagens.",
};

export default function ServicosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <>
              <span className="sec-tag">Nossos serviços</span>
              <h1>
                Soluções completas em<br />
                <span className="grad">rastreamento veicular</span>
              </h1>
              <p>
                Tudo o que você precisa para proteger e monitorar seu veículo ou
                sua frota, com tecnologia de ponta.
              </p>
            </>
          </Reveal>
        </div>
      </section>

      <section className="serv-list">
        <div className="container">
          <div className="serv-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.titulo} delay={i * 55}>
                <div className="serv-card" data-hover>
                  <span className="serv-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{s.titulo}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.itens.map((it) => (
                      <li key={it}>
                        <Icon name="check" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <style>{`
        .serv-list { padding: 30px 0 110px; }

        .serv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .serv-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 36px 30px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.35s, box-shadow 0.35s;
          height: 100%;
        }
        .serv-card:hover {
          border-color: rgba(196,90,40,0.28);
          box-shadow: 0 10px 30px rgba(42,32,24,0.08);
        }

        .serv-num {
          position: absolute;
          top: 26px; right: 28px;
          font-family: var(--font-fraunces), serif;
          font-size: 26px;
          font-weight: 700;
          color: rgba(196,90,40,0.10);
          letter-spacing: -1px;
        }

        .serv-card h3 {
          font-family: var(--font-fraunces), serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text);
          max-width: 82%;
          line-height: 1.25;
        }
        .serv-card > p {
          color: var(--mute);
          font-size: 14px;
          margin-bottom: 20px;
          line-height: 1.72;
        }

        .serv-card li {
          color: var(--mute);
          font-size: 13.5px;
          padding: 8px 0;
          display: flex;
          gap: 10px;
          align-items: center;
          border-bottom: 1px solid var(--line);
        }
        .serv-card li:last-child { border: none; }
        .serv-card li :global(svg) {
          width: 14px; height: 14px;
          stroke: var(--terra);
          stroke-width: 3;
          flex-shrink: 0;
        }

        @media (max-width: 980px) { .serv-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 680px) { .serv-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
